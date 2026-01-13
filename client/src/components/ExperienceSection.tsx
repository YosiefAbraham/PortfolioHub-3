import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal, { ExperienceDetail } from "./ExperienceModal";
import MoreItemsCard from "./MoreItemsCard";
import MoreExperiencesModal from "./MoreExperiencesModal";

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [openedFromMoreModal, setOpenedFromMoreModal] = useState(false);

  const experiences: ExperienceDetail[] = [
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

  // Additional experiences for the "More" section - populate with 3-10 items
  const additionalExperiences: ExperienceDetail[] = [
    {
      company: "Stanford Black Rhythm and Sound",
      role: "Co-Founder and President of Operations",
      period: "July 2022 - Present",
      category: "Leadership",
      description:
        "Cultivated partnerships with over 15 organizations, growing club network from 0 to 700+ members through strategic marketing campaigns and collaborative events.",
      technologies: [
        "Marketing",
        "Operations",
        "Partnership Development",
        "Event Planning",
      ],
      companyUrl: "https://stanford.edu",
      logo: "/images/logos/stanford-black-rhythm-sound.svg",
      longDescription:
        "Co-founded and led operations for Stanford Black Rhythm and Sound, a student organization dedicated to celebrating Black culture through music and community events. Spearheaded early-stage growth initiatives that transformed the organization from inception to a thriving community of 700+ active members.",
      images: [],
      responsibilities: [
        "Designed and executed partnership-driven marketing initiatives",
        "Hand-delivered 'exclusive invitations' as part of targeted outreach campaign",
        "Collaborated with 15+ established organizations to host joint events",
        "Managed operational logistics for large-scale cultural events",
        "Built sustainable systems for member engagement and retention",
        "Oversaw budget allocation and resource management",
      ],
      achievements: [
        "Grew organization from 0 to 700+ members in first two years",
        "Established partnerships with 15+ campus organizations",
        "Created innovative marketing campaign with personalized outreach",
        "Successfully hosted multiple large-scale collaborative events",
      ],
    },
    {
      company: "Stanford University - Residential and Dining Education",
      role: "Residential Assistant",
      period: "May 2023 - June 2025",
      category: "Community",
      description:
        "Managed $140K budget and organized 15+ events fostering community for 300 students, from educational seminars to out-of-state trips.",
      technologies: [
        "Budget Management",
        "Event Planning",
        "Community Building",
        "Crisis Management",
      ],
      companyUrl: "https://stanford.edu",
      logo: "/images/logos/stanford-res-ed.svg",
      longDescription:
        "Served as a Residential Assistant for Stanford's Residential and Dining Education, responsible for fostering a vibrant and inclusive community for 300 students. Managed substantial budgets, organized diverse programming, and provided support and guidance to residents.",
      images: [],
      responsibilities: [
        "Managed $140K annual programming budget with full accountability",
        "Organized 15+ diverse events including educational seminars and trips",
        "Provided crisis intervention and support for 300+ residents",
        "Facilitated conflict resolution and community building initiatives",
        "Coordinated out-of-state trips requiring complex logistics",
        "Collaborated with campus partners to bring resources to residents",
      ],
      achievements: [
        "Successfully managed $140K budget with zero overspend",
        "Maintained 95%+ resident satisfaction with programming",
        "Created inclusive community environment for diverse student body",
        "Organized successful multi-day out-of-state educational trips",
      ],
    },
    {
      company: "Breakthrough Ventures",
      role: "Venture Ambassador",
      period: "October 2025 - Present",
      category: "VC",
      description:
        "Supported sourcing and evaluation of early-stage startups by conducting founder calls and preliminary market research across AI and fintech sectors.",
      technologies: [
        "Startup Sourcing",
        "Market Research",
        "Deal Pipeline",
        "Investment Analysis",
      ],
      companyUrl: "https://breakvc.com",
      logo: "/images/logos/breakthrough-ventures.svg",
      longDescription:
        "As a Venture Ambassador at Breakthrough Ventures, I support the firm's investment activities by sourcing and evaluating early-stage startups in AI and fintech. I conduct preliminary market research and maintain the firm's deal pipeline tracker.",
      images: [],
      responsibilities: [
        "Conducted founder calls to evaluate early-stage startup potential",
        "Performed preliminary market research across AI and fintech sectors",
        "Drafted initial diligence notes and opportunity summaries",
        "Guided investment team discussions with comprehensive analysis",
        "Built internal pipeline tracker improving visibility on active deals",
        "Tracked referral sources to optimize sourcing strategy",
      ],
      achievements: [
        "Contributed to building robust deal flow pipeline",
        "Improved deal tracking visibility across investment team",
        "Conducted comprehensive founder evaluations and market research",
      ],
    },
    {
      company: "Initio Capital",
      role: "Associate Scout",
      period: "October 2025 - Present",
      category: "VC",
      description:
        "Conducted founder calls and market research for early-stage startup evaluation, drafting diligence notes to guide investment decisions.",
      technologies: [
        "Due Diligence",
        "Market Research",
        "Startup Evaluation",
        "Pipeline Management",
      ],
      companyUrl: "https://initiocapital.com",
      logo: "/images/logos/initio-capital.svg",
      longDescription:
        "Supporting Initio Capital's investment activities by sourcing and evaluating early-stage opportunities in AI and fintech. Responsible for conducting founder calls, preliminary market research, and building internal tools to track deal flow.",
      images: [],
      responsibilities: [
        "Sourced and evaluated early-stage startups across AI and fintech",
        "Conducted founder calls to assess team quality and vision",
        "Performed preliminary market research and competitive analysis",
        "Drafted diligence notes and opportunity summaries for investment team",
        "Built and maintained internal pipeline tracker",
        "Improved visibility on active deals and referral sources",
      ],
      achievements: [
        "Enhanced deal sourcing process with systematic tracking",
        "Contributed valuable insights through comprehensive founder evaluations",
        "Improved investment team efficiency with better pipeline visibility",
      ],
    },
    {
      company: "Embedding VC",
      role: "Undergraduate Scout",
      period: "September 2025 - Present",
      category: "VC",
      description:
        "Evaluated early-stage startups through founder calls and market research, supporting investment team with diligence notes and opportunity analysis.",
      technologies: [
        "Startup Sourcing",
        "Market Analysis",
        "Founder Evaluation",
        "Deal Flow",
      ],
      companyUrl: "https://embedding.vc",
      logo: "/images/logos/embedding-vc.svg",
      longDescription:
        "As an Undergraduate Scout at Embedding VC, I support sourcing and evaluation of early-stage startups by conducting founder calls and preliminary market research across AI and fintech sectors.",
      images: [],
      responsibilities: [
        "Sourced early-stage startup opportunities in AI and fintech",
        "Conducted founder calls to evaluate team and product fit",
        "Performed preliminary market research and analysis",
        "Drafted initial diligence notes for investment committee",
        "Created opportunity summaries to guide follow-up analysis",
        "Maintained internal pipeline tracker for active deals",
      ],
      achievements: [
        "Built systematic approach to startup evaluation",
        "Contributed to investment team decision-making process",
        "Developed expertise in AI and fintech market landscapes",
      ],
    },
    {
      company: "HDR",
      role: "Engineer Consultant Intern (Rail)",
      period: "June 2023 - September 2023",
      category: "Engineering",
      description:
        "Developed $3M+ cost estimates for rail and drainage projects, producing 20+ engineering plans for major clients including BNSF and SANDAG.",
      technologies: [
        "MicroStation",
        "Excel",
        "Cost Estimation",
        "Engineering Plans",
        "CAD",
      ],
      companyUrl: "https://www.hdrinc.com",
      logo: "/images/logos/hdr-engineering.svg",
      longDescription:
        "During my internship at HDR, I worked on major rail infrastructure projects for clients across California. I developed comprehensive cost estimates, created engineering plans using MicroStation, and designed standardized drawing cells to increase team efficiency.",
      images: [],
      responsibilities: [
        "Developed detailed cost estimates exceeding $3 Million for rail and drainage projects",
        "Ensured project affordability through accurate budget analysis for California clients",
        "Produced 20+ professional engineering plans using MicroStation",
        "Worked with major clients including BNSF and SANDAG",
        "Accelerated project approvals through quality plan deliverables",
        "Designed 100+ standardized drawing cells for HDR professional plans",
        "Increased team efficiency by 30% through standardization efforts",
      ],
      achievements: [
        "Successfully delivered $3M+ in cost estimates for major infrastructure projects",
        "Produced 20+ engineering plans strengthening client relationships",
        "Improved team efficiency by 30% through standardized drawing cells",
        "Contributed to projects for major clients including BNSF and SANDAG",
      ],
    },
    {
      company: "Stanford Ethiopian & Eritrean Student Association",
      role: "President",
      period: "June 2023 - June 2024",
      category: "Leadership",
      description:
        "Directed team of 10 students managing $20K budget, organizing 20 annual events that increased membership by 40%.",
      technologies: [
        "Budget Management",
        "Event Planning",
        "Leadership",
        "Community Building",
      ],
      companyUrl: "https://stanford.edu",
      logo: "/images/logos/stanford-seesa.svg",
      longDescription:
        "Led the Stanford Ethiopian & Eritrean Student Association as President, managing a diverse team and substantial budget while organizing cultural events and community-building initiatives that significantly grew the organization's reach and impact.",
      images: [],
      responsibilities: [
        "Directed team of 10 students in organizational operations",
        "Managed $20,000 annual budget with strategic allocation",
        "Created comprehensive budget tracker improving fund utilization by 30%",
        "Organized weekly meetings to coordinate team activities",
        "Planned and executed 20 annual cultural and educational events",
        "Led initiatives to grow membership and community engagement",
        "Collaborated with campus partners to expand organizational reach",
      ],
      achievements: [
        "Increased membership by 40% within calendar year",
        "Improved budget utilization by 30% through systematic tracking",
        "Successfully organized 20 high-quality events for the community",
        "Built strong team culture and effective organizational systems",
      ],
    },
    {
      company: "First Gen Scholars",
      role: "Assistant Director of Programming",
      period: "June 2021 - September 2023",
      category: "Education",
      description:
        "Guided 100+ high school students through college applications, creating systems to complete thousands of essay revisions and doubling application outputs.",
      technologies: [
        "Program Management",
        "Mentorship",
        "Curriculum Development",
        "Student Support",
      ],
      companyUrl: "https://firstgenscholars.org",
      logo: "/images/logos/first-gen-scholars.svg",
      longDescription:
        "Served as Assistant Director of Programming for First Gen Scholars, a nonprofit supporting first-generation college applicants. Developed comprehensive systems for essay revision, led daily programming for cohorts, and provided personalized guidance through the college application process.",
      images: [],
      responsibilities: [
        "Guided 100+ high school students through college application process",
        "Provided extensive support in essay development and revisions",
        "Created systematic approach to complete thousands of essay revisions",
        "Co-led daily activities and lessons for 60-student cohorts",
        "Fostered supportive community for first-generation students",
        "Accelerated application completion through structured programming",
        "Mentored students through complex admissions processes",
      ],
      achievements: [
        "Doubled college application outputs through systematic processes",
        "Successfully supported 100+ students through to college acceptance",
        "Created efficient system processing thousands of essay revisions",
        "Built strong community fostering student success and engagement",
      ],
    },
    {
      company: "Management Leadership for Tomorrow (MLT)",
      role: "Career Prep Program Fellow",
      period: "December 2022 - Present",
      category: "Professional Development",
      description:
        "Selected as one of 1,000 students for 18-month professional development program, mastering financial modeling and analysis skills.",
      technologies: [
        "M&A Modeling",
        "DCF Analysis",
        "Comps Modeling",
        "Wall Street Prep",
        "Financial Analysis",
      ],
      companyUrl: "https://mlt.org",
      logo: "/images/logos/mlt-logo.svg",
      longDescription:
        "Selected for Management Leadership for Tomorrow's prestigious Career Prep Program, an 18-month intensive professional development experience for high-achieving diverse talent. Completed comprehensive financial modeling training and participated in case study competitions.",
      images: [],
      responsibilities: [
        "Completed 18-month intensive professional development program",
        "Mastered M&A, DCF, and Comps Modeling via Wall Street Prep",
        "Applied financial modeling skills to real-world case studies",
        "Participated in cohort-based learning and skill development",
        "Engaged with corporate partners and industry leaders",
        "Developed professional skills in communication and leadership",
      ],
      achievements: [
        "Selected from thousands of applicants as top 1,000 student",
        "Completed comprehensive financial modeling curriculum",
        "Enhanced analytical capabilities through intensive case study work",
        "Built strong professional network through MLT community",
      ],
    },
  ];

  const handleExperienceClick = (experience: ExperienceDetail) => {
    setSelectedExperience(experience);
    setModalOpen(true);
    setOpenedFromMoreModal(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);

    // If opened from more modal, go back to the list
    if (openedFromMoreModal) {
      setTimeout(() => setMoreModalOpen(true), 300);
      setOpenedFromMoreModal(false);
    }
  };

  const handleMoreClick = () => {
    setMoreModalOpen(true);
  };

  const handleMoreModalClose = () => {
    setMoreModalOpen(false);
  };

  const handleSelectFromMore = (experience: ExperienceDetail) => {
    setSelectedExperience(experience);
    setOpenedFromMoreModal(true);
    setModalOpen(true);
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
          {additionalExperiences.length > 0 && (
            <MoreItemsCard type="experience" onClick={handleMoreClick} />
          )}
        </div>

        <ExperienceModal
          experience={selectedExperience}
          open={modalOpen}
          onClose={handleCloseModal}
        />

        <MoreExperiencesModal
          experiences={additionalExperiences}
          open={moreModalOpen}
          onClose={handleMoreModalClose}
          onSelectExperience={handleSelectFromMore}
        />
      </div>
    </section>
  );
}
