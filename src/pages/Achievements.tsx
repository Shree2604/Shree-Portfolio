
import { useState } from 'react';
import Section from '@/components/Section';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const achievements = [
  {
    title: "Published 3 Quality Research Papers",
    description: "Published research papers in IEEE ICCCNT 2025, ITI 2025 conferences, and contributed to Springer book chapter on Industry 5.0 data analytics covering Federated Learning, AI/ML, and Explainable AI.",
    icon: "📚",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Top 10 in International Healthcare Hackathon",
    description: "Secured a top 10 position among teams in an international healthcare hackathon, developing innovative AI/ML-powered healthcare solutions that addressed real-world medical challenges.",
    icon: "🏥",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Led & Organized International BitNBuild Hackathon",
    description: "Successfully led and organized BitNBuild, an international hackathon that brought together developers, researchers, and innovators from around the world to build cutting-edge solutions using AI/ML technologies and blockchain integration.",
    icon: "🚀",
    color: "from-blue-500/20 to-cyan-500/20"
  },
];

const otherAchievements = [
  "Recognized for contributions to open-source AI projects",
  "Led successful AI workshops for beginners",
  "Mentored junior developers in AI/ML technologies",
  "Created popular educational content on AI/ML concepts",
  "Achieved Top 1% ranking in GCCP Cloud Campaign 2024",
  "Active contributor to research communities and technical forums"
];

const Achievements = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Section title="Achievements" subtitle="Recognition of my work and contributions" id="achievements">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Major Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AnimatedCard
                  className={cn(
                    "p-6 h-full flex flex-col transition-transform duration-300",
                    hoveredCard === index && "scale-[1.03]"
                  )}
                  glowOnHover
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${achievement.color}`}>
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  
                  <div 
                    className={cn(
                      "mt-4 flex items-center text-primary text-sm font-medium transition-opacity duration-300",
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Additional Highlights</h3>
            
            <AnimatedCard className="p-6" glowOnHover>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherAchievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;
