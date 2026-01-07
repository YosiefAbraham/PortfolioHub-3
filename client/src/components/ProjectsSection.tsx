import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectDetail } from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

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
        </div>

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
