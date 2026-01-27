import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
          <img 
            src={logo} 
            alt="STC Logo" 
            className="h-16 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/70 cursor-pointer",
                location === link.href
                  ? "text-white font-semibold"
                  : "text-white/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" size="sm" className="rounded-none cursor-pointer border-white/20 text-white hover:bg-white hover:text-black">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-lg font-medium py-2 border-b border-white/10 block cursor-pointer text-white/80"
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
