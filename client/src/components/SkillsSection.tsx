import SectionHeader from "./SectionHeader";
import SkillCategory from "./SkillCategory";
import { Code2, Database, Wrench, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "R", "MATLAB"],
    },
    {
      title: "Frameworks & Tools",
      icon: Database,
      skills: ["React", "React Native", "Next.js", "Firebase", "Node.js", "Figma", "Replit"],
    },
    {
      title: "Design & Engineering",
      icon: Wrench,
      skills: ["AutoCAD", "Revit", "MicroStation", "Adobe Premiere Pro", "Adobe Illustrator", "GIS"],
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["Product Management", "Market Analysis", "A/B Testing", "Data Analytics", "Leadership", "Public Speaking"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="3"
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit spanning engineering, development, and business"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
