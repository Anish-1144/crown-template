"use client";

export default function FontPage() {
  const sampleText = "The quick brown fox jumps over the lazy dog";
  const sampleTextLong =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const fontSamples = [
    {
      name: "Font 1",
      fontFamily: "'Font1', sans-serif",
      file: "font1.woff2",
      description: "Custom Font 1 - Weight 400",
    },
    {
      name: "Font 2",
      fontFamily: "'Font2', sans-serif",
      file: "font2.woff2",
      description: "Custom Font 2 - Weight 400",
    },
    {
      name: "Font 3",
      fontFamily: "'Font3', sans-serif",
      file: "font3.woff",
      description: "Custom Font 3 - Weight 400",
    },
    {
      name: "Font 4",
      fontFamily: "'Font4', sans-serif",
      file: "font4.woff2",
      description: "Custom Font 4 - Weight 400",
    },
    {
      name: "Font 5",
      fontFamily: "'Font5', sans-serif",
      file: "font5.woff2",
      description: "Custom Font 5 - Weight 500",
    },
    {
      name: "Font 6",
      fontFamily: "'Font6', sans-serif",
      file: "font6.woff2",
      description: "Custom Font 6 - Weight 600",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 lg:px-8" style={{ paddingTop: "200px" }}>
      <div className="container mx-auto max-w-6xl">
        <h1
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ color: "#042B19" }}
        >
          Font Showcase
        </h1>

        <div className="space-y-12">
          {fontSamples.map((font, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="mb-4">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#042B19" }}
                >
                  {font.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">{font.description}</p>
                <p className="text-xs text-gray-500">File: {font.file}</p>
              </div>

              {/* Sample Text - Regular */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  Regular (400)
                </p>
                <p
                  className="text-2xl md:text-3xl leading-relaxed"
                  style={{
                    fontFamily: font.fontFamily,
                    color: "#042B19",
                  }}
                >
                  {sampleText}
                </p>
              </div>

              {/* Sample Text - Long Paragraph */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  Paragraph Sample
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: font.fontFamily,
                    color: "#042B19",
                  }}
                >
                  {sampleTextLong}
                </p>
              </div>

              {/* Sample Text - Large Heading */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  Large Heading
                </p>
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{
                    fontFamily: font.fontFamily,
                    color: "#042B19",
                  }}
                >
                  {sampleText}
                </h3>
              </div>

              {/* Sample Text - Uppercase */}
              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  Uppercase Sample
                </p>
                <p
                  className="text-xl md:text-2xl uppercase tracking-wide"
                  style={{
                    fontFamily: font.fontFamily,
                    color: "#042B19",
                  }}
                >
                  {sampleText.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CSS Variables Reference */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#042B19" }}
          >
            CSS Variables Reference
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <code className="text-sm text-gray-700">
              <div className="mb-2">
                <strong>--font-custom:</strong> Used for font1, font2, font3,
                font5, font6
              </div>
              <div>
                <strong>--font-font4:</strong> Used specifically for font4
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

