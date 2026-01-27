import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/assets/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase mb-6 bg-white/5 backdrop-blur-sm">
            Financial Technology & ERP Advisory
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-8 tracking-tight text-balance">
            Bridging Financial Governance with Cloud ERP Execution
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sherbini Tech Consultancy empowers finance leaders to bridge the gap between traditional governance and modern enterprise execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-none px-8 py-6 text-base bg-white text-black hover:bg-white/90">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-none px-8 py-6 text-base border-white/30 text-white hover:bg-white hover:text-black">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Modernizing Enterprise Finance
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We act as the strategic bridge between financial policy and technological implementation. Our expertise lies in translating complex financial requirements into robust, automated ERP workflows.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              "Financial Policy Design",
              "Cloud ERP Implementation",
              "Process Automation",
              "Digital Transformation"
            ].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 border border-border bg-muted/30">
                <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Core Competencies</h2>
              <p className="text-muted-foreground">Comprehensive advisory services tailored for the modern CFO.</p>
            </div>
            <Link href="/services">
              <Button variant="link" className="p-0 text-primary font-semibold group">
                View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Governance Design",
                desc: "Structuring financial policies that ensure compliance while enabling agility."
              },
              {
                title: "Cloud ERP Advisory",
                desc: "Strategic guidance on selecting and implementing the right ERP solutions."
              },
              {
                title: "Onfinity Implementation",
                desc: "Specialized implementation services as a certified Cloud Partner for Onfinity."
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 bg-background border border-border hover:border-black transition-all duration-500 executive-shadow">
                <div className="w-10 h-px bg-black/20 mb-8 group-hover:w-full transition-all duration-700" />
                <h3 className="text-xl font-bold font-heading mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
