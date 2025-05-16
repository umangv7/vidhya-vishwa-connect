
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentLogin from "./pages/auth/StudentLogin";
import TutorLogin from "./pages/auth/TutorLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import SplashScreen from "./components/SplashScreen"; // Import the new splash screen
import AiAssistant from "./components/ai/AiAssistant"; // Import the AI Assistant

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/tutor" element={<TutorLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AiAssistant /> {/* Add the AI Assistant here */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

