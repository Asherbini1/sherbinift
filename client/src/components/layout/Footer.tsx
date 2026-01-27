import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-6 tracking-tight">STC.</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Sherbini Tech Consultancy.
              <br />
              Bridging Financial Governance with Cloud ERP Execution.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary-foreground/80">Company</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors cursor-pointer">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary-foreground/80">Expertise</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Financial Governance</Link></li>
              <li><Link href="/onfinity" className="hover:text-white transition-colors cursor-pointer">Onfinity ERP</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary-foreground/80">Legal</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><span className="opacity-50 cursor-not-allowed">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Sherbini Tech Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
