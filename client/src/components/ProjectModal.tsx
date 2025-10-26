import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ProjectDetail {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  images?: string[];
  features?: string[];
  challenges?: string;
  outcome?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => { if (!nextOpen) onClose(); }}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <DialogTitle className="text-3xl font-bold" data-testid={`text-modal-title-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground" data-testid="text-modal-description">
                {project.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {project.demoUrl && (
              <Button variant="default" size="sm" asChild data-testid="button-modal-demo">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild data-testid="button-modal-github">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-auto" data-testid="scroll-project-details">
          <div className="px-6 py-6 space-y-8">
              {project.images && project.images.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Project Gallery</h3>
                  <div className="grid gap-4">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border overflow-hidden"
                        data-testid={`img-project-${index}`}
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

              {project.longDescription && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">About This Project</h3>
                  <p className="text-base leading-relaxed" data-testid="text-modal-long-description">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        data-testid={`text-feature-${index}`}
                      >
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-base leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Technical Challenges</h3>
                  <p className="text-base leading-relaxed" data-testid="text-modal-challenges">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.outcome && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Outcome & Impact</h3>
                  <p className="text-base leading-relaxed" data-testid="text-modal-outcome">
                    {project.outcome}
                  </p>
                </div>
              )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
