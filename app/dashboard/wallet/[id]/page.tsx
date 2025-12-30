"use client";

import { useParams } from "next/navigation";
import { Wallet, ArrowLeft, TrendingUp, TrendingDown, Clock } from "lucide-react";
import Link from "next/link";

export default function WalletDetailPage() {
  const params = useParams();
  const walletId = params.id as string;

  const wallets: Record<string, { name: string; balance: string; schedule: string }> = {
    main: {
      name: "Main Wallet",
      balance: "$0.00",
      schedule: "Withdrawals are available daily.",
    },
    solar: {
      name: "Solar Starter Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available on the 15th and 30th of every month.",
    },
    power: {
      name: "Power Growth Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available on the 10th, 20th, and 30th of every month.",
    },
    elite: {
      name: "Elite Energy Roi",
      balance: "$0.00",
      schedule: "Withdrawals are available every Sunday.",
    },
  };

  const wallet = wallets[walletId] || wallets.main;

  // Mock transaction history
  const transactions = [
    {
      id: "TXN-001",
      type: "Credit",
      amount: "$500.00",
      description: "ROI Payment",
      date: "2024-03-15 10:30:00",
      status: "Completed",
    },
    {
      id: "TXN-002",
      type: "Debit",
      amount: "$100.00",
      description: "Withdrawal",
      date: "2024-03-14 14:20:00",
      status: "Completed",
    },
    {
      id: "TXN-003",
      type: "Credit",
      amount: "$250.00",
      description: "Referral Bonus",
      date: "2024-03-13 09:15:00",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="px-6 py-6">
          <Link
            href="/dashboard/withdrawal"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#042B19] mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Withdrawal
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
              <Wallet className="w-6 h-6" style={{ color: "#042B19" }} />
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#042B19" }}>
                {wallet.name}
              </h1>
              <p className="text-sm text-gray-600">Wallet Details & Transaction History</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Balance Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Current Balance</h3>
              <Wallet className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-3xl font-bold mb-2" style={{ color: "#042B19" }}>
              {wallet.balance}
            </p>
            <p className="text-xs text-gray-500">Available for withdrawal</p>
          </div>

          {/* Total Credits */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Credits</h3>
              <TrendingUp className="w-5 h-5" style={{ color: "#16a34a" }} />
            </div>
            <p className="text-3xl font-bold mb-2" style={{ color: "#16a34a" }}>
              $750.00
            </p>
            <p className="text-xs text-gray-500">All time credits</p>
          </div>

          {/* Total Debits */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Debits</h3>
              <TrendingDown className="w-5 h-5" style={{ color: "#ef4444" }} />
            </div>
            <p className="text-3xl font-bold mb-2" style={{ color: "#ef4444" }}>
              $100.00
            </p>
            <p className="text-xs text-gray-500">All time debits</p>
          </div>
        </div>

        {/* Withdrawal Schedule */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5" style={{ color: "#042B19" }} />
            <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
              Withdrawal Schedule
            </h2>
          </div>
          <p className="text-sm text-gray-700">{wallet.schedule}</p>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
              Transaction History
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Description
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
                {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                      {transaction.id}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          transaction.type === "Credit"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-3 text-sm font-semibold ${
                        transaction.type === "Credit" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "Credit" ? "+" : "-"}
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{transaction.description}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

