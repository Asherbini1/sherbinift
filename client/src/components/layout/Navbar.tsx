import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/onfinity", label: "Onfinity ERP" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white border-b border-white/10">
      <div className="container mx-auto px-6 h-32 flex flex-col items-center justify-center relative">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0 mb-6 mt-2">
          <img 
            src={logo} 
            alt="STC Logo" 
            className="h-12 w-auto object-contain invert" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-bold transition-colors hover:text-white/70 cursor-pointer",
                location === link.href
                  ? "text-white"
                  : "text-white/40"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <button className="text-[10px] uppercase tracking-[0.2em] font-bold border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all cursor-pointer">
            Contact
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold py-2 border-b border-white/5 block cursor-pointer text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
