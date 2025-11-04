'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LiquidGlass from 'liquid-glass-react';
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
      label: 'Feature 1',
    },
    {
      id: 2,
      gradient: 'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
      label: 'Feature 2',
    },
    {
      id: 3,
      gradient: 'bg-gradient-to-br from-orange-400 via-pink-500 to-red-600',
      label: 'Feature 3',
    },
  ],
  link: 'https://onesheet.pro',
};

export function FeaturedProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState('Discover Onesheet PRO');
  const originalText = 'Discover Onesheet PRO';

  const totalSlides = oneSheetProject.images.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // 5 seconds per slide

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

          {/* Carousel Container */}
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            {/* Carousel Slides */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0">
                  <LiquidGlass displacementScale={80} blurAmount={0.1} cornerRadius={32} elasticity={0.3}>
                    <div
                      className={`w-full h-full ${oneSheetProject.images[currentSlide].gradient} flex items-center justify-center`}>
                      <div className="text-center p-8">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-4">
                          {oneSheetProject.images[currentSlide].label}
                        </h3>
                        <p className="text-white/80 text-lg md:text-xl">
                          Slide {currentSlide + 1} of {totalSlides}
                        </p>
                      </div>
                    </div>
                  </LiquidGlass>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
