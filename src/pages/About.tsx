import { useState, useEffect } from 'react';
import Section from '@/components/Section';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { RESUME_URL } from '@/config/constants';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const About = () => {
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const profileImages = [
    "/images/DSC_6056.JPG",
    "/images/DSC_6794.JPG",
    "/images/DSC_0540.JPG",
    "/images/HI.JPG",
    "/images/DSC_0452.JPG",
    "/images/DSC_0454.JPG",
    "/images/DSC_6055.JPG",
    "/images/DSC_6056.JPG"
  ];

  useEffect(() => {
    let interval: number;
    
    if (autoPlayEnabled) {
      interval = setInterval(() => {
        const carouselElement = document.querySelector('[data-carousel-next]');
        if (carouselElement) {
          (carouselElement as HTMLButtonElement).click();
        }
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlayEnabled]);

  return (
    <>
      <Section title="About Me" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Image Section */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedCard className="p-6 mb-6" glowOnHover>
                  <Carousel 
                    className="w-full" 
                    onMouseEnter={() => setAutoPlayEnabled(false)}
                    onMouseLeave={() => setAutoPlayEnabled(true)}
                  >
                    <CarouselContent className="h-full">
                      {profileImages.map((image, index) => (
                        <CarouselItem key={index} className="flex items-center justify-center">
                          <div className="aspect-[3/4] w-full max-h-[500px] rounded-lg relative overflow-hidden shadow-lg">
                            <img 
                              src={image} 
                              alt={`Shreeraj Mummidivarapu ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                              loading="lazy"
                            />
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 0.6 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
                      <CarouselPrevious className="relative h-9 w-9 rounded-full bg-primary/80 hover:bg-primary text-white shadow-md" />
                      <CarouselNext className="relative h-9 w-9 rounded-full bg-primary/80 hover:bg-primary text-white shadow-md" data-carousel-next />
                    </div>
                  </Carousel>
                </AnimatedCard>
              </motion.div>
              
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-3">Shreeraj Mummidivarapu</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Edge AI Developer & Researcher
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
                  <a 
                    href="tel:+918143272388" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8143272388
                  </a>
                  <span className="text-muted-foreground hidden sm:inline">|</span>
                  <a 
                    href="mailto:shree.xai.dev@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    shree.xai.dev@gmail.com
                  </a>
                </div>
                <div className="mt-4">
                  <a 
                    href={RESUME_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="default" variant="outline" className="border-primary/50 hover:border-primary">
                      View Resume
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Journey Section */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedCard className="p-8 h-full" glowOnHover>
                  <h3 className="text-3xl font-bold mb-6 text-gradient inline-block">My Journey</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate AI/ML developer and researcher currently pursuing B.Tech in Computer Science and Engineering at IIIT Sricity. With a CGPA of 8.29/10, I've built a strong foundation in computer science while actively contributing to cutting-edge research and development in artificial intelligence.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    As a Research Associate at EIDS Lab, I lead initiatives in Federated Learning and Explainable AI for critical systems, while simultaneously working as an AI Dev Intern at Vinfinet Technologies developing Generative AI multimodal models for sports analysis. My expertise spans across multiple domains including healthcare automation, edge AI optimization, and UAV networks for disaster management.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Through my professional journey, I've developed expertise in machine learning, deep learning, and AI applications across various domains. I've successfully built AI-driven systems with proven impact - from achieving 87.4% accuracy in infectious disease forecasting to improving operational efficiency by 40% in healthcare systems and boosting data throughput by 85% in document processing pipelines.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm particularly passionate about working with cutting-edge technologies like LangGraph for autonomous AI systems, advancing healthcare automation through intelligent solutions, and contributing to research in IoT-enabled healthcare and underground mining safety. My goal is to create AI systems that are not only technically advanced but also accessible and beneficial to everyone.
                  </p>
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
      </Section>
      <Footer />
    </>
  );
};

export default About;
