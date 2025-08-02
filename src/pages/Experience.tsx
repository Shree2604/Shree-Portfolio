import { useState } from 'react';
import Section from '@/components/Section';
import { AnimatedCard } from '@/components/AnimatedCard';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: "AI Dev Intern",
    company: "Vinfinet Technologies Pvt Ltd",
    location: "Bengaluru, Karnataka, India · Remote",
    period: "Jul 2025 – Present",
    description: [
      "Developing Generative AI multimodal models for advanced sports analysis.",
      "Building Agentic AI pipelines using LangGraph, LangChain, and RAG for intelligent decision-making.",
      "Integrating YOLO-based vision systems with natural language understanding for real-time sports insights.",
      "Optimizing Python-based workflows for scalable deployment."
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
    title: "Club Lead",
    organization: "Epoch (AI/ML Club, IIIT SriCity)",
    description: "Coordinated AI/ML events and managed industry partnerships.",
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
    description: "Led outreach and secured sponsors for the annual fest Abhisarga.",
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
                        ? "max-h-96 opacity-100"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
