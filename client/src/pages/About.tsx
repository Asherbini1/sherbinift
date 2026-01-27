import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About STC</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Defining the future of financial governance through technology.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-heading font-bold text-black mb-8">Who We Are</h2>
            <p className="text-muted-foreground mb-12">
              Sherbini Tech Consultancy (STC) is a premier advisory firm at the intersection of finance and technology. 
              We don't just implement software; we re-engineer financial operations for the digital age. 
              Our team serves as the critical link between executive financial strategy and the practical 
              realities of Cloud ERP execution.
            </p>

            <Separator className="my-12" />

            <h2 className="text-3xl font-heading font-bold text-black mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Financial Governance</h3>
                <p className="text-muted-foreground">
                  To establish robust frameworks that protect assets and ensure accuracy without stifling business speed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">ERP-Driven Execution</h3>
                <p className="text-muted-foreground">
                  To deploy technology not as a repository of data, but as an engine of automation and insight.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-muted border border-border">
              <h3 className="text-xl font-bold mb-4">The STC Advantage</h3>
              <p className="text-muted-foreground">
                We position STC as a bridge between traditional finance and modern enterprise technology. 
                Where others see software configuration, we see financial architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
