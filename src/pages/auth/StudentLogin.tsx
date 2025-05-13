
import React, { useState, useEffect } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import MathCaptcha from '../../components/auth/MathCaptcha';
import NewsFeed from '../../components/news/NewsFeed';
import SolarSystem from '../../components/animations/SolarSystem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Sparkles, MousePointer, Wand, Stars, BookOpen, Brain } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const StudentLogin = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('login');
  const [currentTip, setCurrentTip] = useState<string>('');
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [showSolarSystem, setShowSolarSystem] = useState(false);
  const { toast } = useToast();
  
  // Background gradients that will rotate
  const backgroundGradients = [
    "bg-gradient-to-r from-edu-lightOrange to-orange-50",
    "bg-gradient-to-r from-orange-100 to-yellow-50",
    "bg-gradient-to-br from-orange-50 to-amber-100",
    "bg-gradient-to-bl from-yellow-50 to-orange-100",
  ];
  
  // Study tips for students
  const tips = [
    "Remember to revise your lessons daily for better retention!",
    "Taking short breaks between study sessions can help you focus better.",
    "Try teaching what you've learned to someone else - it's a great way to master a subject.",
    "Stay hydrated while studying - it helps your brain function better!",
    "Creating colorful mind maps can help you memorize complex information.",
    "Use the Pomodoro technique: study for 25 minutes, then take a 5-minute break.",
    "Set specific goals for each study session to stay motivated.",
    "Get a good night's sleep before exams - it helps your brain process information.",
    "Practice previous years' question papers to understand exam patterns.",
    "Join study groups to discuss difficult concepts with your peers."
  ];
  
  useEffect(() => {
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    
    // Change tip every 10 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 10000);
    
    // Rotate background colors every 15 seconds
    const bgInterval = setInterval(() => {
      setBackgroundColorIndex(prev => (prev + 1) % backgroundGradients.length);
    }, 15000);

    // Show solar system after a short delay
    const solarSystemTimeout = setTimeout(() => {
      setShowSolarSystem(true);
    }, 800);
    
    return () => {
      clearInterval(tipInterval);
      clearInterval(bgInterval);
      clearTimeout(solarSystemTimeout);
    };
  }, []);
  
  const handleCaptchaVerification = (isCorrect: boolean) => {
    setCaptchaVerified(isCorrect);
    
    if (isCorrect) {
      toast({
        title: "Verification successful",
        description: "Good job solving the math problem!",
      });
    }
  };

  const studentImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef132bafdf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Cycle through images every 15 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % studentImages.length);
    }, 15000);
    
    return () => clearInterval(imageInterval);
  }, []);

  // Animation variants for page elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Floating icons animation
  const floatingIcons = [
    { Icon: BookOpen, color: "text-edu-orange", delay: 0 },
    { Icon: Brain, color: "text-edu-orange", delay: 0.5 },
    { Icon: Stars, color: "text-yellow-500", delay: 1 }
  ];

  return (
    <AuthLayout 
      image={studentImages[currentImageIndex]}
      imageAlt="Student studying"
      backgroundClass={backgroundGradients[backgroundColorIndex]}
      className="md:grid-cols-3 md:max-w-7xl" // Changed to 1:2 ratio
    >
      <motion.div 
        className="flex flex-col h-full relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <School className="h-8 w-8 text-edu-orange mr-2" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800">Student Portal</h1>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="ml-2"
          >
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </motion.div>
        </motion.div>

        {/* Solar System Animation */}
        {showSolarSystem && (
          <motion.div 
            className="w-full h-48 mb-4 relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[#030014] rounded-lg">
              <SolarSystem />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-white text-xs text-center font-medium">
                ✨ Explore the wonders of our solar system ✨
              </p>
            </div>
            <motion.button 
              className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-full p-1 text-xs"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('/dashboard/student', '_self')}
            >
              Learn more
            </motion.button>
          </motion.div>
        )}
        
        {/* Floating icons in background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute ${icon.color}`}
              initial={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100, 
                opacity: 0 
              }}
              animate={{ 
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100,
                  Math.random() * 100 - 50
                ], 
                y: [
                  Math.random() * 100,
                  Math.random() * 100 - 50,
                  Math.random() * 100
                ],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                delay: icon.delay,
                repeatType: "reverse"
              }}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
            >
              <icon.Icon className="h-8 w-8 opacity-20" />
            </motion.div>
          ))}
        </div>
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full relative z-10">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <TabsTrigger value="login" className="transition-all hover:scale-105 active:scale-95">Login</TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <TabsTrigger value="register" className="transition-all hover:scale-105 active:scale-95">Register</TabsTrigger>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <TabsTrigger value="news" className="transition-all hover:scale-105 active:scale-95">
                School News
                <Badge variant="secondary" className="ml-1 bg-edu-lightOrange text-edu-orange">New</Badge>
              </TabsTrigger>
            </motion.div>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <motion.div 
              className="text-center mb-6"
              variants={itemVariants}
            >
              <h2 className="text-xl font-semibold">Welcome back, student!</h2>
              <motion.p 
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Log in to access your learning materials
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-edu-orange/30 mb-6 shadow-md"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255,126,71,0.1)" }}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Wand className="h-5 w-5 text-edu-orange mr-2" />
                </motion.div>
                <h3 className="font-semibold text-edu-orange">Study Tip of the Day</h3>
              </div>
              <motion.p 
                className="text-sm text-gray-700 mt-2"
                key={currentTip} // Key helps React recognize this as a new element when tip changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {currentTip}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-4 transform"
              whileHover={{ boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <MathCaptcha 
                onVerification={handleCaptchaVerification} 
                className="mb-6"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-5"
              whileHover={{ boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <LoginForm 
                userType="student"
                className={captchaVerified ? "opacity-100" : "opacity-50 pointer-events-none"}
              />
            </motion.div>
            
            {!captchaVerified && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-3 bg-orange-50 border border-edu-orange rounded-md text-sm text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MousePointer className="h-4 w-4 mr-1 text-edu-orange" />
                  </motion.div>
                  <span>Please complete the math verification above to enable login</span>
                </div>
              </motion.div>
            )}
            
            <div className="text-center mt-4">
              <motion.p 
                className="text-gray-600 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Don't have an account yet?{" "}
                <motion.button 
                  onClick={() => setActiveTab("register")}
                  className="text-edu-orange hover:underline font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register now
                </motion.button>
              </motion.p>
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <motion.div 
              className="text-center mb-6"
              variants={itemVariants}
            >
              <h2 className="text-xl font-semibold">Join as a Student</h2>
              <p className="text-gray-500">Create your account to start learning</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-5"
              whileHover={{ boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <RegisterForm userType="student" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6"
            >
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <motion.button 
                  onClick={() => setActiveTab("login")}
                  className="text-edu-orange hover:underline font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login here
                </motion.button>
              </p>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="news">
            <NewsFeed color="orange" />
          </TabsContent>
        </Tabs>
      </motion.div>
    </AuthLayout>
  );
};

export default StudentLogin;
