import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-sm font-medium mb-4 uppercase tracking-wide text-gray-900">
              CAREERS
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Join us in building
              <br />
              the energy future.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
              At Invenergy, innovation is driven by a unique array of ideas and
              perspectives. Our growing team of 2,800+ people is dedicated to
              empowering the world with secure, reliable energy.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-[#ffcf0B] text-gray-900 font-bold px-6 py-3 transition hover:opacity-90 text-sm uppercase"
              style={{ borderRadius: "0", maxWidth: "fit-content" }}
            >
              SEE WHAT WE&apos;RE ALL ABOUT
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
            <Image
              src="/CTA.webp"
              alt="Invenergy Team Working"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

