import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal, { ExperienceDetail } from "./ExperienceModal";

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const experiences: ExperienceDetail[] = [
    {
      company: "Oasiz.Ai",
      role: "Growth Product Manager",
      period: "August 2025 - Present",
      category: "PM",
      description:
        "Led product optimization through user research and A/B testing. Translated user feedback into actionable product improvements.",
      technologies: [
        "Product Management",
        "A/B Testing",
        "User Research",
        "UI/UX",
      ],
      companyUrl: "https://oasiz.ai",
      longDescription:
        "As a Growth Product Manager at Oasiz.Ai, I bridge the gap between users and the engineering team by analyzing feedback, conducting usability testing, and optimizing product flows. My work directly impacts user adoption and product quality through data-driven decision making.",
      images: [],
      responsibilities: [
        "Analyzed user feedback and bug reports to identify patterns and prioritize product improvements",
        "Translated user issues into reproducible test cases with clear technical specifications",
        "Recommended technical fixes and UI optimizations to enhance user experience",
        "Led comprehensive usability testing sessions on Stanford's campus",
        "Designed and executed A/B-style experiments to evaluate different user flows",
        "Collaborated with engineering team to implement data-driven product improvements",
      ],
      achievements: [
        "Improved user flow efficiency through systematic A/B testing and iteration",
        "Established usability testing framework that continues to inform product decisions",
        "Successfully translated complex user feedback into actionable technical requirements",
      ],
    },
    {
      company: "Collide Capital",
      role: "Venture Capitalist Senior Scout",
      period: "September 2024 - Present",
      category: "VC",
      description:
        "Conducted market analysis and due diligence on AI technologies. Produced investment pitches and strategic recommendations.",
      technologies: [
        "Market Analysis",
        "Due Diligence",
        "AI Technologies",
        "Investment Strategy",
      ],
      companyUrl: "https://collidecapital.com",
      longDescription:
        "As a Senior Scout at Collide Capital, I identify promising investment opportunities in the AI and technology sectors. My role involves conducting deep market analyses, performing due diligence on startups, and crafting compelling investment pitches for the partnership.",
      images: ["/images/experiences/collide-event.png"],
      responsibilities: [
        "Conducted comprehensive market analyses for emerging AI technology sectors",
        "Performed thorough due diligence on potential investment opportunities",
        "Synthesized complex technical and market insights for investment committee",
        "Produced 4+ detailed investment pitches biweekly with complete financial models",
        "Developed risk analyses and partnership strategies for portfolio companies",
        "Maintained network of founders and operators in the AI ecosystem",
      ],
      achievements: [
        "Evaluated 50+ potential investments across AI and technology sectors",
        "Contributed to investment decision-making process with detailed market insights",
        "Built strong relationships with emerging AI startup founders and operators",
      ],
    },
    {
      company: "Morgan Stanley",
      role: "Fixed Income Sales and Trading Summer Analyst",
      period: "June 2025 - August 2025",
      category: "Finance",
      description:
        "Priced bonds, developed hedging strategies, and built financial models for commercial real estate lending and mortgage calculations.",
      technologies: [
        "Bond Pricing",
        "Hedging Strategies",
        "Financial Modeling",
        "Commercial Real Estate",
      ],
      companyUrl: "https://www.morganstanley.com",
      longDescription:
        "During my summer at Morgan Stanley's Fixed Income division, I focused on bond pricing, hedging strategies, and financial modeling. I worked on commercial real estate lending projects, built mortgage calculators, and developed models to calculate pricing and hedging positions for various financial instruments.\n\n\nNote: Due to NDA purposes, we did not film or keep any work from the summer, which is why there are no images available.",
      images: [],
      responsibilities: [
        "Priced bonds and calculated optimal hedging strategies for trading positions",
        "Developed financial models to calculate pricing and hedging positions",
        "Worked on commercial real estate lending projects including acquisitions and refinancing",
        "Built mortgage calculator tools for loan analysis and pricing",
        "Created models to calculate average pricing and identify lowest cost options",
        "Analyzed commercial and estate lending opportunities for large-scale transactions",
      ],
      achievements: [
        "Built mortgage calculator tools used for commercial real estate lending analysis",
        "Developed financial models for bond pricing and hedging strategy calculations",
        "Contributed to large-scale commercial and estate acquisition/refinancing projects",
        "Created models to optimize pricing and identify lowest cost financing options",
      ],
    },
    {
      company: "Stanford University School of Engineering",
      role: "Lead Engineer Researcher",
      period: "June 2024 - November 2024",
      category: "Civil Engineering",
      description:
        "Led cross-functional research on public transit issues impacting 8M+ commuters. Used Python and AI to analyze millions of data points.",
      technologies: [
        "Python",
        "Excel",
        "Data Analysis",
        "AI",
        "Public Transit",
      ],
      companyUrl: "https://engineering.stanford.edu",
      longDescription:
        "Led a critical research initiative examining public transit inefficiencies in the San Francisco Bay Area. This cross-functional project combined civil engineering principles with advanced data analytics to identify solutions that could improve transportation for millions of daily commuters.",
      images: [],
      responsibilities: [
        "Led cross-functional research team analyzing public transit inefficiencies in the Bay Area",
        "Used Python and AI to analyze millions of data points from transit systems",
        "Identified key bottlenecks and inefficiencies affecting 8M+ daily commuters",
        "Developed data-driven recommendations for improving public transportation",
        "Collaborated with civil engineering faculty and industry experts",
        "Presented findings to academic and industry stakeholders",
      ],
      achievements: [
        "Successfully analyzed millions of data points to identify transit inefficiencies",
        "Developed actionable recommendations for improving transportation for 8M+ commuters",
        "Led cross-functional team combining engineering and data science expertise",
      ],
    },
    {
      company: "BART",
      role: "Engineer Intern",
      period: "June 2024 - August 2024",
      category: "Engineering",
      description:
        "Built digitized database of water infrastructure and managed consolidation of irrigation water meters across 50 BART stations.",
      technologies: [
        "Database Management",
        "GIS Systems",
        "Excel",
        "Data Analysis",
        "Document Management",
      ],
      companyUrl: "https://www.bart.gov",
      longDescription:
        "During my summer internship at BART, I focused on digitizing water infrastructure data and improving engineering processes. I built a comprehensive database system, analyzed thousands of documents, and managed water meter consolidation across the entire BART system.",
      images: [],
      responsibilities: [
        "Built a digitized database of water infrastructure for BART by analyzing thousands of documents",
        "Created a filing system for documents and annotated hundreds of engineering plans",
        "Managed the consolidation, discovery, and precise verification of over 200 irrigation water meters",
        "Used Excel and GIS to enhance infrastructure data accuracy across 50 BART stations",
        "Optimized engineering plans by providing 1000+ markups and prepping GIS integration",
        "Implemented a simplified filing system for 50,000+ engineering plans",
        "Presented findings and recommendations to 100+ BART engineers and stakeholders",
      ],
      achievements: [
        "Successfully digitized water infrastructure database covering 131 miles of BART track",
        "Improved cross-team collaboration by reducing document retrieval time from minutes to seconds",
        "Enhanced data accuracy for 100+ engineers through systematic GIS integration",
        "Delivered comprehensive presentation to 100+ stakeholders on infrastructure improvements",
      ],
    },
  ];

  const handleExperienceClick = (experience: ExperienceDetail) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="1"
          title="Experience"
          subtitle="Professional experience across tech, finance, and research"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.company} 
              {...exp} 
              onClick={() => handleExperienceClick(exp)}
            />
          ))}
        </div>

        <ExperienceModal
          experience={selectedExperience}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}