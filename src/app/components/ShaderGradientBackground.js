"use client";
import { useRef, useEffect } from "react";
import { ShaderGradientCanvas } from "shadergradient"; // Use the named export

export default function ShaderGradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize the shader gradient on the canvas.
    // Check the repo documentation for the correct API. Here's an example:
    const gradient = new ShaderGradientCanvas(canvas, {
      animate: true,
      brightness: 1.2,
      cAzimuthAngle: 180,
      cDistance: 3.6,
      cPolarAngle: 90,
      cameraZoom: 1,
      color1: "#ff5005",
      color2: "#dbba95",
      color3: "#d0bce1",
      envPreset: "city",
      fov: 45,
      frameRate: 10,
      grain: true,
      lightType: "3d",
      pixelDensity: 1,
      positionX: -1.4,
      positionY: 0,
      positionZ: 0,
      range: { enabled: true, rangeStart: 0, rangeEnd: 40 },
      reflection: 0.1,
      rotationX: 0,
      rotationY: 10,
      rotationZ: 50,
      shader: "defaults",
      type: "plane",
      uDensity: 1.3,
      uFrequency: 5.5,
      uSpeed: 0.4,
      uStrength: 4,
      uTime: 3.5,
      wireframe: false,
    });

    gradient.init();

    return () => {
      if (gradient.destroy) {
        gradient.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
