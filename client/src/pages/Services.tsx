import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Financial Policies & Governance Design",
      items: [
        "Internal Control Frameworks",
        "Financial Authority Matrix Design",
        "Compliance & Risk Management",
        "Standard Operating Procedures (SOPs)"
      ]
    },
    {
      title: "Cloud ERP Advisory & Implementation",
      items: [
        "Requirements Gathering & Scoping",
        "Solution Architecture",
        "Vendor Selection Advisory",
        "Implementation Roadmap Planning"
      ]
    },
    {
      title: "Onfinity (VIENNA Advantage) ERP Implementation",
      items: [
        "Full-cycle Implementation",
        "Module Configuration",
        "Customization Specification",
        "Data Migration Strategy"
      ]
    },
    {
      title: "Process Automation & System Integration",
      items: [
        "Workflow Optimization",
        "API Integration Strategy",
        "Robotic Process Automation (RPA) Advisory",
        "Paperless Finance Operations"
      ]
    },
    {
      title: "Training, Change Management & Support",
      items: [
        "End-User Training Programs",
        "Change Management Workshops",
        "Post-Go-Live Support",
        "Continuous Improvement Audits"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-muted pt-32 pb-20 border-b border-border">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            End-to-end consultancy for the digital finance function.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="rounded-none border border-border shadow-none hover:border-black transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="text-sm font-mono text-muted-foreground mb-2">0{index + 1}</div>
                  <CardTitle className="text-2xl font-heading font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
