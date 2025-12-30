"use client";

import { useState } from "react";
import { Wallet, TrendingUp, Users, DollarSign, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function TopupPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState("");

  const packages = [
    {
      id: "solar",
      name: "Solar Starter",
      range: "$25 - $4,999",
      dailyROI: "1.64%",
      duration: "200 Days",
      referralBoost: "9%",
      binarySurge: "10%",
      binaryCapping: "$2000",
    },
    {
      id: "power",
      name: "Power Growth",
      range: "$5,000 - $49,999",
      dailyROI: "2.3%",
      duration: "190 Days",
      referralBoost: "10%",
      binarySurge: "10%",
      binaryCapping: "$7000",
    },
    {
      id: "elite",
      name: "Elite Energy",
      range: "$50,000 - Unlimited",
      dailyROI: "2.7%",
      duration: "180 Days",
      referralBoost: "11%",
      binarySurge: "10%",
      binaryCapping: "$20000",
    },
  ];

  // Mock data for topup history
  const topupHistory = [
    {
      id: "TU-001",
      package: "Solar Starter",
      amount: "$1,000.00",
      dailyROI: "1.64%",
      duration: "200 Days",
      status: "Active",
      date: "2024-03-15 10:30:00",
    },
    {
      id: "TU-002",
      package: "Power Growth",
      amount: "$10,000.00",
      dailyROI: "2.3%",
      duration: "190 Days",
      status: "Active",
      date: "2024-03-10 14:20:00",
    },
    {
      id: "TU-003",
      package: "Elite Energy",
      amount: "$75,000.00",
      dailyROI: "2.7%",
      duration: "180 Days",
      status: "Active",
      date: "2024-03-05 09:15:00",
    },
    {
      id: "TU-004",
      package: "Solar Starter",
      amount: "$500.00",
      dailyROI: "1.64%",
      duration: "200 Days",
      status: "Completed",
      date: "2024-02-20 11:45:00",
    },
  ];

  const filteredHistory = topupHistory.filter(
    (item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.package.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTopup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      alert("Please select a package");
      return;
    }
    console.log("Topup requested:", { package: selectedPackage, amount });
    // Handle topup logic
  };

  const selectedPackageData = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader 
        title="Topup"
        subtitle="Invest in our energy packages and start earning returns"
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Investment Packages */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#042B19" }}>
            Investment Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`bg-white rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all ${
                  selectedPackage === pkg.id
                    ? "border-[#042B19]"
                    : "border-gray-200 hover:border-[#16a34a] hover:shadow-md"
                }`}
                style={{
                  backgroundColor: selectedPackage === pkg.id ? "#E8F5F0" : "white",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ color: "#042B19" }}>
                    {pkg.name}
                  </h3>
                  {selectedPackage === pkg.id && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#042B19" }}>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">{pkg.range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Daily ROI: <span className="font-semibold" style={{ color: "#16a34a" }}>{pkg.dailyROI}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Duration: <span className="font-semibold">{pkg.duration}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Referral Boost: <span className="font-semibold">{pkg.referralBoost}</span></span>
                  </div>
                  <div className="pt-2 border-t" style={{ borderColor: "#E5E7EB" }}>
                    <p className="text-xs text-gray-600 mb-1">Binary Surge: <span className="font-semibold">{pkg.binarySurge}</span></p>
                    <p className="text-xs text-gray-600">Binary Capping: <span className="font-semibold">{pkg.binaryCapping}</span></p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg.id);
                      // Scroll to form
                      setTimeout(() => {
                        const formElement = document.getElementById("topup-form");
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }, 100);
                    }}
                    className="w-full mt-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
                    style={{ backgroundColor: "#ffcf0B", color: "#042B19" }}
                  >
                    <Wallet className="w-4 h-4" />
                    Purchase Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topup Form */}
        {selectedPackage && (
          <div id="topup-form" className="bg-white rounded-xl shadow-sm border p-6 mb-8" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: "#042B19" }}>
              Topup Form - {selectedPackageData?.name}
            </h2>
            <form onSubmit={handleTopup} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Investment Amount
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={`Enter amount (${selectedPackageData?.range})`}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                    style={{ backgroundColor: "#042B19" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    Submit Topup
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Topup History */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#16a34a" }}></div>
                <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                  Topup History
                </h2>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Show</label>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(e.target.value)}
                  className="px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
                  style={{
                    borderColor: "#E5E7EB",
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Search:</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="pl-10 pr-4 py-1.5 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {filteredHistory.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Topup ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Package
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Daily ROI
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Duration
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
                  {filteredHistory.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                        {item.id}
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                        {item.package}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                        {item.amount}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.dailyROI}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.duration}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#E8F5F0" }}>
                  <Wallet className="w-12 h-12" style={{ color: "#042B19" }} />
                </div>
                <p className="text-lg font-bold mb-2" style={{ color: "#042B19" }}>
                  No Topup History Found
                </p>
                <p className="text-sm text-gray-600">You haven&apos;t made any topups yet.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredHistory.length > 0 && (
            <div className="p-4 border-t flex items-center justify-between" style={{ borderColor: "#E5E7EB" }}>
              <p className="text-sm text-gray-600">
                Showing 1 to {filteredHistory.length} of {filteredHistory.length} entries
              </p>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded hover:bg-gray-100 transition disabled:opacity-50" disabled>
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 rounded hover:bg-gray-100 transition disabled:opacity-50" disabled>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

