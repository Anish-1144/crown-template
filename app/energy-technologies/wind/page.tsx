"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Wind } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

function WindMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = ["LAND-BASED WIND", "LAND-BASED WIND", "LAND-BASED WIND", "LAND-BASED WIND"];

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

export default function WindPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" style={{ paddingTop: "156px" }}>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/wind-hero.png"
          alt="Land-based Wind Energy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      </section>

      {/* Wind Marquee */}
      <WindMarquee />

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
                <Wind className="w-4 h-4" style={{ color: "#ffcf0B" }} />
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#042B19" }}
                >
                  LAND-BASED WIND
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
                An affordable, market-driven solution.
              </h1>
            </div>

            {/* Right Column - Circular Image and Caption */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto mb-6">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/wind-rounded-image1.webp"
                    alt="Wind Farm"
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
                Land-based wind energy is a carbon-free, cost-competitive
                resource that creates jobs and strengthens energy security.
                Backed by varying customer demand, it&apos;s part of the energy
                mix we need to meet growing demand and power economies.
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
                Our proven track record in land-based wind energy
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
                      121
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      projects operating, in construction and contracted
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
                      20
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of wind power developed since 2004
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
                      5M
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      homes powered by operating wind projects
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
                  src="/wind1.svg"
                  alt="Wind Farm"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Wind Works Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#042B19" }}
          >
            How wind energy works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Steps List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  number: 1,
                  text: "Wind flows over the turbine blades, creating lift and causing them to rotate.",
                },
                {
                  number: 2,
                  text: "The rotating blades spin a shaft connected to a gearbox that increases rotational speed.",
                },
                {
                  number: 3,
                  text: "The gearbox drives a generator that converts mechanical energy into electrical energy.",
                },
                {
                  number: 4,
                  text: "The electrical output is transformed to high voltage through a transformer.",
                },
                {
                  number: 5,
                  text: "Electricity is transmitted via transmission lines to the power grid.",
                },
                {
                  number: 6,
                  text: "Wind farms are connected to the grid to provide clean energy to consumers.",
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
                src="/img5.webp"
                alt="How Wind Energy Works Diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wind Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#042B19" }}
              >
                Why wind energy
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ color: "#042B19" }}
              >
                Wind energy is one of the most cost-effective renewable energy
                sources. Wind&apos;s benefits include:
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
                    Zero fuel costs and low operating expenses
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
                    Clean, renewable energy with no carbon emissions
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
                    Creates jobs and economic benefits for local communities
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/wind1.svg"
                alt="Wind Energy Benefits"
                className="w-full h-full object-contain"
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
              Ready to explore wind solutions?
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

