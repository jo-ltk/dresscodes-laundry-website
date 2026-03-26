"use client";

import { useState } from "react";
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
  Waves,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getTelHref, getWhatsAppHref, PHONE_DISPLAY } from "@/lib/phone";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
  const [selectedCategory, setSelectedCategory] = useState("ironing");

  const serviceCategories = [
    {
      id: "ironing",
      name: "Ironing",
      icon: Iron,
      prices: [
        { item: "Shawl, Blouse", price: "₹15" },
        { item: "Shirt, T-Shirt, Pant (F/M), Churidar Top", price: "₹20" },
        { item: "Dhothi", price: "₹30" },
        { item: "Jeans", price: "₹25" },
        { item: "Saree, Churidar Set", price: "₹40" },
      ],
      description: "Crisp, professional steam ironing for all your garments.",
    },
    {
      id: "washing",
      name: "Washing",
      icon: Waves,
      prices: [{ item: "Washing + Fragrance", price: "₹110/kg" }],
      description: "Gentle wash with eco-friendly detergents and laundry scent.",
    },
    {
      id: "wash-and-iron",
      name: "Washing & Ironing",
      icon: WashingMachine,
      prices: [
        { item: "Washing + Fragrance + Ironing", price: "₹170/kg" },
        {
          item: "Washing + Starching + Ironing + Fragrance + Next Day Delivery",
          price: "₹220/kg",
        },
        {
          item: "Washing + Ironing + Fragrance + Same Day Delivery",
          price: "₹270/kg",
        },
      ],
      description: "Complete care: washed, dried, and professionally ironed.",
    },
    {
      id: "dry-cleaning",
      name: "Dry Cleaning",
      icon: Sparkles,
      prices: [
        { item: "Shirt (Silk/Woolen)", price: "₹130" },
        { item: "Pant, Jeans", price: "₹110-125" },
        { item: "Suit (Coat + Pant)", price: "₹450" },
        { item: "Saree (Plain/Heavy)", price: "₹160-250" },
        { item: "Blanket Single", price: "₹335" },
      ],
      description: "Expert cleaning for delicate fabrics and special garments.",
    },
    {
      id: "other",
      name: "Household Items",
      icon: CheckCircle,
      prices: [
        { item: "Shoe, Toy, Helmet, Bag Cleaning", price: "₹320" },
        { item: "Curtain Cleaning", price: "₹130/Pc" },
      ],
      description: "Specialized cleaning for accessories and household items.",
    },
  ];

  const currentService = serviceCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation with dark text */}
      <Navigation variant="solid" />

      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col pt-24 md:pt-32 bg-[#f3f2ef] overflow-hidden">
        {/* Topography Background using SVG Data URI */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />

        <div className="relative z-10 w-full mx-auto px-6 sm:px-8 flex flex-col mb-8 md:mb-12">
          <div className="w-full flex flex-col items-start mt-4 md:mt-8 lg:mt-12 relative z-20">
            {/* Hero Text */}
            <div className="flex flex-col w-full">
              <h1 className="text-4xl sm:text-7xl lg:text-[84px] leading-[1.1] md:leading-[1.05] tracking-tight font-medium text-gray-900 mb-6 md:mb-16 block">
                Drop the laundry. <br className="hidden sm:block" />
                <span className="text-[#008c5b] underline decoration-yellow-400 decoration-8 underline-offset-8">Not your plans.</span>
              </h1>

              <div className="flex flex-col xl:flex-row xl:items-end justify-between w-full gap-8">
                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.6] font-medium max-w-sm">
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
        <div className="relative w-full z-10 mt-8 md:mt-auto">
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
      <section id="services" className="py-20 sm:py-32 bg-[#f3f2ef] relative overflow-hidden">
        {/* Modern Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008c5b] via-yellow-400 to-black opacity-80" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge className="bg-[#008c5b] hover:bg-[#008c5b]/90 text-white border-none px-4 py-1.5 rounded-full mb-6 font-bold tracking-wider animate-pulse uppercase">
                Free Pickup & Delivery
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Our <span className="text-[#008c5b] italic">Premium</span> Services
              </h2>
              <p className="text-lg text-gray-600 font-medium max-w-lg leading-relaxed">
                Professional fabric care tailored to your needs. Select a category to view detailed pricing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-black hover:bg-[#008c5b] text-white rounded-xl h-12 px-6 font-bold transition-all shadow-lg hover:shadow-emerald-200">
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-black/10 hover:border-black/20 text-black rounded-xl h-12 px-6 font-bold bg-white/50 backdrop-blur-sm">
                <Link href="/pricing">View All Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Service Cards Grid - 5 Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "relative group flex flex-col items-center justify-center p-6 sm:p-8 rounded-[2rem] transition-all duration-500 border-2 outline-none",
                  selectedCategory === category.id
                    ? "bg-white border-[#008c5b] shadow-2xl shadow-emerald-100 scale-[1.02] z-20"
                    : "bg-white/40 border-transparent hover:bg-white/80 hover:border-gray-200"
                )}
              >
                <div className={cn(
                  "w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500",
                  selectedCategory === category.id
                    ? "bg-[#008c5b] text-white scale-110 rotate-3"
                    : "bg-gray-100 text-gray-400 group-hover:scale-110 group-hover:bg-white group-hover:text-[#008c5b]"
                )}>
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className={cn(
                  "text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-center transition-colors",
                  selectedCategory === category.id ? "text-[#008c5b]" : "text-gray-500 group-hover:text-gray-900"
                )}>
                  {category.name}
                </span>

                {selectedCategory === category.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#008c5b] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Pricing Display */}
          <div className="relative">
            <Card className="border-none shadow-2xl shadow-black/5 rounded-[2.5rem] bg-white overflow-hidden min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-32 translate-x-32 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full translate-y-32 -translate-x-32 blur-3xl pointer-events-none" />
              
              <CardContent className="p-8 sm:p-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Service Info */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
                         <span className="w-1.5 h-8 bg-[#008c5b] rounded-full" />
                         {currentService?.name}
                      </h3>
                      <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {currentService?.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-4">
                      {[
                        "Eco-friendly processes",
                        "Sanitized handling",
                        "Expert stain removal",
                        "Premium packaging"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-500 font-bold text-sm uppercase tracking-wide">
                          <CheckCircle className="w-5 h-5 text-[#008c5b]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-[#008c5b] hover:bg-black text-white h-14 px-8 rounded-2xl font-black transition-all">
                        <Link href="/booking">Book {currentService?.name}</Link>
                      </Button>
                      <Button asChild variant="ghost" size="lg" className="h-14 px-8 rounded-2xl font-black text-gray-400 hover:text-black hover:bg-gray-50">
                        <Link href={`tel:${PHONE_DISPLAY}`}>Call Support</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Pricing List */}
                  <div className="lg:col-span-7 bg-gray-50/80 backdrop-blur-sm rounded-[2rem] p-6 sm:p-8 border border-white/80 shadow-inner">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/50">
                      <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Pricing List</h4>
                      <Badge variant="outline" className="border-emerald-200 text-[#008c5b] font-bold bg-white px-3">
                        {currentService?.prices.length} CATEGORIES
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {currentService?.prices.map((price, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white hover:shadow-xl hover:shadow-black/5 transition-all group border border-transparent hover:border-emerald-100"
                        >
                          <span className="font-bold text-gray-800 text-[15px] sm:text-lg group-hover:text-[#008c5b] transition-colors pr-4">
                            {price.item}
                          </span>
                          <div className="shrink-0 text-right">
                            <span className="text-xl sm:text-2xl font-black text-black">
                              {price.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-start gap-4 p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-800">
                      <Zap className="w-5 h-5 mt-1 animate-bounce" />
                      <div>
                        <p className="text-sm font-black uppercase tracking-wide">Next Day Delivery Available</p>
                        <p className="text-xs font-bold opacity-80">Express service for when you're in a hurry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo_cta' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 Q 25 80 50 100 T 100 100 M0 80 Q 25 60 50 80 T 100 80 M0 60 Q 25 40 50 60 T 100 60 M0 40 Q 25 20 50 40 T 100 40 M0 20 Q 25 0 50 20 T 100 20' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo_cta)'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            Ready to Experience <br className="hidden sm:block" /> <span className="text-[#008c5b]">Premium Care?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Schedule your free pickup today and discover why we're Kottayam's
            most trusted laundry service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-[#008c5b] text-white hover:bg-[#008c5b]/90 text-[15px] h-14 px-8 rounded-full font-medium transition-colors w-full sm:w-auto"
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
