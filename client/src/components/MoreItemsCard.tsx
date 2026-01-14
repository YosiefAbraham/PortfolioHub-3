import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface MoreItemsCardProps {
  onClick?: () => void;
  type: "experience" | "project";
}

export default function MoreItemsCard({ onClick, type }: MoreItemsCardProps) {
  return (
    <Card 
      className="p-6 md:p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer relative card-border-fix flex items-center justify-center min-h-[300px]" 
      onClick={onClick}
      data-testid={`card-more-${type}s`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Plus className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            View More {type === "experience" ? "Experiences" : "Projects"}
          </h3>
          <p className="text-sm text-muted-foreground">
            Click to explore additional {type === "experience" ? "roles" : "projects"}
          </p>
        </div>
      </div>
    </Card>
  );
}



