import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 py-16 px-6 md:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold gradient-text">Yosief Abraham</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Product Manager & Software Engineer building innovative solutions at the intersection of technology, finance, and social impact.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                About
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-sm font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">yabraham.cs@gmail.com</p>
              <p className="text-sm text-muted-foreground">Stanford, CA</p>
              <p className="text-sm text-muted-foreground">Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
          <div className="text-sm text-muted-foreground flex items-center gap-2 animate-fade-in" data-testid="text-copyright">
            © {currentYear} Yosief Abraham. Made with <Heart className="h-4 w-4 text-red-500" /> All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild data-testid="link-github" className="hover-lift">
              <a href="https://github.com/YosiefAbraham?tab=repositories" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="link-linkedin" className="hover-lift">
              <a href="https://www.linkedin.com/in/yosiefabraham/" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="link-email-footer" className="hover-lift">
              <a href="mailto:yabraham.cs@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            
            {/* Back to top button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="hover-lift"
              title="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
