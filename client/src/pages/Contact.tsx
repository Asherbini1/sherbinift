import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting STC. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Contact Us</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Ready to transform your financial governance?
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold font-heading mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:ahmed@sherbinift.com" className="text-muted-foreground hover:text-black transition-colors">
                      ahmed@sherbinift.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+201220513777" className="text-muted-foreground hover:text-black transition-colors">
                      +201220513777
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/sherbini-tech-consultancy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-black transition-colors"
                    >
                      Sherbini Tech Consultancy
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-muted border border-border">
                <h3 className="font-bold mb-2">Connect</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Follow us on LinkedIn for the latest insights in Financial Tech.
                </p>
                <a 
                  href="https://www.linkedin.com/company/sherbini-tech-consultancy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline"
                >
                  LinkedIn Company Profile
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border border-border shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="rounded-none bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" {...field} className="rounded-none bg-muted/30 min-h-[150px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-none py-6 text-base">Send Message</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
