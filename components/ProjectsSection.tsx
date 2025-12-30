"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import createGlobe, { COBEOptions } from "cobe";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0, // Light mode for white globe
  diffuse: 1.5, // Increase diffuse for better visibility
  mapSamples: 16000,
  mapBrightness: 10, // High brightness for white appearance
  baseColor: [1, 1, 1], // White base color
  markerColor: [0.91, 0.96, 0.94], // Light green markers (#E8F5F0)
  glowColor: [0.4, 0.8, 1], // Light blue glow (bright cyan)
  markers: [
    // Asia
    { location: [14.5995, 120.9842], size: 0.08 }, // Manila, Philippines
    { location: [19.076, 72.8777], size: 0.12 }, // Mumbai, India
    { location: [23.8103, 90.4125], size: 0.1 }, // Dhaka, Bangladesh
    { location: [39.9042, 116.4074], size: 0.12 }, // Beijing, China
    { location: [34.6937, 135.5022], size: 0.1 }, // Osaka, Japan
    { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
    { location: [-6.2088, 106.8456], size: 0.1 }, // Jakarta, Indonesia
    // Middle East
    { location: [30.0444, 31.2357], size: 0.1 }, // Cairo, Egypt
    { location: [41.0082, 28.9784], size: 0.1 }, // Istanbul, Turkey
    // Americas
    { location: [-23.5505, -46.6333], size: 0.12 }, // São Paulo, Brazil
    { location: [19.4326, -99.1332], size: 0.12 }, // Mexico City, Mexico
    { location: [40.7128, -74.006], size: 0.12 }, // New York, USA
    { location: [34.0522, -118.2437], size: 0.1 }, // Los Angeles, USA
    { location: [51.5074, -0.1278], size: 0.1 }, // London, UK
    { location: [48.8566, 2.3522], size: 0.1 }, // Paris, France
    { location: [52.52, 13.405], size: 0.1 }, // Berlin, Germany
  ],
};

function Globe({ className }: { className?: string }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        ...GLOBE_CONFIG,
        width: width * 2,
        height: width * 2,
        onRender,
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });

      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    }
  }, [onRender]);

  return (
    <div
      className={`absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] ${className || ""}`}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "#042B19" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left Side - Text Content */}
          <div className="z-10 max-w-xl text-left">
            <p
              className="text-sm font-medium mb-4 uppercase tracking-wide"
              style={{ color: "#ffffff" }}
            >
              PROJECTS
            </p>
            <div className="space-y-2 mb-8">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-custom), 'CustomFont', sans-serif",
                }}
              >
                220 projects
              </h2>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-custom), 'CustomFont', sans-serif",
                }}
              >
                36 gigawatts
              </h2>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-custom), 'CustomFont', sans-serif",
                }}
              >
                4 continents
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-900 font-bold px-6 py-3 text-sm uppercase transition hover:opacity-90"
              style={{
                backgroundColor: "#ffcf0B",
                borderRadius: "0",
              }}
            >
              SEE OUR PROJECTS
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side - Globe */}
          <div className="relative h-[400px] w-full max-w-xl md:h-[500px] flex items-center justify-center">
            <Globe className="absolute scale-150 md:scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
}

