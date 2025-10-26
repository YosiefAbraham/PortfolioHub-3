import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Your Name. All rights reserved.
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild data-testid="link-github">
              <a href="https://github.com/YosiefAbraham" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
              <a href="https://www.linkedin.com/in/yosiefabraham/" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" data-testid="link-twitter-footer">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="link-email-footer">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
