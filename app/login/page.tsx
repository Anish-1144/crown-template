"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
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
              Invest Smarter.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Grow Faster.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Build Wealth.
            </h2>
            <p className="text-lg lg:text-xl text-white opacity-90 max-w-md mt-8 leading-relaxed">
              From renewable energy investments to sustainable returns, our platform lets you manage your portfolio seamlessly across devices.
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

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
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

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "#042B19" }}>
              Welcome Back!
            </h1>
            <p className="text-gray-600 mb-8">
              Log in to start managing your investments with ease.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email or Username */}
              <div>
                <label
                  htmlFor="emailOrUsername"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#042B19" }}
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  value={formData.emailOrUsername}
                  onChange={handleChange}
                  placeholder="Input your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                  style={{
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold mb-2"
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
                    placeholder="Input your password"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300"
                    style={{ accentColor: "#042B19" }}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium transition hover:opacity-70"
                  style={{ color: "#042B19" }}
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-white font-semibold text-base rounded-lg transition hover:opacity-90"
                style={{
                  backgroundColor: "#042B19",
                }}
              >
                Login
              </button>

              {/* Register Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold transition hover:opacity-70"
                    style={{ color: "#042B19" }}
                  >
                    Sign up here
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


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
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
              Invest Smarter.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Grow Faster.
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Build Wealth.
            </h2>
            <p className="text-lg lg:text-xl text-white opacity-90 max-w-md mt-8 leading-relaxed">
              From renewable energy investments to sustainable returns, our platform lets you manage your portfolio seamlessly across devices.
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

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
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

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "#042B19" }}>
              Welcome Back!
            </h1>
            <p className="text-gray-600 mb-8">
              Log in to start managing your investments with ease.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email or Username */}
              <div>
                <label
                  htmlFor="emailOrUsername"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#042B19" }}
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  value={formData.emailOrUsername}
                  onChange={handleChange}
                  placeholder="Input your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                  style={{
                    color: "#042B19",
                    focusRingColor: "#042B19",
                  }}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold mb-2"
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
                    placeholder="Input your password"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-offset-0 transition"
                    style={{
                      color: "#042B19",
                      focusRingColor: "#042B19",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300"
                    style={{ accentColor: "#042B19" }}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium transition hover:opacity-70"
                  style={{ color: "#042B19" }}
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-white font-semibold text-base rounded-lg transition hover:opacity-90"
                style={{
                  backgroundColor: "#042B19",
                }}
              >
                Login
              </button>

              {/* Register Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold transition hover:opacity-70"
                    style={{ color: "#042B19" }}
                  >
                    Sign up here
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

