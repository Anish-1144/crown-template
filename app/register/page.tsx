"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    hasSponsor: "",
    fullName: "",
    email: "",
    country: "",
    state: "",
    mobileNumber: "",
    countryCode: "+1",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "New Zealand",
    "Netherlands",
    "Germany",
    "France",
    "India",
    "Other",
  ];

  const states = [
    "California",
    "New York",
    "Texas",
    "Florida",
    "Illinois",
    "Other",
  ];

  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "AU" },
    { code: "+64", country: "NZ" },
    { code: "+31", country: "NL" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+91", country: "IN" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to Privacy Policy & Terms");
      return;
    }
    // Handle registration logic here
    console.log("Registration submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <main className="min-h-screen w-full flex">
      {/* Left Section - Branding with Green Background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: "#042B19" }}>
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-gas.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(4, 43, 25, 0.9) 0%, rgba(22, 163, 74, 0.3) 100%)",
        }}></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-8 lg:p-12 h-full">
          {/* Top - Logo and Back Link */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center transition group-hover:opacity-80 shadow-lg p-3" style={{ backgroundColor: "#ffffff" }}>
                <Image
                  src="/image.png"
                  alt="Crown Bankers Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-white">Crown Bankers</span>
            </Link>
            <Link
              href="/"
              className="text-white text-sm opacity-80 hover:opacity-100 transition inline-flex items-center gap-2"
            >
              ← Back to Website
            </Link>
          </div>

          {/* Middle - Tagline */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Start Your Journey.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Build Your Future.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Grow Together.
            </h2>
            <p className="text-lg lg:text-xl text-white opacity-90 max-w-md mt-8 leading-relaxed">
              Join thousands of investors building sustainable wealth through renewable energy investments and smart financial solutions.
            </p>
          </div>

          {/* Bottom - Pagination Dots */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-6 text-center">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg p-2 bg-white">
                <Image
                  src="/image.png"
                  alt="Crown Bankers Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold" style={{ color: "#042B19" }}>Crown Bankers</span>
            </Link>
          </div>

          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: "#042B19" }}>
              Create Account
            </h1>
            <p className="text-gray-600 mb-4 text-sm">
              Sign up to start your investment journey today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Sponsor Question */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Do you have a Sponsor?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasSponsor"
                      value="yes"
                      checked={formData.hasSponsor === "yes"}
                      onChange={handleChange}
                      className="w-3.5 h-3.5 mr-1.5"
                      style={{ accentColor: "#042B19" }}
                    />
                    <span className="text-xs text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasSponsor"
                      value="no"
                      checked={formData.hasSponsor === "no"}
                      onChange={handleChange}
                      className="w-3.5 h-3.5 mr-1.5"
                      style={{ accentColor: "#042B19" }}
                    />
                    <span className="text-xs text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                  style={{
                    color: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                  style={{
                    color: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Country and State */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: "#042B19" }}
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                      backgroundColor: "#ffffff",
                    }}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: "#042B19" }}
                  >
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                      backgroundColor: "#ffffff",
                    }}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-2 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter a mobile"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                    }}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "#042B19" }}
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-3.5 h-3.5 mr-2 mt-0.5 rounded border-gray-300"
                  style={{ accentColor: "#042B19" }}
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-xs text-gray-600"
                >
                  I agree to{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:opacity-70"
                    style={{ color: "#042B19" }}
                  >
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link
                    href="/terms"
                    className="underline hover:opacity-70"
                    style={{ color: "#042B19" }}
                  >
                    Terms
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 text-white font-semibold text-sm rounded-lg transition hover:opacity-90"
                style={{
                  backgroundColor: "#042B19",
                }}
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center pt-1">
                <p className="text-xs text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold transition hover:opacity-70"
                    style={{ color: "#042B19" }}
                  >
                    Sign in instead
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}