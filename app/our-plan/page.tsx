"use client";

import { useState } from "react";
import Link from "next/link";
import { DollarSign, Users, Network } from "lucide-react";
import Footer from "@/components/Footer";

export default function OurPlanPage() {
  const [investmentAmount, setInvestmentAmount] = useState<string>("435");
  const [calculatedResults, setCalculatedResults] = useState<any>(null);

  const investmentPlans = [
    {
      id: 1,
      name: "Solar Starter",
      minAmount: "$25",
      maxAmount: "$4,999",
      roi: "1.65%",
      bondDays: "200 Days",
      referral: "9%",
      binary: "10%",
      binaryCapping: "$2,000",
      principalReturn: "100%",
    },
    {
      id: 2,
      name: "Power Growth",
      minAmount: "$5,000",
      maxAmount: "$49,999",
      roi: "2.3%",
      bondDays: "190 Days",
      referral: "10%",
      binary: "10%",
      binaryCapping: "$7,000",
      principalReturn: "100%",
    },
    {
      id: 3,
      name: "Elite Energy",
      minAmount: "$50,000",
      maxAmount: "and above",
      roi: "2.7%",
      bondDays: "180 Days",
      referral: "11%",
      binary: "10%",
      binaryCapping: "$20,000",
      principalReturn: "100%",
    },
  ];

  const calculateReturns = () => {
    const amount = parseFloat(investmentAmount);
    if (isNaN(amount) || amount < 25) {
      alert("Minimum investment amount is $25");
      return;
    }

    let selectedPlan;
    if (amount >= 50000) {
      selectedPlan = investmentPlans[2]; // Elite Energy
    } else if (amount >= 5000) {
      selectedPlan = investmentPlans[1]; // Power Growth
    } else {
      selectedPlan = investmentPlans[0]; // Solar Starter
    }

    const dailyROI = parseFloat(selectedPlan.roi);
    const bondDays = parseInt(selectedPlan.bondDays);
    const dailyReturn = (amount * dailyROI) / 100;
    const roiProfit = dailyReturn * bondDays;
    const principalAmount = amount;
    const totalReturn = roiProfit + principalAmount;

    setCalculatedResults({
      plan: selectedPlan.name,
      dailyROI: selectedPlan.roi,
      bondDays: selectedPlan.bondDays,
      principalReturn: selectedPlan.principalReturn,
      dailyReturn: dailyReturn.toFixed(3),
      roiProfit: roiProfit.toFixed(2),
      principalAmount: principalAmount.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
    });
  };

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{ paddingTop: "156px" }}
    >
      {/* Hero Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#042B19" }}></div>
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: "#042B19" }}
              >
                OUR PLAN
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Investment Packages and Return
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Explore our official plans designed for maximum growth and
              sustainable returns based on your investment capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {investmentPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white p-8 md:p-10 border-2 transition-all hover:shadow-xl"
                  style={{ borderColor: "#042B19" }}
                >
                  {/* Plan Name */}
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4 text-center"
                    style={{ color: "#042B19" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Investment Range */}
                  <div className="text-center mb-6">
                    <p
                      className="text-lg md:text-xl font-semibold"
                      style={{ color: "#042B19" }}
                    >
                      {plan.minAmount} to {plan.maxAmount}
                    </p>
                  </div>

                  {/* Plan Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        ROI %
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.roi} Daily
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        Bond Days
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.bondDays}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        Referral %
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.referral}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        Binary %
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.binary}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        Binary Capping
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.binaryCapping}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "#042B19" }}
                      >
                        Principal Return
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {plan.principalReturn}
                      </span>
                    </div>
                  </div>

                  {/* Invest Now Button */}
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#ffcf0B] text-gray-900 font-bold px-6 py-4 text-sm md:text-base uppercase tracking-wide transition hover:opacity-90"
                    style={{ borderRadius: "0" }}
                  >
                    Invest Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
              style={{ color: "#042B19" }}
            >
              Investment Calculator
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 shadow-lg">
              {/* Input Section */}
              <div className="mb-8">
                <label
                  className="block text-base md:text-lg font-semibold mb-3"
                  style={{ color: "#042B19" }}
                >
                  Amount ($25 minimum)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <DollarSign className="w-5 h-5" style={{ color: "#042B19" }} />
                  </div>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    min="25"
                    className="w-full pl-12 pr-4 py-4 border-2 text-lg font-semibold"
                    style={{
                      borderColor: "#042B19",
                      color: "#042B19",
                      backgroundColor: "#ffffff",
                      borderRadius: "0",
                    }}
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateReturns}
                className="w-full py-4 text-white font-bold text-base md:text-lg uppercase tracking-wide transition hover:opacity-90 mb-8"
                style={{
                  backgroundColor: "#042B19",
                  borderRadius: "0",
                }}
              >
                Calculate Returns
              </button>

              {/* Results Section */}
              {calculatedResults && (
                <div className="space-y-6">
                  {/* Plan Details */}
                  <div className="space-y-4 pb-6 border-b-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Applied Plan:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {calculatedResults.plan}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Daily ROI:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {calculatedResults.dailyROI}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Bond Period:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {calculatedResults.bondDays}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Principal Return:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        {calculatedResults.principalReturn}
                      </span>
                    </div>
                  </div>

                  {/* Financial Returns */}
                  <div className="space-y-4 pb-6 border-b-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Daily Return:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        ${calculatedResults.dailyReturn}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        ROI Profit (Total):
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        ${calculatedResults.roiProfit}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-base md:text-lg font-semibold"
                        style={{ color: "#042B19" }}
                      >
                        Principal Amount:
                      </span>
                      <span
                        className="text-base md:text-lg font-bold"
                        style={{ color: "#042B19" }}
                      >
                        ${calculatedResults.principalAmount}
                      </span>
                    </div>
                  </div>

                  {/* Total Return */}
                  <div className="flex justify-between items-center pt-4">
                    <span
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: "#042B19" }}
                    >
                      Total Return:
                    </span>
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "#042B19" }}
                    >
                      ${calculatedResults.totalReturn}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Income Opportunities Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-center"
              style={{ color: "#042B19" }}
            >
              Extra Income Opportunities at Crown Bankers
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Referral Bonus */}
              <div className="bg-[#E8F5F0] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#042B19" }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: "#042B19" }}
                  >
                    Referral Bonus
                  </h3>
                </div>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  At Crown Bankers, we value the power of community and shared
                  success. Our Referral Bonus program is designed to reward
                  your efforts in bringing new investors into our network.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed mt-4"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  By referring others, you not only help them unlock financial
                  growth but also earn a bonus of 7% to 9% as a thank-you for
                  growing our investment family. Together, we can achieve more!
                </p>
              </div>

              {/* Binary Bonus */}
              <div className="bg-[#E8F5F0] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#042B19" }}
                  >
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: "#042B19" }}
                  >
                    Binary Bonus
                  </h3>
                </div>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: "#042B19",
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  The Binary Bonus at Crown Bankers is a rewarding incentive
                  designed for members who introduce new investors to our
                  investment ecosystem. Earnings are calculated based on the
                  lesser leg&apos;s total investment.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                    <span
                      className="text-sm md:text-base font-medium"
                      style={{ color: "#042B19" }}
                    >
                      Left business volume:
                    </span>
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{ color: "#042B19" }}
                    >
                      $2,800
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                    <span
                      className="text-sm md:text-base font-medium"
                      style={{ color: "#042B19" }}
                    >
                      Right business volume:
                    </span>
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{ color: "#042B19" }}
                    >
                      $4,650
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "#042B19", opacity: 0.2 }}>
                    <span
                      className="text-sm md:text-base font-medium"
                      style={{ color: "#042B19" }}
                    >
                      Binary bonus (10%):
                    </span>
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{ color: "#042B19" }}
                    >
                      $280
                    </span>
                  </div>
                </div>
                <p
                  className="text-sm md:text-base mt-4 italic"
                  style={{
                    color: "#042B19",
                    opacity: 0.8,
                    fontFamily: "var(--font-font4), sans-serif",
                  }}
                >
                  The binary bonus is calculated based on the lesser leg
                  ($2,800). Assuming a 10% binary bonus rate, the bonus earned
                  would be $280.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-center"
              style={{ color: "#042B19" }}
            >
              Crown Bankers Roadmap (2022 – 2028)
            </h2>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div
                className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: "#042B19", opacity: 0.2 }}
              ></div>

              <div className="space-y-12 md:space-y-16">
                {/* 2022 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2022
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      A Dream Takes Shape
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Conceptualized Crown Bankers as a bridge between renewable
                      energy and financial solutions. Built the foundation for a
                      global platform focused on sustainable finance.
                    </p>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2023
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      Laying the Foundation
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Registered our website domain. Broke ground on our first
                      solar plant, marking our entry into the renewable energy
                      sector and global expansion.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2024
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      A Year of Transformation
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Completed first solar plant. Registered in New Zealand and
                      the UK. Opened new corporate office and launching the mobile
                      app soon.
                    </p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2025
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      Global Expansion & Second Solar Plant
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Opened second plant in Groningen, Netherlands. Expanding
                      registrations to additional countries and hosting global
                      events.
                    </p>
                  </div>
                </div>

                {/* 2026 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2026
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      Pioneering the Future
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Begin manufacturing EV and solar components. Expansion to
                      over 30 countries and AI-driven efficiency solutions.
                    </p>
                  </div>
                </div>

                {/* 2027 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#E8F5F0" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#042B19" }}
                        >
                          2027
                        </div>
                      </div>
                      <div
                        className="hidden md:block w-8 h-0.5"
                        style={{ backgroundColor: "#042B19" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      Smart Technology & Clean Mobility
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Deploy AI-powered energy tracking. Launch EV Charging
                      Stations and expand into autonomous driving tech.
                    </p>
                  </div>
                </div>

                {/* 2028 */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 flex items-start">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: "#042B19" }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-bold"
                          style={{ color: "#ffffff" }}
                        >
                          2028
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#E8F5F0] p-6 md:p-8 rounded-lg border-2"
                    style={{ borderColor: "#042B19" }}
                  >
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                      style={{ color: "#042B19" }}
                    >
                      Global Leader in Sustainable Finance & Energy
                    </h3>
                    <p
                      className="text-base md:text-lg lg:text-xl leading-relaxed"
                      style={{
                        color: "#042B19",
                        fontFamily: "var(--font-font4), sans-serif",
                      }}
                    >
                      Operate 100+ solar plants worldwide. Fully integrated
                      smart grids and financial technology innovation leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative w-full bg-[#E8F5F0] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              Choose the plan that fits your investment goals
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed mb-8"
              style={{
                color: "#042B19",
                fontFamily: "var(--font-font4), sans-serif",
              }}
            >
              All our investment plans are designed to provide sustainable
              returns while supporting renewable energy projects. Start your
              investment journey with Crown Bankers today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#ffcf0B] text-gray-900 font-bold px-8 lg:px-12 py-4 lg:py-5 text-sm md:text-base uppercase tracking-wide transition hover:opacity-90"
              style={{ borderRadius: "0" }}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
