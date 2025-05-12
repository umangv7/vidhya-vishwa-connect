
import React, { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const TutorLogin = () => {
  const [activeTab, setActiveTab] = useState<string>('login');

  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
      imageAlt="Teacher in classroom"
      backgroundClass="bg-gradient-to-r from-edu-lightGreen to-green-50"
      overlayColor="bg-black/20"
    >
      <div className="flex flex-col h-full">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <Book className="h-8 w-8 text-edu-green mr-2" />
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
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="news">
              Educational Updates
              <Badge variant="secondary" className="ml-1 bg-edu-lightGreen text-edu-green">New</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Welcome, Educator!</h2>
              <p className="text-gray-500">Access your teaching resources</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-edu-lightGreen rounded-lg border border-edu-green/20 mb-6"
            >
              <h3 className="font-semibold text-edu-green mb-2">Tutor Resources</h3>
              <ul className="text-sm space-y-1.5 text-gray-700">
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Class management tools</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Tamil Nadu NCERT curriculum guides</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Interactive teaching materials</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Student performance tracking</motion.li>
              </ul>
            </motion.div>
            
            <LoginForm userType="tutor" />
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                New tutor?{" "}
                <button 
                  onClick={() => setActiveTab("register")}
                  className="text-edu-green hover:underline font-medium"
                >
                  Register your profile
                </button>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Join as a Tutor</h2>
              <p className="text-gray-500">Create your educator account</p>
            </div>
            
            <RegisterForm userType="tutor" />
            
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already registered?{" "}
                <button 
                  onClick={() => setActiveTab("login")}
                  className="text-edu-green hover:underline font-medium"
                >
                  Login here
                </button>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="news">
            <NewsFeed color="green" />
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default TutorLogin;
