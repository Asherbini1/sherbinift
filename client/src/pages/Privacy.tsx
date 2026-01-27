import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-muted pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-heading mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <h3>1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us when you fill out a contact form or communicate with us via email. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide customer service.</li>
              <li>Communicate with you about our services, updates, and offers.</li>
              <li>Improve our website and services.</li>
            </ul>

            <h3>3. Data Protection</h3>
            <p>
              We are committed to protecting your data. We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, modification, or destruction.
            </p>

            <h3>4. Third-Party Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>

            <h3>5. Cookies</h3>
            <p>
              Our website may use cookies to enhance your experience. You can choose to turn off all cookies via your browser settings.
            </p>

            <h3>6. Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. Please contact us using the information below for any privacy-related inquiries.
            </p>

            <h3>7. Contact Us</h3>
            <p>
              If you have any questions regarding this privacy policy, you may contact us using the information on our Contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
