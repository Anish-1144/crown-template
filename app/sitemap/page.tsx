"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function SitemapPage() {
  const sitemapLinks = {
    main: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/who-we-are/about" },
      { name: "Leadership", href: "/who-we-are/leadership" },
      { name: "Contact Us", href: "/contact" },
      { name: "Download", href: "/download" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    energyTechnologies: [
      { name: "Natural Gas", href: "/energy-technologies/natural-gas" },
      { name: "Solar", href: "/energy-technologies/solar" },
      { name: "Storage", href: "/energy-technologies/storage" },
      { name: "Land-based Wind", href: "/energy-technologies/wind" },
      { name: "Transmission", href: "/energy-technologies/transmission" },
      { name: "Geothermal", href: "/energy-technologies/geothermal" },
    ],
    ourPlan: [
      { name: "Overview", href: "/our-plan/overview" },
      { name: "Strategy", href: "/our-plan/strategy" },
      { name: "Roadmap", href: "/our-plan/roadmap" },
    ],
  };

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{ paddingTop: "156px" }}
    >
      {/* Hero Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#042B19" }}></div>
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: "#042B19" }}
              >
                SITEMAP
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Site Map
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Find all pages and sections of the Crown Bankers website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Pages */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: "#042B19" }}
                >
                  Main Pages
                </h2>
                <ul className="space-y-3">
                  {sitemapLinks.main.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-base md:text-lg transition hover:opacity-70"
                        style={{
                          color: "#042B19",
                          fontFamily: "var(--font-font4), sans-serif",
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Energy Technologies */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: "#042B19" }}
                >
                  Energy Technologies
                </h2>
                <ul className="space-y-3">
                  {sitemapLinks.energyTechnologies.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-base md:text-lg transition hover:opacity-70"
                        style={{
                          color: "#042B19",
                          fontFamily: "var(--font-font4), sans-serif",
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Plan */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: "#042B19" }}
                >
                  Our Plan
                </h2>
                <ul className="space-y-3">
                  {sitemapLinks.ourPlan.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-base md:text-lg transition hover:opacity-70"
                        style={{
                          color: "#042B19",
                          fontFamily: "var(--font-font4), sans-serif",
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


