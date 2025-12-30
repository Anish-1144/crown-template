"use client";

import { useState } from "react";
import { Users, Search, Filter, DollarSign, TrendingUp } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DirectGenealogyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for direct referrals
  const directMembers = [
    {
      id: "CROWN-108471",
      name: "John Doe",
      level: 1,
      investment: "$5,000.00",
      totalBusiness: "$15,000.00",
      directReferrals: 3,
      status: "Active",
      joinDate: "2024-01-15",
      package: "Power Growth",
    },
    {
      id: "CROWN-108474",
      name: "Jane Williams",
      level: 1,
      investment: "$6,000.00",
      totalBusiness: "$18,000.00",
      directReferrals: 4,
      status: "Active",
      joinDate: "2024-01-20",
      package: "Elite Energy",
    },
    {
      id: "CROWN-108472",
      name: "Alice Smith",
      level: 2,
      investment: "$2,500.00",
      totalBusiness: "$8,000.00",
      directReferrals: 2,
      status: "Active",
      joinDate: "2024-02-20",
      package: "Solar Starter",
    },
    {
      id: "CROWN-108473",
      name: "Bob Johnson",
      level: 2,
      investment: "$3,000.00",
      totalBusiness: "$7,000.00",
      directReferrals: 1,
      status: "Active",
      joinDate: "2024-02-25",
      package: "Power Growth",
    },
    {
      id: "CROWN-108475",
      name: "Charlie Brown",
      level: 2,
      investment: "$4,000.00",
      totalBusiness: "$10,000.00",
      directReferrals: 3,
      status: "Active",
      joinDate: "2024-03-01",
      package: "Elite Energy",
    },
  ];

  const filteredMembers = directMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader 
        title="Direct Genealogy"
        subtitle="View your direct referrals and their network details"
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                style={{
                  borderColor: "#E5E7EB",
                  color: "#042B19",
                  focusRingColor: "#042B19",
                }}
              />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
              style={{ borderColor: "#E5E7EB", color: "#042B19" }}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5" style={{ color: "#042B19" }} />
              <p className="text-sm font-medium text-gray-600">Total Direct</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              {directMembers.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5" style={{ color: "#16a34a" }} />
              <p className="text-sm font-medium text-gray-600">Total Investment</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${directMembers.reduce((sum, m) => sum + parseFloat(m.investment.replace("$", "").replace(",", "")), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5" style={{ color: "#3b82f6" }} />
              <p className="text-sm font-medium text-gray-600">Total Business</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${directMembers.reduce((sum, m) => sum + parseFloat(m.totalBusiness.replace("$", "").replace(",", "")), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5" style={{ color: "#eab308" }} />
              <p className="text-sm font-medium text-gray-600">Active Members</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              {directMembers.filter(m => m.status === "Active").length}
            </p>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
              Direct Referrals
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Level
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Investment
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Total Business
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Direct Referrals
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Package
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
                {filteredMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                      {member.id}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                      {member.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.level}</td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                      {member.investment}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
                      {member.totalBusiness}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
                      {member.directReferrals}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#ffcf0B", color: "#042B19" }}>
                        {member.package}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#DCFCE7", color: "#16a34a" }}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.joinDate}</td>
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


import { useState } from "react";
import { Users, Search, Filter, DollarSign, TrendingUp } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DirectGenealogyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for direct referrals
  const directMembers = [
    {
      id: "CROWN-108471",
      name: "John Doe",
      level: 1,
      investment: "$5,000.00",
      totalBusiness: "$15,000.00",
      directReferrals: 3,
      status: "Active",
      joinDate: "2024-01-15",
      package: "Power Growth",
    },
    {
      id: "CROWN-108474",
      name: "Jane Williams",
      level: 1,
      investment: "$6,000.00",
      totalBusiness: "$18,000.00",
      directReferrals: 4,
      status: "Active",
      joinDate: "2024-01-20",
      package: "Elite Energy",
    },
    {
      id: "CROWN-108472",
      name: "Alice Smith",
      level: 2,
      investment: "$2,500.00",
      totalBusiness: "$8,000.00",
      directReferrals: 2,
      status: "Active",
      joinDate: "2024-02-20",
      package: "Solar Starter",
    },
    {
      id: "CROWN-108473",
      name: "Bob Johnson",
      level: 2,
      investment: "$3,000.00",
      totalBusiness: "$7,000.00",
      directReferrals: 1,
      status: "Active",
      joinDate: "2024-02-25",
      package: "Power Growth",
    },
    {
      id: "CROWN-108475",
      name: "Charlie Brown",
      level: 2,
      investment: "$4,000.00",
      totalBusiness: "$10,000.00",
      directReferrals: 3,
      status: "Active",
      joinDate: "2024-03-01",
      package: "Elite Energy",
    },
  ];

  const filteredMembers = directMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader 
        title="Direct Genealogy"
        subtitle="View your direct referrals and their network details"
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 border mb-6" style={{ borderColor: "#E5E7EB" }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                style={{
                  borderColor: "#E5E7EB",
                  color: "#042B19",
                  focusRingColor: "#042B19",
                }}
              />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
              style={{ borderColor: "#E5E7EB", color: "#042B19" }}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5" style={{ color: "#042B19" }} />
              <p className="text-sm font-medium text-gray-600">Total Direct</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              {directMembers.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5" style={{ color: "#16a34a" }} />
              <p className="text-sm font-medium text-gray-600">Total Investment</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${directMembers.reduce((sum, m) => sum + parseFloat(m.investment.replace("$", "").replace(",", "")), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5" style={{ color: "#3b82f6" }} />
              <p className="text-sm font-medium text-gray-600">Total Business</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              ${directMembers.reduce((sum, m) => sum + parseFloat(m.totalBusiness.replace("$", "").replace(",", "")), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5" style={{ color: "#eab308" }} />
              <p className="text-sm font-medium text-gray-600">Active Members</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: "#042B19" }}>
              {directMembers.filter(m => m.status === "Active").length}
            </p>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
          <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            <h2 className="text-xl font-semibold" style={{ color: "#042B19" }}>
              Direct Referrals
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Level
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Investment
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Total Business
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Direct Referrals
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Package
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase" style={{ color: "#042B19" }}>
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "#E5E7EB" }}>
                {filteredMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium" style={{ color: "#042B19" }}>
                      {member.id}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#042B19" }}>
                      {member.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.level}</td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#16a34a" }}>
                      {member.investment}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
                      {member.totalBusiness}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#042B19" }}>
                      {member.directReferrals}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#ffcf0B", color: "#042B19" }}>
                        {member.package}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#DCFCE7", color: "#16a34a" }}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.joinDate}</td>
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

