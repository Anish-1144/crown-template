"use client";

import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Building,
  Calendar,
  FileText,
  Headphones,
  ArrowRight,
  Calendar as CalendarIcon,
  Copy,
  Check,
  Shield,
  Link as LinkIcon,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"graph" | "table">("graph");
  
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const keyMetrics = [
    {
      title: "Total Balance",
      description: "All-time total balance",
      value: "$12,450.00",
      change: "-47.2%",
      changeType: "down",
      icon: Wallet,
      color: "#3b82f6",
      bgColor: "#DBEAFE",
    },
    {
      title: "Total Earnings",
      description: "Total earnings in USD",
      value: "$8,230.50",
      change: "-60.1%",
      changeType: "down",
      icon: DollarSign,
      color: "#16a34a",
      bgColor: "#DCFCE7",
    },
    {
      title: "Active Investments",
      description: "Total active investments",
      value: "$0",
      change: "0.0%",
      changeType: "neutral",
      icon: TrendingUp,
      color: "#eab308",
      bgColor: "#FEF9C3",
    },
    {
      title: "Active Referrals",
      description: "Portfolio vs last month",
      value: "24",
      change: "13+ new this month",
      changeType: "up",
      icon: Users,
      color: "#ec4899",
      bgColor: "#FCE7F3",
    },
  ];

  const operationalSections = [
    {
      title: "My Genealogy",
      description: "Manage your referral network and track downline performance.",
      value: "114 active users",
      icon: Users,
      color: "#042B19",
    },
    {
      title: "Fund Management",
      description: "Oversee deposits, withdrawals, and account balance.",
      value: "8 pending",
      icon: Building,
      color: "#042B19",
    },
    {
      title: "Payout Report",
      description: "Track earnings, payouts, and recent transactions.",
      value: "11 open reports",
      icon: Calendar,
      color: "#042B19",
    },
    {
      title: "Support Desk",
      description: "Review support tickets and get help when needed.",
      value: "1 priority tickets",
      icon: Headphones,
      color: "#042B19",
    },
  ];

  return (
    <div>
          {/* Header */}
          <DashboardHeader 
            title="Dashboard"
            subtitle="Monitor revenue, investments, and operational health in one view."
          />

      {/* Main Content */}
      <main className="p-6">
        {/* Income Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* ROI Income */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">ROI INCOME</h3>
              <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
                $ 0
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "#E5E7EB" }}>
              <span className="text-sm font-semibold text-green-600">+ $ 0</span>
              <span className="text-xs text-gray-500">Today Income</span>
            </div>
          </div>

          {/* Referral Income */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">REFERRAL INCOME</h3>
              <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
                $ 0
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "#E5E7EB" }}>
              <span className="text-sm font-semibold text-green-600">+ $ 0</span>
              <span className="text-xs text-gray-500">Today Income</span>
            </div>
          </div>

          {/* Career Reward */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">CAREER REWARD</h3>
              <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
                $ 0
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "#E5E7EB" }}>
              <span className="text-sm font-semibold text-green-600">+ $ 0</span>
              <span className="text-xs text-gray-500">Today Income</span>
            </div>
          </div>

          {/* Matching Income */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">MATCHING INCOME</h3>
              <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
                $ 0
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "#E5E7EB" }}>
              <span className="text-sm font-semibold text-green-600">+ $ 0</span>
              <span className="text-xs text-gray-500">Today Income</span>
            </div>
          </div>
        </div>

        {/* Operational Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {operationalSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm p-6 border hover:shadow-md transition cursor-pointer"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#E8F5F0" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: section.color }} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#042B19" }}>
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {section.description}
                </p>
                <p className="text-base font-semibold" style={{ color: "#042B19" }}>
                  {section.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wallet Overview and Settings Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Wallet Overview */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold mb-6" style={{ color: "#042B19" }}>
              Wallet Overview
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg border" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
                <p className="text-sm font-medium text-gray-600 mb-2">ROI Wallet</p>
                <p className="text-2xl font-bold" style={{ color: "#042B19" }}>$0.00</p>
              </div>
              <div className="p-4 rounded-lg border" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
                <p className="text-sm font-medium text-gray-600 mb-2">R&B Wallet</p>
                <p className="text-2xl font-bold" style={{ color: "#042B19" }}>$0.00</p>
              </div>
              <div className="p-4 rounded-lg border" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
                <p className="text-sm font-medium text-gray-600 mb-2">Extra Income Wallet</p>
                <p className="text-2xl font-bold" style={{ color: "#042B19" }}>$0.00</p>
              </div>
              <div className="p-4 rounded-lg border" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
                <p className="text-sm font-medium text-gray-600 mb-2">Voucher</p>
                <p className="text-2xl font-bold" style={{ color: "#042B19" }}>$0.00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Withdraw
              </button>
              <button
                className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: "#16a34a" }}
              >
                Reinvest
              </button>
            </div>
          </div>

          {/* Wallet Settings */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold mb-6" style={{ color: "#042B19" }}>
              Wallet Settings
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">User ID</p>
                <p className="text-base font-semibold" style={{ color: "#042B19" }}>CROWN-108470</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Name</p>
                <p className="text-base font-semibold" style={{ color: "#042B19" }}>john doe</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Status</p>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: "#DCFCE7", color: "#16a34a" }}>
                  Active
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                Withdrawal Wallet Address (Tether-TRC20)
              </label>
              <input
                type="text"
                placeholder="Enter Wallet Address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                style={{
                  borderColor: "#E5E7EB",
                  color: "#042B19",
                }}
              />
              <p className="text-xs text-gray-500 mt-2">
                *To keep your money safe, this address cannot be changed later
              </p>
            </div>
            <button
              className="w-full px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "#16a34a" }}
            >
              Update Address
            </button>
          </div>
        </div>

        {/* Career Progress and Referral Links Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Career Progress */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5" style={{ color: "#16a34a" }} />
              <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                Career Progress
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Current Level</p>
                <p className="text-2xl font-bold" style={{ color: "#042B19" }}>0</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Next Level</p>
                <p className="text-lg font-semibold" style={{ color: "#042B19" }}>1 - Bronze</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">Left Business</p>
                    <p className="text-sm font-semibold" style={{ color: "#042B19" }}>$0.00 / $10,000.00</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: "0%", backgroundColor: "#16a34a" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">Right Business</p>
                    <p className="text-sm font-semibold" style={{ color: "#042B19" }}>$0.00 / $10,000.00</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: "0%", backgroundColor: "#16a34a" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Links */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-2 mb-6">
              <LinkIcon className="w-5 h-5" style={{ color: "#16a34a" }} />
              <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                Referral Links
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Left Link</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://crownbankers.com/signup?sponsorld=CROWN-108470&position=left"
                    className="flex-1 px-4 py-2 border rounded-lg bg-gray-50 text-sm"
                    style={{ borderColor: "#E5E7EB", color: "#042B19" }}
                  />
                  <CopyButton text="https://crownbankers.com/signup?sponsorld=CROWN-108470&position=left" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Right Link</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://crownbankers.com/signup?sponsorld=CROWN-108470&position=right"
                    className="flex-1 px-4 py-2 border rounded-lg bg-gray-50 text-sm"
                    style={{ borderColor: "#E5E7EB", color: "#042B19" }}
                  />
                  <CopyButton text="https://crownbankers.com/signup?sponsorld=CROWN-108470&position=right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Earnings Chart */}
        <div className="bg-white rounded-3xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-1" style={{ color: "#042B19" }}>
                Today&apos;s Earnings
              </h2>
              <p className="text-sm text-gray-600">
                USD and total earnings throughout the day
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

// Copy Button Component
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 rounded-lg font-semibold text-white transition hover:opacity-90 flex items-center gap-2"
      style={{ backgroundColor: "#16a34a" }}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

// Earnings Chart Component
function EarningsChart() {
  // Sample data for the chart (24 hours)
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const earnings = hours.map(() => Math.random() * 100 + 50); // Random data for demo

  const maxEarnings = Math.max(...earnings);
  const chartHeight = 280;

  return (
    <div className="relative w-full h-full">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between pr-2">
        {[0, 25, 50, 75, 100].map((value) => (
          <span key={value} className="text-xs text-gray-500">
            ${value}
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
          {earnings.map((value, index) => {
            const height = (value / maxEarnings) * chartHeight;
            return (
              <div
                key={index}
                className="flex-1 rounded-t transition-all hover:opacity-80 group relative"
                style={{
                  height: `${height}px`,
                  backgroundColor: "#16a34a",
                  minHeight: "4px",
                }}
                title={`Hour ${index}: $${value.toFixed(2)}`}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  ${value.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-4 flex justify-between pt-2">
          {[0, 6, 12, 18, 23].map((hour) => (
            <span key={hour} className="text-xs text-gray-500">
              {hour}:00
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Earnings Table Component
function EarningsTable() {
  // Sample data for the table (24 hours)
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const earnings = hours.map((hour) => ({
    hour: hour,
    time: `${hour.toString().padStart(2, "0")}:00`,
    amount: (Math.random() * 100 + 50).toFixed(2),
  }));

  const totalEarnings = earnings.reduce((sum, item) => sum + parseFloat(item.amount), 0);

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: "#F9FAFB" }}>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide" style={{ color: "#042B19" }}>
              Time
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide" style={{ color: "#042B19" }}>
              Earnings (USD)
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide" style={{ color: "#042B19" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
          {earnings.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                {item.time}
              </td>
              <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                ${item.amount}
              </td>
              <td className="px-4 py-3 text-right">
                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#DCFCE7", color: "#16a34a" }}>
                  Completed
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ backgroundColor: "#F9FAFB" }}>
            <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
              Total
            </td>
            <td className="px-4 py-3 text-sm font-bold" style={{ color: "#042B19" }}>
              ${totalEarnings.toFixed(2)}
            </td>
            <td className="px-4 py-3"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
