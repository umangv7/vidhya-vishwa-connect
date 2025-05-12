
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { School, User, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <School className="h-8 w-8 text-edu-blue mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">EduConnect</h1>
          </div>
          <div className="space-x-2">
            <Link to="/login/student">
              <Button variant="outline" size="sm">Student Login</Button>
            </Link>
            <Link to="/login/tutor">
              <Button variant="outline" size="sm">Tutor Login</Button>
            </Link>
            <Link to="/login/admin">
              <Button className="bg-edu-blue hover:bg-edu-blue/90" size="sm">Admin</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Tamil Nadu School <span className="text-edu-blue">Learning Portal</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-10">
          Access educational resources, connect with teachers, and track your academic progress with our integrated school management system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Student Card */}
          <Link to="/login/student" className="block hover-float">
            <Card className="h-full border-t-4 border-edu-orange overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-lightOrange flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-edu-orange" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Students</h2>
                <p className="text-gray-500 mb-4">Access your courses, assignments, and study materials</p>
                <Button className="edu-btn edu-btn-orange mt-auto">
                  Student Login
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Tutor Card */}
          <Link to="/login/tutor" className="block hover-float">
            <Card className="h-full border-t-4 border-edu-green overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-lightGreen flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-edu-green" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Tutors</h2>
                <p className="text-gray-500 mb-4">Manage your classes and access teaching resources</p>
                <Button className="edu-btn edu-btn-green mt-auto">
                  Tutor Login
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Admin Card */}
          <Link to="/login/admin" className="block hover-float">
            <Card className="h-full border-t-4 border-edu-blue overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-lightBlue flex items-center justify-center mb-4">
                  <School className="h-8 w-8 text-edu-blue" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Administrators</h2>
                <p className="text-gray-500 mb-4">School administration and management portal</p>
                <Button className="edu-btn edu-btn-blue mt-auto">
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Latest School News</h2>
          <p className="text-gray-600">Updates from Tamil Nadu Education Department</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-edu-blue hover:bg-edu-lightBlue hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">NCERT Updates</h3>
              <p className="text-gray-600 text-sm">Tamil Nadu NCERT announces new digital learning initiatives for the academic year 2025-2026.</p>
              <Button variant="link" className="text-edu-blue p-0 mt-2">Read More</Button>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-edu-green hover:bg-edu-lightGreen hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Teaching Excellence Award</h3>
              <p className="text-gray-600 text-sm">Tamil Nadu Matriculation Schools Association announces annual teaching excellence awards.</p>
              <Button variant="link" className="text-edu-green p-0 mt-2">Read More</Button>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-edu-orange hover:bg-edu-lightOrange hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Student Competition</h3>
              <p className="text-gray-600 text-sm">Statewide science project competition for students announced - register by May 30th.</p>
              <Button variant="link" className="text-edu-orange p-0 mt-2">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <School className="h-6 w-6 text-edu-blue mr-2" />
            <h2 className="text-xl font-bold">EduConnect</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Serving Tamil Nadu NCERT and Matriculation Schools
          </p>
          <div className="text-gray-500 text-sm">
            © 2025 EduConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
