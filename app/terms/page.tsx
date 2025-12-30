"use client";

import Footer from "@/components/Footer";

export default function TermsPage() {
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
                TERMS OF SERVICE
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  By accessing and using the Crown Bankers website and
                  services, you accept and agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use
                  our services.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  2. Use of Services
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul
                  className="list-disc pl-6 space-y-2 mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for any fraudulent purpose</li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  3. Intellectual Property
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of Crown Bankers and is
                  protected by copyright and other intellectual property laws.
                  You may not reproduce, distribute, or create derivative works
                  without our written permission.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  4. Disclaimer of Warranties
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  Our services are provided "as is" and "as available" without
                  warranties of any kind, either express or implied. We do not
                  guarantee that our services will be uninterrupted, secure, or
                  error-free.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  5. Limitation of Liability
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  To the maximum extent permitted by law, Crown Bankers shall
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or relating
                  to your use of our services.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  6. Indemnification
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  You agree to indemnify and hold harmless Crown Bankers, its
                  officers, directors, employees, and agents from any claims,
                  damages, losses, liabilities, and expenses arising out of your
                  use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  7. Modifications to Terms
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  We reserve the right to modify these Terms at any time. We
                  will notify users of any material changes by posting the new
                  Terms on this page. Your continued use of our services after
                  such modifications constitutes acceptance of the updated
                  Terms.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  8. Contact Information
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  If you have questions about these Terms of Service, please
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

