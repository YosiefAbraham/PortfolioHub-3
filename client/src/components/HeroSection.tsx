import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none" data-testid="text-hero-name">
                Yosief Abraham
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-hero-tagline">
                Product Manager & Software Engineer building innovative solutions
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" data-testid="button-view-work" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-contact">
                <a href="mailto:yabraham.cs@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild data-testid="link-github">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-email">
                <a href="mailto:yabraham.cs@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-2xl bg-card border border-card-border overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/40">YA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
