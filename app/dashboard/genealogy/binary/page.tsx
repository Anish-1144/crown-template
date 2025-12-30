"use client";

import { useState } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function BinaryGenealogyPage() {
  const [activeTab, setActiveTab] = useState("tree");

  // Mock data for binary tree
  const binaryTreeData = {
    id: "CROWN-108470",
    name: "Andrew",
    left: {
      id: "CROWN-108471",
      name: "John Doe",
      left: {
        id: "CROWN-108472",
        name: "Alice Smith",
        left: null,
        right: null,
      },
      right: {
        id: "CROWN-108473",
        name: "Bob Johnson",
        left: null,
        right: null,
      },
    },
    right: {
      id: "CROWN-108474",
      name: "Jane Williams",
      left: {
        id: "CROWN-108475",
        name: "Charlie Brown",
        left: null,
        right: null,
      },
      right: {
        id: "CROWN-108476",
        name: "Diana Prince",
        left: null,
        right: null,
      },
    },
  };

  // Mock data for left members table
  const leftMembers = [
    {
      id: "CROWN-108471",
      name: "John Doe",
      level: 1,
      investment: "$5,000.00",
      totalBusiness: "$15,000.00",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: "CROWN-108472",
      name: "Alice Smith",
      level: 2,
      investment: "$2,500.00",
      totalBusiness: "$8,000.00",
      status: "Active",
      joinDate: "2024-02-20",
    },
    {
      id: "CROWN-108473",
      name: "Bob Johnson",
      level: 2,
      investment: "$3,000.00",
      totalBusiness: "$7,000.00",
      status: "Active",
      joinDate: "2024-02-25",
    },
  ];

  // Mock data for right members table
  const rightMembers = [
    {
      id: "CROWN-108474",
      name: "Jane Williams",
      level: 1,
      investment: "$6,000.00",
      totalBusiness: "$18,000.00",
      status: "Active",
      joinDate: "2024-01-20",
    },
    {
      id: "CROWN-108475",
      name: "Charlie Brown",
      level: 2,
      investment: "$4,000.00",
      totalBusiness: "$10,000.00",
      status: "Active",
      joinDate: "2024-03-01",
    },
    {
      id: "CROWN-108476",
      name: "Diana Prince",
      level: 2,
      investment: "$3,500.00",
      totalBusiness: "$9,500.00",
      status: "Active",
      joinDate: "2024-03-05",
    },
  ];

  // Mock data for investment flow
  const investmentFlow = [
    {
      from: "CROWN-108471",
      fromName: "John Doe",
      to: "CROWN-108470",
      toName: "Andrew",
      amount: "$500.00",
      type: "Binary Bonus",
      date: "2024-03-15 10:30:00",
    },
    {
      from: "CROWN-108474",
      fromName: "Jane Williams",
      to: "CROWN-108470",
      toName: "Andrew",
      amount: "$600.00",
      type: "Binary Bonus",
      date: "2024-03-15 11:15:00",
    },
    {
      from: "CROWN-108472",
      fromName: "Alice Smith",
      to: "CROWN-108471",
      toName: "John Doe",
      amount: "$250.00",
      type: "Binary Bonus",
      date: "2024-03-14 14:20:00",
    },
  ];

  // Calculate totals
  const leftTotal = leftMembers.reduce(
    (sum, member) =>
      sum + parseFloat(member.totalBusiness.replace("$", "").replace(",", "")),
    0
  );
  const rightTotal = rightMembers.reduce(
    (sum, member) =>
      sum + parseFloat(member.totalBusiness.replace("$", "").replace(",", "")),
    0
  );
  const lesserLeg = Math.min(leftTotal, rightTotal);

  // Binary Tree Node Component
  const TreeNode = ({ node, level = 0 }: { node: any; level?: number }) => {
    if (!node) return null;

    return (
      <div className="flex flex-col items-center">
        <div
          className="bg-white border-2 rounded-lg p-3 shadow-md min-w-[140px] text-center"
          style={{
            borderColor: level === 0 ? "#042B19" : "#16a34a",
            borderWidth: level === 0 ? "2px" : "1px",
          }}
        >
          <p
            className="text-xs font-semibold mb-1"
            style={{ color: "#042B19" }}
          >
            {node.name}
          </p>
          <p className="text-xs text-gray-500">{node.id}</p>
        </div>
        {(node.left || node.right) && (
          <div className="flex gap-8 mt-4">
            {node.left && (
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-300"></div>
                <TreeNode node={node.left} level={level + 1} />
              </div>
            )}
            {node.right && (
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-300"></div>
                <TreeNode node={node.right} level={level + 1} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const tabs = [
    { id: "tree", label: "Binary Tree" },
    { id: "left", label: "Left Members" },
    { id: "right", label: "Right Members" },
    { id: "flow", label: "Investment Flow" },
  ];

  return (
    <div>
      {/* Header */}
      <header
        className="bg-white shadow-sm border-b"
        style={{ borderColor: "#E5E7EB" }}
      >
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#042B19" }}>
            Binary Genealogy
          </h1>
          <p className="text-sm text-gray-600">
            View your binary network structure and member details
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Tabs */}
        <div
          className="bg-white rounded-xl shadow-sm border mb-6"
          style={{ borderColor: "#E5E7EB" }}
        >
          <div className="flex border-b" style={{ borderColor: "#E5E7EB" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-sm font-semibold transition ${
                  activeTab === tab.id ? "border-b-2" : "hover:bg-gray-50"
                }`}
                style={{
                  borderBottomColor:
                    activeTab === tab.id ? "#042B19" : "transparent",
                  color: activeTab === tab.id ? "#042B19" : "#6B7280",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Binary Tree Tab */}
          {activeTab === "tree" && (
            <div
              className="bg-white rounded-xl shadow-sm p-6 border"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="mb-6">
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#042B19" }}
                >
                  Binary Tree Structure
                </h2>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <ArrowLeft
                      className="w-4 h-4"
                      style={{ color: "#3b82f6" }}
                    />
                    <span className="text-gray-600">
                      Left Business: ${leftTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight
                      className="w-4 h-4"
                      style={{ color: "#16a34a" }}
                    />
                    <span className="text-gray-600">
                      Right Business: ${rightTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign
                      className="w-4 h-4"
                      style={{ color: "#eab308" }}
                    />
                    <span
                      className="font-semibold"
                      style={{ color: "#042B19" }}
                    >
                      Lesser Leg: ${lesserLeg.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto pb-6">
                <div className="flex justify-center min-w-max">
                  <TreeNode node={binaryTreeData} />
                </div>
              </div>
            </div>
          )}

          {/* Left Members Tab */}
          {activeTab === "left" && (
            <div
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowLeft className="w-5 h-5" style={{ color: "#3b82f6" }} />
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: "#042B19" }}
                  >
                    Left Members
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Total Left Business:{" "}
                  <span className="font-semibold">${leftTotal.toFixed(2)}</span>
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: "#F9FAFB" }}>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        ID
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Name
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Level
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Investment
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Total Business
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Status
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Join Date
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    {leftMembers.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td
                          className="px-4 py-3 text-sm font-medium"
                          style={{ color: "#042B19" }}
                        >
                          {member.id}
                        </td>
                        <td
                          className="px-4 py-3 text-sm"
                          style={{ color: "#042B19" }}
                        >
                          {member.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {member.level}
                        </td>
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ color: "#16a34a" }}
                        >
                          {member.investment}
                        </td>
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ color: "#042B19" }}
                        >
                          {member.totalBusiness}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-block px-2 py-1 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: "#DCFCE7",
                              color: "#16a34a",
                            }}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {member.joinDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Right Members Tab */}
          {activeTab === "right" && (
            <div
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight
                    className="w-5 h-5"
                    style={{ color: "#16a34a" }}
                  />
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: "#042B19" }}
                  >
                    Right Members
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Total Right Business:{" "}
                  <span className="font-semibold">
                    ${rightTotal.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: "#F9FAFB" }}>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        ID
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Name
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Level
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Investment
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Total Business
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Status
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Join Date
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    {rightMembers.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td
                          className="px-4 py-3 text-sm font-medium"
                          style={{ color: "#042B19" }}
                        >
                          {member.id}
                        </td>
                        <td
                          className="px-4 py-3 text-sm"
                          style={{ color: "#042B19" }}
                        >
                          {member.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {member.level}
                        </td>
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ color: "#16a34a" }}
                        >
                          {member.investment}
                        </td>
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ color: "#042B19" }}
                        >
                          {member.totalBusiness}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-block px-2 py-1 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: "#DCFCE7",
                              color: "#16a34a",
                            }}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {member.joinDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Investment Flow Tab */}
          {activeTab === "flow" && (
            <div
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="p-6 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp
                    className="w-5 h-5"
                    style={{ color: "#16a34a" }}
                  />
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: "#042B19" }}
                  >
                    Investment Flow
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Track binary bonus and investment flows in your network
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: "#F9FAFB" }}>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        From
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        To
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Amount
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Type
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-semibold uppercase"
                        style={{ color: "#042B19" }}
                      >
                        Date & Time
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    {investmentFlow.map((flow, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3">
                          <div>
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#042B19" }}
                            >
                              {flow.fromName}
                            </p>
                            <p className="text-xs text-gray-500">{flow.from}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p
                              className="text-sm font-medium"
                              style={{ color: "#042B19" }}
                            >
                              {flow.toName}
                            </p>
                            <p className="text-xs text-gray-500">{flow.to}</p>
                          </div>
                        </td>
                        <td
                          className="px-4 py-3 text-sm font-semibold"
                          style={{ color: "#16a34a" }}
                        >
                          {flow.amount}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-block px-2 py-1 rounded text-xs font-semibold"
                            style={{
                              backgroundColor: "#E8F5F0",
                              color: "#042B19",
                            }}
                          >
                            {flow.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {flow.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
