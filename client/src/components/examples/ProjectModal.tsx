import { useState } from "react";
import ProjectModal, { ProjectDetail } from "../ProjectModal";
import { Button } from "@/components/ui/button";

export default function ProjectModalExample() {
  const [open, setOpen] = useState(false);

  const exampleProject: ProjectDetail = {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/YosiefAbraham?tab=repositories",
    longDescription:
      "Built a comprehensive e-commerce solution from the ground up, handling everything from product catalog management to secure payment processing. The platform serves thousands of daily users and processes significant transaction volume.",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    features: [
      "Real-time inventory tracking and automatic stock alerts",
      "Integrated payment processing with Stripe",
      "Advanced search and filtering capabilities",
      "Responsive design optimized for mobile shopping",
      "Admin dashboard with analytics and reporting",
    ],
    challenges:
      "One of the biggest challenges was implementing real-time inventory updates across multiple warehouses while maintaining data consistency. We solved this using event-driven architecture with Redis pub/sub and careful database transaction management.",
    outcome:
      "The platform now handles 10,000+ daily transactions with 99.9% uptime. Customer satisfaction scores improved by 40% compared to the legacy system, and checkout completion rates increased by 25%.",
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">
        Open Project Details
      </Button>
      <ProjectModal project={exampleProject} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
