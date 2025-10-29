import ProjectCard from "../ProjectCard";

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="E-Commerce Platform"
        description="A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics."
        technologies={["Next.js", "TypeScript", "Stripe", "Tailwind"]}
        demoUrl="https://example.com"
        githubUrl="https://github.com/YosiefAbraham?tab=repositories"
      />
    </div>
  );
}
