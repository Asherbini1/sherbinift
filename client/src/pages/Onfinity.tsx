import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export default function Onfinity() {
  const modules = [
    "Financial Management",
    "Budgeting & Controlling",
    "Procurement",
    "Project Management",
    "Asset Management",
    "Business Intelligence & Reporting",
    "Workflow & Automation"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black text-white overflow-hidden">
         <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/assets/tech-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <Badge className="mb-6 bg-white text-black hover:bg-white/90 rounded-none px-4 py-1 text-xs uppercase tracking-widest">
            Cloud Partner
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 max-w-4xl">
            Onfinity ERP Excellence
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            As a certified Cloud Partner for Onfinity (VIENNA Advantage), we deliver enterprise-grade ERP solutions tailored for scalability.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Why Onfinity?</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Onfinity offers a robust, cloud-native ERP environment that rivals top-tier global solutions. Its flexibility allows STC to model complex financial governance structures directly into the system workflow.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our implementation methodology ensures that the software adapts to your business, not the other way around.
              </p>
            </div>
            
            <div className="bg-muted p-8 border border-border">
              <h3 className="text-xl font-bold font-heading mb-6">Key Modules Delivered</h3>
              <div className="space-y-4">
                {modules.map((mod, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-black/10 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium">{mod}</span>
                    <span className="text-black/30 font-mono text-sm">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
