import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ExperienceDetail {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  category?: string;
  longDescription?: string;
  images?: string[];
  responsibilities?: string[];
  achievements?: string[];
  companyUrl?: string;
}

interface ExperienceModalProps {
  experience: ExperienceDetail | null;
  open: boolean;
  onClose: () => void;
}

export default function ExperienceModal({ experience, open, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => { if (!nextOpen) onClose(); }}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <DialogTitle className="text-3xl font-bold" data-testid={`text-modal-title-${experience.company.toLowerCase().replace(/\s/g, '-')}`}>
                {experience.role}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground" data-testid="text-modal-company">
                {experience.company} • {experience.period}
              </DialogDescription>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {experience.companyUrl && (
            <div className="flex gap-3 pt-4">
              <Button variant="default" size="sm" asChild data-testid="button-modal-company">
                <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                  <Building2 className="h-4 w-4 mr-2" />
                  Company Website
                </a>
              </Button>
            </div>
          )}
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-auto" data-testid="scroll-experience-details">
          <div className="px-6 py-6 space-y-8">
              {experience.images && experience.images.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Experience Gallery</h3>
                  <div className="grid gap-4">
                    {experience.images.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border overflow-hidden"
                        data-testid={`img-experience-${index}`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-4xl font-bold text-primary/30">
                            Image {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {experience.longDescription && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">About This Role</h3>
                  <p className="text-base leading-relaxed" data-testid="text-modal-long-description">
                    {experience.longDescription}
                  </p>
                </div>
              )}

              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        data-testid={`text-responsibility-${index}`}
                      >
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-base leading-relaxed flex-1">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.achievements && experience.achievements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        data-testid={`text-achievement-${index}`}
                      >
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-base leading-relaxed flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
