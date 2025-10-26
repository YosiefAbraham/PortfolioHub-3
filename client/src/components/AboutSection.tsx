import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <SectionHeader
            number="4"
            title="About Me"
            subtitle="Building at the intersection of technology, finance, and social impact"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mt-16">
          <div className="space-y-8 animate-slide-in-left">
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-effect rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-sm font-medium">Stanford</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Dual Degrees</p>
              </div>
              <div className="glass-effect rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-5 w-5" />
                  <span className="text-sm font-medium">Morgan Stanley</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Trading Experience</p>
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p data-testid="text-about-p1" className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                I'm a Product Manager and Software Engineer at Stanford University, pursuing dual degrees in 
                <span className="text-primary font-medium"> Civil Engineering (BS)</span> and 
                <span className="text-primary font-medium"> Computer Science (MS)</span>. With experience spanning product management, 
                venture capital, and trading at Morgan Stanley, I bring a unique perspective to building 
                technology solutions.
              </p>

              <p data-testid="text-about-p2" className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                My technical expertise includes full-stack development with 
                <span className="text-primary font-medium"> React Native</span>, 
                <span className="text-primary font-medium"> TypeScript</span>, and 
                <span className="text-primary font-medium"> Firebase</span>, 
                alongside strong analytical skills in Python and data processing. I'm passionate about creating 
                products that drive social innovation and solve real-world problems, from helping first-generation 
                students navigate college applications to improving public transit for millions of commuters.
              </p>

              <p data-testid="text-about-p3" className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                Beyond coding, I'm actively involved in leadership roles at Stanford, including serving as a 
                <span className="text-primary font-medium"> Residential Assistant</span> and co-founding 
                <span className="text-primary font-medium"> Stanford Black Rhythm and Sound</span>. I'm interested in 
                entrepreneurship, financial markets, infrastructure development, and I'm an avid Arsenal FC supporter 
                and travel enthusiast.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button variant="default" asChild data-testid="button-download-resume" className="hover-lift">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-contact-me" className="hover-lift">
                <a href="mailto:yabraham.cs@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-2 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <Button variant="ghost" size="icon" asChild data-testid="link-github-about" className="hover-lift">
                <a href="https://github.com/YosiefAbraham" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-linkedin" className="hover-lift">
                <a href="https://www.linkedin.com/in/yosiefabraham/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="w-full max-w-md">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/20 overflow-hidden shadow-2xl hover-lift animate-float">
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Enhanced decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
                  
                  {/* Initials with enhanced styling */}
                  <div className="text-9xl font-bold text-white/90 drop-shadow-lg">
                    YA
                  </div>
                </div>
              </div>
              
              {/* Additional info card */}
              <div className="mt-6 glass-effect rounded-xl p-4 animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Based in Stanford, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Civil Engineering & Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
