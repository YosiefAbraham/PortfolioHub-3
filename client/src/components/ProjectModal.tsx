import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video, FileText, ZoomIn } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export interface ProjectDetail {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  projectUrl?: string;
  gtmUrl?: string;
  assumptionsUrl?: string;
  marketAnalysisUrl?: string;
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
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
  if (!project) return null;

  return (
    <>
    <Dialog open={!!enlargedImage} onOpenChange={(isOpen) => { if (!isOpen) setEnlargedImage(null); }}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-2">
        {enlargedImage && (
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={enlargedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
    
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

          <div className="flex flex-col gap-3 pt-4">
            {project.projectUrl && (
              <Button variant="default" size="lg" asChild data-testid="button-modal-project" className="w-full">
                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                  <FileText className="h-5 w-5 mr-2" />
                  View Complete Project Documentation
                </a>
              </Button>
            )}
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <Button variant="default" size="sm" asChild data-testid="button-modal-demo">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.videoUrl && (
                <Button variant="default" size="sm" asChild data-testid="button-modal-video">
                  <a href={project.videoUrl} target="_blank" rel="noreferrer">
                    <Video className="h-4 w-4 mr-2" />
                    Concept Video
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
              {project.gtmUrl && (
                <Button variant="outline" size="sm" asChild data-testid="button-modal-gtm">
                  <a href={project.gtmUrl} target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    GTM Strategy
                  </a>
                </Button>
              )}
              {project.assumptionsUrl && (
                <Button variant="outline" size="sm" asChild data-testid="button-modal-assumptions">
                  <a href={project.assumptionsUrl} target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Assumptions Testing
                  </a>
                </Button>
              )}
              {project.marketAnalysisUrl && (
                <Button variant="outline" size="sm" asChild data-testid="button-modal-market">
                  <a href={project.marketAnalysisUrl} target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    TAM/SAM/SOM
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-auto" data-testid="scroll-project-details">
          <div className="px-6 py-6 space-y-8">
              {project.images && project.images.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all group"
                        data-testid={`img-project-${index}`}
                        onClick={() => setEnlargedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Click on any image to enlarge</p>
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
    </>
  );
}
