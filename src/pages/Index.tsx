
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { RESUME_URL } from '@/config/constants';
import ParticlesBackground from '@/components/ParticlesBackground';
import Section from '@/components/Section';
import SocialLinks from '@/components/SocialLinks';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import SkillBadge from '@/components/SkillBadge';
import { Card, CardContent } from '@/components/ui/card';

// Featured projects data
// Featured projects data
const featuredProjects = [
  {
    title: "AI-Powered Interview Automation Platform",
    description: "Engineered an AI-driven interview automation system leveraging FastAPI and React, enabling intelligent candidate evaluation, real-time voice interactions, and secure role-based access via JWT.",
    tags: ["FastAPI", "PostgreSQL", "WebSockets", "React", "JWT"],
    github: "https://github.com/Shree2604/Interview_automation",
    liveUrl: "https://www.futuregenautomation.com/"
  },
  {
    title: "AgenticAds – AI-Powered Ad Generation Platform",
    description: "Developed a multimodal advertising platform integrating Agentic AI and RAG pipelines for generating context-aware text, image, and video ads tailored to Instagram, LinkedIn, Twitter, and YouTube.",
    tags: ["React", "FastAPI", "Python", "MongoDB", "JWT"],
    github: "https://github.com/Shree2604/Agentic-Ads"
  },
  {
    title: "Lyric Loom - A Music Streaming Website",
    description: "Developed a full-stack music platform with B2C interface, B2B partner API integration, JWT authentication, and song management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Docker"],
    github: "https://github.com/Shree2604/Lyric-Loom",
    liveUrl: "https://lyric-loom-fveq.vercel.app/"
  }
];

// Featured blog posts and publications
const featuredPosts = [
  {
    type: "research",
    title: "X-FedWCluster: Explainable Federated Learning for Proactive Health Monitoring of Underground Miners via UAV Networks",
    excerpt: "Accepted in IEEE ICCCNT 2025 conference - A novel federated learning approach for underground miner health monitoring using UAV networks.",
    date: "2025"
  },
  {
    type: "research",
    title: "An Explainable AI System for Real-Time Disease Prediction in IoT-Enabled Smart Healthcare",
    excerpt: "Accepted in ITI 2025 conference - Real-time disease prediction system with explainable AI for smart healthcare applications.",
    date: "2025"
  },

];

// Skills
const skills = [
  // Programming Languages
  "Python", "C++", "Java", "SQL",

  // Tools & Frameworks
  "Git", "GitHub", "Matlab", "Linux", "Amazon Web Services", "Flask", "Django",
  "Hugging Face", "Streamlit", "MongoDB", "Express.js", "React.js", "Node.js",
  "Docker", "Google Gemini",

  // Machine Learning & AI
  "TensorFlow", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "LangChain",
  "LangGraph", "LLMs", "Computer Vision", "Natural Language Processing", "MLOps",
  "Federated Learning", "Explainable AI", "Edge AI Optimization", "UAV Networks",

  // Research Areas
  "IoT-Enabled Healthcare", "Underground Mining Safety", "Smart Healthcare Systems",

  // Relevant Coursework
  "Data Structures", "OOPS", "Operating Systems", "DBMS",
  "Computer Networks", "Cloud Computing"
];




// Coursework data
const coursework = [
  {
    type: "Specialization",
    title: "Machine Learning Specialization",
    provider: "Coursera, Andrew Ng",
    credentialLink: "#"
  },
  {
    type: "Specialization",
    title: "Deep Learning Specialization",
    provider: "Coursera, Andrew Ng",
    credentialLink: "#"
  },
  {
    type: "Course",
    title: "Langchain 101",
    provider: "Langchain Academy",
    credentialLink: "#"
  },
  {
    type: "Course",
    title: "Langgraph 101",
    provider: "Langgraph Academy",
    credentialLink: "#"
  }
];

const Index = () => {
  const [visitorCount, setVisitorCount] = useState(1);
  
  useEffect(() => {
    // Simulate visitor count (would normally come from a database)
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
    } else {
      // Generate a realistic starting number
      const baseCount = Math.floor(Math.random() * 500) + 1000;
      localStorage.setItem('visitorCount', baseCount.toString());
      setVisitorCount(baseCount);
    }
    
    // Simulate occasional visitor increases
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        return newCount;
      });
    }, Math.floor(Math.random() * 60000) + 30000); // Random interval between 30-90 seconds
    
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.05,
        duration: 0.5,
      }
    })
  };

  return (
    <>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <Section className="flex flex-col justify-center items-center text-center relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-8">
              {/* Visitor counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-4 right-2 sm:top-6 sm:right-3 md:top-10 md:right-10 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2"
              >
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>{visitorCount.toLocaleString()} visitors</span>
              </motion.div>
              
              {/* Enhanced name container with background */}
              <div className="rounded-xl bg-background/70 backdrop-blur-md p-3 sm:p-4 md:p-6 mb-8 shadow-lg border border-primary/20 inline-block">
                {/* Animated name with letter-by-letter animation - IMPROVED VISIBILITY */}
                <div className="overflow-hidden flex flex-wrap justify-center mb-4">
                  {"ShreeRaj Mummidivarapu".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterAnimation}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
                      style={{ 
                        display: 'inline-block',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)' 
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-muted-foreground font-orbitron" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    Agentic , Edge & Transparent AI Researcher 
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.7 }}
                  className="w-full max-w-xl mx-auto"
                >
                  <div className="text-primary text-lg md:text-xl lg:text-2xl mb-8" style={{ textShadow: '0 0 8px rgba(14, 165, 233, 0.5)' }}>
                   Making AI Accessible to Everyone
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.7 }}
                className="w-full max-w-xl mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                  <Link to="/about">
                    <Button size="lg" className="group">
                      About Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button size="lg" variant="secondary">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Social links centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="flex justify-center"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Skills" subtitle="Technologies and tools I specialize in" className="bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillBadge name={skill} className="text-sm py-1.5 px-3" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section title="Featured Projects" subtitle="Selected works from my portfolio" className="bg-gradient-to-b from-background/95 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="h-full overflow-hidden">
                  {/* Image section removed */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <SkillBadge name={tag} className="text-xs py-1 px-2" />
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <Link to="/projects">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button>
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>



      {/* Coursework Section */}
      <Section title="Completed Coursework" subtitle="Continuous learning and professional development" className="bg-gradient-to-b from-secondary/5 to-background/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coursework.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                        {course.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.provider}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Articles Section - renamed to "Featured Publications & Blogs" */}
      <Section title="Featured Research & Publications" subtitle="Research papers, publications and insights in AI and technology" className="bg-gradient-to-b from-background/95 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${
                        post.type === "research" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                        post.type === "publication" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
                        "bg-primary/20 text-primary"
                      } text-xs px-2 py-1 rounded`}>
                        {post.type === "research" ? "Research Paper" : post.type === "publication" ? "Publication" : "Blog Post"}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button>
                View All Research & Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact Me Overview Section */}
      <Section title="Let's Connect" subtitle="Reach out for collaborations or opportunities" className="bg-gradient-to-b from-background/95 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-lg mb-8">
              Currently serving as Research Associate at EIDS Lab and AI Dev Intern at Vinfinet Technologies. I'm open to research collaborations, consulting opportunities, and full-time positions in AI/ML research, Agentic AI development, and Healthcare AI innovation. Let's connect to explore how we can advance AI together.
            </p>
            
            <div className="mb-8">
              <SocialLinks />
            </div>
            
            <Link to="/contact">
              <Button size="lg">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default Index;
