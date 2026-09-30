"use client";

import React, { useEffect, useRef } from "react";

interface LiquidMetalCanvasProps {
  className?: string;
  style?: React.CSSProperties;
  colorBack?: string;
  colorTint?: string;
  speed?: number;
}

export default function LiquidMetalCanvas({
  className = "",
  style = {},
  colorBack = "#05070d",
  colorTint = "#cbd5e1",
  speed = 1.0,
}: LiquidMetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl2", { alpha: false, antialias: true, powerPreference: "high-performance" }) ||
      (canvas.getContext("webgl", { alpha: false, antialias: true }) as WebGLRenderingContext | null);

    if (!gl) return;

    let animationFrameId: number;
    let startTime = performance.now();
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX / window.innerWidth;
      mouse.targetY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Vertex shader
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Silky high-precision liquid metal fragment shader (zero noise artifacts, pure fluid chrome)
    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;

      // Smooth 2D rotation
      vec2 rotate(vec2 p, float a) {
        float c = cos(a);
        float s = sin(a);
        return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
      }

      // Smooth sinusoidal turbulence for molten liquid metal
      float liquidField(vec2 p, float t) {
        vec2 p1 = p * 1.8;
        float v = 0.0;
        
        v += sin(p1.x * 2.2 + t * 0.7);
        v += sin(p1.y * 1.9 - t * 0.6);
        v += sin((p1.x + p1.y) * 1.5 + t * 0.9);

        vec2 p2 = rotate(p1, 0.785) * 1.6;
        v += sin(p2.x * 2.4 - t * 0.8) * 0.5;
        v += sin(p2.y * 2.1 + t * 0.7) * 0.5;

        vec2 p3 = rotate(p2, 1.2) * 1.8;
        v += sin(p3.x * 3.1 + p3.y * 2.7 + t * 1.1) * 0.25;

        // Interactive mouse ripple deflection
        float distToMouse = length(p - (uMouse * 2.0 - 1.0));
        v += exp(-distToMouse * 3.5) * sin(distToMouse * 16.0 - t * 3.0) * 0.4;

        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
        float t = uTime * 0.45;

        // Flowing coordinate warp
        vec2 q = uv;
        q = rotate(q, t * 0.08);

        float field1 = liquidField(q, t);
        float field2 = liquidField(q + vec2(field1 * 0.25, -field1 * 0.2), t * 1.1);

        // Compute high-definition normal vector for specular liquid reflection
        float eps = 0.003;
        float nx = liquidField(q + vec2(eps, 0.0), t) - liquidField(q - vec2(eps, 0.0), t);
        float ny = liquidField(q + vec2(0.0, eps), t) - liquidField(q - vec2(0.0, eps), t);
        vec3 normal = normalize(vec3(-nx * 2.0, -ny * 2.0, 1.0));

        // Light sources: Key light + Ambient liquid reflections
        vec3 lightDir = normalize(vec3(0.5, 0.8, 1.2));
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);

        // Diffuse and Specular components
        float diff = max(dot(normal, lightDir), 0.0);
        float spec = pow(max(dot(normal, halfDir), 0.0), 36.0);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

        // Liquid metal color palette: deep obsidian slate base with molten platinum & chrome highlights
        vec3 baseObsidian = vec3(0.02, 0.03, 0.06);
        vec3 midTitanium  = vec3(0.22, 0.26, 0.33);
        vec3 highSilver   = vec3(0.85, 0.90, 0.96);
        vec3 chromePeak   = vec3(1.0, 1.0, 1.0);

        // Subtle electric cobalt / silver iridescent rim
        vec3 cobaltRim    = vec3(0.35, 0.65, 0.95);

        // Composite molten liquid shading
        float band = smoothstep(-1.5, 1.5, field2);
        vec3 liquidColor = mix(baseObsidian, midTitanium, band);
        liquidColor = mix(liquidColor, highSilver, smoothstep(0.4, 0.95, diff));
        liquidColor += chromePeak * spec * 1.2;
        liquidColor += cobaltRim * fresnel * 0.45;

        // Vignette for depth
        float vignette = 1.0 - smoothstep(0.5, 1.5, length(uv));
        liquidColor *= (0.8 + 0.2 * vignette);

        gl_FragColor = vec4(liquidColor, 1.0);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const uResLocation = gl.getUniformLocation(program, "uResolution");
    const uTimeLocation = gl.getUniformLocation(program, "uTime");
    const uMouseLocation = gl.getUniformLocation(program, "uMouse");

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResLocation, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = (time: number) => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const elapsed = (time - startTime) * 0.001 * speed;
      gl.uniform1f(uTimeLocation, elapsed);
      gl.uniform2f(uMouseLocation, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        ...style,
      }}
    />
  );
}
