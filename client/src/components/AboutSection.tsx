import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="4"
          title="About Me"
          subtitle="Building at the intersection of technology, finance, and social impact"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p data-testid="text-about-p1">
                I'm a Product Manager and Software Engineer at Stanford University, pursuing dual degrees in 
                Civil Engineering (BS) and Computer Science (MS). With experience spanning product management, 
                venture capital, and trading at Morgan Stanley, I bring a unique perspective to building 
                technology solutions.
              </p>

              <p data-testid="text-about-p2">
                My technical expertise includes full-stack development with React Native, TypeScript, and Firebase, 
                alongside strong analytical skills in Python and data processing. I'm passionate about creating 
                products that drive social innovation and solve real-world problems, from helping first-generation 
                students navigate college applications to improving public transit for millions of commuters.
              </p>

              <p data-testid="text-about-p3">
                Beyond coding, I'm actively involved in leadership roles at Stanford, including serving as a 
                Residential Assistant and co-founding Stanford Black Rhythm and Sound. I'm interested in 
                entrepreneurship, financial markets, infrastructure development, and I'm an avid Arsenal FC supporter 
                and travel enthusiast.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" asChild data-testid="button-download-resume">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-contact-me">
                <a href="mailto:yabraham.cs@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <Button variant="ghost" size="icon" asChild data-testid="link-github-about">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-linkedin-about">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-9xl font-bold text-primary/30">YA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
