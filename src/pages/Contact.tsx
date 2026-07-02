import { useState, useEffect, useRef } from 'react';
import Section from '@/components/Section';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { File, Github, Linkedin, Mail, Phone, Send, MapPin } from 'lucide-react';
import { RESUME_URL, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/config/constants';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
// @ts-ignore - EmailJS types not available
import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent } from 'react';

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
    value: 'github.com/Shree2604',
    href: 'https://github.com/Shree2604',
    color: 'bg-gray-800'
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/m-shreeraj',
    href: 'https://linkedin.com/in/m-shreeraj',
    color: 'bg-blue-600'
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'IIIT Email',
    value: 'shreeraj.m22@iiits.in',
    href: 'mailto:shreeraj.m22@iiits.in',
    color: 'bg-red-600'
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'shree.xai.dev@gmail.com',
    href: 'mailto:shree.xai.dev@gmail.com',
    color: 'bg-red-500'
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+91 8143272388',
    href: 'tel:+918143272388',
    color: 'bg-green-600'
  },
  {
    icon: <File className="h-5 w-5" />,
    label: 'Resume',
    value: 'View/Download Resume',
    href: RESUME_URL,
    color: 'bg-purple-600'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Initialize EmailJS with proper configuration for v4
  useEffect(() => {
    // Log all credentials for debugging
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', EMAILJS_PUBLIC_KEY);
    
    // Initialize EmailJS with development options
    // @ts-ignore - EmailJS types not available
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
      blockHeadless: false // Required for development testing
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // @ts-ignore - EmailJS types not available
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
          variant: "default",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was an error sending your message. Please try again or contact me directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Section 
        title="Contact Me" 
        subtitle="Let's connect and discuss how we can work together" 
        id="contact"
        className="bg-gradient-to-b from-background via-background to-secondary/10"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Block 1: Contact Information & Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex justify-center"
            >
              <AnimatedCard className="p-6 w-full h-full min-h-[480px] flex flex-col" glowOnHover>
                <motion.h3
                  className="text-xl font-bold mb-4 text-gradient text-center"
                  variants={fadeInUp}
                >
                  Get In Touch 🚀
                </motion.h3>
                <motion.p
                  className="text-muted-foreground mb-6 text-center text-sm flex-grow"
                  variants={fadeInUp}
                >
                  I'm always excited to discuss new projects, research collaborations, or opportunities in AI/ML development. Feel free to reach out through any of the channels below.
                </motion.p>

                <div className="space-y-3 flex-grow flex flex-col justify-center">
                  {socialLinks.map((link, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <AnimatedCard className="p-3 hover:bg-primary/5 transition-all duration-300">
                          <div className="flex items-center">
                            <div className={`${link.color} p-2 rounded-full mr-3`}>
                              {link.icon}
                            </div>
                            <div>
                              <div className="font-medium text-sm">{link.label}</div>
                              <div className="text-xs text-muted-foreground">{link.value}</div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>
            </motion.div>

            {/* Block 2: Current Focus & Professional Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <AnimatedCard className="p-6 w-full h-full min-h-[480px] flex flex-col" glowOnHover>
                <motion.h3
                  className="text-xl font-bold mb-4 text-gradient text-center"
                  variants={fadeInUp}
                >
                  Current Focus 📊
                </motion.h3>
                <motion.div className="space-y-4 flex-grow flex flex-col justify-center" variants={fadeInUp}>
                  <div className="text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Special Projects Lead</h4>
                    <p className="text-muted-foreground text-xs mb-3">
                      BioStack Platforms - Building the data layer for
                      <span className="text-primary font-medium"> AI-native healthcare</span>,
                      <span className="text-primary font-medium"> drug discovery</span>, and
                      <span className="text-primary font-medium"> medical AI post-training</span>.
                    </p>
                  </div>

                  <div className="text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Recent MLE Work</h4>
                    <p className="text-muted-foreground text-xs mb-3">
                      AutomationEdge - Architected production-grade RL environments and built AgentEdge for enterprise AI agent deployment.
                    </p>
                  </div>

                  <div className="text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Open to Opportunities</h4>
                    <p className="text-muted-foreground text-xs">
                      Open to
                      <span className="text-primary font-medium"> AI/ML engineering</span>,
                      <span className="text-primary font-medium"> RLHF systems</span>,
                      <span className="text-primary font-medium"> Agentic AI</span>, and
                      <span className="text-primary font-medium"> Healthcare AI innovation</span>.
                    </p>
                  </div>
                </motion.div>
              </AnimatedCard>
            </motion.div>

            {/* Block 3: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <AnimatedCard className="p-6 w-full h-full min-h-[480px] flex flex-col" glowOnHover>
                <h3 className="text-xl font-bold mb-4 text-gradient text-center">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-center" data-testid="contact-form">
                  <div className="flex-grow flex flex-col justify-center">
                    <label htmlFor="from_name" className="block text-xs font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-secondary/10 border-secondary/20 focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <label htmlFor="reply_to" className="block text-xs font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="bg-secondary/10 border-secondary/20 focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <label htmlFor="subject" className="block text-xs font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      className="bg-secondary/10 border-secondary/20 focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <label htmlFor="message" className="block text-xs font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="bg-secondary/10 border-secondary/20 focus:border-primary resize-none text-sm h-20"
                      required
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <Button type="submit" className="w-full text-sm" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-3 w-3" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                  <div className="text-xs text-center text-muted-foreground pt-1">
                    Your message will be sent directly to shree.xai.dev@gmail.com
                  </div>
                </form>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Contact;
