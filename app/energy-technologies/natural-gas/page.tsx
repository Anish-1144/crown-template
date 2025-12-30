"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

function NaturalGasMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = ["NATURAL GAS", "NATURAL GAS", "NATURAL GAS", "NATURAL GAS"];

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

export default function NaturalGasPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" style={{ paddingTop: "156px" }}>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/hero-gas.webp"
          alt="Natural Gas Energy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      </section>

      {/* Natural Gas Marquee */}
      <NaturalGasMarquee />

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
                <Globe className="w-4 h-4" style={{ color: "#042B19" }} />
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#042B19" }}
                >
                  NATURAL GAS
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

            {/* Right Column - Image and Caption */}
            <div className="flex flex-col">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-6">
                <Image
                  src="/img1.png"
                  alt="Natural Gas Power Plant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: "#042B19",
                  fontFamily: "var(--font-font4), sans-serif",
                }}
              >
                Natural gas is a useful asset in the multi-technology generation
                mix, providing additional, dispatchable energy to meet the
                electricity needs of consumers.
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
                Our proven track record in natural gas
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
                      13
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      operational natural gas facilities
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
                      6
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of power
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
                      23K
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatt hours produced by our natural gas facilities in 2024
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
                  src="/gas1.svg"
                  alt="Natural Gas Industrial Complex"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Natural Gas Works Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#042B19" }}
          >
            How natural gas works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Steps List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  number: 1,
                  text: "Ambient air is filtered to remove dust and contaminants.",
                },
                {
                  number: 2,
                  text: "Air is compressed to high pressure by a compressor.",
                },
                {
                  number: 3,
                  text: "Fuel is injected into the compressed air and combusted to heat the air.",
                },
                {
                  number: 4,
                  text: "The hot compressed air is expanded through a turbine to turn a generator and produce electrical power.",
                },
                {
                  number: 5,
                  text: "The electric output of the generator is transformed to a high voltage.",
                },
                {
                  number: 6,
                  text: "The electrical power is transmitted via transmission lines.",
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
              <img
                src="/gas2.webp"
                alt="How Natural Gas Works Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Natural Gas Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#042B19" }}
              >
                Why natural gas
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span
                    className="text-2xl font-bold mt-1"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Fast-start peaking plants provide essential, dispatchable
                    energy that can respond quickly to demand fluctuations.
                    These facilities are able to ramp up or down quickly, making
                    this technology an additional reliability backstop.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="text-2xl font-bold mt-1"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Combined-cycle plants offer a stable and highly efficient
                    energy generation solution for baseload power, helping to
                    diversify our power grid. This includes natural gas plants
                    that use liquefied natural gas as their primary source –
                    like Invenergy&apos;s Energía del Pacífico project, which
                    provides nearly 30% of El Salvador&apos;s total energy
                    demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Street Scene Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/gas3.svg"
                alt="Community benefiting from natural gas energy"
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
              Ready to explore natural gas solutions?
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


import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

function NaturalGasMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const items = ["NATURAL GAS", "NATURAL GAS", "NATURAL GAS", "NATURAL GAS"];

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

export default function NaturalGasPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" style={{ paddingTop: "156px" }}>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/hero-gas.webp"
          alt="Natural Gas Energy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      </section>

      {/* Natural Gas Marquee */}
      <NaturalGasMarquee />

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
                <Globe className="w-4 h-4" style={{ color: "#042B19" }} />
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#042B19" }}
                >
                  NATURAL GAS
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

            {/* Right Column - Image and Caption */}
            <div className="flex flex-col">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-6">
                <Image
                  src="/img1.png"
                  alt="Natural Gas Power Plant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: "#042B19",
                  fontFamily: "var(--font-font4), sans-serif",
                }}
              >
                Natural gas is a useful asset in the multi-technology generation
                mix, providing additional, dispatchable energy to meet the
                electricity needs of consumers.
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
                Our proven track record in natural gas
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
                      13
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      operational natural gas facilities
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
                      6
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatts of power
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
                      23K
                    </span>
                    <span
                      className="text-base md:text-lg lg:text-xl"
                      style={{ color: "#042B19" }}
                    >
                      gigawatt hours produced by our natural gas facilities in 2024
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
                  src="/gas1.svg"
                  alt="Natural Gas Industrial Complex"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Natural Gas Works Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#042B19" }}
          >
            How natural gas works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Steps List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  number: 1,
                  text: "Ambient air is filtered to remove dust and contaminants.",
                },
                {
                  number: 2,
                  text: "Air is compressed to high pressure by a compressor.",
                },
                {
                  number: 3,
                  text: "Fuel is injected into the compressed air and combusted to heat the air.",
                },
                {
                  number: 4,
                  text: "The hot compressed air is expanded through a turbine to turn a generator and produce electrical power.",
                },
                {
                  number: 5,
                  text: "The electric output of the generator is transformed to a high voltage.",
                },
                {
                  number: 6,
                  text: "The electrical power is transmitted via transmission lines.",
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
              <img
                src="/gas2.webp"
                alt="How Natural Gas Works Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Natural Gas Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#042B19" }}
              >
                Why natural gas
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span
                    className="text-2xl font-bold mt-1"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Fast-start peaking plants provide essential, dispatchable
                    energy that can respond quickly to demand fluctuations.
                    These facilities are able to ramp up or down quickly, making
                    this technology an additional reliability backstop.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="text-2xl font-bold mt-1"
                    style={{ color: "#042B19" }}
                  >
                    →
                  </span>
                  <p
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{ color: "#042B19" }}
                  >
                    Combined-cycle plants offer a stable and highly efficient
                    energy generation solution for baseload power, helping to
                    diversify our power grid. This includes natural gas plants
                    that use liquefied natural gas as their primary source –
                    like Invenergy&apos;s Energía del Pacífico project, which
                    provides nearly 30% of El Salvador&apos;s total energy
                    demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Street Scene Illustration */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/gas3.svg"
                alt="Community benefiting from natural gas energy"
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
              Ready to explore natural gas solutions?
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

