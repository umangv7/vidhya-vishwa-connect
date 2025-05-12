
import React, { useState, useEffect } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import MathCaptcha from '../../components/auth/MathCaptcha';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Sparkles, MousePointer, Wand } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const StudentLogin = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('login');
  const [currentTip, setCurrentTip] = useState<string>('');
  const { toast } = useToast();
  
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
    const interval = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 10000);
    
    return () => clearInterval(interval);
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

  return (
    <AuthLayout 
      image={studentImages[currentImageIndex]}
      imageAlt="Student studying"
      backgroundClass="bg-gradient-to-r from-edu-lightOrange to-orange-50"
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
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="news">
              School News
              <Badge variant="secondary" className="ml-1 bg-edu-lightOrange text-edu-orange">New</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Welcome back, student!</h2>
              <motion.p 
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Log in to access your learning materials
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-orange-50 rounded-lg border border-edu-orange/30 mb-6"
              whileHover={{ scale: 1.02 }}
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
              >
                <div className="flex items-center justify-center">
                  <MousePointer className="h-4 w-4 mr-1 text-edu-orange" />
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
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Join as a Student</h2>
              <p className="text-gray-500">Create your account to start learning</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
      </div>
    </AuthLayout>
  );
};

export default StudentLogin;
