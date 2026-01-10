export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#042B19" }}>
            Download Brochure
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get our comprehensive brochure about Crown Bankers
          </p>
          <a
            href="/brochure.pdf"
            download
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#042B19" }}
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}



