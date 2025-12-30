"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    {
      name: "Energy Technologies",
      items: [
        { label: "Natural Gas", href: "/energy-technologies/natural-gas" },
        { label: "Solar", href: "/energy-technologies/solar" },
        { label: "Storage", href: "/energy-technologies/storage" },
        { label: "Land-based Wind", href: "/energy-technologies/wind" },
        { label: "Transmission", href: "/energy-technologies/transmission" },
        { label: "Geothermal", href: "/energy-technologies/geothermal" },
      ],
    },
    {
      name: "Who We Are",
      items: [
        { label: "About Us", href: "/who-we-are/about" },
        { label: "Leadership", href: "/who-we-are/leadership" },
      ],
    },
    {
      name: "Our Plan",
      href: "/our-plan",
    },
    {
      name: "Download",
      href: "/download",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  // Hide navbar on login, register, and dashboard pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname?.startsWith("/dashboard")
  ) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* White Top Section */}
      <div
        className={`bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "-translate-y-full opacity-0 pointer-events-none h-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ height: isScrolled ? "0" : "100px" }}
      >
        <div
          className="container mx-auto px-4 lg:px-8"
          style={{ height: "100px" }}
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/image.png"
                alt="Crown Bankers Logo"
                className="object-contain"
                style={{ height: "84px" }}
              />
            </Link>

            {/* Right Side Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Phone Number */}
              <a
                href="tel:+447452321010"
                className="flex items-center gap-2 text-xs font-bold transition hover:opacity-70"
                style={{ color: "#042B19" }}
              >
                <Phone className="w-4 h-4" />
                +44 7452321010
              </a>

              {/* Email */}
              <a
                href="mailto:info@crownbanker.com"
                className="flex items-center gap-2 text-xs font-bold transition hover:opacity-70"
                style={{ color: "#042B19" }}
              >
                <Mail className="w-4 h-4" />
                crownbanker.com
              </a>

              {/* Login Button */}
              <Link
                href="/login"
                className="text-gray-900 font-bold px-6 lg:px-8 transition hover:opacity-90 flex items-center justify-center text-xs"
                style={{
                  backgroundColor: "#ffcf0B",
                  height: "44px",
                  borderRadius: "0",
                  minWidth: "140px",
                }}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Green Bottom Section */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled ? "mt-0" : "mt-0"
        }`}
        style={{ backgroundColor: "#042B19", height: "56px" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            className="flex items-center justify-between w-full"
            style={{ height: "56px" }}
          >
            {navLinks.map((link, index) => {
              const isOpen = openDropdown === link.name;
              // If link has href, it's a direct link (no dropdown)
              if (link.href) {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm font-medium transition whitespace-nowrap block text-white hover:text-yellow-400 flex-1 text-center"
                  >
                    {link.name}
                  </Link>
                );
              }
              // Otherwise, it has items (dropdown)
              return (
                <div
                  key={index}
                  className="relative flex-1 text-center"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                    setOpenDropdown(link.name);
                  }}
                  onMouseLeave={() => {
                    // Add a small delay before closing to allow mouse to move to dropdown
                    closeTimeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 150);
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                      setOpenDropdown(isOpen ? null : link.name);
                    }}
                    className={`text-sm font-medium transition whitespace-nowrap block ${
                      isOpen
                        ? "text-[#ffcf0B]"
                        : "text-white hover:text-yellow-400"
                    }`}
                    style={
                      isOpen
                        ? {
                            borderBottom: "2px solid #ffcf0B",
                            paddingBottom: "2px",
                          }
                        : {}
                    }
                  >
                    {link.name}
                  </button>
                  {isOpen && link.items && (
                    <div
                      className="fixed left-0 right-0 w-full bg-white shadow-lg z-50"
                      style={{
                        top: isScrolled ? "56px" : "156px",
                        paddingTop: "0",
                      }}
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setOpenDropdown(link.name);
                      }}
                      onMouseLeave={() => {
                        closeTimeoutRef.current = setTimeout(() => {
                          setOpenDropdown(null);
                        }, 150);
                      }}
                    >
                      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-12">
                        {link.name === "Energy Technologies" ? (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                            {link.items.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href}
                                className="text-base md:text-lg lg:text-xl font-medium transition hover:opacity-70"
                                style={{ color: "#042B19" }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-3 md:gap-5 lg:gap-6">
                              {link.items
                                .filter((_, idx) => idx % 3 === 0)
                                .map((item, idx) => (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-base md:text-lg lg:text-xl font-medium transition hover:opacity-70"
                                    style={{ color: "#042B19" }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-3 md:gap-5 lg:gap-6">
                              {link.items
                                .filter((_, idx) => idx % 3 === 1)
                                .map((item, idx) => (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-base md:text-lg lg:text-xl font-medium transition hover:opacity-70"
                                    style={{ color: "#042B19" }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-3 md:gap-5 lg:gap-6">
                              {link.items
                                .filter((_, idx) => idx % 3 === 2)
                                .map((item, idx) => (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-base md:text-lg lg:text-xl font-medium transition hover:opacity-70"
                                    style={{ color: "#042B19" }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link, index) => {
              const isOpen = openDropdown === link.name;
              return (
                <div key={index} className="mb-2">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                    className="w-full flex items-center justify-between text-white text-sm font-medium py-3 px-2 hover:text-yellow-400 transition"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && link.items && (
                    <div className="pl-4 pb-2">
                      {link.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block text-white text-sm py-2 px-2 hover:text-yellow-400 transition"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
