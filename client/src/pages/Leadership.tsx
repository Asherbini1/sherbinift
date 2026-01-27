import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-16 text-center">Leadership</h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="aspect-[3/4] bg-muted relative overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                   <span className="text-9xl font-heading text-black/10 font-bold">AS</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold font-heading mb-2">Ahmed El-Sherbini</h2>
              <p className="text-primary/60 font-medium mb-8 uppercase tracking-widest text-sm">Founder & CEO</p>
              
              <div className="prose prose-gray">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Ahmed El-Sherbini is a seasoned expert in financial transformation and ERP execution. With years of experience bridging the gap between high-level financial strategy and ground-level technical implementation, Ahmed has helped numerous organizations modernize their financial governance.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  His expertise lies in designing automated workflows that enforce policy compliance while driving operational efficiency. Under his leadership, STC has become a trusted partner for enterprises seeking robust digital transformation.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <a 
                  href="http://linkedin.com/in/ahmed-el-sherbini-4a641a68" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-bold hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
