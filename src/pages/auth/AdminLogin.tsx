
import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import NewsFeed from '../../components/news/NewsFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings } from 'lucide-react';

const AdminLogin = () => {
  return (
    <AuthLayout 
      image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
      imageAlt="School administration"
      backgroundClass="bg-gradient-to-r from-edu-lightBlue to-blue-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center mb-6">
          <Settings className="h-8 w-8 text-edu-blue mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="news">System Updates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">School Administration</h2>
              <p className="text-gray-500">Access school management system</p>
            </div>
            
            <div className="p-4 bg-edu-lightBlue rounded-lg border border-edu-blue/20 mb-6">
              <h3 className="font-semibold text-edu-blue mb-2">Admin Dashboard Features</h3>
              <ul className="text-sm space-y-1.5 text-gray-700">
                <li>• Student records management</li>
                <li>• Staff administration</li>
                <li>• Tamil Nadu NCERT compliance reporting</li>
                <li>• Matriculation school performance analytics</li>
              </ul>
            </div>
            
            <LoginForm userType="admin" />
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
