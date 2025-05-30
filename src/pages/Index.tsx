import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { School, User, BookOpen, ScrollText, Award, Calendar, Bell, Image, BookOpen as BookOpenIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Educational images to show in the gallery
  const educationalImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef132bafdf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
  ];

  const classroomImages = [
    "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <School className="h-8 w-8 text-edu-blue mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">EduConnect</h1>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-2"
          >
            <Link to="/login/student">
              <Button variant="outline" size="sm" className="border-edu-orange text-edu-orange hover:bg-edu-lightOrange">Student Login</Button>
            </Link>
            <Link to="/login/tutor">
              <Button variant="outline" size="sm" className="border-edu-green text-edu-green hover:bg-edu-lightGreen">Tutor Login</Button>
            </Link>
            <Link to="/login/admin">
              <Button className="bg-edu-blue hover:bg-edu-blue/90" size="sm">Admin</Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-100 to-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tamil Nadu School <span className="text-edu-blue">Learning Portal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Access educational resources, connect with teachers, and track your academic progress with our integrated school management system
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login/student">
                <Button className="edu-btn edu-btn-orange">
                  Student Dashboard
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-edu-blue text-edu-blue hover:bg-edu-lightBlue">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                alt="Indian students learning" 
                className="rounded-lg shadow-lg w-full max-w-lg object-cover hover-float relative z-10"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-300 to-sky-400 rounded-lg rotate-6 z-0 opacity-70"
                animate={{ rotate: [6, 0, 6], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-lg -rotate-6 z-0 opacity-70"
                animate={{ rotate: [-6, 0, -6], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>
        
      {/* Visual Education Banner */}
      <motion.section
        className="container mx-auto px-4 py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative">
          <h2 className="text-2xl font-bold text-center mb-8">Learning Through Visual Exploration</h2>
          <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
            {educationalImages.map((img, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={img} alt={`Educational scene ${index + 1}`} className="w-full h-full object-cover transition-transform" />
              </motion.div>
            ))}
          </div>
          <div className="absolute left-0 top-1/2 bottom-1/2 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-1/2 bottom-1/2 w-12 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </motion.section>
        
      {/* User Type Cards */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeIn}
        >
          Access Your <span className="text-edu-blue">Portal</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Student Card */}
          <motion.div variants={fadeIn}>
            <Link to="/login/student" className="block h-full">
              <Card className="h-full border-t-4 border-edu-orange overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div 
                    className="h-16 w-16 rounded-full bg-edu-lightOrange flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <User className="h-8 w-8 text-edu-orange" />
                  </motion.div>
                  <h2 className="text-2xl font-semibold mb-2">Students</h2>
                  <p className="text-gray-500 mb-4">Access your courses, assignments, and study materials</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-auto"
                  >
                    <Button className="edu-btn edu-btn-orange group-hover:scale-105 transition-transform">
                      Student Login
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Tutor Card */}
          <motion.div variants={fadeIn}>
            <Link to="/login/tutor" className="block h-full">
              <Card className="h-full border-t-4 border-edu-green overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div 
                    className="h-16 w-16 rounded-full bg-edu-lightGreen flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <BookOpen className="h-8 w-8 text-edu-green" />
                  </motion.div>
                  <h2 className="text-2xl font-semibold mb-2">Tutors</h2>
                  <p className="text-gray-500 mb-4">Manage your classes and access teaching resources</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-auto"
                  >
                    <Button className="edu-btn edu-btn-green group-hover:scale-105 transition-transform">
                      Tutor Login
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Admin Card */}
          <motion.div variants={fadeIn}>
            <Link to="/login/admin" className="block h-full">
              <Card className="h-full border-t-4 border-edu-blue overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div 
                    className="h-16 w-16 rounded-full bg-edu-lightBlue flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <School className="h-8 w-8 text-edu-blue" />
                  </motion.div>
                  <h2 className="text-2xl font-semibold mb-2">Administrators</h2>
                  <p className="text-gray-500 mb-4">School administration and management portal</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-auto"
                  >
                    <Button className="edu-btn edu-btn-blue group-hover:scale-105 transition-transform">
                      Admin Login
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Platform <span className="text-edu-blue">Features</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ScrollText className="h-10 w-10 text-edu-orange" />,
                title: "Interactive Lessons",
                description: "Access interactive curriculum-aligned lessons and study materials",
                color: "bg-edu-lightOrange",
                borderColor: "border-edu-orange"
              },
              {
                icon: <Award className="h-10 w-10 text-edu-green" />,
                title: "Progress Tracking",
                description: "Track academic achievements and learning progress",
                color: "bg-edu-lightGreen",
                borderColor: "border-edu-green"
              },
              {
                icon: <Calendar className="h-10 w-10 text-edu-blue" />,
                title: "Class Schedule",
                description: "View timetables and upcoming academic events",
                color: "bg-edu-lightBlue",
                borderColor: "border-edu-blue"
              },
              {
                icon: <Bell className="h-10 w-10 text-purple-500" />,
                title: "Announcements",
                description: "Stay updated with important school announcements",
                color: "bg-purple-50",
                borderColor: "border-purple-300"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`hover-float border-l-4 ${feature.borderColor} h-full`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Classroom Gallery */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h2 className="text-3xl font-bold">Modern Learning Environment</h2>
            <p className="text-gray-600 mt-2">Designed to inspire creativity and knowledge acquisition</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classroomImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-video group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <img src={img} alt={`Classroom ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Modern Classroom {index + 1}</h3>
                  <p className="text-sm text-white/80">Equipped with latest educational technology</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Latest School News</h2>
          <p className="text-gray-600">Updates from Tamil Nadu Education Department</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeIn}>
            <Card className="border-l-4 border-edu-blue hover:bg-edu-lightBlue hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">NCERT Updates</h3>
                <p className="text-gray-600 text-sm">Tamil Nadu NCERT announces new digital learning initiatives for the academic year 2025-2026.</p>
                <Button variant="link" className="text-edu-blue p-0 mt-2">Read More</Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Card className="border-l-4 border-edu-green hover:bg-edu-lightGreen hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Teaching Excellence Award</h3>
                <p className="text-gray-600 text-sm">Tamil Nadu Matriculation Schools Association announces annual teaching excellence awards.</p>
                <Button variant="link" className="text-edu-green p-0 mt-2">Read More</Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Card className="border-l-4 border-edu-orange hover:bg-edu-lightOrange hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Student Competition</h3>
                <p className="text-gray-600 text-sm">Statewide science project competition for students announced - register by May 30th.</p>
                <Button variant="link" className="text-edu-orange p-0 mt-2">Read More</Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Learning Tools */}
      <motion.section 
        className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Visual Learning Tools</h2>
            <p className="text-gray-600">Enhance your learning experience with interactive tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Virtual Lab",
                icon: <BookOpenIcon className="h-10 w-10" />,
                color: "from-blue-500 to-sky-400",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
              },
              {
                title: "3D Models",
                icon: <Image className="h-10 w-10" />,
                color: "from-green-500 to-teal-400",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80"
              },
              {
                title: "Digital Library",
                icon: <BookOpen className="h-10 w-10" />,
                color: "from-purple-500 to-indigo-400",
                image: "https://images.unsplash.com/photo-1529148482759-b35b25c5f44d?auto=format&fit=crop&q=80"
              },
              {
                title: "Interactive Maps",
                icon: <Sparkles className="h-10 w-10" />,
                color: "from-amber-500 to-orange-400",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="relative h-48">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tool.color} opacity-70`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3">
                      {tool.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">{tool.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-sky-100 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success <span className="text-edu-blue">Stories</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-md p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-edu-lightOrange flex items-center justify-center mr-4">
                      <span className="text-edu-orange font-semibold">AP</span>
                    </div>
                    <div>
                      <p className="font-semibold">Arjun Patel</p>
                      <p className="text-sm text-gray-500">Class 10 Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The online learning portal has helped me prepare for my exams effectively. The interactive lessons and practice tests have improved my understanding of complex subjects."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-md p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-edu-lightGreen flex items-center justify-center mr-4">
                      <span className="text-edu-green font-semibold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sangeeta Murthy</p>
                      <p className="text-sm text-gray-500">Science Teacher</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "As a teacher, the portal has simplified my work with streamlined assignment management and easy communication with students and parents. The digital resources have enhanced my teaching."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <School className="h-6 w-6 text-edu-blue mr-2" />
              <h2 className="text-xl font-bold">EduConnect</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Serving Tamil Nadu NCERT and Matriculation Schools
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="font-semibold mb-2 text-center md:text-left">Quick Links</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-center md:text-left">
                <li><a href="#" className="hover:text-edu-blue">About Us</a></li>
                <li><a href="#" className="hover:text-edu-blue">Contact</a></li>
                <li><a href="#" className="hover:text-edu-blue">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-center md:text-left">Resources</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-center md:text-left">
                <li><a href="#" className="hover:text-edu-blue">Curriculum</a></li>
                <li><a href="#" className="hover:text-edu-blue">Study Materials</a></li>
                <li><a href="#" className="hover:text-edu-blue">Exam Calendar</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-6 mt-6 border-t border-gray-200 text-center">
          <div className="text-gray-500 text-sm">
            © 2025 EduConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
