"use client";

import { useState } from "react";
import { Send, RotateCcw, Search, ChevronLeft, ChevronRight, Ticket, Mail, Clock, Loader, CheckCircle } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function SupportsPage() {
  const [formData, setFormData] = useState({
    name: "mayank",
    email: "mayanksahu0024@gmail.com",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");

  // Mock data for tickets
  const tickets = [
    {
      id: "TKT-001",
      description: "Unable to withdraw funds from my account",
      createDate: "2024-03-15 10:30:00",
      status: "Open",
      reply: "We are looking into your withdrawal request...",
    },
    {
      id: "TKT-002",
      description: "Question about investment package returns",
      createDate: "2024-03-14 14:20:00",
      status: "Pending",
      reply: "Pending review",
    },
    {
      id: "TKT-003",
      description: "Account verification issue",
      createDate: "2024-03-13 09:15:00",
      status: "Waiting",
      reply: "Awaiting documents",
    },
    {
      id: "TKT-004",
      description: "Password reset request",
      createDate: "2024-03-12 16:45:00",
      status: "Closed",
      reply: "Password reset link sent to your email",
    },
  ];

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const pendingTickets = tickets.filter((t) => t.status === "Pending").length;
  const waitingTickets = tickets.filter((t) => t.status === "Waiting").length;
  const closedTickets = tickets.filter((t) => t.status === "Closed").length;
  const totalTickets = tickets.length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ticket submitted:", formData);
    // Handle ticket submission
    alert("Support ticket submitted successfully!");
    setFormData((prev) => ({ ...prev, description: "" }));
  };

  const handleReset = () => {
    setFormData({
      name: "mayank",
      email: "mayanksahu0024@gmail.com",
      description: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-[#E8F5F0] text-[#042B19]";
      case "Waiting":
        return "bg-[#DCFCE7] text-[#16a34a]";
      case "Closed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader 
        title="Support"
        subtitle="Get help from our support team"
      />

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Section - New Support Ticket Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#042B19" }}>
              New Support Ticket
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Need help? Fill out the form and our support team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                  style={{
                    borderColor: "#E5E7EB",
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                  style={{
                    borderColor: "#E5E7EB",
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your issue"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition resize-none"
                  style={{
                    borderColor: "#E5E7EB",
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#042B19" }}
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
                  style={{ backgroundColor: "#E8F5F0", color: "#042B19" }}
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - Total Tickets Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl shadow-lg p-6 text-white relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #16a34a, #042B19)" }}>
              {/* LIVE DATA Badge */}
              <div className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 transform rotate-12 translate-x-2 -translate-y-1" style={{ backgroundColor: "#16a34a" }}>
                LIVE DATA
              </div>
              
              <div className="flex flex-col items-center justify-center h-full">
                <Ticket className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-1">Total Tickets</h3>
                <p className="text-sm text-white/80 mb-4">Current month count</p>
                <p className="text-5xl font-bold">{totalTickets}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Open Ticket */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#DCFCE7" }}>
                <Mail className="w-6 h-6" style={{ color: "#16a34a" }} />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Open Ticket</p>
            <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
              {openTickets}
            </p>
          </div>

          {/* Pending Ticket */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
                <Clock className="w-6 h-6" style={{ color: "#16a34a" }} />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Pending Ticket</p>
            <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
              {pendingTickets}
            </p>
          </div>

          {/* Waiting Ticket */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F0" }}>
                <Loader className="w-6 h-6" style={{ color: "#16a34a" }} />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Waiting Ticket</p>
            <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
              {waitingTickets}
            </p>
          </div>

          {/* Closed Ticket */}
          <div className="bg-white rounded-xl shadow-sm border p-6" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#DCFCE7" }}>
                <CheckCircle className="w-6 h-6" style={{ color: "#16a34a" }} />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Closed Ticket</p>
            <p className="text-3xl font-bold" style={{ color: "#042B19" }}>
              {closedTickets}
            </p>
          </div>
        </div>

        {/* Support Ticket Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ color: "#042B19" }}>
                Support Ticket
              </h2>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Search:</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search tickets..."
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
            {filteredTickets.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase cursor-pointer" style={{ color: "#042B19" }}>
                      Ticket Id ↑↓
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase cursor-pointer" style={{ color: "#042B19" }}>
                      Description ↑↓
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase cursor-pointer" style={{ color: "#042B19" }}>
                      Create Date ↑↓
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase cursor-pointer" style={{ color: "#042B19" }}>
                      Status ↑↓
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase cursor-pointer" style={{ color: "#042B19" }}>
                      Reply ↑↓
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
                  {filteredTickets.map((ticket, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                        {ticket.id}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{ticket.description}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{ticket.createDate}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{ticket.reply}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#E8F5F0" }}>
                  <Ticket className="w-12 h-12" style={{ color: "#042B19" }} />
                </div>
                <p className="text-lg font-bold mb-2" style={{ color: "#042B19" }}>
                  No data available in table
                </p>
                <p className="text-sm text-gray-600">No support tickets found.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="p-4 border-t flex items-center justify-between" style={{ borderColor: "#E5E7EB" }}>
            <p className="text-sm text-gray-600">
              Showing {filteredTickets.length > 0 ? 1 : 0} to {filteredTickets.length} of {filteredTickets.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded border text-sm hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={filteredTickets.length === 0} style={{ borderColor: "#E5E7EB", color: "#042B19" }}>
                <ChevronLeft className="w-4 h-4 inline" />
                Previous
              </button>
              <button className="px-4 py-2 rounded border text-sm hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={filteredTickets.length === 0} style={{ borderColor: "#E5E7EB", color: "#042B19" }}>
                Next
                <ChevronRight className="w-4 h-4 inline" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
