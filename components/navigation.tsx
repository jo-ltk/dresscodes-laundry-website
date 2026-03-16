"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { getTelHref, getWhatsAppHref, PHONE_DISPLAY } from "@/lib/phone"
import Image from "next/image"

interface NavigationProps {
  variant?: "solid"
}
export function Navigation({ variant = "solid" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const isActive = (path: string) => {
    return pathname === path
  }
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/track", label: "Track Order" },
    { href: "/contact", label: "Contact" },
  ]

  // Solid variant (for other pages with white background)
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 md:h-2 bg-black w-full" />

        {/* Topography Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo_nav' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo_nav)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex items-center">
              <Link href="/" aria-label="Dresscode Laundry Home" className="flex items-center">
                <Image
                  src="/dresscodelogo2.png"
                  alt="Dresscode Laundry Logo"
                  width={80}
                  height={30}
                  priority
                  className="w-16 h-auto sm:w-18 md:w-20 lg:w-24 transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
              <div className="flex items-baseline space-x-8 lg:space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[13px] lg:text-[14px] font-medium tracking-wide transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-black font-bold"
                        : "text-gray-500 hover:text-black"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop Book Now Button */}
              <Button
                asChild
                className="bg-black hover:bg-gray-900 text-white transition-all duration-300 rounded-full px-8 py-6 text-[13px] font-bold uppercase tracking-wider"
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-4">
              <Button
                asChild
                size="sm"
                className="bg-black hover:bg-gray-900 text-white px-5 rounded-full text-[12px] font-bold uppercase tracking-wider"
              >
                <Link href="/booking">Book Now</Link>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-black hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu - Same animations */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMobileMenu}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ease-out ${
              isMobileMenuOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-95 opacity-0"
            }`}
          >
            <div
              className={`flex items-center justify-between p-6 border-b border-gray-200 transition-all duration-700 delay-100 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-700 rounded-xl hover:bg-gray-50 hover:scale-105 ${
                    isActive(item.href)
                      ? "text-black font-semibold bg-gray-50 scale-105"
                      : "text-gray-600 hover:text-black"
                  } ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${200 + index * 100}ms` : "0ms",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              className={`px-6 py-4 border-t border-gray-100 mt-4 transition-all duration-700 delay-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Contact Us</h3>
              <div className="space-y-3">
                <Link
                  href={getTelHref()}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>{PHONE_DISPLAY}</span>
                </Link>
                <Link
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  <span>WhatsApp Us</span>
                </Link>
              </div>
            </div>

            <div
              className={`px-6 py-6 border-t border-gray-100 mt-auto transition-all duration-700 delay-700 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <Button
                asChild
                className="w-full bg-black hover:bg-gray-900 text-white rounded-full py-6 transition-all duration-300 hover:scale-105 transform uppercase text-[12px] font-bold tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
