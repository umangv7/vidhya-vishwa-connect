
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

  // Rendering the orbit paths with more realistic appearance
  const renderOrbitPaths = () => {
    return planets.filter(p => p.orbitRadius > 0).map((planet, index) => (
      <div 
        key={`orbit-${index}`}
        className="absolute border border-gray-200/5 rounded-full"
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
      className="relative h-full w-full overflow-hidden bg-[#030014]"
      style={{ minHeight: 300, maxHeight: 500 }}
    >
      {/* Cosmos background with stars and nebula effect */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 to-transparent"></div>
      
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
                  background: `radial-gradient(circle at 35% 35%, #FFF7D6, ${planet.color} 50%, #F07F13)`,
                  boxShadow: '0 0 30px rgba(253, 184, 19, 0.8), 0 0 60px rgba(253, 100, 19, 0.4)',
                  zIndex: planet.zIndex
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 30px rgba(253, 184, 19, 0.5), 0 0 60px rgba(253, 100, 19, 0.3)',
                    '0 0 40px rgba(253, 184, 19, 0.8), 0 0 80px rgba(253, 100, 19, 0.5)',
                    '0 0 30px rgba(253, 184, 19, 0.5), 0 0 60px rgba(253, 100, 19, 0.3)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
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
                  background: getPlanetGradient(planet.name, planet.color),
                  left: planet.orbitRadius,
                  transform: 'translateY(-50%)',
                  boxShadow: planet.name === "Saturn" ? `0 0 10px rgba(228, 205, 158, 0.2)` : `0 0 10px rgba(0, 0, 0, 0.3)`
                }}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Moon for Earth */}
                {planet.name === "Earth" && (
                  <motion.div 
                    className="absolute rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: 'radial-gradient(circle at 30% 30%, #FFFFFF, #AAAAAA)',
                      left: '70%',
                      top: '10%',
                      boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
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
                
                {/* Saturn's rings */}
                {planet.name === "Saturn" && (
                  <>
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
                    <div 
                      className="absolute rounded-full border border-yellow-100/20"
                      style={{
                        width: planet.size * 1.9,
                        height: planet.size * 0.45,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotateX(70deg)'
                      }}
                    />
                  </>
                )}
                
                {/* Jupiter's bands */}
                {planet.name === "Jupiter" && (
                  <>
                    {[1, 2, 3].map((band) => (
                      <div 
                        key={`jupiter-band-${band}`}
                        className="absolute rounded-full"
                        style={{
                          height: 3,
                          width: planet.size - 4,
                          backgroundColor: band % 2 === 0 ? '#E4A668' : '#C88B3A',
                          top: `${35 + (band * 10)}%`,
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Add some stars in the background with better twinkling effect */}
      {[...Array(150)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.8 + 0.2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: `${posY}%`,
              left: `${posX}%`
            }}
            animate={{
              opacity: [opacity, opacity * 0.3, opacity],
              scale: [1, i % 5 === 0 ? 1.5 : 1.2, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay
            }}
          />
        );
      })}
      
      {/* Add shooting star effect occasionally */}
      <motion.div
        className="absolute h-0.5 bg-white rounded-full"
        initial={{ 
          width: 0, 
          top: '10%', 
          left: '100%', 
          rotate: 15,
          opacity: 0 
        }}
        animate={{
          left: ['-10%', '100%'],
          width: [0, 50, 0],
          opacity: [0, 0, 1, 0.8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 7,
        }}
        style={{
          boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)'
        }}
      />
    </div>
  );
};

// Helper function to generate realistic planet appearances
function getPlanetGradient(name: string, baseColor: string): string {
  switch(name) {
    case "Mercury":
      return `radial-gradient(circle at 30% 30%, #D3D3D3, ${baseColor}, #8A8A8A)`;
    case "Venus":
      return `radial-gradient(circle at 30% 30%, #F9F3E3, ${baseColor}, #D3BB7E)`;
    case "Earth":
      return `radial-gradient(circle at 30% 30%, #98C5DF, ${baseColor}, #315B7D)`;
    case "Mars":
      return `radial-gradient(circle at 30% 30%, #E58F65, ${baseColor}, #892C09)`;
    case "Jupiter":
      return `radial-gradient(circle at 30% 30%, #F0D89D, ${baseColor}, #A67734)`;
    case "Saturn":
      return `radial-gradient(circle at 30% 30%, #F7E9BE, ${baseColor}, #AC9B69)`;
    case "Uranus":
      return `radial-gradient(circle at 30% 30%, #D5E5FF, ${baseColor}, #6D82AB)`;
    case "Neptune":
      return `radial-gradient(circle at 30% 30%, #95B6FF, ${baseColor}, #2745B0)`;
    default:
      return baseColor;
  }
}

export default SolarSystem;
