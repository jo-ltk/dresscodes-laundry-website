"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Sparkles,
  Shirt as Iron,
  Crown,
  WashingMachine,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getTelHref, getWhatsAppHref, PHONE_DISPLAY } from "@/lib/phone";

const cardData = [
  {
    icon: <MessageCircle className="h-8 w-8 text-[#008c5b]" />,
    title: "Free Pickup & Delivery",
    description:
      "Doorstep service across Kottayam. Schedule a pickup with just one click. It's fast, easy, and hassle-free.",
  },
  {
    icon: <Clock className="h-8 w-8 text-[#008c5b]" />,
    title: "24–48 Hour Turnaround",
    description:
      "Fast service without compromising quality. Express options available. Clean clothes, right on time.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#008c5b]" />,
    title: "100% Satisfaction Guaranteed",
    description:
      "Not satisfied? We’ll make it right. Your happiness is our priority — no questions asked.",
  },
];

export default function HomePage() {
  const services = [
    {
      icon: WashingMachine,
      title: "Wash & Iron",
      description: "Professional washing and ironing service",
      price: "₹160/kg",
      features: [
        "Eco-friendly detergents",
        "Fabric softener included",
        "Fabric fragrance included",
      ],
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate fabrics",
      price: "₹100/piece",
      features: [
        "Stain removal",
        "Professional pressing",
        "Garment protection",
      ],
    },
    {
      icon: Iron,
      title: "Ironing",
      description: "Crisp and professional ironing service",
      price: "₹15/piece",
      features: ["Steam pressing", "Crease-free finish", "Same-day service"],
    },
    {
      icon: Crown,
      title: "Premium Care",
      description: "Luxury treatment for premium garments",
      price: "₹220/kg",
      features: [
        "Hand washing for special garments",
        "starching included",
        "individual washing",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation with dark text */}
      <Navigation variant="solid" />

      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-screen flex flex-col pt-16 md:pt-24 bg-[#f3f2ef]">
        {/* Topography Background using SVG Data URI */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-8 flex flex-col mb-12">
          <div className="w-full flex flex-col items-start mt-8 lg:mt-12 relative z-20">
            {/* Hero Text */}
            <div className="flex flex-col w-full">
              <h1 className="text-5xl sm:text-7xl lg:text-[84px] leading-[1.05] tracking-tight font-medium text-gray-900 mb-8 md:mb-16">
                Drop the laundry. <br />
                <span className="text-[#008c5b]">Not your plans.</span>
              </h1>

              <div className="flex flex-col xl:flex-row xl:items-end justify-between w-full gap-8">
                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.6] font-medium">
                  A convenient laundry solution that helps protect the
                  environment. Professional care, straight to your doorstep.
                </p>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/booking"
                    className="group flex gap-1.5 justify-between items-center border-b border-[#008c5b] pb-1 text-[14px] text-[#008c5b] font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    Schedule Free Pickup
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href={getTelHref()}
                    className="group flex gap-1.5 justify-between items-center border-b border-transparent pb-1 text-[14px] text-gray-600 font-medium hover:text-[#008c5b] transition-colors"
                  >
                    Call: {PHONE_DISPLAY}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rack Image - Full Width, Full Height */}
        <div className="relative w-full z-10 mt-auto">
          <Image
            src="/images/heroimg.png"
            alt="Laundry Illustration"
            width={1920}
            height={600}
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] opacity-95"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              Why Choose dresscode?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We combine traditional care with modern convenience to deliver
              exceptional laundry services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between bg-gray-50 hover:bg-[#008c5b]/5 p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 transition-all duration-300 min-h-[320px]"
              >
                <div>
                  <div className="mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-[#008c5b] group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-medium text-gray-900 mb-4 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 font-light">
                    {card.description}
                  </p>
                </div>

                <Link
                  href="/booking"
                  className="inline-flex items-center text-[14px] text-[#008c5b] font-medium group-hover:text-gray-900 transition-colors w-max pb-1 border-b border-transparent group-hover:border-gray-900"
                >
                  Book Now{" "}
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Professional care for all your garments with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between bg-gray-50/50 hover:bg-white p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#008c5b]/20 hover:shadow-2xl hover:shadow-[#008c5b]/5 transition-all duration-500 min-h-[520px]"
              >
                <div>
                  <div className="mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-[#008c5b] group-hover:scale-110 group-hover:bg-[#008c5b] group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-medium text-gray-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-light mb-8 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-[12px] uppercase tracking-wider font-semibold text-gray-400 mb-1">Starting from</p>
                    <span className="text-4xl font-semibold text-[#008c5b]">
                      {service.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[14px] text-gray-600 font-light"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#008c5b] mr-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href="/booking"
                    className="inline-flex items-center text-[15px] text-[#008c5b] font-medium group-hover:text-gray-900 transition-colors w-full justify-between"
                  >
                    <span>Explore Service</span>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-[#008c5b] group-hover:text-white group-hover:border-[#008c5b] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-[#008c5b] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            Ready to Experience <br className="hidden sm:block" /> Premium Care?
          </h2>
          <p className="text-lg text-emerald-50 mb-10 max-w-2xl mx-auto font-light">
            Schedule your free pickup today and discover why we're Kottayam's
            most trusted laundry service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-white text-[#008c5b] hover:bg-gray-50 text-[15px] h-14 px-8 rounded-full font-medium transition-colors w-full sm:w-auto"
            >
              <Link href="/booking">Schedule Free Pickup</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white text-[15px] h-14 px-8 rounded-full font-medium transition-all w-full sm:w-auto bg-transparent backdrop-blur-sm"
            >
              <Link href={getTelHref()}>Call Now {PHONE_DISPLAY}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
