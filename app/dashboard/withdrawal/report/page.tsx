"use client";

import { useState } from "react";
import { Download, RefreshCw, ChevronLeft, ChevronRight, Search, Wallet } from "lucide-react";

export default function WithdrawalReportPage() {
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState("");

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
      <header className="bg-white shadow-sm border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: "#042B19" }}>
                Withdrawal Report
              </h1>
              <nav className="text-sm text-gray-600">
                Dashboard &gt; Withdrawal &gt; Withdrawal Report
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
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
      </main>

      {/* Floating Refresh Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl transition" style={{ backgroundColor: "#042B19" }}>
        <RefreshCw className="w-5 h-5" />
      </button>
    </div>
  );
}
