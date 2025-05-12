
import React, { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import MathCaptcha from '../../components/auth/MathCaptcha';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const StudentLogin = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('login');
  const { toast } = useToast();
  
  const handleCaptchaVerification = (isCorrect: boolean) => {
    setCaptchaVerified(isCorrect);
    
    if (isCorrect) {
      toast({
        title: "Verification successful",
        description: "Good job solving the math problem!",
      });
    }
  };

  const getRandomTip = () => {
    const tips = [
      "Remember to revise your lessons daily for better retention!",
      "Taking short breaks between study sessions can help you focus better.",
      "Try teaching what you've learned to someone else - it's a great way to master a subject.",
      "Stay hydrated while studying - it helps your brain function better!",
      "Creating colorful mind maps can help you memorize complex information.",
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  };

  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1577896851231-70ef132bafdf?auto=format&fit=crop&q=80"
      imageAlt="Student studying with laptop"
      backgroundClass="bg-gradient-to-r from-edu-lightOrange to-orange-50"
    >
      <div className="flex flex-col h-full">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <School className="h-8 w-8 text-edu-orange mr-2" />
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
              <p className="text-gray-500">Log in to access your learning materials</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-orange-50 rounded-lg border border-edu-orange/30 mb-6"
            >
              <h3 className="font-semibold text-edu-orange mb-2">Study Tip of the Day</h3>
              <p className="text-sm text-gray-700">{getRandomTip()}</p>
            </motion.div>
            
            <MathCaptcha 
              onVerification={handleCaptchaVerification} 
              className="mb-6"
            />
            
            <LoginForm 
              userType="student"
              className={captchaVerified ? "opacity-100" : "opacity-50 pointer-events-none"}
            />
            
            {!captchaVerified && (
              <div className="p-3 bg-orange-50 border border-edu-orange rounded-md text-sm text-center">
                Please complete the math verification above to enable login
              </div>
            )}
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                Don't have an account yet?{" "}
                <button 
                  onClick={() => setActiveTab("register")}
                  className="text-edu-orange hover:underline font-medium"
                >
                  Register now
                </button>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Join as a Student</h2>
              <p className="text-gray-500">Create your account to start learning</p>
            </div>
            
            <RegisterForm userType="student" />
            
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button 
                  onClick={() => setActiveTab("login")}
                  className="text-edu-orange hover:underline font-medium"
                >
                  Login here
                </button>
              </p>
            </div>
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
