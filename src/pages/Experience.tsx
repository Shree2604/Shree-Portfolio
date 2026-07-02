import { useState } from 'react';
import Section from '@/components/Section';
import { AnimatedCard } from '@/components/AnimatedCard';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: "Special Projects Lead (SPL)",
    company: "BioStack Platforms",
    location: "San Francisco, CA, USA - Remote",
    period: "Jul 2026 - Present",
    description: [
      "Joined BioStack's founding team to build the data layer for AI-native healthcare and drug discovery.",
      "Contributing to post-training infrastructure and RL environment design for medical AI systems.",
      "Working across healthcare data workflows, AI system design, and applied research translation."
    ],
    icon: "AI",
    color: "from-indigo-500/20 to-sky-500/20"
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "AutomationEdge",
    location: "Pune, Maharashtra, India - Hybrid",
    period: "Jan 2026 - Jun 2026",
    description: [
      "Architected six production-grade reinforcement learning environments across X-ray analysis, ADMET drug discovery, insulin dosing for T1D, ECG analysis, and breast cancer longitudinal patient data.",
      "Trained RLHF pipelines with GRPO and PPO on real-world biomedical data using NeMo Gym, TRL, and hud.ai.",
      "Developed AgentEdge, an AI agent marketplace for discovering, purchasing, and deploying intelligent AI agents for enterprise workflows."
    ],
    icon: "RL",
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    title: "Research Associate",
    company: "EIDS Lab, IIIT SriCity",
    location: "Andhra Pradesh, India · Onsite",
    period: "Sep 2025 – Present",
    description: [
      "Leading research initiatives in Federated Learning and Explainable AI applications for critical systems.",
      "Developing Edge AI Optimization techniques for resource-constrained environments and real-time processing.",
      "Researching UAV Networks for disaster management, focusing on autonomous coordination and communication protocols.",
      "Collaborating with interdisciplinary teams to develop AI solutions for emergency response and crisis management."
    ],
    icon: "🚁",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "AI/ML Development Intern",
    company: "Vinfinet Technologies Pvt Ltd",
    location: "Bengaluru, Karnataka, India - Hybrid",
    period: "Jul 2025 - Dec 2025",
    description: [
      "Built an end-to-end Generative AI and Computer Vision system for badminton match analysis, converting raw match videos into automated summaries, highlights, and question-answer insights.",
      "Implemented an agentic Retrieval-Augmented Generation pipeline with locally deployed Phi-3 small language model inference.",
      "Designed automated rally and highlight detection achieving about 75 percent IoU with hybrid YOLO-based player detection and shuttlecock tracking.",
      "Integrated the system into a modular web architecture for video analysis workflows."
    ],
    icon: "⚡",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Freelance AI Developer",
    company: "Innovation Labs & Startups",
    location: "Chennai, India · Remote",
    period: "Jan 2025 – Present",
    description: [
      "Delivering proof-of-concept (POC) solutions for early-stage startups.",
      "Developing AI-driven prototypes across computer vision, NLP, and multimodal analysis.",
      "Collaborating with founders to translate business requirements into technical deliverables.",
      "Rapid prototyping using Python, LangChain, and cloud-based AI APIs."
    ],
    icon: "🚀",
    color: "from-pink-500/20 to-red-500/20"
  },
  {
    title: "Generative AI / Agentic AI Intern",
    company: "ValueDX",
    location: "Maharashtra, India  · Remote",
    period: "Nov 2024 – Apr 2025",
    description: [
      "Built AI-driven patient booking system with symptom analysis; improved operational efficiency by 40% via automated triage and scheduling.",
      "Developed end-to-end document processing pipeline using Transformer models, RAG architecture, LangChain, and Streamlit to extract and classify invoices, contracts, and purchase orders with 95% accuracy.",
      "Engineered Doc-to-Excel conversion and Excel automation workflows, eliminating data redundancy and boosting data throughput by 85%.",
      "Implemented support ticket classification and automated response generation with a Streamlit interface."
    ],
    icon: "🤖",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Machine Learning Intern",
    company: "Civicraft",
    location: "Varanasi, India  · Remote",
    period: "Mar 2024 – Jul 2024",
    description: [
      "Built local language translation models using TensorFlow and PyTorch to support regional dialects.",
      "Integrated multilingual speech capabilities to enable voice-driven interaction across languages.",
      "Enhanced accessibility by adapting AI responses to diverse linguistic inputs and formats."
    ],
    icon: "🌐",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "ML & IoT Research Intern",
    company: "IIIT SriCity",
    location: "Andhra Pradesh, India  · Onsite",
    period: "Dec 2023 – Feb 2024",
    description: [
      "Developed a smart healthcare monitoring system with IoT sensor integration for real-time vital tracking.",
      "Built an ensemble model (Random Forest + XGBoost) achieving 87.4% prediction accuracy for health-related outcomes.",
      "Applied explainability techniques (SHAP, LIME, Eli5) to surface model reasoning and increase trust."
    ],
    icon: "🔬",
    color: "from-cyan-500/20 to-green-500/20"
  }
];

const positions = [
  {
    title: "Member",
    organization: "EIDS Lab, IIIT Sricity",
    description: "Authored two conference publications and a book chapter while contributing to a funded TIHAN, IIT Hyderabad project in edge intelligence and federated learning.",
    icon: "Lab"
  },
  {
    title: "Club Lead",
    organization: "Epoch (AI/ML Club, IIIT SriCity)",
    description: "Led a 25+ member team organizing 10+ AI/ML workshops and hackathons with 500+ participants.",
    icon: "🧠"
  },
  {
    title: "NSS Design Lead",
    organization: "IIIT SriCity",
    description: "Created visual content and collateral for institutional events.",
    icon: "🎨"
  },
  {
    title: "Sponsorship Lead",
    organization: "IIIT SriCity",
    description: "Managed sponsor partnerships for Abhisarga and achieved 150 percent of the funding target.",
    icon: "💼"
  }
];

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <Section
      title="Experience"
      subtitle="Professional work and research in applied AI/ML"
      id="experience"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <AnimatedCard
                  key={index}
                  className="p-6 glass"
                  glowOnHover
                >
                  <div
                    className="cursor-pointer flex justify-between items-start"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-gradient-to-r ${exp.color}`}
                      >
                        <span className="text-xl">{exp.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <div>
                      {expandedExperience === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "mt-4 pl-16 transition-all duration-300 overflow-hidden",
                      expandedExperience === index
                        ? "max-h-[40rem] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Positions of Responsibility</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {positions.map((position, idx) => (
                <AnimatedCard
                  key={idx}
                  className="p-6 h-full flex flex-col"
                  glowOnHover
                >
                  <div className="mb-4 text-3xl">{position.icon}</div>
                  <h4 className="text-xl font-semibold mb-1">{position.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{position.organization}</p>
                  <p className="text-sm text-muted-foreground/70 mt-auto">
                    {position.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
