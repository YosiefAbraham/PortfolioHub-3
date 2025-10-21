import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectDetail } from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: ProjectDetail[] = [
    {
      title: "FGScholar",
      description: "A full-stack React Native + Firebase platform enabling first-generation students to track college applications, manage essays, and connect with editors.",
      technologies: ["React Native", "Firebase", "Google Drive API", "TypeScript", "Real-time Chat"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "FGScholar is a comprehensive college application management platform designed specifically for first-generation college students. The platform enables students to track their applications, manage essays via Google Drive integration, and connect with editors through role-based authentication, real-time chat, and notifications.",
      images: ["fgscholar-1.jpg", "fgscholar-2.jpg", "fgscholar-3.jpg"],
      features: [
        "College application tracker with deadline management and status updates",
        "Google Drive API integration for essay management and version control",
        "Role-based authentication system for students and editors",
        "Real-time chat functionality for student-editor collaboration",
        "Push notifications for important deadlines and essay feedback",
        "Mobile-first design optimized for iOS and Android platforms",
      ],
      challenges:
        "Integrating Google Drive API with Firebase while maintaining real-time synchronization across devices was complex. We implemented a robust caching strategy and conflict resolution system to handle simultaneous edits. The real-time chat feature required careful optimization to minimize Firebase read/write costs while maintaining responsiveness.",
      outcome:
        "Successfully launched to help first-generation students manage their college applications more effectively. The platform streamlines the essay editing process and provides crucial support for students navigating the complex application landscape.",
    },
    {
      title: "BeWell",
      description: "CS 247B productivity app utilizing React Native and JavaScript to facilitate dynamic data generation and enhance user experience.",
      technologies: ["React Native", "JavaScript", "Real-time Analytics", "User Management"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "BeWell is a student-focused productivity application developed as part of Stanford's CS 247B course. The app combines dynamic data generation with robust user data management to create a personalized productivity experience for students.",
      images: ["bewell-1.jpg", "bewell-2.jpg"],
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
      title: "Generate",
      description: "CS 147L mobile app development project built with React Native, featuring dynamic data generation and customizable user settings.",
      technologies: ["React Native", "JavaScript", "Mobile Development", "Data Analytics"],
      githubUrl: "https://github.com",
      longDescription:
        "Generate is a student application developed as part of Stanford's CS 147L Mobile App Development course. The project focuses on creating dynamic, interactive mobile experiences while implementing robust user data management and real-time analytics capabilities.",
      images: ["generate-1.jpg", "generate-2.jpg"],
      features: [
        "Dynamic content generation based on user interactions",
        "Robust user data management with secure authentication",
        "Real-time analytics for tracking user engagement",
        "Customizable settings to personalize the app experience",
        "Optimized performance for smooth mobile interactions",
        "Clean, intuitive user interface following mobile design best practices",
      ],
      challenges:
        "Balancing dynamic data generation with application performance on mobile devices required careful optimization. We implemented efficient state management and memoization strategies to ensure smooth user interactions. Creating an intuitive interface that accommodates complex features while remaining accessible was also challenging.",
      outcome:
        "Successfully delivered a polished mobile application demonstrating proficiency in React Native development and user-centered design. The project showcases the ability to integrate multiple complex features while maintaining excellent application performance.",
    },
    {
      title: "Class Project 1",
      description: "Details coming soon - This project will showcase advanced computer science concepts and practical applications.",
      technologies: ["To be updated"],
      longDescription:
        "This class project is currently in development. More details will be added upon completion, including technical implementation details, challenges faced, and outcomes achieved.",
      images: [],
      features: [
        "Feature details will be added upon project completion",
      ],
      challenges:
        "Challenge details will be documented as the project progresses.",
      outcome:
        "Outcome metrics and results will be shared once the project is complete.",
    },
    {
      title: "Class Project 2",
      description: "Details coming soon - This project will showcase advanced computer science concepts and practical applications.",
      technologies: ["To be updated"],
      longDescription:
        "This class project is currently in development. More details will be added upon completion, including technical implementation details, challenges faced, and outcomes achieved.",
      images: [],
      features: [
        "Feature details will be added upon project completion",
      ],
      challenges:
        "Challenge details will be documented as the project progresses.",
      outcome:
        "Outcome metrics and results will be shared once the project is complete.",
    },
    {
      title: "Class Project 3",
      description: "Details coming soon - This project will showcase advanced computer science concepts and practical applications.",
      technologies: ["To be updated"],
      longDescription:
        "This class project is currently in development. More details will be added upon completion, including technical implementation details, challenges faced, and outcomes achieved.",
      images: [],
      features: [
        "Feature details will be added upon project completion",
      ],
      challenges:
        "Challenge details will be documented as the project progresses.",
      outcome:
        "Outcome metrics and results will be shared once the project is complete.",
    },
    {
      title: "Class Project 4",
      description: "Details coming soon - This project will showcase advanced computer science concepts and practical applications.",
      technologies: ["To be updated"],
      longDescription:
        "This class project is currently in development. More details will be added upon completion, including technical implementation details, challenges faced, and outcomes achieved.",
      images: [],
      features: [
        "Feature details will be added upon project completion",
      ],
      challenges:
        "Challenge details will be documented as the project progresses.",
      outcome:
        "Outcome metrics and results will be shared once the project is complete.",
    },
    {
      title: "Class Project 5",
      description: "Details coming soon - This project will showcase advanced computer science concepts and practical applications.",
      technologies: ["To be updated"],
      longDescription:
        "This class project is currently in development. More details will be added upon completion, including technical implementation details, challenges faced, and outcomes achieved.",
      images: [],
      features: [
        "Feature details will be added upon project completion",
      ],
      challenges:
        "Challenge details will be documented as the project progresses.",
      outcome:
        "Outcome metrics and results will be shared once the project is complete.",
    },
  ];

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="2"
          title="Featured Projects"
          subtitle="Showcasing innovative solutions and technical excellence"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <ProjectModal project={selectedProject} open={modalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
