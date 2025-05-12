
import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book } from 'lucide-react';

const TutorLogin = () => {
  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
      imageAlt="Teacher at computer"
      backgroundClass="bg-gradient-to-r from-edu-lightGreen to-green-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center mb-6">
          <Book className="h-8 w-8 text-edu-green mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Tutor Portal</h1>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="news">Educational Updates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">Welcome, Educator!</h2>
              <p className="text-gray-500">Access your teaching resources</p>
            </div>
            
            <div className="p-4 bg-edu-lightGreen rounded-lg border border-edu-green/20 mb-6">
              <h3 className="font-semibold text-edu-green mb-2">Tutor Resources</h3>
              <ul className="text-sm space-y-1.5 text-gray-700">
                <li>• Class management tools</li>
                <li>• Tamil Nadu NCERT curriculum guides</li>
                <li>• Interactive teaching materials</li>
                <li>• Student performance tracking</li>
              </ul>
            </div>
            
            <LoginForm userType="tutor" />
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
