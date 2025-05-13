
import React, { useState, useEffect } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Sparkles, MousePointer, Images } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const TutorLogin = () => {
  const [activeTab, setActiveTab] = useState<string>('login');
  
  const tutorImages = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80", // Added Indian classroom
    "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80", // Added teaching scene
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Cycle through images every 15 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tutorImages.length);
    }, 15000);
    
    return () => clearInterval(imageInterval);
  }, []);

  const tutorResources = [
    "Class management tools",
    "Tamil Nadu NCERT curriculum guides",
    "Interactive teaching materials",
    "Student performance tracking",
    "Lesson planning templates",
    "Digital assessment tools"
  ];
  
  const [hoveredResource, setHoveredResource] = useState<number | null>(null);

  // Animation variants
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
  };

  return (
    <AuthLayout 
      image={tutorImages[currentImageIndex]}
      imageAlt="Teacher in classroom"
      backgroundClass="bg-gradient-to-r from-edu-lightGreen to-green-50"
      overlayColor="bg-black/20"
      className="md:grid-cols-3 lg:grid-cols-4 md:max-w-full h-full overflow-hidden" // Changed for landscape
    >
      <div className="flex flex-col h-full">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Book className="h-8 w-8 text-edu-green mr-2" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800">Tutor Portal</h1>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="ml-2"
          >
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </motion.div>
        </motion.div>
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="login" className="transition-all hover:scale-105 active:scale-95">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 2 }}>Login</motion.div>
            </TabsTrigger>
            <TabsTrigger value="register" className="transition-all hover:scale-105 active:scale-95">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 2 }}>Register</motion.div>
            </TabsTrigger>
            <TabsTrigger value="news" className="transition-all hover:scale-105 active:scale-95">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 2 }} className="flex items-center">
                Educational Updates
                <Badge variant="secondary" className="ml-1 bg-edu-lightGreen text-edu-green">New</Badge>
              </motion.div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Welcome, Educator!</h2>
              <motion.p 
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Access your teaching resources
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-edu-lightGreen rounded-lg border border-edu-green/20 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Images className="h-5 w-5 text-edu-green" />
                </motion.div>
                <h3 className="font-semibold text-edu-green">Tutor Resources</h3>
              </div>
              <ul className="text-sm space-y-1.5 text-gray-700 mt-2">
                {tutorResources.map((resource, index) => (
                  <motion.li 
                    key={index}
                    onMouseEnter={() => setHoveredResource(index)}
                    onMouseLeave={() => setHoveredResource(null)}
                    className="transition-all flex items-center"
                    whileHover={{ x: 5, color: "#2CB67D" }}
                    animate={{ 
                      backgroundColor: hoveredResource === index ? 'rgba(44, 182, 125, 0.1)' : 'transparent',
                      borderRadius: '4px',
                      padding: '2px 4px'
                    }}
                  >
                    <MousePointer className="h-3 w-3 mr-1 text-edu-green inline" /> {resource}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <LoginForm userType="tutor" />
            </motion.div>
            
            <div className="text-center mt-4">
              <motion.p 
                className="text-gray-600 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                New tutor?{" "}
                <motion.button 
                  onClick={() => setActiveTab("register")}
                  className="text-edu-green hover:underline font-medium transition-all hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register your profile
                </motion.button>
              </motion.p>
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Join as a Tutor</h2>
              <p className="text-gray-500">Create your educator account</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <RegisterForm userType="tutor" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6"
            >
              <p className="text-gray-600 text-sm">
                Already registered?{" "}
                <motion.button 
                  onClick={() => setActiveTab("login")}
                  className="text-edu-green hover:underline font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login here
                </motion.button>
              </p>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="news">
            <NewsFeed color="green" />
          </TabsContent>
        </Tabs>

        {/* Decorative floating elements */}
        <div className="absolute bottom-5 right-5 opacity-70">
          <motion.div
            animate={floatingAnimation}
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-green-100 to-green-300/30 blur-xl"
          />
        </div>
        <div className="absolute top-10 right-10 opacity-50">
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { delay: 1, ...floatingAnimation.transition }
            }}
            className="w-16 h-16 rounded-full bg-gradient-to-bl from-green-200 to-teal-100/20 blur-lg"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default TutorLogin;
