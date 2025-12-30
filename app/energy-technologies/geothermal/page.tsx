"use client";

import Image from "next/image";

export default function GeothermalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#042B19] to-[#16a34a]">
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Geothermal Energy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Harnessing the Earth&apos;s natural heat for sustainable power generation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#042B19" }}>
              About Geothermal Energy
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              Geothermal energy is a renewable energy source that harnesses the Earth&apos;s internal heat.
              This clean and sustainable energy solution provides reliable power generation with minimal
              environmental impact.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-lg border" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#042B19" }}>
                  Benefits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Renewable and sustainable</li>
                  <li>• Low carbon footprint</li>
                  <li>• Reliable base-load power</li>
                  <li>• Long operational lifespan</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#042B19" }}>
                  Applications
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Electricity generation</li>
                  <li>• District heating</li>
                  <li>• Industrial processes</li>
                  <li>• Agricultural uses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


