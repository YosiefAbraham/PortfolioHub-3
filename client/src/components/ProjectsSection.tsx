import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectDetail } from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: ProjectDetail[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "Built a comprehensive e-commerce solution from the ground up, handling everything from product catalog management to secure payment processing. The platform serves thousands of daily users and processes significant transaction volume with high reliability and performance.",
      images: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"],
      features: [
        "Real-time inventory tracking across multiple warehouses with automatic stock alerts",
        "Integrated payment processing with Stripe supporting multiple currencies",
        "Advanced search and filtering with faceted navigation and autocomplete",
        "Responsive design optimized for mobile shopping experience",
        "Comprehensive admin dashboard with sales analytics and reporting",
        "Automated email notifications for order confirmations and shipping updates",
      ],
      challenges:
        "One of the biggest challenges was implementing real-time inventory updates across multiple warehouses while maintaining data consistency. We solved this using event-driven architecture with Redis pub/sub and careful database transaction management. Another challenge was optimizing the search experience for large product catalogs, which we addressed using Elasticsearch with custom ranking algorithms.",
      outcome:
        "The platform now handles 10,000+ daily transactions with 99.9% uptime. Customer satisfaction scores improved by 40% compared to the legacy system, and checkout completion rates increased by 25%. The average page load time decreased from 3.2s to 0.8s through optimization efforts.",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and intelligent task prioritization.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A powerful project management application designed for distributed teams. The app provides real-time collaboration features, AI-powered task prioritization, and comprehensive project tracking capabilities. Built with scalability in mind to support teams of all sizes.",
      images: ["project2-1.jpg", "project2-2.jpg"],
      features: [
        "Real-time collaboration with WebSocket-based updates",
        "AI-powered task prioritization based on deadlines, dependencies, and team capacity",
        "Kanban boards with drag-and-drop functionality",
        "Time tracking and productivity analytics",
        "Team chat and file sharing integrated into each project",
        "Custom workflows and automation rules",
      ],
      challenges:
        "Managing real-time state synchronization across multiple clients while handling network interruptions was complex. We implemented optimistic updates with conflict resolution and automatic reconnection logic. The AI prioritization system required training on diverse project datasets to provide accurate recommendations.",
      outcome:
        "Adopted by 500+ teams with over 10,000 active users. Teams reported a 30% increase in project completion rates and 45% reduction in missed deadlines. The AI prioritization feature achieved 85% accuracy in predicting task urgency.",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform processing millions of events per day.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis", "Elasticsearch"],
      demoUrl: "https://example.com",
      longDescription:
        "An enterprise-grade analytics platform that processes and visualizes massive amounts of data in real-time. The dashboard provides customizable widgets, automated reporting, and advanced data exploration tools for business intelligence.",
      images: ["project3-1.jpg", "project3-2.jpg", "project3-3.jpg"],
      features: [
        "Real-time data streaming and visualization with sub-second latency",
        "Customizable dashboard layouts with drag-and-drop widgets",
        "Interactive charts using D3.js with drill-down capabilities",
        "Automated report generation and scheduling",
        "Advanced filtering and data segmentation",
        "Export functionality for reports in multiple formats",
      ],
      challenges:
        "Processing millions of events per day while maintaining real-time visualization performance required careful architecture. We used a combination of stream processing with Apache Kafka, caching strategies with Redis, and efficient data aggregation pipelines. Optimizing D3.js visualizations for large datasets was also crucial.",
      outcome:
        "Successfully processes 5 million events daily with average query response time under 200ms. Reduced manual reporting time by 80% through automation. The platform enabled data-driven decision making that led to 15% revenue growth for key clients.",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social networking platform with image sharing and real-time messaging.",
      technologies: ["React Native", "GraphQL", "AWS", "DynamoDB"],
      githubUrl: "https://github.com",
      longDescription:
        "A modern social networking application designed for mobile users. Features include photo and video sharing, real-time messaging, content discovery through personalized feeds, and social interactions like comments and reactions.",
      images: ["project4-1.jpg"],
      features: [
        "Photo and video sharing with filters and editing tools",
        "Real-time messaging with typing indicators and read receipts",
        "Personalized content feed using recommendation algorithms",
        "Stories feature with 24-hour expiration",
        "User profiles with customizable themes",
        "Push notifications for interactions and messages",
      ],
      challenges:
        "Building a responsive mobile experience that works smoothly on both iOS and Android was challenging. We had to optimize image loading and caching strategies to reduce data usage. The recommendation algorithm needed to balance content freshness with user preferences while avoiding filter bubbles.",
      outcome:
        "Reached 50,000 users within the first 6 months of launch. Average session duration of 25 minutes with 70% daily active user rate. The recommendation system achieved 60% engagement rate on suggested content.",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool helping marketers generate high-quality content.",
      technologies: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "An innovative AI-powered platform that helps content creators, marketers, and writers generate high-quality written content. The tool uses advanced natural language processing to create blog posts, social media content, product descriptions, and more.",
      images: ["project5-1.jpg", "project5-2.jpg"],
      features: [
        "Multiple content types: blog posts, social media, emails, product descriptions",
        "Tone and style customization to match brand voice",
        "SEO optimization with keyword integration",
        "Content templates for common use cases",
        "Multi-language support for global audiences",
        "Plagiarism detection and content uniqueness checking",
      ],
      challenges:
        "Fine-tuning the AI models to generate consistently high-quality, relevant content while avoiding generic outputs was the main challenge. We implemented a feedback loop system where users could rate outputs, which helped improve the models over time. Ensuring content originality and avoiding plagiarism required building custom detection algorithms.",
      outcome:
        "Generated over 100,000 pieces of content for 2,000+ users. Users reported 60% time savings in content creation while maintaining quality standards. The tool achieved a 4.5/5 average quality rating from users.",
    },
    {
      title: "Fitness Tracking Platform",
      description: "Comprehensive fitness tracking application with workout plans and nutrition tracking.",
      technologies: ["Flutter", "Firebase", "Node.js", "Chart.js"],
      demoUrl: "https://example.com",
      longDescription:
        "A complete fitness platform that helps users track their workouts, monitor nutrition, and achieve their health goals. The app provides personalized workout plans, progress tracking, and data visualization to keep users motivated.",
      images: ["project6-1.jpg", "project6-2.jpg"],
      features: [
        "Personalized workout plans based on fitness level and goals",
        "Exercise library with video demonstrations",
        "Nutrition tracking with barcode scanning",
        "Progress photos and measurements tracking",
        "Interactive charts showing fitness trends over time",
        "Social features for sharing achievements",
      ],
      challenges:
        "Creating an intuitive exercise logging experience that doesn't feel tedious was crucial. We implemented smart suggestions based on workout history and quick-add buttons for common exercises. Syncing data across devices in real-time while working offline required robust conflict resolution.",
      outcome:
        "Acquired 20,000 active users with 75% retention rate after 3 months. Users logged an average of 12 workouts per month. The platform helped users achieve measurable fitness improvements with 80% reporting progress toward their goals.",
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
