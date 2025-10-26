import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  category?: string;
  logo?: string;
  onClick?: () => void;
}

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  technologies,
  category,
  logo,
  onClick,
}: ExperienceCardProps) {
  return (
    <Card 
      className="p-6 md:p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer relative card-border-fix" 
      onClick={onClick}
      data-testid={`card-experience-${company.toLowerCase().replace(/\s/g, '-')}`}
    >
      {category && (
        <div className="badge-flush">
          <Badge 
            variant="secondary" 
            className="badge-corner bg-primary/90 text-primary-foreground backdrop-blur-sm text-xs px-3 py-1 border-0 shadow-sm"
            data-testid={`badge-category-${category.toLowerCase().replace(/\s/g, '-')}`}
          >
            {category}
          </Badge>
        </div>
      )}
      
      <div className="space-y-4">
        {logo && (
          <div className="h-12 flex items-center">
            <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center text-xl font-bold text-muted-foreground">
              {company.charAt(0)}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-1" data-testid={`text-role-${company.toLowerCase().replace(/\s/g, '-')}`}>
            {role}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span data-testid={`text-company-${company.toLowerCase().replace(/\s/g, '-')}`}>{company}</span>
            <span>•</span>
            <span data-testid={`text-period-${company.toLowerCase().replace(/\s/g, '-')}`}>{period}</span>
          </div>
        </div>

        <p className="text-base leading-relaxed" data-testid={`text-description-${company.toLowerCase().replace(/\s/g, '-')}`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, '-')}`}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground pt-2">
          Click to view details →
        </div>
      </div>
    </Card>
  );
}
