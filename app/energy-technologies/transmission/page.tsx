"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

function TransmissionMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = [
    "TRANSMISSION",
    "TRANSMISSION",
    "TRANSMISSION",
    "TRANSMISSION",
  ];

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

export default function TransmissionPage() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{ paddingTop: "156px" }}
    >
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/Transmission-hero.webp"
          alt="Transmission Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      </section>

      {/* Transmission Marquee */}
      <TransmissionMarquee />

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
                <Zap className="w-4 h-4" style={{ color: "#ffcf0B" }} />
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#042B19" }}
                >
                  TRANSMISSION
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
                    src="/img3.webp"
                    alt="Transmission Lines"
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
                Transmission infrastructure connects energy generation
                facilities to the power grid, enabling reliable delivery of
                electricity to homes and businesses.
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
                Our proven track record in transmission
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
                      15+
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      transmission projects developed
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
                      500+
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      miles of transmission lines
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
                      10+
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of transmission capacity in our development
                      pipeline
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
                  src="/Transmission1.svg"
                  alt="Transmission Infrastructure"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Transmission Works Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#042B19" }}
          >
            How transmission works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Steps List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  number: 1,
                  text: "Electricity is generated at power plants and stepped up to high voltage.",
                },
                {
                  number: 2,
                  text: "High-voltage transmission lines carry electricity over long distances.",
                },
                {
                  number: 3,
                  text: "Substations step down voltage for distribution to local areas.",
                },
                {
                  number: 4,
                  text: "Distribution lines deliver electricity to homes and businesses.",
                },
                {
                  number: 5,
                  text: "Smart grid technologies monitor and optimize power flow.",
                },
                {
                  number: 6,
                  text: "Transmission infrastructure enables grid reliability and renewable energy integration.",
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
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/img6.webp"
                  alt="How Transmission Works Diagram"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Transmission Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#042B19" }}
              >
                Why transmission
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ color: "#042B19" }}
              >
                Transmission infrastructure is essential for a modern, reliable
                power grid. Transmission benefits include:
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
                    Enables delivery of renewable energy from remote generation
                    sites
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
                    Improves grid reliability and reduces congestion
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
                    Supports economic development and energy access
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/Transmission1.svg"
                alt="Transmission Benefits"
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
              Ready to explore transmission solutions?
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
