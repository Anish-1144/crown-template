"use client";

import { useState } from "react";
import { Coins, Upload, Send, Wallet, ChevronDown } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function FundRequestPage() {
  const [activeTab, setActiveTab] = useState("deposit");
  const [formData, setFormData] = useState({
    paymentMethod: "",
    paymentType: "",
    amount: "",
    transactionReference: "",
    paymentProof: null as File | null,
  });
  const [showPaymentMethodDropdown, setShowPaymentMethodDropdown] = useState(false);
  const [showPaymentTypeDropdown, setShowPaymentTypeDropdown] = useState(false);

  const paymentMethods = [
    "Bank Transfer",
    "Cryptocurrency",
    "Credit Card",
    "PayPal",
    "USDT (TRC20)",
    "Bitcoin",
  ];

  const paymentTypes = [
    "One-time Payment",
    "Recurring Payment",
    "Investment Deposit",
    "Account Top-up",
  ];

  // Mock data for fund request history
  const fundRequestHistory = [
    {
      id: "FR-001",
      paymentMethod: "USDT (TRC20)",
      paymentType: "Investment Deposit",
      amount: "$5,000.00",
      transactionReference: "TRX1234567890",
      status: "Pending",
      date: "2024-03-15 10:30:00",
    },
    {
      id: "FR-002",
      paymentMethod: "Bank Transfer",
      paymentType: "Account Top-up",
      amount: "$2,500.00",
      transactionReference: "BT9876543210",
      status: "Approved",
      date: "2024-03-14 14:20:00",
    },
    {
      id: "FR-003",
      paymentMethod: "Bitcoin",
      paymentType: "Investment Deposit",
      amount: "$10,000.00",
      transactionReference: "BTCabc123def456",
      status: "Rejected",
      date: "2024-03-13 09:15:00",
    },
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
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, paymentProof: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader 
        title="Fund Request"
        subtitle="Deposit funds and manage your account balance"
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={() => setActiveTab("deposit")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "deposit"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "deposit" ? "#042B19" : "transparent",
                color: activeTab === "deposit" ? "#042B19" : "#6B7280",
              }}
            >
              Fund Deposit Request
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
              Fund Request History
            </button>
            <button
              onClick={() => setActiveTab("convertHistory")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "convertHistory"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "convertHistory" ? "#042B19" : "transparent",
                color: activeTab === "convertHistory" ? "#042B19" : "#6B7280",
              }}
            >
              Fund Convert History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "deposit" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Section - Form (60%) */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
                  <Coins className="w-5 h-5" style={{ color: "#042B19" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#042B19" }}>
                  FUND DEPOSIT REQUEST
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT METHOD
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPaymentMethodDropdown(!showPaymentMethodDropdown);
                        setShowPaymentTypeDropdown(false);
                      }}
                      className="w-full px-4 py-3 border rounded-lg bg-gray-50 flex items-center justify-between text-left"
                      style={{ borderColor: "#E5E7EB", color: formData.paymentMethod ? "#042B19" : "#9CA3AF" }}
                    >
                      <span>{formData.paymentMethod || "Select Payment Method"}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>
                    {showPaymentMethodDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto" style={{ borderColor: "#E5E7EB" }}>
                        {paymentMethods.map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, paymentMethod: method }));
                              setShowPaymentMethodDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition text-sm"
                            style={{ color: "#042B19" }}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Type */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT TYPE
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPaymentTypeDropdown(!showPaymentTypeDropdown);
                        setShowPaymentMethodDropdown(false);
                      }}
                      className="w-full px-4 py-3 border rounded-lg bg-gray-50 flex items-center justify-between text-left"
                      style={{ borderColor: "#E5E7EB", color: formData.paymentType ? "#042B19" : "#9CA3AF" }}
                    >
                      <span>{formData.paymentType || "Select Payment Type"}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>
                    {showPaymentTypeDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto" style={{ borderColor: "#E5E7EB" }}>
                        {paymentTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, paymentType: type }));
                              setShowPaymentTypeDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition text-sm"
                            style={{ color: "#042B19" }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                </div>

                {/* Transaction Reference */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    TRANSACTION REFERENCE
                  </label>
                  <input
                    type="text"
                    name="transactionReference"
                    value={formData.transactionReference}
                    onChange={handleInputChange}
                    placeholder="Enter transaction reference"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                </div>

                {/* Payment Proof */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT PROOF
                  </label>
                  <label className="block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition" style={{ borderColor: "#E5E7EB" }}>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Click to upload payment screenshot
                    </p>
                    {formData.paymentProof && (
                      <p className="text-xs text-gray-500 mt-2">
                        Selected: {formData.paymentProof.name}
                      </p>
                    )}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#042B19" }}
                >
                  <Send className="w-5 h-5" />
                  SUBMIT REQUEST
                </button>
              </form>
            </div>

            {/* Right Section - Payment Details (40%) */}
            <div className="lg:col-span-2 bg-gray-100 rounded-xl shadow-sm border p-6 flex flex-col items-center justify-center min-h-[600px]" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
              <Wallet className="w-24 h-24 mb-4 text-gray-400" />
              <h3 className="text-xl font-bold mb-2" style={{ color: "#042B19" }}>
                Payment Details
              </h3>
              <p className="text-sm text-center text-gray-600 max-w-xs">
                Select a payment method to view deposit instructions.
              </p>
            </div>
          </div>
        )}

        {/* Fund Request History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
            <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
              <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                Fund Request History
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Request ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Payment Method
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Payment Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Transaction Reference
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
                  {fundRequestHistory.map((request, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                        {request.id}
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                        {request.paymentMethod}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{request.paymentType}</td>
                      <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                        {request.amount}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-mono">{request.transactionReference}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            request.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{request.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Fund Convert History Tab */}
        {activeTab === "convertHistory" && (
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


import { useState } from "react";
import { Coins, Upload, Send, Wallet, ChevronDown } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function FundRequestPage() {
  const [activeTab, setActiveTab] = useState("deposit");
  const [formData, setFormData] = useState({
    paymentMethod: "",
    paymentType: "",
    amount: "",
    transactionReference: "",
    paymentProof: null as File | null,
  });
  const [showPaymentMethodDropdown, setShowPaymentMethodDropdown] = useState(false);
  const [showPaymentTypeDropdown, setShowPaymentTypeDropdown] = useState(false);

  const paymentMethods = [
    "Bank Transfer",
    "Cryptocurrency",
    "Credit Card",
    "PayPal",
    "USDT (TRC20)",
    "Bitcoin",
  ];

  const paymentTypes = [
    "One-time Payment",
    "Recurring Payment",
    "Investment Deposit",
    "Account Top-up",
  ];

  // Mock data for fund request history
  const fundRequestHistory = [
    {
      id: "FR-001",
      paymentMethod: "USDT (TRC20)",
      paymentType: "Investment Deposit",
      amount: "$5,000.00",
      transactionReference: "TRX1234567890",
      status: "Pending",
      date: "2024-03-15 10:30:00",
    },
    {
      id: "FR-002",
      paymentMethod: "Bank Transfer",
      paymentType: "Account Top-up",
      amount: "$2,500.00",
      transactionReference: "BT9876543210",
      status: "Approved",
      date: "2024-03-14 14:20:00",
    },
    {
      id: "FR-003",
      paymentMethod: "Bitcoin",
      paymentType: "Investment Deposit",
      amount: "$10,000.00",
      transactionReference: "BTCabc123def456",
      status: "Rejected",
      date: "2024-03-13 09:15:00",
    },
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
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, paymentProof: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader 
        title="Fund Request"
        subtitle="Deposit funds and manage your account balance"
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={() => setActiveTab("deposit")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "deposit"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "deposit" ? "#042B19" : "transparent",
                color: activeTab === "deposit" ? "#042B19" : "#6B7280",
              }}
            >
              Fund Deposit Request
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
              Fund Request History
            </button>
            <button
              onClick={() => setActiveTab("convertHistory")}
              className={`px-6 py-4 text-sm font-semibold transition ${
                activeTab === "convertHistory"
                  ? "border-b-2"
                  : "hover:bg-gray-50 text-gray-600"
              }`}
              style={{
                borderBottomColor: activeTab === "convertHistory" ? "#042B19" : "transparent",
                color: activeTab === "convertHistory" ? "#042B19" : "#6B7280",
              }}
            >
              Fund Convert History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "deposit" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Section - Form (60%) */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
                  <Coins className="w-5 h-5" style={{ color: "#042B19" }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#042B19" }}>
                  FUND DEPOSIT REQUEST
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT METHOD
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPaymentMethodDropdown(!showPaymentMethodDropdown);
                        setShowPaymentTypeDropdown(false);
                      }}
                      className="w-full px-4 py-3 border rounded-lg bg-gray-50 flex items-center justify-between text-left"
                      style={{ borderColor: "#E5E7EB", color: formData.paymentMethod ? "#042B19" : "#9CA3AF" }}
                    >
                      <span>{formData.paymentMethod || "Select Payment Method"}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>
                    {showPaymentMethodDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto" style={{ borderColor: "#E5E7EB" }}>
                        {paymentMethods.map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, paymentMethod: method }));
                              setShowPaymentMethodDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition text-sm"
                            style={{ color: "#042B19" }}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Type */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT TYPE
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPaymentTypeDropdown(!showPaymentTypeDropdown);
                        setShowPaymentMethodDropdown(false);
                      }}
                      className="w-full px-4 py-3 border rounded-lg bg-gray-50 flex items-center justify-between text-left"
                      style={{ borderColor: "#E5E7EB", color: formData.paymentType ? "#042B19" : "#9CA3AF" }}
                    >
                      <span>{formData.paymentType || "Select Payment Type"}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>
                    {showPaymentTypeDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto" style={{ borderColor: "#E5E7EB" }}>
                        {paymentTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, paymentType: type }));
                              setShowPaymentTypeDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition text-sm"
                            style={{ color: "#042B19" }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                </div>

                {/* Transaction Reference */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    TRANSACTION REFERENCE
                  </label>
                  <input
                    type="text"
                    name="transactionReference"
                    value={formData.transactionReference}
                    onChange={handleInputChange}
                    placeholder="Enter transaction reference"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                </div>

                {/* Payment Proof */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    PAYMENT PROOF
                  </label>
                  <label className="block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition" style={{ borderColor: "#E5E7EB" }}>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Click to upload payment screenshot
                    </p>
                    {formData.paymentProof && (
                      <p className="text-xs text-gray-500 mt-2">
                        Selected: {formData.paymentProof.name}
                      </p>
                    )}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#042B19" }}
                >
                  <Send className="w-5 h-5" />
                  SUBMIT REQUEST
                </button>
              </form>
            </div>

            {/* Right Section - Payment Details (40%) */}
            <div className="lg:col-span-2 bg-gray-100 rounded-xl shadow-sm border p-6 flex flex-col items-center justify-center min-h-[600px]" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
              <Wallet className="w-24 h-24 mb-4 text-gray-400" />
              <h3 className="text-xl font-bold mb-2" style={{ color: "#042B19" }}>
                Payment Details
              </h3>
              <p className="text-sm text-center text-gray-600 max-w-xs">
                Select a payment method to view deposit instructions.
              </p>
            </div>
          </div>
        )}

        {/* Fund Request History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
            <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
              <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
                Fund Request History
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Request ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Payment Method
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Payment Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                      Transaction Reference
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
                  {fundRequestHistory.map((request, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                        {request.id}
                      </td>
                      <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                        {request.paymentMethod}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{request.paymentType}</td>
                      <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                        {request.amount}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-mono">{request.transactionReference}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            request.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{request.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Fund Convert History Tab */}
        {activeTab === "convertHistory" && (
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

