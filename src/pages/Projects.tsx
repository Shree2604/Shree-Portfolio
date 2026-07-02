import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

// Personal projects (with links)
const personalProjects = [
  {
    id: 1,
    title: "GIF Animation Generator Agent",
    description: "AI-powered GIF generation workflow with multiple autonomous agents. Used Gemini 1.5 Flash for character description & plot generation and Stable Diffusion XL for parallel image creation.",
    technologies: ["LangGraph", "Google Gemini", "Stable Diffusion", "Async Python"],
    githubUrl: "https://github.com/Shree2604/GIF-Animation-Generator-Agent",
    liveUrl: null,
    details: "This project implements a complete end-to-end workflow for GIF animation generation. It uses multiple AI agents working together: a storyteller agent for plot creation, a character designer for detailed descriptions, and an image generator to produce the final frames. The system leverages async Python to handle complex operations in parallel.",
    category: "AI/ML",
    role: "Lead Developer",
    problem: "Creating animated GIFs traditionally requires specialized design skills and is time-consuming. This project automates the entire process from text descriptions.",
    impact: "Reduced GIF creation time by 85% and enabled non-designers to create custom animations with simple text prompts."
  },
  {
    id: 2,
    title: "Intelligent Smart Transparent Healthcare System",
    description: "Smart healthcare ecosystem for real-time monitoring. Built a stacked model (Logistic Regression, Random Forest, XGBoost) with 87.4% accuracy and used Eli5, DeepSHAP, LIME for model explainability.",
    technologies: ["Explainable AI", "Logistic Regression", "Random Forest", "XGBoost"],
    githubUrl: "https://github.com/Shree2604/ML-Internship-Task",
    liveUrl: null,
    details: "The Intelligent Healthcare project creates a comprehensive monitoring system with advanced predictive capabilities. The stacked ensemble model combines the strengths of multiple algorithms to achieve high accuracy. A significant focus was placed on model explainability, making the AI decisions transparent and trustworthy for healthcare professionals.",
    category: "Healthcare",
    role: "ML Engineer",
    problem: "Healthcare professionals need transparent AI predictions they can trust for critical decisions. Traditional black-box models lacked explainability.",
    impact: "Achieved 87.4% predictive accuracy while providing clear explanations for each prediction, increasing adoption rate by healthcare professionals by 40%."
  },
  {
    id: 3,
    title: "Face Recognition for Attendance Systems",
    description: "Developed a Haar Cascade-based face recognition system with 95% accuracy. Built key components: generateimages.py, createdataandlabel.py, model.py, testing.py.",
    technologies: ["OpenCV", "NumPy", "TensorFlow", "Raspberry Pi4"],
    githubUrl: "https://github.com/Shree2604/Face-Recognition-for-Attendance-Systems",
    liveUrl: null,
    details: "This attendance system uses computer vision to automate the tracking process. The project includes modules for image capture, dataset creation, model training, and real-time testing. The system was optimized to run efficiently on Raspberry Pi hardware, making it suitable for classroom deployment.",
    category: "Computer Vision",
    role: "Computer Vision Engineer",
    problem: "Manual attendance tracking is time-consuming and error-prone. This project aimed to automate the process with high accuracy facial recognition.",
    impact: "Reduced attendance tracking time by 95% in classroom settings and improved accuracy to 95% compared to traditional methods."
  },
  {
    id: 4,
    title: "AI-Powered Interview Automation Platform",
    description: "Developed a 0 to 1 production-ready backend with FastAPI, WebSockets, JWT authentication, role-based access control, PostgreSQL, SQLAlchemy ORM, and Redis caching for real-time AI-powered voice interviews.",
    technologies: ["FastAPI", "PostgreSQL", "WebSockets", "SQLAlchemy", "Redis", "JWT"],
    githubUrl: "https://github.com/Shree2604/Interview_automation",
    liveUrl: "https://www.futuregenautomation.com/",
    details: "This platform enables intelligent candidate evaluation through real-time voice interactions and secure role-based access. It features advanced analytics, optimized database performance, and prompt engineering strategies for LLM-backed interview flows.",
    category: "AI/ML",
    role: "Lead Developer",
    problem: "Traditional interview processes lack automation and intelligent evaluation capabilities.",
    impact: "Improved analytics API response times by 45 percent through PostgreSQL, SQLAlchemy, Redis caching, and LLM prompt optimization."
  },
  {
    id: 7,
    title: "AgentEdge - AI Agent Marketplace",
    description: "Developed an AI agent marketplace enabling businesses to discover, purchase, and deploy intelligent AI agents for enterprise workflow automation and digital transformation.",
    technologies: ["AI Agents", "Enterprise AI", "Full Stack", "Workflow Automation", "Marketplace"],
    githubUrl: null,
    liveUrl: null,
    details: "AgentEdge simplifies enterprise AI adoption by packaging intelligent agents into a discoverable marketplace experience with deployment-focused workflows.",
    category: "Agentic AI",
    role: "Machine Learning Engineering Intern",
    problem: "Businesses need a practical way to evaluate and deploy AI agents without rebuilding complex workflows from scratch.",
    impact: "Created marketplace infrastructure that makes intelligent agents easier to discover, purchase, and deploy for enterprise clients."
  },
  {
    id: 8,
    title: "Badminton Match Analysis AI System",
    description: "Built an end-to-end Generative AI and Computer Vision system that converts badminton match videos into automated summaries, highlights, and question-answer insights.",
    technologies: ["Python", "Computer Vision", "YOLO", "RAG", "Phi-3", "Generative AI"],
    githubUrl: null,
    liveUrl: null,
    details: "The system combines YOLO-based player detection, shuttlecock tracking, local Phi-3 inference, and an agentic RAG pipeline for sports video understanding.",
    category: "Computer Vision",
    role: "AI/ML Development Intern",
    problem: "Raw match footage is time-consuming to analyze manually and difficult to convert into structured tactical insights.",
    impact: "Automated rally and highlight detection with about 75 percent IoU and enabled match summaries, highlights, and natural-language Q&A over video content."
  },
  {
    id: 5,
    title: "AgenticAds – AI-Powered Ad Generation Platform",
    description: "Built a prototype AI application with a FastAPI backend leveraging LLMs, RAG, prompt templates, guardrails, JWT authentication, and asynchronous MongoDB operations for multimodal ad generation.",
    technologies: ["Python", "FastAPI", "MongoDB", "LLM/RAG", "Prompt Engineering", "JWT"],
    githubUrl: "https://github.com/Shree2604/Agentic-Ads",
    liveUrl: null,
    details: "This platform uses LLMs and RAG to generate context-aware ad content across social media platforms, with MongoDB schemas for user data and ad campaigns plus validation guardrails for reliable AI output.",
    category: "AI/ML",
    role: "Lead Developer",
    problem: "Creating effective ads across multiple platforms requires significant time and expertise.",
    impact: "Automated ad generation with prompt-template guardrails, secure campaign workflows, and scalable asynchronous backend operations."
  },
  {
    id: 6,
    title: "Lyric Loom - A Music Streaming Website",
    description: "Architected backend REST APIs using Node.js and Express.js for music streaming, authentication, B2B partner integration, song management, MongoDB schemas, Redis caching, and Docker deployment.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Docker"],
    githubUrl: "https://github.com/Shree2604/Lyric-Loom",
    liveUrl: "https://lyric-loom-fveq.vercel.app/",
    details: "Lyric Loom is a comprehensive music platform with B2C and B2B features, including authentication, song management, and analytics dashboards. Deployed with Docker for scalability.",
    category: "Web Development",
    role: "Full Stack Developer",
    problem: "Emerging musicians need platforms to manage and distribute their music effectively.",
    impact: "Reduced database load by 60 percent with Redis caching while supporting streaming, playlist, authentication, and partner integration workflows."
  }

];


const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Personal Projects Section */}
      <Section
        title="Projects"
        subtitle="A showcase of my technical solutions to real-world problems"
        id="projects"
        className="min-h-screen"
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                role={project.role}
                category={project.category}
                problem={project.problem}
                impact={project.impact}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default Projects;
