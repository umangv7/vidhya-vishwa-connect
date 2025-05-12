
import React, { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import MathCaptcha from '../../components/auth/MathCaptcha';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const StudentLogin = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
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

  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      imageAlt="Student studying with laptop"
      backgroundClass="bg-gradient-to-r from-edu-lightOrange to-orange-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center mb-6">
          <School className="h-8 w-8 text-edu-orange mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Student Portal</h1>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="news">School News</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Welcome back, student!</h2>
              <p className="text-gray-500">Log in to access your learning materials</p>
            </div>
            
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
