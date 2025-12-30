"use client";

import { useState } from "react";
import { TrendingUp, Users, Award, DollarSign, Download, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function PayoutReportPage() {
  const [activeTab, setActiveTab] = useState("roi");
  const [viewMode, setViewMode] = useState<"graph" | "table">("graph");

  // Mock data for ROI Income
  const roiIncomeData = [
    { date: "2024-03-15", amount: 150.00 },
    { date: "2024-03-14", amount: 145.50 },
    { date: "2024-03-13", amount: 142.00 },
    { date: "2024-03-12", amount: 138.75 },
    { date: "2024-03-11", amount: 135.25 },
    { date: "2024-03-10", amount: 132.00 },
    { date: "2024-03-09", amount: 128.50 },
  ];

  // Mock data for Referral Report
  const referralData = [
    { date: "2024-03-15", amount: 75.00, referrals: 3 },
    { date: "2024-03-14", amount: 90.00, referrals: 4 },
    { date: "2024-03-13", amount: 60.00, referrals: 2 },
    { date: "2024-03-12", amount: 105.00, referrals: 5 },
    { date: "2024-03-11", amount: 45.00, referrals: 2 },
    { date: "2024-03-10", amount: 120.00, referrals: 6 },
    { date: "2024-03-09", amount: 30.00, referrals: 1 },
  ];

  // Mock data for Matching Reward
  const matchingRewardData = [
    { date: "2024-03-15", amount: 200.00, left: 5000, right: 4500 },
    { date: "2024-03-14", amount: 180.00, left: 4800, right: 4200 },
    { date: "2024-03-13", amount: 220.00, left: 5500, right: 5000 },
    { date: "2024-03-12", amount: 195.00, left: 4900, right: 4400 },
    { date: "2024-03-11", amount: 210.00, left: 5200, right: 4700 },
    { date: "2024-03-10", amount: 175.00, left: 4500, right: 4000 },
    { date: "2024-03-09", amount: 190.00, left: 4700, right: 4300 },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "roi":
        return roiIncomeData;
      case "referral":
        return referralData;
      case "matching":
        return matchingRewardData;
      default:
        return roiIncomeData;
    }
  };

  const currentData = getCurrentData();
  const maxAmount = Math.max(...currentData.map((d: any) => d.amount));
  const totalAmount = currentData.reduce((sum: number, d: any) => sum + d.amount, 0);

  // Earnings Chart Component
  const EarningsChart = () => {
    const data = getCurrentData();
    const maxValue = Math.max(...data.map((d: any) => d.amount));
    const chartHeight = 280;

    return (
      <div className="relative w-full h-full">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between pr-2">
          {[0, 25, 50, 75, 100].map((value) => (
            <span key={value} className="text-xs text-gray-500">
              ${(value * maxValue / 100).toFixed(0)}
            </span>
          ))}
        </div>

        {/* Chart area */}
        <div className="ml-12 mr-4 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full h-px"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
            ))}
          </div>

          {/* Chart bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1 h-full pb-8">
            {data.map((item: any, index: number) => {
              const height = (item.amount / maxValue) * chartHeight;
              return (
                <div
                  key={index}
                  className="flex-1 rounded-t transition-all hover:opacity-80 group relative"
                  style={{
                    height: `${height}px`,
                    backgroundColor: "#16a34a",
                    minHeight: "4px",
                  }}
                  title={`${item.date}: $${item.amount.toFixed(2)}`}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    ${item.amount.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-4 flex justify-between pt-2">
            {data.map((item: any, index: number) => {
              if (index % 2 === 0 || index === data.length - 1) {
                return (
                  <span key={index} className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  };

  // Earnings Table Component
  const EarningsTable = () => {
    const data = getCurrentData();

    return (
      <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: "#F9FAFB" }}>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                Date
              </th>
              {activeTab === "referral" && (
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                  Referrals
                </th>
              )}
              {activeTab === "matching" && (
                <>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Left Business
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Right Business
                  </th>
                </>
              )}
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                Amount (USD)
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
            {data.map((item: any, index: number) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-sm text-gray-600">
                  {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </td>
                {activeTab === "referral" && (
                  <td className="px-4 py-3 text-sm text-gray-600">{item.referrals}</td>
                )}
                {activeTab === "matching" && (
                  <>
                    <td className="px-4 py-3 text-sm text-gray-600">${item.left.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">${item.right.toLocaleString()}</td>
                  </>
                )}
                <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                  ${item.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: "#F9FAFB" }}>
              <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }} colSpan={activeTab === "referral" ? 3 : activeTab === "matching" ? 4 : 2}>
                Total
              </td>
              <td className="px-4 py-3 text-sm font-bold" style={{ color: "#042B19" }}>
                ${totalAmount.toFixed(2)}
              </td>
              <td className="px-4 py-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: "#042B19" }}>
                Payout Report
              </h1>
              <p className="text-sm text-gray-600">
                View detailed reports of your earnings and payouts
              </p>
            </div>
            <button className="px-4 py-2 rounded-lg font-semibold text-white flex items-center gap-2 transition hover:opacity-90" style={{ backgroundColor: "#042B19" }}>
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={() => setActiveTab("roi")}
              className={`px-6 py-4 text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === "roi"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "roi" ? "#042B19" : "transparent",
                color: activeTab === "roi" ? "#042B19" : "#6B7280",
              }}
            >
              <TrendingUp className="w-4 h-4" />
              ROI Income Report
            </button>
            <button
              onClick={() => setActiveTab("referral")}
              className={`px-6 py-4 text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === "referral"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "referral" ? "#042B19" : "transparent",
                color: activeTab === "referral" ? "#042B19" : "#6B7280",
              }}
            >
              <Users className="w-4 h-4" />
              Referral Report
            </button>
            <button
              onClick={() => setActiveTab("matching")}
              className={`px-6 py-4 text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === "matching"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "matching" ? "#042B19" : "transparent",
                color: activeTab === "matching" ? "#042B19" : "#6B7280",
              }}
            >
              <Award className="w-4 h-4" />
              Matching Reward
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5" style={{ color: "#16a34a" }} />
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${totalAmount.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Last 7 days</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5" style={{ color: "#042B19" }} />
              <p className="text-sm font-medium text-gray-600">Average Daily</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${(totalAmount / currentData.length).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Per day</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5" style={{ color: "#ffcf0B" }} />
              <p className="text-sm font-medium text-gray-600">Highest Amount</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${maxAmount.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Single day record</p>
          </div>
        </div>

        {/* Chart/Table Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-1" style={{ color: "#042B19" }}>
                {activeTab === "roi" && "ROI Income"}
                {activeTab === "referral" && "Referral Earnings"}
                {activeTab === "matching" && "Matching Reward"}
              </h2>
              <p className="text-sm text-gray-600">
                Earnings breakdown for the last 7 days
              </p>
            </div>
            {/* Toggle Buttons */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("graph")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "graph"
                    ? "bg-white text-[#042B19] shadow-sm"
                    : "text-gray-600 hover:text-[#042B19]"
                }`}
              >
                Graph
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "table"
                    ? "bg-white text-[#042B19] shadow-sm"
                    : "text-gray-600 hover:text-[#042B19]"
                }`}
              >
                Table
              </button>
            </div>
          </div>
          {viewMode === "graph" ? (
            <div className="h-80">
              <EarningsChart />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <EarningsTable />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

