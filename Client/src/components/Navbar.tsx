import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import Logo from "@/assets/logo.png";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1a1918]/95 backdrop-blur-sm border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Concise Logo"
              className="w-24 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                scrollToDemo();
              }}
              className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors cursor-pointer"
            >
              Try Demo
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-[#49423D] dark:text-[#E0DEDB] hover:bg-[rgba(55,50,47,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)]"
              onClick={() => navigate("/login")}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-[#37322F] hover:bg-[#2A2520] text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full px-5"
              onClick={() => navigate("/register")}
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#49423D] dark:text-[#E0DEDB]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
            <div className="flex flex-col gap-4">
              <a
                href="#demo"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDemo();
                }}
                className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors cursor-pointer"
              >
                Try Demo
              </a>
              <a
                href="#features"
                className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB] hover:text-[#37322F] dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB]">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 w-full border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.12)]"
                  onClick={() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  }}
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
                <Button
                  size="sm"
                  className="gap-2 w-full bg-[#37322F] hover:bg-[#2A2520] text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full"
                  onClick={() => {
                    navigate("/register");
                    setMobileMenuOpen(false);
                  }}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
