import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Oasiz.Ai",
      role: "Growth Product Manager",
      period: "August 2025 - Present",
      description: "Analyzed user feedback and bugs; translated issues into reproducible test cases, and recommended technical fixes and UI optimizations. Led usability testing and outreach on Stanford's campus, leveraging A/B-style experiments to evaluate user flows and drive product adoption.",
      technologies: ["Product Management", "A/B Testing", "User Research", "UI/UX"],
    },
    {
      company: "Collide Capital",
      role: "Venture Capitalist Senior Scout",
      period: "September 2024 - Present",
      description: "Conducted comprehensive market analyses and due diligence on emerging AI technologies, synthesizing insights to inform strategic investment decisions. Produced 4+ comprehensive investment pitches biweekly, incorporating risk analyses and partnership strategies.",
      technologies: ["Market Analysis", "Due Diligence", "AI Technologies", "Investment Strategy"],
    },
    {
      company: "Morgan Stanley",
      role: "Fixed Income Sales and Trading Summer Analyst",
      period: "June 2025 - August 2025",
      description: "Conducted in-depth market analysis for Credit, Municipal, and Securitized Product Group desks, synthesizing insights from 50+ primers and director meetings, resulting in 5+ actionable trade recommendations. Crafted and delivered highly technical trade pitch proposals bi-weekly.",
      technologies: ["Financial Analysis", "Trading", "Market Research", "Credit Products"],
    },
    {
      company: "Stanford University School of Engineering",
      role: "Lead Engineer Researcher",
      period: "June 2024 - November 2024",
      description: "Spearheaded a cross-functional research project on public transit issues for Seamless Bay Area, impacting over 8 million commuters. Leveraged Python and Excel to process tens of millions of data points on vehicle and population movement, using AI to drive unique analytics.",
      technologies: ["Python", "Excel", "Data Analysis", "AI", "Public Transit"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="1"
          title="Experience"
          subtitle="Building innovative solutions across diverse industries and technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
