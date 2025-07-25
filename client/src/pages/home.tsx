import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Instagram } from "lucide-react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import DecineLogo from "@/components/DecineLogo";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

const slideImages = [
  "/slide1.png", // Ascending stairs shadow
  "/slide2.png", // High resolution portrait
  "/slide3.jpg", // Camber-3
  "/slide4.jpg", // Camber-5
  "/slide5.jpg", // Camber-9
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - in production, this would call your newsletter API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll notify you when DeCine launches.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden" style={{ backgroundColor: '#fefcf7' }}>
      {/* Main Content - No scrolling needed */}
      <main className="relative z-10 px-8 pt-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo and Future Proof - Compact */}
          <div className="text-center mb-8 fade-in">
            <div className="mb-4 flex items-center justify-center">
              <DecineLogo 
                className="inline-block"
                width="400"
              />
            </div>
            <p className="text-gray-500 font-medium tracking-wider uppercase text-[31px]">
              Future Proof
            </p>
          </div>

          {/* Main Visual Area - Slideshow with text overlay */}
          <div className="relative mb-12">
            <div className="aspect-[16/9] rounded-lg shadow-xl overflow-hidden relative">
              
              {/* Slideshow Images */}
              <div className="relative w-full h-full">
                {slideImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Text overlay on image */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider uppercase">
                    Decentralised Film Finance
                  </h2>
                </div>
              </div>
              
              {/* Simple slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Coming Soon Badge - Simple rectangle design */}
          <div className="text-center mb-8 fade-in">
            <div className="inline-block border-4 border-black rounded-3xl bg-white px-12 py-8 text-center">
              <h1 className="coming-soon-text text-4xl uppercase text-black m-0 text-left pl-[4px] pr-[4px] ml-[-4px] mr-[-4px] mt-[-12px] mb-[-12px] pt-[-4px] pb-[-4px]">
                COMING<br/>SOON
              </h1>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-8 fade-in">
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://www.linkedin.com/in/ryan-bonder-a6a79219/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/ryanbonder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/decine70/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Discord"
              >
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </main>
      {/* Footer */}
      <footer className="relative z-10 py-6 px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center text-sm">
            <span className="text-gray-600 font-medium">© 2025 DeCine</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
