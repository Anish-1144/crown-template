"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { ArrowLeft, Save, Camera, User, Mail, Phone, MapPin, Calendar, CheckCircle2, AlertCircle } from "lucide-react";

export default function EditProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "Andrew",
    username: "CNB3298618",
    email: "andrew@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    dateOfBirth: "1990-01-01",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSaving(true);
    setErrors({});
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setShowSuccess(true);
    
    // Redirect after showing success message
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader title="Edit Profile" subtitle="Update your personal information" />
      
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-gray-600 hover:text-[#042B19]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back</span>
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2"
              style={{ backgroundColor: "#D1FAE5", borderColor: "#10B981" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#10B981" }} />
              <div>
                <p className="font-semibold" style={{ color: "#065F46" }}>Profile Updated Successfully!</p>
                <p className="text-sm" style={{ color: "#047857" }}>Redirecting to dashboard...</p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Profile Picture Section */}
            <div 
              className="flex flex-col items-center py-8 px-6 border-b"
              style={{ 
                borderColor: "#E5E7EB",
                background: "linear-gradient(135deg, rgba(4, 43, 25, 0.02) 0%, rgba(22, 163, 74, 0.02) 100%)"
              }}
            >
              <div className="relative mb-4 group">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#042B19] to-[#16a34a] flex items-center justify-center shadow-xl ring-4 ring-white">
                  <span className="text-5xl font-bold text-white">A</span>
                </div>
                <button
                  type="button"
                  className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group-hover:border-[#16a34a]"
                  style={{ borderColor: "#042B19" }}
                >
                  <Camera className="w-5 h-5 transition-colors" style={{ color: "#042B19" }} />
                </button>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1" style={{ color: "#042B19" }}>
                  {formData.fullName}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-2">{formData.username}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }}></div>
                  Active Account
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#D1FAE5" }}>
                    <User className="w-5 h-5" style={{ color: "#042B19" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#042B19" }}>
                    Personal Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.fullName ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.fullName ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none transition cursor-not-allowed"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#6B7280",
                        }}
                        disabled
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Username cannot be changed
                    </p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.email ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.email ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.phone ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.phone ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      <Calendar className="w-4 h-4" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#042B19",
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#D1FAE5" }}>
                    <MapPin className="w-5 h-5" style={{ color: "#042B19" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#042B19" }}>
                    Address Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: "#042B19" }}>
                      <MapPin className="w-4 h-4" />
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.address ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.address ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.address && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "#042B19" }}>
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.city ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.city ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.city && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "#042B19" }}>
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.state ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.state ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.state && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "#042B19" }}>
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition ${
                        errors.zipCode ? "border-red-300" : ""
                      }`}
                      style={{
                        borderColor: errors.zipCode ? "#FCA5A5" : "#E5E7EB",
                        color: "#042B19",
                      }}
                    />
                    {errors.zipCode && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.zipCode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "#042B19" }}>
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042B19] focus:ring-offset-0 transition bg-white"
                      style={{
                        borderColor: "#E5E7EB",
                        color: "#042B19",
                      }}
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                className="flex items-center justify-end gap-4 pt-8 mt-8 border-t"
                style={{ borderColor: "#E5E7EB" }}
              >
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-8 py-3 border-2 rounded-xl font-semibold transition hover:bg-gray-50 hover:shadow-sm"
                  style={{
                    borderColor: "#E5E7EB",
                    color: "#042B19",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-8 py-3 rounded-xl font-semibold text-white transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: "#042B19" }}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

