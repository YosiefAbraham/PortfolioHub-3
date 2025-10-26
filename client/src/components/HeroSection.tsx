import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>Available for opportunities</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none" data-testid="text-hero-name">
                <span className="gradient-text">Yosief</span>
                <br />
                <span className="text-foreground">Abraham</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-hero-tagline">
                Product Manager & Software Engineer building innovative solutions at the intersection of 
                <span className="text-primary font-medium"> technology</span>, 
                <span className="text-primary font-medium"> finance</span>, and 
                <span className="text-primary font-medium"> social impact</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Button variant="default" size="lg" data-testid="button-view-work" onClick={() => scrollToSection("projects")} className="hover-lift">
                View My Work
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-contact" className="hover-lift">
                <a href="mailto:yabraham.cs@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button variant="ghost" size="icon" asChild data-testid="link-github" className="hover-lift">
                <a href="https://github.com/YosiefAbraham" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-linkedin" className="hover-lift">
                <a href="https://www.linkedin.com/in/yosiefabraham/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-email" className="hover-lift">
                <a href="mailto:yabraham.cs@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profile image container with enhanced styling */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/20 overflow-hidden shadow-2xl hover-lift animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
                  
                  {/* Initials with enhanced styling */}
                  <div className="text-6xl md:text-7xl font-bold text-white/90 drop-shadow-lg">
                    YA
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors hover-lift"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
