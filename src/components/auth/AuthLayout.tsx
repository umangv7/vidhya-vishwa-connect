
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
  image: string;
  imageAlt: string;
  backgroundClass?: string;
  overlayColor?: string;
}

const AuthLayout = ({ 
  children, 
  className, 
  image, 
  imageAlt,
  backgroundClass = "bg-gradient-to-r from-blue-50 to-indigo-50",
  overlayColor = "bg-black/10"
}: AuthLayoutProps) => {
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-4", backgroundClass)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <Card className={cn("w-full grid md:grid-cols-2 overflow-hidden shadow-xl", className)}>
          <div className="hidden md:block relative">
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <div className={cn("absolute inset-0", overlayColor)}></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg font-semibold drop-shadow-md"
              >
                Tamil Nadu Educational Portal
              </motion.div>
            </div>
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            {children}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
