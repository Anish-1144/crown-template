"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, SolarPanel } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

function SolarMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = ["SOLAR", "SOLAR", "SOLAR", "SOLAR"];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const checkVisibility = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportMiddle = window.innerHeight * 0.5;
      if (rect.top <= viewportMiddle && rect.top >= -rect.height) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white pt-16 md:pt-24 pb-8 md:pb-12"
    >
      <div className={`flex ${isVisible ? "animate-scroll" : ""}`}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            <span
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-custom), 'CustomFont', sans-serif",
                WebkitTextStroke: "2px #042B19",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item}
            </span>
            <span
              className="mx-8 md:mx-12 text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ color: "#042B19" }}
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SolarPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" style={{ paddingTop: "156px" }}>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/hero-solar.webp"
          alt="Solar Energy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
        
        {/* White Overlay on Left with Curved Lines */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-white">
          {/* Curved Green Lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q50,30 100,50 T200,50"
                stroke="#042B19"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M0,80 Q50,60 100,80 T200,80"
                stroke="#042B19"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M0,110 Q50,90 100,110 T200,110"
                stroke="#042B19"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
            {/* Breadcrumbs/Navigation */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#042B19]"></div>
              <Link
                href="/energy-technologies"
                className="text-xs font-medium uppercase tracking-wide hover:opacity-70 transition"
                style={{ color: "#042B19" }}
              >
                ENERGY TECHNOLOGIES
              </Link>
              <div className="h-4 w-px bg-gray-300"></div>
              <SolarPanel className="w-4 h-4" style={{ color: "#ffcf0B" }} />
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: "#042B19" }}
              >
                SOLAR
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Affordable, clean
              <br />
              energy—powered
              <br />
              by the sun.
            </h1>
          </div>
        </div>
      </section>

      {/* Solar Marquee */}
      <SolarMarquee />

      {/* Main Content Section */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Breadcrumbs/Navigation */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#042B19]"></div>
                <Link
                  href="/energy-technologies"
                  className="text-xs font-medium uppercase tracking-wide hover:opacity-70 transition"
                  style={{ color: "#042B19" }}
                >
                  ENERGY TECHNOLOGIES
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <SolarPanel className="w-4 h-4" style={{ color: "#ffcf0B" }} />
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#042B19" }}
                >
                  SOLAR
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8"
                style={{
                  color: "#042B19",
                  fontFamily: "var(--font-font4), sans-serif",
                }}
              >
                A core component of Invenergy&apos;s energy mix.
              </h1>
            </div>

            {/* Right Column - Circular Image and Caption */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto mb-6">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/img4.webp"
                    alt="Solar Power Plant"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: "#042B19",
                  fontFamily: "var(--font-font4), sans-serif",
                }}
              >
                Solar energy harnesses the power of the sun to generate clean,
                renewable electricity. Our solar projects provide sustainable
                energy solutions that reduce carbon emissions and support the
                transition to a cleaner energy future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Statistics */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#042B19" }}
              >
                Our proven track record in solar
              </h2>

              {/* Statistics */}
              <div className="space-y-6">
                {/* Stat 1 */}
                <div>
                  <div className="h-px bg-[#042B19] mb-4"></div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl font-bold"
                      style={{ color: "#042B19" }}
                    >
                      59
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      projects developed
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div>
                  <div className="h-px bg-[#042B19] mb-4"></div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl font-bold"
                      style={{ color: "#042B19" }}
                    >
                      8
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of solar power developed
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div>
                  <div className="h-px bg-[#042B19] mb-4"></div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl font-bold"
                      style={{ color: "#042B19" }}
                    >
                      30+
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of solar projects in our development pipeline
                    </span>
                  </div>
                </div>

                {/* Final line */}
                <div className="h-px bg-[#042B19] mt-4"></div>
              </div>
            </div>

            {/* Right Side - Illustration and CTA */}
            <div className="relative flex flex-col items-end">
              {/* CTA Link */}
              <Link
                href="/projects"
                className="text-sm md:text-base font-bold uppercase tracking-wide mb-8 hover:opacity-70 transition"
                style={{
                  color: "#042B19",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                VIEW INVENERGY PROJECTS
              </Link>

              {/* Line Art Illustration */}
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src="/solar3.svg"
                  alt="Solar Farm Illustration"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback to soloar1.svg if solar3.svg doesn't exist
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes("solar3.svg")) {
                      target.src = "/soloar1.svg";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Solar Works Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#042B19" }}
          >
            How solar energy works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Steps List */}
            <div className="flex flex-col gap-6">
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ color: "#042B19" }}
              >
                Solar technology is simple, scalable and reliable, and provides
                great flexibility for the future of the grid.
              </p>
              {[
                {
                  number: 1,
                  text: "Sunlight hits the solar panels.",
                },
                {
                  number: 2,
                  text: "Direct current (DC) flows from the panels to an inverter that turns it into alternating current (AC).",
                },
                {
                  number: 3,
                  text: "Transformer increases voltage of electricity.",
                },
                {
                  number: 4,
                  text: "Electricity travels through transmission lines.",
                },
                {
                  number: 5,
                  text: "Transformer decreases voltage of electricity.",
                },
                {
                  number: 6,
                  text: "Electricity travels through collection lines.",
                },
                {
                  number: 7,
                  text: "Electricity is delivered to customers.",
                },
              ].map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                    style={{
                      backgroundColor: "#E8F5F0",
                      color: "#042B19",
                      border: "2px solid #042B19",
                      boxShadow: "0 4px 6px rgba(4, 43, 25, 0.1)",
                    }}
                  >
                    {step.number}
                  </div>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed flex-1"
                    style={{ color: "#042B19" }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side - Diagram Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/solar2.webp"
                alt="How Solar Energy Works Diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#042B19" }}
              >
                Why solar
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ color: "#042B19" }}
              >
                Solar provides many advantages because of its accessibility around
                the world. Solar&apos;s benefits include:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span
                    className="text-xl flex-shrink-0"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    A stable fuel price throughout a project&apos;s lifespan
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-xl flex-shrink-0"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Strengthened energy independence
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-xl flex-shrink-0"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Carbon-free energy
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/soloar1.svg"
                alt="Solar Farm with Flowers"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to solar3.svg if soloar1.svg doesn't exist
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes("soloar1.svg")) {
                    target.src = "/solar3.svg";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-8"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Ready to explore solar solutions?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-[#ffcf0B] text-gray-900 font-bold px-8 lg:px-12 py-4 lg:py-5 text-sm md:text-base uppercase tracking-wide transition hover:opacity-90"
              style={{ borderRadius: "0" }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
