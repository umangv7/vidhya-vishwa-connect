
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
  image: string;
  imageAlt: string;
  backgroundClass?: string;
}

const AuthLayout = ({ 
  children, 
  className, 
  image, 
  imageAlt,
  backgroundClass = "bg-gradient-to-r from-blue-50 to-indigo-50"
}: AuthLayoutProps) => {
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-4", backgroundClass)}>
      <Card className={cn("w-full max-w-6xl grid md:grid-cols-2 overflow-hidden shadow-xl", className)}>
        <div className="hidden md:block relative">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <CardContent className="p-8 flex flex-col justify-center">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
