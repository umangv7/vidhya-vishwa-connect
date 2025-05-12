
import React, { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const AdminLogin = () => {
  const [activeTab, setActiveTab] = useState<string>('login');

  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      imageAlt="School administration"
      backgroundClass="bg-gradient-to-r from-edu-lightBlue to-blue-50"
      overlayColor="bg-black/20"
    >
      <div className="flex flex-col h-full">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <Settings className="h-8 w-8 text-edu-blue mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
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
              System Updates
              <Badge variant="secondary" className="ml-1 bg-edu-lightBlue text-edu-blue">New</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">School Administration</h2>
              <p className="text-gray-500">Access school management system</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-edu-lightBlue rounded-lg border border-edu-blue/20 mb-6"
            >
              <h3 className="font-semibold text-edu-blue mb-2">Admin Dashboard Features</h3>
              <ul className="text-sm space-y-1.5 text-gray-700">
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Student records management</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Staff administration</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Tamil Nadu NCERT compliance reporting</motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-all">• Matriculation school performance analytics</motion.li>
              </ul>
            </motion.div>
            
            <LoginForm userType="admin" />
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                Need administrator access?{" "}
                <button 
                  onClick={() => setActiveTab("register")}
                  className="text-edu-blue hover:underline font-medium"
                >
                  Request account
                </button>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Request Admin Access</h2>
              <p className="text-gray-500">Submit your credentials for verification</p>
            </div>
            
            <RegisterForm userType="admin" />
            
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already have admin access?{" "}
                <button 
                  onClick={() => setActiveTab("login")}
                  className="text-edu-blue hover:underline font-medium"
                >
                  Login here
                </button>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="news">
            <NewsFeed color="blue" />
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;
