"use client";

import { useState } from "react";
import { ArrowRightLeft, Wallet, Send } from "lucide-react";

export default function FundConvertPage() {
  const [activeTab, setActiveTab] = useState("convert");
  const [formData, setFormData] = useState({
    fromWallet: "",
    toWallet: "",
    amount: "",
  });

  const wallets = [
    "ROI Wallet",
    "R&B Wallet",
    "Extra Income Wallet",
    "Voucher",
  ];

  // Mock data for fund convert history
  const fundConvertHistory = [
    {
      id: "FC-001",
      fromWallet: "ROI Wallet",
      toWallet: "R&B Wallet",
      amount: "$1,000.00",
      status: "Completed",
      date: "2024-03-15 11:00:00",
    },
    {
      id: "FC-002",
      fromWallet: "Extra Income Wallet",
      toWallet: "ROI Wallet",
      amount: "$500.00",
      status: "Completed",
      date: "2024-03-14 16:45:00",
    },
    {
      id: "FC-003",
      fromWallet: "R&B Wallet",
      toWallet: "Voucher",
      amount: "$250.00",
      status: "Pending",
      date: "2024-03-13 12:30:00",
    },
    {
      id: "FC-004",
      fromWallet: "ROI Wallet",
      toWallet: "Extra Income Wallet",
      amount: "$750.00",
      status: "Completed",
      date: "2024-03-12 09:20:00",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Convert submitted:", formData);
    // Handle form submission
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#042B19" }}>
            Fund Convert
          </h1>
          <p className="text-sm text-gray-600">
            Convert funds between your wallets
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={() => setActiveTab("convert")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "convert"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "convert" ? "#042B19" : "transparent",
                color: activeTab === "convert" ? "#042B19" : "#6B7280",
              }}
            >
              Convert Funds
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "history"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "history" ? "#042B19" : "transparent",
                color: activeTab === "history" ? "#042B19" : "#6B7280",
              }}
            >
              Convert History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "convert" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Section - Form (60%) */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
                  <ArrowRightLeft className="w-5 h-5" style={{ color: "#042B19" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#042B19" }}>
                  FUND CONVERT
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* From Wallet */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    FROM WALLET
                  </label>
                  <select
                    name="fromWallet"
                    value={formData.fromWallet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: formData.fromWallet ? "#042B19" : "#9CA3AF",
                    }}
                    required
                  >
                    <option value="">Select From Wallet</option>
                    {wallets.map((wallet) => (
                      <option key={wallet} value={wallet} style={{ color: "#042B19" }}>
                        {wallet}
                      </option>
                    ))}
                  </select>
                </div>

                {/* To Wallet */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    TO WALLET
                  </label>
                  <select
                    name="toWallet"
                    value={formData.toWallet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: formData.toWallet ? "#042B19" : "#9CA3AF",
                    }}
                    required
                  >
                    <option value="">Select To Wallet</option>
                    {wallets
                      .filter((wallet) => wallet !== formData.fromWallet)
                      .map((wallet) => (
                        <option key={wallet} value={wallet} style={{ color: "#042B19" }}>
                          {wallet}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    $ AMOUNT ($)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                    }}
                    required
                  />
                </div>

                {/* Info Box */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: "#E8F5F0" }}>
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Fund conversion is instant and cannot be reversed. Please verify the details before submitting.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#042B19" }}
                >
                  <Send className="w-5 h-5" />
                  CONVERT FUNDS
                </button>
              </form>
            </div>

            {/* Right Section - Wallet Info (40%) */}
            <div className="lg:col-span-2 bg-gray-100 rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <Wallet className="w-24 h-24 mb-4 text-gray-400" />
                <h3 className="text-xl font-bold mb-4" style={{ color: "#042B19" }}>
                  Wallet Balances
                </h3>
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-600">ROI Wallet</span>
                    <span className="text-sm font-bold" style={{ color: "#042B19" }}>$0.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-600">R&B Wallet</span>
                    <span className="text-sm font-bold" style={{ color: "#042B19" }}>$0.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Extra Income Wallet</span>
                    <span className="text-sm font-bold" style={{ color: "#042B19" }}>$0.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Voucher</span>
                    <span className="text-sm font-bold" style={{ color: "#042B19" }}>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Convert History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
            <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
              <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                Fund Convert History
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Convert ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      From Wallet
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      To Wallet
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Amount
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
                  {fundConvertHistory.map((convert, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                        {convert.id}
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                        {convert.fromWallet}
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                        {convert.toWallet}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                        {convert.amount}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            convert.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {convert.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{convert.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
