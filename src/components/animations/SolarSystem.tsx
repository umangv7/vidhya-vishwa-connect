
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SolarSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Planet data with relative sizes and orbit speeds
  const planets = [
    { name: "Sun", size: 50, color: "#FDB813", orbitRadius: 0, speed: 0, zIndex: 20 },
    { name: "Mercury", size: 10, color: "#AAA9AD", orbitRadius: 80, speed: 4.1, zIndex: 19 },
    { name: "Venus", size: 15, color: "#E7CDCD", orbitRadius: 110, speed: 1.6, zIndex: 18 },
    { name: "Earth", size: 16, color: "#6B93D6", orbitRadius: 150, speed: 1, zIndex: 17 },
    { name: "Mars", size: 14, color: "#C1440E", orbitRadius: 190, speed: 0.5, zIndex: 16 },
    { name: "Jupiter", size: 35, color: "#C88B3A", orbitRadius: 240, speed: 0.08, zIndex: 15 },
    { name: "Saturn", size: 30, color: "#E4CD9E", orbitRadius: 300, speed: 0.03, zIndex: 14 },
    { name: "Uranus", size: 24, color: "#9BB0D3", orbitRadius: 350, speed: 0.01, zIndex: 13 },
    { name: "Neptune", size: 22, color: "#3E66F9", orbitRadius: 390, speed: 0.005, zIndex: 12 }
  ];

  // Rendering the orbit paths
  const renderOrbitPaths = () => {
    return planets.filter(p => p.orbitRadius > 0).map((planet, index) => (
      <div 
        key={`orbit-${index}`}
        className="absolute border border-gray-200/10 rounded-full"
        style={{
          width: planet.orbitRadius * 2,
          height: planet.orbitRadius * 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    ));
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      style={{ minHeight: 300, maxHeight: 500 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {renderOrbitPaths()}
        
        {/* Render planets */}
        {planets.map((planet, index) => {
          // Special case for the sun
          if (planet.name === "Sun") {
            return (
              <motion.div
                key={`planet-${index}`}
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: planet.size,
                  height: planet.size,
                  backgroundColor: planet.color,
                  boxShadow: '0 0 20px rgba(253, 184, 19, 0.8)',
                  zIndex: planet.zIndex
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 20px rgba(253, 184, 19, 0.5)',
                    '0 0 30px rgba(253, 184, 19, 0.8)',
                    '0 0 20px rgba(253, 184, 19, 0.5)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {planet.name === "Earth" && (
                  <motion.div 
                    className="absolute rounded-full bg-gray-300"
                    style={{
                      width: 6,
                      height: 6,
                      left: '70%',
                      top: '10%'
                    }}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </motion.div>
            );
          }
          
          // For all other planets
          return (
            <motion.div
              key={`planet-${index}`}
              className="absolute flex items-center justify-center"
              style={{
                width: 1,
                height: 1,
                zIndex: planet.zIndex
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 60 / planet.speed,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="rounded-full absolute"
                style={{
                  width: planet.size,
                  height: planet.size,
                  backgroundColor: planet.color,
                  left: planet.orbitRadius,
                  transform: 'translateY(-50%)',
                  boxShadow: planet.name === "Saturn" ? `0 0 0 8px rgba(228, 205, 158, 0.1)` : undefined
                }}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Saturn's rings */}
                {planet.name === "Saturn" && (
                  <div 
                    className="absolute rounded-full border-2 border-yellow-200/30"
                    style={{
                      width: planet.size * 1.8,
                      height: planet.size * 0.5,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotateX(70deg)'
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Add some stars in the background */}
      {[...Array(100)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.8 + 0.2;
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity
            }}
            animate={{
              opacity: [opacity, opacity * 0.3, opacity]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </div>
  );
};

export default SolarSystem;
