
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn("min-h-screen flex items-center justify-center p-4", backgroundClass)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-6xl"
      >
        <Card className={cn("w-full grid md:grid-cols-2 overflow-hidden shadow-xl", className)}>
          <motion.div 
            className="hidden md:block relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img 
              src={image} 
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <div className={cn("absolute inset-0", overlayColor)}></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg font-semibold drop-shadow-md"
              >
                Tamil Nadu Educational Portal
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-sm text-white/80 mt-1 drop-shadow-md"
              >
                Empowering futures through quality education
              </motion.div>
            </div>
          </motion.div>
          <CardContent className="p-8 flex flex-col justify-center">
            {children}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AuthLayout;
