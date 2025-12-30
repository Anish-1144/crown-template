"use client";

import { ArrowDown } from "lucide-react";
import Footer from "@/components/Footer";

export default function DownloadPage() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/crown-bankers-brochure.pdf"; // PDF file path in public folder
    link.download = "Crown-Bankers-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                DOWNLOAD
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Download Our Brochure
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Get comprehensive information about Crown Bankers, our services,
              and our commitment to sustainable energy and finance solutions.
            </p>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-4 bg-[#ffcf0B] text-gray-900 font-bold px-8 lg:px-12 py-4 lg:py-6 text-base md:text-lg uppercase tracking-wide transition hover:opacity-90 hover:scale-105"
              style={{ borderRadius: "0" }}
            >
              <ArrowDown className="w-6 h-6" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  What&apos;s Inside
                </h2>
                <ul
                  className="space-y-3"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcf0B] font-bold">•</span>
                    <span>Company Overview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcf0B] font-bold">•</span>
                    <span>Our Energy Technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcf0B] font-bold">•</span>
                    <span>Leadership Team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcf0B] font-bold">•</span>
                    <span>Our Roadmap & Vision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcf0B] font-bold">•</span>
                    <span>Contact Information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#042B19" }}
                >
                  File Details
                </h2>
                <div
                  className="space-y-3"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  <p>
                    <strong>Format:</strong> PDF
                  </p>
                  <p>
                    <strong>Size:</strong> ~2.5 MB
                  </p>
                  <p>
                    <strong>Pages:</strong> 12
                  </p>
                  <p>
                    <strong>Language:</strong> English
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


