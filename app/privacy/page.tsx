"use client";

import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
                PRIVACY POLICY
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  1. Introduction
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  Crown Bankers ("we," "our," or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  2. Information We Collect
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We may collect information that you provide directly to us,
                  including:
                </p>
                <ul
                  className="list-disc pl-6 space-y-2 mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Company information</li>
                  <li>Inquiry and communication details</li>
                </ul>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We also automatically collect certain information when you
                  visit our website, such as IP address, browser type, and
                  usage patterns.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  3. How We Use Your Information
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We use the information we collect to:
                </p>
                <ul
                  className="list-disc pl-6 space-y-2 mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  4. Information Sharing
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul
                  className="list-disc pl-6 space-y-2 mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  5. Data Security
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We implement appropriate technical and organizational
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100%
                  secure.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  6. Your Rights
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  You have the right to:
                </p>
                <ul
                  className="list-disc pl-6 space-y-2 mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  7. Contact Us
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  If you have questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  Email: info@crownbanker.com
                  <br />
                  Phone: +44 7452321010
                  <br />
                  Address: Crown Bankers Corporate Office
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


