import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navigation() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're on the home page, just scroll
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home first
      setLocation("/");
      // Store the target section to scroll to after navigation
      sessionStorage.setItem("scrollTarget", id);
    }
  };

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-effect border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={(e) => {
              // If already on home page, scroll to top
              if (location === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-xl font-bold gradient-text hover-lift px-4 py-2 rounded-md transition-all duration-300"
            data-testid="link-home"
          >
            Yosief Abraham
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover-lift px-3 py-2 rounded-md"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            {/* Divider */}
            <div className="h-5 w-px bg-border/50" />
            <Link 
              href="/gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover-lift px-3 py-2 rounded-md"
              data-testid="link-gallery"
            >
              Gallery
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-lift"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover-lift"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 mb-4 animate-slide-up">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover-lift"
                  data-testid={`link-${item.id}-mobile`}
                >
                  {item.label}
                </button>
              ))}
              {/* Divider */}
              <div className="h-px w-full bg-border/50 my-2" />
              <Link 
                href="/gallery"
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover-lift"
                data-testid="link-gallery-mobile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
