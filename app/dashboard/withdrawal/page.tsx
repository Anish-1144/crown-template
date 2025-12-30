"use client";

import { useState } from "react";
import { Wallet, ArrowRight, Download, ExternalLink, Search, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function WithdrawalPage() {
  const [activeTab, setActiveTab] = useState("withdraw");
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState("");

  const wallets = [
    {
      id: "main",
      name: "Main Wallet",
      balance: "$0.00",
      schedule: "Withdrawals are available daily.",
    },
    {
      id: "solar",
      name: "Solar Starter Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available on the 15th and 30th of every month.",
    },
    {
      id: "power",
      name: "Power Growth Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available on the 10th, 20th, and 30th of every month.",
    },
    {
      id: "elite",
      name: "Elite Energy Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available every Sunday.",
    },
  ];

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWallet) {
      alert("Please select a wallet");
      return;
    }
    console.log("Withdrawal requested:", { wallet: selectedWallet, amount });
    // Handle withdrawal logic
  };

  const selectedWalletData = wallets.find((w) => w.id === selectedWallet);

  // Mock data for withdrawal history
  const withdrawalHistory = [
    {
      sNo: 1,
      transactionId: "WD-001",
      amount: "$500.00",
      charge: "$50.00",
      payable: "$450.00",
      method: "Bank Transfer",
      status: "Paid",
      date: "2024-03-15 10:30:00",
    },
    {
      sNo: 2,
      transactionId: "WD-002",
      amount: "$1,000.00",
      charge: "$100.00",
      payable: "$900.00",
      method: "USDT (TRC20)",
      status: "Pending",
      date: "2024-03-14 14:20:00",
    },
    {
      sNo: 3,
      transactionId: "WD-003",
      amount: "$250.00",
      charge: "$25.00",
      payable: "$225.00",
      method: "Bank Transfer",
      status: "Rejected",
      date: "2024-03-13 09:15:00",
    },
  ];

  const filteredHistory = withdrawalHistory.filter(
    (item) =>
      item.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.method.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalWithdrawal = withdrawalHistory.reduce(
    (sum, item) => sum + parseFloat(item.amount.replace("$", "").replace(",", "")),
    0
  );
  const paidWithdrawal = withdrawalHistory
    .filter((item) => item.status === "Paid")
    .reduce((sum, item) => sum + parseFloat(item.amount.replace("$", "").replace(",", "")), 0);
  const rejectedWithdrawal = withdrawalHistory
    .filter((item) => item.status === "Rejected")
    .reduce((sum, item) => sum + parseFloat(item.amount.replace("$", "").replace(",", "")), 0);

  return (
    <div>
      {/* Header */}
      <DashboardHeader 
        title="Withdraw Your Funds"
        subtitle="Request a payout from your wallet balance instantly."
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={() => setActiveTab("withdraw")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "withdraw"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "withdraw" ? "#042B19" : "transparent",
                color: activeTab === "withdraw" ? "#042B19" : "#6B7280",
              }}
            >
              Withdraw
            </button>
            <button
              onClick={() => setActiveTab("report")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "report"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "report" ? "#042B19" : "transparent",
                color: activeTab === "report" ? "#042B19" : "#6B7280",
              }}
            >
              Withdrawal Report
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "withdraw" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Section - Withdraw Form (60%) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border p-6" style={{ borderColor: "#E5E7EB" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#042B19" }}>
                Withdraw
              </h2>

              {/* Select Withdrawal Wallet */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-4 text-gray-700">
                  Select Withdrawal Wallet
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.id}
                      className={`p-4 rounded-lg border-2 transition-all relative ${
                        selectedWallet === wallet.id
                          ? "border-[#042B19]"
                          : "border-gray-200 hover:border-[#16a34a] hover:bg-gray-50"
                      }`}
                      style={{
                        backgroundColor: selectedWallet === wallet.id ? "#E8F5F0" : "transparent",
                      }}
                    >
                      <button
                        onClick={() => setSelectedWallet(wallet.id)}
                        className="w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#E8F5F0" }}>
                            <Wallet className="w-6 h-6" style={{ color: "#042B19" }} />
                          </div>
                          <p className="text-sm font-semibold mb-1" style={{ color: "#042B19" }}>
                            {wallet.name}
                          </p>
                          <p className="text-lg font-bold" style={{ color: "#042B19" }}>
                            {wallet.balance}
                          </p>
                        </div>
                      </button>
                      <Link
                        href={`/dashboard/wallet/${wallet.id}`}
                        className="absolute top-2 right-2 p-1.5 rounded hover:bg-gray-100 transition"
                        onClick={(e) => e.stopPropagation()}
                        title="View wallet details"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-500 hover:text-[#042B19]" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enter Amount */}
              <form onSubmit={handleWithdrawal} className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-700">
                    Enter Amount
                  </h3>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter withdrawal amount"
                    className="w-full px-4 py-3 border rounded-lg bg-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                    }}
                    required
                    min="15"
                  />
                </div>

                {/* Request Withdrawal Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#042B19" }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Request Withdrawal
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Withdrawal Details (40%) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border p-6" style={{ borderColor: "#E5E7EB" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#042B19" }}>
                Withdrawal Details
              </h2>

              {/* Wallet Withdrawal Schedule */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 pb-2 border-b-2" style={{ borderColor: "#ffcf0B", color: "#042B19" }}>
                  Wallet Withdrawal Schedule
                </h3>
                <div className="space-y-3">
                  {wallets.map((wallet) => (
                    <div key={wallet.id} className="p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                      <p className="text-xs font-semibold mb-1" style={{ color: "#042B19" }}>
                        {wallet.name}:
                      </p>
                      <p className="text-xs text-gray-600">{wallet.schedule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div>
                <h3 className="text-sm font-semibold mb-3 pb-2 border-b-2" style={{ borderColor: "#ffcf0B", color: "#042B19" }}>
                  Important Notes
                </h3>
                <div className="space-y-2">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">1.</span> Minimum withdrawal amount is $ 15.00
                  </p>
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">2.</span> A 10% administrative fee applies to each transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Withdrawal Report Tab */}
        {activeTab === "report" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Panel - Summary (30%) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
                {/* Export to Excel Button */}
                <button className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 mb-6 transition hover:opacity-90" style={{ backgroundColor: "#042B19" }}>
                  <Download className="w-5 h-5" />
                  Export to Excel
                </button>

                {/* Withdrawal Statistics */}
                <div className="space-y-4">
                  <div className="pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                    <p className="text-xs font-medium text-gray-600 mb-1">Total Withdrawal</p>
                    <p className="text-xl font-bold" style={{ color: "#042B19" }}>
                      ${totalWithdrawal.toFixed(2)}
                    </p>
                  </div>
                  <div className="pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                    <p className="text-xs font-medium text-gray-600 mb-1">Paid Withdrawal</p>
                    <p className="text-xl font-bold" style={{ color: "#16a34a" }}>
                      ${paidWithdrawal.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Rejected Withdrawal</p>
                    <p className="text-xl font-bold" style={{ color: "#ef4444" }}>
                      ${rejectedWithdrawal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Withdrawal History (70%) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
                {/* Header */}
                <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#16a34a" }}></div>
                    <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                      Withdrawal History
                    </h2>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-gray-600">Show</label>
                      <select
                        value={entriesPerPage}
                        onChange={(e) => setEntriesPerPage(e.target.value)}
                        className="px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#042B19",
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
                          className="pl-10 pr-4 py-1.5 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0"
                          style={{
                            borderColor: "#E5E7EB",
                            color: "#042B19",
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
                            S No.
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                            Transaction ID
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                            Amount
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                            Charge
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                            Payable
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                            Method
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
                            <td className="px-4 py-3 text-sm text-gray-600">{item.sNo}</td>
                            <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                              {item.transactionId}
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
                              {item.amount}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.charge}</td>
                            <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                              {item.payable}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.method}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                  item.status === "Paid"
                                    ? "bg-green-100 text-green-700"
                                    : item.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
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
                        No Withdrawals Found
                      </p>
                      <p className="text-sm text-gray-600">You haven&apos;t made any withdrawals yet.</p>
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
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
