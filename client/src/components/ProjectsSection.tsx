import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectDetail } from "./ProjectModal";
import MoreItemsCard from "./MoreItemsCard";
import MoreProjectsModal from "./MoreProjectsModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [openedFromMoreModal, setOpenedFromMoreModal] = useState(false);

  const projects: ProjectDetail[] = [
    {
      title: "Mathy",
      category: "UX Design",
      description:
        "Award-winning interactive math guide with AI-powered real-time feedback on a digital whiteboard. Runner up for 'Best Overall Project' in Stanford CS 147.",
      technologies: [
        "React",
        "TypeScript",
        "Voice AI",
        "Digital Whiteboard",
        "Real-time Analysis",
        "UX Research",
      ],
      demoUrl: "https://cs147-final.vercel.app",
      githubUrl: "https://github.com/YosiefAbraham/cs147-final",
      videoUrl: "https://www.youtube.com/watch?v=fSI5-tT0GI8",
      projectUrl:
        "https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/Mathy/",
      longDescription:
        "Mathy is an award-winning interactive math guide developed as part of Stanford's CS 147 course, winning 'Best Overall Project.' The application works alongside students on a digital whiteboard, spotting misconceptions in real-time and providing personalized support through AI-powered feedback and adaptive questioning. The project features a fully AI-generated concept video and comprehensive documentation of the entire UX design process from needfinding through final implementation. View the complete project journey including needfinding, POVs, HMWs, concept videos, usability testing, prototypes, and heuristic evaluations at https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/Mathy/",
      images: [
        "/images/projects/mathy-home-page.png",
        "/images/projects/mathy-empathy-map.png",
        "/images/projects/mathy-final-prototype.png",
        "/images/projects/mathy-low-fidelity.png",
        "/images/projects/mathy-award.png",
      ],
      features: [
        "Real-time misconception detection that identifies errors as students work through problems",
        "Smart annotations with explanations and corrections directly on the digital whiteboard",
        "Voice-enabled Q&A system for natural interaction while solving problems",
        "Adaptive follow-up questions tailored to individual student progress and understanding",
        "Interactive digital whiteboard interface optimized for math problem-solving",
        "Fully AI-generated concept video showcasing innovative storytelling",
        "Comprehensive UX design process: needfinding, empathy mapping, POVs, HMWs, sketching, usability testing, medium-fi and high-fi prototypes, heuristic evaluation",
        "Complete project documentation available at Stanford CS 147 course website",
      ],
      challenges:
        "Creating an AI system that could accurately identify mathematical misconceptions in real-time while maintaining a natural, supportive learning environment was the core challenge. Through extensive needfinding and empathy mapping with students, we discovered key pain points around one-on-one learning support and real-time feedback. We conducted multiple rounds of usability testing to balance immediate feedback with allowing students to think independently. The voice AI integration required careful design to feel helpful rather than intrusive, and the whiteboard interface needed to support fluid mathematical notation while enabling precise error detection. Iterating from low-fidelity sketches to high-fidelity prototypes while incorporating heuristic evaluation feedback was crucial to the final design.",
      outcome:
        "Successfully developed a functional prototype that earned 'Best Overall Project' recognition in Stanford CS 147 with Professor James Landay. The project demonstrates innovative approaches to AI-assisted math learning and showcases comprehensive UX design skills from needfinding and user research through concept development, prototyping, heuristic evaluation, and final implementation. Mathy represents a new paradigm for interactive educational technology that adapts to individual learning needs. The complete design journey, including all research, testing, and iteration phases, is documented at the Stanford CS 147 project showcase.",
    },
    {
      title: "Soundwave",
      category: "Product Design",
      description:
        "Cloud-based collaborative audio studio for podcast teams with real-time editing and transcript-based workflow. CS 177 class project.",
      technologies: [
        "React",
        "WebRTC",
        "Web Audio API",
        "Real-time Collaboration",
        "Speech-to-Text",
        "Product Management",
      ],
      demoUrl: "https://soundwave.bolt.host",
      videoUrl:
        "https://drive.google.com/file/d/11YqYZqt3ADkyKg3Nyd6sclhC96xIx70b/view?t=4",
      projectUrl:
        "https://highercommonsense.com/wp-content/uploads/2025/12/Soundwave-Final-PRD-1-1.pdf",
      gtmUrl:
        "https://highercommonsense.com/human-centered-product-management/project/soundwaves-gtm/",
      assumptionsUrl:
        "https://highercommonsense.com/cs247b/soundwave-studios-assumption-testing-pt-2/",
      marketAnalysisUrl:
        "https://highercommonsense.com/human-centered-product-management/soundwavestudios-tam-sam-som/",
      longDescription:
        "Soundwave is a collaborative audio studio for podcast teams, developed for Stanford's CS 177 (Designing for Impact). The platform brings recording, editing, and versioning into one real-time workspace—like Google Docs for podcasts. Through user research, we identified collaboration and version control as top pain points for teams spending 5-12 hours weekly managing files across disconnected tools. The project includes comprehensive product management: PRD, TAM/SAM/SOM analysis ($11.58B market), Product-Led Growth strategy, and validated assumption testing.",
      images: ["/images/projects/soundwave-landing.png"],
      features: [
        "Real-time collaborative editing with <200ms latency",
        "AI-powered transcript-based editing for easy text-to-audio workflow",
        "Timestamped comments anchored to specific audio moments",
        "Automatic cloud versioning and conflict resolution",
        "Browser-based recording with Web Audio API",
        "Complete record-to-export workflow in one platform",
        "Product-Led Growth strategy with freemium model",
        "TAM/SAM/SOM analysis: $11.58B addressable market",
      ],
      challenges:
        "Implementing real-time collaboration for 90+ minute audio files while maintaining sub-200ms latency. Building robust conflict resolution for simultaneous edits. Developing GTM strategy balancing Product-Led Growth with team-based adoption. Conducting market sizing and assumption testing with limited resources.",
      outcome:
        "Delivered comprehensive product management deliverables: PRD with user personas and Jobs-To-Be-Done framework, functional prototype, GTM strategy with PLG model, TAM/SAM/SOM market analysis, and validated assumption testing. Successfully demonstrates end-to-end skills from user research through technical architecture, business strategy, and go-to-market planning.",
    },
    {
      title: "WeDo",
      category: "School",
      description:
        "Student productivity app with dynamic data generation and real-time analytics for personalized user experience.",
      technologies: [
        "React Native",
        "JavaScript",
        "Real-time Analytics",
        "User Management",
      ],
      demoUrl: "https://we-do-yosiefabraham02.replit.app",
      githubUrl: "https://github.com/YosiefAbraham?tab=repositories",
      longDescription:
        "WeDo is a student-focused productivity application developed as part of Stanford's CS 247B course. The app combines dynamic data generation with robust user data management to create a personalized productivity experience for students.",
      images: [
        "/images/projects/wedo-design-system.png",
        "/images/projects/wedo-user-research.png",
        "/images/projects/wedo-comic-strip.png",
      ],
      features: [
        "Dynamic data generation for personalized productivity insights",
        "Real-time analytics dashboard for tracking progress and habits",
        "Customizable settings for individual user preferences",
        "User data management system with privacy-first architecture",
        "Interactive visualizations for productivity metrics",
        "Cross-platform support for iOS and Android devices",
      ],
      challenges:
        "Creating a balance between comprehensive data collection and user privacy was a key challenge. We implemented local-first data storage with optional cloud sync to give users control. The real-time analytics required efficient data processing to avoid battery drain on mobile devices.",
      outcome:
        "Developed a fully functional productivity app that enhances student performance through data-driven insights. The application successfully demonstrates the integration of user interaction design with technical implementation for optimal user experience.",
    },
    {
      title: "FGScholar",
      category: "Full-Stack Development",
      description:
        "College application management platform connecting first-gen students with essay editors through real-time collaboration and Google Drive integration.",
      technologies: [
        "React Native",
        "Firebase",
        "Google Drive API",
        "Real-time Chat",
        "Push Notifications",
        "Role-based Auth",
      ],
      githubUrl: "https://github.com/YosiefAbraham?tab=repositories",
      longDescription:
        "FGScholar is a full-stack mobile platform designed to support first-generation college applicants through their application journey. Built with React Native and Firebase, the app enables students to track their college applications, manage essays through Google Drive API integration, and connect with editors for personalized feedback. The platform features role-based authentication, real-time chat functionality, and push notifications to facilitate seamless collaboration between students and mentors.",
      images: [],
      features: [
        "Comprehensive college application tracker with deadline management",
        "Google Drive API integration for seamless essay management and version control",
        "Role-based authentication system for students, editors, and administrators",
        "Real-time chat functionality for instant communication with essay editors",
        "Push notifications for deadline reminders and editor responses",
        "User dashboard with application status overview and progress tracking",
        "Essay assignment system matching students with qualified editors",
        "Document sharing and collaborative editing workflow",
      ],
      challenges:
        "Integrating the Google Drive API with Firebase while maintaining smooth real-time synchronization was technically challenging. Designing an intuitive UX for both students and editors required extensive needfinding and user testing across different user personas. Implementing a robust role-based authentication system that could scale while maintaining security was crucial. Conducted dozens of user interviews and iterative design sessions to ensure the platform truly met the needs of first-generation college applicants navigating a complex application process.",
      outcome:
        "Successfully launched a functional mobile platform that streamlines the college application process for first-generation students. The app demonstrates comprehensive full-stack development skills including React Native mobile development, Firebase backend integration, third-party API implementation, real-time data synchronization, and user-centered design. Through continuous user testing and iteration, FGScholar provides a valuable tool that addresses real pain points in the college application journey.",
    },
  ];

  // Additional projects for the "More" section - populate with 3-10 items
  const additionalProjects: ProjectDetail[] = [
    {
      title: "Transit Research Dashboard",
      category: "Data Analysis",
      description:
        "Python-based analytics dashboard analyzing millions of transit data points to identify inefficiencies affecting 8M+ Bay Area commuters.",
      technologies: [
        "Python",
        "Data Analysis",
        "Pandas",
        "Matplotlib",
        "Excel",
      ],
      longDescription:
        "Developed a comprehensive data analysis dashboard as part of research at Stanford's School of Engineering. The project processed millions of data points from Bay Area transit systems to identify bottlenecks and inefficiencies affecting daily commuters.",
      images: [],
      features: [
        "Automated data processing pipeline for millions of transit records",
        "Interactive visualizations showing transit bottlenecks",
        "Statistical analysis of peak usage patterns",
        "Predictive modeling for capacity planning",
        "Comprehensive reporting dashboard for stakeholders",
      ],
      challenges:
        "Processing and analyzing millions of data points efficiently required optimized data structures and algorithms. Translating complex statistical findings into actionable insights for non-technical stakeholders was crucial for project impact.",
      outcome:
        "Successfully identified key transit inefficiencies and delivered actionable recommendations that could improve transportation for 8M+ daily commuters in the Bay Area.",
    },
    {
      title: "BART Water Infrastructure Database",
      category: "Infrastructure",
      description:
        "Digitized database system managing water infrastructure data across 131 miles of BART track and 50 stations.",
      technologies: [
        "GIS",
        "Excel",
        "Database Design",
        "Document Management",
      ],
      longDescription:
        "Built a comprehensive digital database system for BART's water infrastructure, transforming thousands of paper documents into an accessible, searchable digital format. The system improved data accuracy and reduced document retrieval times from minutes to seconds.",
      images: [],
      features: [
        "Centralized database for 50,000+ engineering documents",
        "GIS integration for spatial infrastructure visualization",
        "Advanced search and filtering capabilities",
        "Automated document categorization system",
        "Cross-referenced metadata for improved discoverability",
      ],
      challenges:
        "Analyzing and digitizing thousands of historical documents while maintaining accuracy required meticulous attention to detail. Creating a filing system that would work for 100+ engineers with different workflows demanded extensive user research and iteration.",
      outcome:
        "Successfully digitized infrastructure data covering 131 miles of BART track, improving cross-team collaboration and reducing document retrieval time from minutes to seconds. System now used by 100+ BART engineers.",
    },
    {
      title: "Generate",
      category: "Mobile App Development",
      description:
        "Student productivity application built with React Native featuring dynamic data generation, real-time analytics, and customizable user settings.",
      technologies: [
        "React Native",
        "JavaScript",
        "Real-time Analytics",
        "User Management",
        "Data Visualization",
      ],
      longDescription:
        "Generate is a mobile application developed as part of Stanford's CS 147L (Human-Computer Interactions) course. The app facilitates dynamic data generation and user interaction with integrated robust user data management, real-time analytics, and customizable settings to enhance application performance and optimize user experience.",
      images: [],
      features: [
        "Dynamic data generation for personalized user insights",
        "Real-time analytics dashboard for tracking user behavior",
        "Customizable settings interface for individual preferences",
        "Robust user data management system with privacy controls",
        "Interactive data visualizations for better understanding",
        "Cross-platform mobile support for iOS and Android",
        "Performance optimization for smooth user experience",
      ],
      challenges:
        "Balancing comprehensive data generation with performance optimization was crucial for mobile deployment. Designing an intuitive interface that worked across different screen sizes while maintaining consistent user experience required extensive prototyping and user testing. Implementing real-time analytics without impacting battery life demanded careful architectural decisions.",
      outcome:
        "Successfully developed a fully functional mobile application demonstrating proficiency in React Native and JavaScript. The project showcases end-to-end mobile development skills including user interaction design, data management, analytics integration, and performance optimization for enhanced user experience.",
    },
    {
      title: "HDR Rail Infrastructure Plans",
      category: "Civil Engineering",
      description:
        "Professional engineering plans and cost estimates totaling $3M+ for rail infrastructure projects across California.",
      technologies: [
        "MicroStation",
        "CAD",
        "Cost Estimation",
        "Excel",
        "Engineering Design",
      ],
      longDescription:
        "Developed comprehensive engineering plans and detailed cost estimates for major rail and drainage infrastructure projects serving clients across California, including BNSF and SANDAG. Created standardized drawing cells that improved team efficiency and project delivery timelines.",
      images: [],
      features: [
        "20+ professional engineering plans for major rail projects",
        "Comprehensive cost estimates exceeding $3 Million",
        "100+ standardized drawing cells for increased efficiency",
        "MicroStation-based technical drawings and specifications",
        "Budget analysis ensuring project affordability",
        "Integration with client requirements and standards",
      ],
      challenges:
        "Creating accurate cost estimates for complex rail infrastructure required deep understanding of materials, labor, and construction methodologies. Producing professional-grade engineering plans that met strict industry standards while working within tight deadlines demanded meticulous attention to detail. Standardizing drawing elements across the team while maintaining flexibility for project-specific needs was an ongoing challenge.",
      outcome:
        "Successfully delivered $3M+ in accurate cost estimates and 20+ engineering plans that strengthened client relationships with major organizations like BNSF and SANDAG. Improved team efficiency by 30% through creation of 100+ standardized drawing cells, demonstrating impact beyond individual project deliverables.",
    },
  ];

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
    setOpenedFromMoreModal(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    
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

  const handleSelectFromMore = (project: ProjectDetail) => {
    setSelectedProject(project);
    setOpenedFromMoreModal(true);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="2"
          title="Featured Projects"
          subtitle="Technical projects and mobile applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              category={project.category}
              imageUrl={
                project.images && project.images.length > 0
                  ? project.images[0]
                  : undefined
              }
              onClick={() => handleProjectClick(project)}
            />
          ))}
          {additionalProjects.length > 0 && (
            <MoreItemsCard
              type="project"
              onClick={handleMoreClick}
            />
          )}
        </div>

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleCloseModal}
        />

        <MoreProjectsModal
          projects={additionalProjects}
          open={moreModalOpen}
          onClose={handleMoreModalClose}
          onSelectProject={handleSelectFromMore}
        />
      </div>
    </section>
  );
}
