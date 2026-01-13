import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectDetail } from "./ProjectModal";

interface MoreProjectsModalProps {
  projects: ProjectDetail[];
  open: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectDetail) => void;
}

export default function MoreProjectsModal({
  projects,
  open,
  onClose,
  onSelectProject,
}: MoreProjectsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Additional Projects</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(80vh-120px)] pr-4">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  onSelectProject(project);
                  onClose();
                }}
                className="p-4 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      {project.category && (
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap mt-1">
                    Click for details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}


