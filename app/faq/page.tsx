"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Crown Bankers?",
      answer:
        "Crown Bankers is a leading platform that bridges renewable energy and financial solutions. We operate a diversified multi-industry company generating revenue across solar energy, EV investments, and crypto assets, with a focus on sustainable finance and global expansion.",
    },
    {
      question: "How does Crown Bankers generate revenue?",
      answer:
        "We operate a diversified revenue model across three main areas: Solar energy farms generating $9M+ annually, EV and Forbes-listed investments yielding 15%–35% profit margins, and crypto assets. Our yearly revenue reaches $290M+, allowing stable daily payouts of 1.5%–2.4% to users.",
    },
    {
      question: "What energy technologies does Crown Bankers work with?",
      answer:
        "Crown Bankers works with multiple energy technologies including Natural Gas, Solar, Storage, Land-based Wind, Transmission, and Geothermal. We have operational facilities across these technologies, generating gigawatts of power and serving communities worldwide.",
    },
    {
      question: "How can I get started with Crown Bankers?",
      answer:
        "You can get started by visiting our Contact Us page and filling out the inquiry form. Our team will reach out to discuss your needs and how we can help you with renewable energy solutions or financial services.",
    },
    {
      question: "What is Crown Bankers' roadmap?",
      answer:
        "Our roadmap spans from 2022 to 2028, starting with conceptualization and foundation building, progressing through global expansion, and aiming to become a global leader in sustainable finance and energy with 100+ solar plants worldwide by 2028.",
    },
    {
      question: "Where does Crown Bankers operate?",
      answer:
        "Crown Bankers operates globally with registrations in New Zealand, the UK, Netherlands, and expanding to over 30 countries. We have solar plants in multiple locations including Groningen, Netherlands, and continue to expand our global presence.",
    },
    {
      question: "What makes Crown Bankers different?",
      answer:
        "Crown Bankers combines renewable energy expertise with innovative financial solutions. We have a proven track record with operational facilities, significant revenue generation, and a commitment to sustainable practices. Our diversified approach ensures stability and growth.",
    },
    {
      question: "How can I download company information?",
      answer:
        "You can download our comprehensive brochure from the Download page, which includes company overview, energy technologies, leadership team information, roadmap, and contact details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
                FAQ
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Find answers to common questions about Crown Bankers, our
              services, and how we can help you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-[#E8F5F0] transition"
                  >
                    <h3
                      className="text-lg md:text-xl lg:text-2xl font-bold pr-8"
                      style={{ color: "#042B19" }}
                    >
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: "#042B19" }}
                      />
                    ) : (
                      <ChevronDown
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: "#042B19" }}
                      />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{
                          color: "#042B19",
                          fontFamily: "var(--font-font4), sans-serif",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Still have questions?
            </h2>
            <p
              className="text-base md:text-lg mb-8"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Contact our team for more information or assistance.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#ffcf0B] text-gray-900 font-bold px-8 lg:px-12 py-4 lg:py-5 text-sm md:text-base uppercase tracking-wide transition hover:opacity-90"
              style={{ borderRadius: "0" }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

