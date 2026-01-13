import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExperienceDetail } from "./ExperienceModal";

interface MoreExperiencesModalProps {
  experiences: ExperienceDetail[];
  open: boolean;
  onClose: () => void;
  onSelectExperience: (experience: ExperienceDetail) => void;
}

export default function MoreExperiencesModal({
  experiences,
  open,
  onClose,
  onSelectExperience,
}: MoreExperiencesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Additional Experiences</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(80vh-120px)] pr-4">
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => {
                  onSelectExperience(exp);
                  onClose();
                }}
                className="p-4 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      {exp.category && (
                        <Badge variant="secondary" className="text-xs">
                          {exp.category}
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{exp.company}</span> • {exp.period}
                    </div>
                    <p className="text-sm leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {exp.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{exp.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 ml-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white/5 border border-border flex items-center justify-center flex-shrink-0 p-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap text-center">
                      Click for details →
                    </div>
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

