
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CircleUserRound, BookOpen, Calendar, Award, Bell, ScrollText, Clock, FileText, BarChart4, Users, BookMarked } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Sample student data
  const studentData = {
    name: "Priya Sharma",
    class: "10th Standard",
    section: "A",
    rollNo: "TN2025034",
    attendance: "94%",
    upcomingEvents: [
      { id: 1, title: "Mathematics Quiz", date: "May 18, 2025", type: "quiz" },
      { id: 2, title: "Annual Science Fair", date: "May 22, 2025", type: "event" },
      { id: 3, title: "History Assignment Due", date: "May 25, 2025", type: "assignment" }
    ],
    announcements: [
      { id: 1, title: "Summer vacation schedule released", date: "1 day ago" },
      { id: 2, title: "Inter-school cricket tournament", date: "3 days ago" }
    ],
    subjects: [
      { id: 1, name: "Mathematics", progress: 78, teacher: "Mr. Rajesh Kumar" },
      { id: 2, name: "Science", progress: 85, teacher: "Mrs. Lakshmi Venkatesh" },
      { id: 3, name: "English", progress: 92, teacher: "Ms. Anjali Mehta" },
      { id: 4, name: "Tamil", progress: 88, teacher: "Mr. Murugan Selvaraj" },
      { id: 5, name: "Social Studies", progress: 75, teacher: "Mrs. Deepa Nair" }
    ]
  };
  
  const getEventBadge = (type: string) => {
    switch(type) {
      case 'quiz':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Quiz</Badge>;
      case 'event':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Event</Badge>;
      case 'assignment':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Assignment</Badge>;
      default:
        return <Badge>Other</Badge>;
    }
  };

  // Background images for the dashboard sections
  const backgroundImages = [
    "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80", // Classroom
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80", // Indian students
    "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&q=80", // School library
    "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80", // Science lab
    "https://images.unsplash.com/photo-1577896851231-70ef132bafdf?auto=format&fit=crop&q=80" // Students studying
  ];

  // Education mascot animations
  const [activeMascot, setActiveMascot] = useState<number | null>(null);
  const mascots = [
    { name: "Newton", subject: "Physics", color: "bg-blue-500" },
    { name: "Ramanujan", subject: "Mathematics", color: "bg-green-500" },
    { name: "Kalam", subject: "Science", color: "bg-yellow-500" },
    { name: "Tagore", subject: "Literature", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-edu-blue mr-2" />
            <h1 className="text-xl font-semibold">Student Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="h-5 w-5 text-gray-600 hover:text-edu-blue cursor-pointer" />
            </motion.div>
            <div className="flex items-center">
              <motion.div 
                className="w-8 h-8 bg-edu-lightBlue rounded-full flex items-center justify-center mr-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CircleUserRound className="h-5 w-5 text-edu-blue" />
              </motion.div>
              <span className="font-medium text-sm hidden md:inline">Priya Sharma</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Banner */}
        <motion.div 
          className="mb-8 relative overflow-hidden rounded-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div 
            className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 md:p-8 rounded-xl relative z-10 overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 165, 233, 0.9), rgba(37, 99, 235, 0.9)), url(${backgroundImages[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-3/5">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Welcome back, {studentData.name}!
                </h1>
                <p className="text-sky-100 mb-4">
                  Class {studentData.class}, Section {studentData.section} • Roll No: {studentData.rollNo}
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.div 
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-sm text-sky-100">Attendance</p>
                    <p className="text-xl font-bold text-white">{studentData.attendance}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-sm text-sky-100">Assignments</p>
                    <p className="text-xl font-bold text-white">5/6</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-sm text-sky-100">Academic Year</p>
                    <p className="text-xl font-bold text-white">2025-26</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="md:w-2/5 flex justify-center relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img 
                  src={backgroundImages[0]} 
                  alt="Indian students studying" 
                  className="h-40 md:h-48 rounded-lg shadow-lg object-cover"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-12 -left-12 w-40 h-40 bg-sky-400/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Educational Mascots */}
        <motion.div
          className="mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold mb-4">Your Learning Companions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mascots.map((mascot, index) => (
              <motion.div
                key={index}
                className={`rounded-lg p-4 text-white ${mascot.color} cursor-pointer shadow-md relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setActiveMascot(index)}
                onMouseLeave={() => setActiveMascot(null)}
              >
                <div className="flex items-center">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3`}
                    animate={activeMascot === index ? {
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 1 }}
                  >
                    <BookOpen className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">{mascot.name}</h3>
                    <p className="text-sm text-white/80">{mascot.subject} Guide</p>
                  </div>
                </div>
                
                {activeMascot === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-xs text-white/90"
                  >
                    Click to explore lessons and activities with {mascot.name}!
                  </motion.div>
                )}
                
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/10 rounded-full"
                  animate={activeMascot === index ? {
                    scale: [1, 1.5, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px] mb-6">
            {["overview", "subjects", "assignments", "schedule", "resources"].map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabsTrigger value={tab} className="flex gap-2">
                  {tab === "overview" && <BarChart4 className="h-4 w-4" />}
                  {tab === "subjects" && <BookMarked className="h-4 w-4" />}
                  {tab === "assignments" && <FileText className="h-4 w-4" />}
                  {tab === "schedule" && <Calendar className="h-4 w-4" />}
                  {tab === "resources" && <ScrollText className="h-4 w-4" />}
                  <span className="hidden md:inline capitalize">{tab}</span>
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Progress Summary */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-edu-orange" />
                      Academic Progress
                    </CardTitle>
                    <CardDescription>Your current performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.subjects.slice(0, 3).map(subject => (
                        <div key={subject.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{subject.name}</span>
                            <span className="font-medium">{subject.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full ${subject.progress > 85 ? 'bg-green-500' : subject.progress > 75 ? 'bg-edu-blue' : 'bg-edu-orange'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${subject.progress}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="link" className="text-edu-blue" onClick={() => setActiveTab("subjects")}>
                        View all subjects
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Upcoming Events */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-edu-green" />
                      Upcoming Events
                    </CardTitle>
                    <CardDescription>Your schedule for this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      animate="visible"
                    >
                      {studentData.upcomingEvents.map(event => (
                        <motion.div 
                          key={event.id}
                          variants={fadeIn}
                          className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="mr-3 mt-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{event.title}</h4>
                              {getEventBadge(event.type)}
                            </div>
                            <p className="text-sm text-gray-500">{event.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="mt-4 text-center">
                      <Button variant="link" className="text-edu-green" onClick={() => setActiveTab("schedule")}>
                        View full calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Announcements */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="lg:col-span-1 md:col-span-2 lg:col-start-3"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-edu-orange" />
                      Announcements
                    </CardTitle>
                    <CardDescription>Latest updates from school</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      animate="visible"
                    >
                      {studentData.announcements.map(announcement => (
                        <motion.div 
                          key={announcement.id}
                          variants={fadeIn}
                          className="border-l-4 border-edu-orange pl-3 py-1"
                        >
                          <h4 className="font-medium">{announcement.title}</h4>
                          <p className="text-xs text-gray-500">{announcement.date}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-edu-orange hover:bg-edu-orange/90">
                      View All Announcements
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
            
            {/* Featured Educational Themes */}
            <motion.div
              className="mt-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4">Educational Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Digital Library",
                    description: "Access to thousands of e-books and learning materials",
                    image: "https://images.unsplash.com/photo-1529148482759-b35b25c5f217?auto=format&fit=crop&q=80",
                    color: "from-blue-500 to-purple-600"
                  },
                  {
                    title: "Science Experiments",
                    description: "Virtual lab experiments for practical learning",
                    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
                    color: "from-green-500 to-teal-600"
                  },
                  {
                    title: "Math Practice",
                    description: "Interactive problems with step-by-step solutions",
                    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    title: "Cultural Heritage",
                    description: "Explore India's rich cultural history and traditions",
                    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80",
                    color: "from-yellow-500 to-amber-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link to="#" className="block h-full">
                      <div className="relative h-40 rounded-lg overflow-hidden group">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70`}></div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                          <p className="text-white/90 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="subjects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentData.subjects.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10">
                      <CardTitle>{subject.name}</CardTitle>
                      <CardDescription>Teacher: {subject.teacher}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="font-medium">{subject.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${subject.progress > 85 ? 'bg-green-500' : subject.progress > 75 ? 'bg-edu-blue' : 'bg-edu-orange'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${subject.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between relative z-10">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="transition-all hover:bg-white">View Materials</Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-edu-blue hover:bg-edu-blue/90 transition-all">Enter Classroom</Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="assignments">
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Assignments Tab</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  This section will display your pending and completed assignments.
                </p>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule">
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Calendar className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Schedule Tab</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  This section will display your class timetable and school calendar.
                </p>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ScrollText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resources Tab</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  This section will provide access to study materials, books, and other learning resources.
                </p>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Quick Access Cards */}
        <motion.div
          className="mt-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Classmates", icon: <Users className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
              { title: "Homework Help", icon: <BookOpen className="h-6 w-6" />, color: "bg-green-100 text-green-600" },
              { title: "Report Card", icon: <Award className="h-6 w-6" />, color: "bg-amber-100 text-amber-600" },
              { title: "School Gallery", icon: <ScrollText className="h-6 w-6" />, color: "bg-blue-100 text-blue-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="cursor-pointer overflow-hidden group">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <h3 className="font-medium">{item.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Inspirational Quote */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-edu-lightBlue to-sky-50 p-6 rounded-lg border border-sky-100 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(225, 239, 254, 0.9), rgba(240, 249, 255, 0.9)), url(${backgroundImages[2]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
              <motion.img
                src="https://images.unsplash.com/photo-1606293926249-9393de223044?auto=format&fit=crop&q=80"
                alt="APJ Abdul Kalam"
                className="w-36 h-36 object-cover rounded-full shadow-md"
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              />
            </div>
            <div className="md:w-3/4 md:pl-6 relative">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 text-4xl text-edu-blue opacity-20"
              >
                "
              </motion.div>
              <blockquote className="text-lg italic text-gray-700 mb-3">
                "Dream is not what you see in sleep, dream is something which doesn't let you sleep."
              </blockquote>
              <cite className="text-sm font-semibold block">— A.P.J. Abdul Kalam, Former President of India</cite>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-6 text-4xl text-edu-blue opacity-20"
              >
                "
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-5 w-5 text-edu-blue mr-2" />
            <p className="text-sm">Tamil Nadu Educational Portal</p>
          </div>
          
          <div className="flex gap-4">
            {["Help Center", "Privacy Policy", "Contact Support"].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="#" className="text-sm text-gray-500 hover:text-edu-blue transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentDashboard;
