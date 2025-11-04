'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// OneSheet project data with 3 gradient placeholder images
const oneSheetProject = {
  title: 'OneSheet',
  description:
    'A revolutionary platform currently in development, bringing innovation to financial document management and analysis.',
  tech: ['TypeScript', 'React', 'Next.js', 'AI', 'Authentication'],
  images: [
    {
      id: 1,
      gradient: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
      label: 'Onesheet PRO Image A',
      image: '/onesheetImageA.png',
    },
    {
      id: 2,
      gradient: 'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
      label: 'Onesheet PRO Image B',
      image: '/onesheetImageB.png',
    },
    {
      id: 3,
      gradient: 'bg-gradient-to-br from-orange-400 via-pink-500 to-red-600',
      label: 'Onesheet PRO Image C',
      image: '/onesheetImageC.png',
    },
  ],
  link: 'https://onesheet.pro',
};

export function FeaturedProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState('Discover Onesheet PRO');
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 });
  const originalText = 'Discover Onesheet PRO';
  const cardRef = useRef<HTMLDivElement>(null);

  const totalSlides = oneSheetProject.images.length;

  // 3D Hover Card Effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Update shine position
    setShinePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    // Smoothly animate motion values back to center (0, 0) which maps to 0deg rotation
    animate(x, 0, { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 });
    animate(y, 0, { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 });
    // Reset shine position to center
    setShinePosition({ x: 50, y: 50 });
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000); // 3 seconds per slide

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Slot machine effect
  useEffect(() => {
    if (!isHovering) {
      setDisplayText(originalText);
      return;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let frameCount = 0;
    const maxFrames = 60;
    const revealDelay = 3; // Frames between each character locking in

    const interval = setInterval(() => {
      const textArray = originalText.split('');
      let charIndex = 0; // Track actual character position (excluding spaces)

      setDisplayText(
        textArray
          .map((char) => {
            if (char === ' ') return ' ';

            // Calculate when this character should lock in
            const lockFrame = charIndex * revealDelay;
            charIndex++;

            // If we haven't reached this character's lock frame, keep spinning
            if (frameCount < lockFrame) {
              return characters[Math.floor(Math.random() * characters.length)];
            } else {
              // Character is locked in, show the correct character
              return char;
            }
          })
          .join('')
      );

      frameCount++;

      if (frameCount >= maxFrames) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isHovering, originalText]);

  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">Featured Project: {oneSheetProject.title}</h2>
          </div>

          {/* Carousel Container with 3D Hover Card */}
          <div
            ref={cardRef}
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseLeave();
            }}
            onMouseMove={handleMouseMove}
            style={{ perspective: '1000px' }}>
            {/* 3D Hover Card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Carousel Slides */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transform: 'translateZ(50px)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.img
                        src={oneSheetProject.images[currentSlide].image}
                        alt={oneSheetProject.images[currentSlide].label}
                        className="max-w-full max-h-full object-contain object-center rounded-3xl"
                        style={{
                          transform: 'translateZ(100px)',
                          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 3D Shine Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                style={{
                  transform: 'translateZ(1px)',
                  background: `radial-gradient(600px circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(255, 255, 255, 0.15), transparent 40%)`,
                  transition: 'background 0.1s ease-out',
                }}
              />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3"
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}>
              {oneSheetProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-gray-300 text-lg">{oneSheetProject.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {oneSheetProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            {/* Discover Button */}
            <div className="flex justify-center pt-4">
              <a
                href={oneSheetProject.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center gap-3 px-6 py-4 bg-[#242828] hover:bg-[#2d3232] text-white font-semibold rounded-full transition-all duration-300 group">
                <span className="font-mono tracking-wider min-w-[200px] text-center">{displayText}</span>
                <div className="bg-[#343A3A] group-hover:bg-[#3d4444] p-2 rounded-lg transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
