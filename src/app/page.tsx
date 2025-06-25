'use client';

import Link from 'next/link';
import TextMorphAnimation from '@/components/TextMorphAnimation';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TechBadge } from '@/components/ui/tech-badge';
import { Badge } from '@/components/ui/badge';
import { FileCode, FileType2, Atom, Rocket, Layout, Code2, Coffee, Shield } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AnimatedBorder } from '@/components/ui/AnimatedBorder';
import Image from 'next/image';

// Technology color mapping
const techColors: { [key: string]: { bg: string; text: string } } = {
  TypeScript: { bg: 'bg-blue-900/90', text: 'text-blue-100' },
  JavaScript: { bg: 'bg-yellow-900/90', text: 'text-yellow-100' },
  React: { bg: 'bg-cyan-900/90', text: 'text-cyan-100' },
  Astro: { bg: 'bg-purple-900/90', text: 'text-purple-100' },
  'HTML/CSS': { bg: 'bg-orange-900/90', text: 'text-orange-100' },
  Tailwind: { bg: 'bg-teal-900/90', text: 'text-teal-100' },
  'C++': { bg: 'bg-blue-800/90', text: 'text-blue-100' },
  Java: { bg: 'bg-red-900/90', text: 'text-red-100' },
  Python: { bg: 'bg-green-900/90', text: 'text-green-100' },
  Solidity: { bg: 'bg-gray-900/90', text: 'text-gray-100' },
  AI: { bg: 'bg-indigo-900/90', text: 'text-indigo-100' },
  Authentication: { bg: 'bg-pink-900/90', text: 'text-pink-100' },
  APIs: { bg: 'bg-rose-900/90', text: 'text-rose-100' },
  JWT: { bg: 'bg-violet-900/90', text: 'text-violet-100' },
  OAuth: { bg: 'bg-fuchsia-900/90', text: 'text-fuchsia-100' },
  StripeJS: { bg: 'bg-sky-900/90', text: 'text-sky-100' },
  MERN: { bg: 'bg-emerald-900/90', text: 'text-emerald-100' },
  WebRTC: { bg: 'bg-amber-900/90', text: 'text-amber-100' },
  WebSockets: { bg: 'bg-lime-900/90', text: 'text-lime-100' },
  DEX: { bg: 'bg-blue-950/90', text: 'text-blue-100' },
  Web3: { bg: 'bg-indigo-950/90', text: 'text-indigo-100' },
  Swift: { bg: 'bg-orange-800/90', text: 'text-orange-100' },
  iOS: { bg: 'bg-gray-800/90', text: 'text-gray-100' },
  Algorithms: { bg: 'bg-purple-800/90', text: 'text-purple-100' },
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [privateLinkMessageId, setPrivateLinkMessageId] = useState<string | null>(null);
  const phoneNumber = '(450) 435-4536';

  const handleCopy = () => {
    try {
      // Create a temporary input element
      const tempInput = document.createElement('input');
      tempInput.value = phoneNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Productivity App for Developers',
      description: 'Tailor made prompts for AI IDEs using a comprehensive onboarding process',
      tags: ['TypeScript', 'Astro', 'AI', 'Authentication'],
      year: '2025',
      image: '/devibe.png',
      links: {
        github: ['#', '#'],
        live: 'https://thecompound.tech',
      },
    },
    {
      id: 2,
      title: 'Portfolio Management & Stock Analysis App',
      description:
        'A smarter way to track your portfolio and analyze stocks – better insights than traditional platforms',
      tags: ['TypeScript', 'Astro', 'APIs', 'JWT', 'OAuth', 'StripeJS'],
      year: '2025',
      image: '/compound.png',
      links: {
        github: ['#', '#'],
        live: 'https://devibe.space',
      },
    },
    {
      id: 3,
      title: 'Voice and Chat App',
      description: 'Voice and chat app with random room matchmaking system (Omegle-like)',
      tags: ['MERN', 'WebRTC', 'WebSockets', 'APIs'],
      year: '2024',
      image: '/fluxe.png',
      links: {
        github: ['https://github.com/mikakort/Fluxe', 'https://github.com/mikakort/Fluxe-Server'],
      },
    },
    {
      id: 4,
      title: 'Arbitrage Algorithm for Decentralized Exchanges',
      description:
        'Arbitrage algorithm and profitability analysis between decentralized exchanges using flash loans from Aave',
      tags: ['DEX', 'Web3', 'Solidity', 'JavaScript'],
      year: '2023',
      image: '/flashLoanArb.png',
      links: {
        github: ['https://github.com/mikakort/FlashLoanArbitrage-bot'],
      },
    },
    {
      id: 5,
      title: 'AI Model for Digital Detection',
      description: 'Artificial intelligence model for digital detection without libraries based on the MNIST dataset',
      tags: ['Python', 'AI'],
      year: '2023',
      image: '/AI_SR.png',
      links: {
        github: ['https://github.com/mikakort/AI_SR'],
      },
    },
    {
      id: 6,
      title: 'ShortMap - Route Optimization App',
      description:
        'iOS-based route optimization app that solves the traveling salesman problem for efficient navigation',
      tags: ['Swift', 'iOS', 'Algorithms', 'APIs'],
      year: '2024',
      image: '/shortMap_1.png',
      images: ['/shortMap_1.png', '/shortmap_2.png'],
      links: {
        github: ['#'],
      },
    },
  ];

  const educationRef = useRef(null);
  const educationInView = useInView(educationRef, { once: true, amount: 0.3 });
  const hobbiesRef = useRef(null);
  const hobbiesInView = useInView(hobbiesRef, { once: true, amount: 0.3 });
  const languagesRef = useRef(null);
  const languagesInView = useInView(languagesRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-[300px] md:h-[400px] mb-8">
              <TextMorphAnimation />
            </div>
            <p className="text-2xl text-blue-700 dark:text-blue-300 mb-6 font-medium">Fintech Developer</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:mikakort007@gmail.com"
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                mikakort007@gmail.com
              </a>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <button
                type="button"
                className={`flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium transition-colors focus:outline-none hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer ${
                  copied ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
                onClick={handleCopy}
                title="Copy phone number">
                {phoneNumber}
                <div className="relative h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 h-5 w-5 text-blue-600 dark:text-blue-400 transition-opacity duration-300 ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 h-5 w-5 text-gray-500 dark:text-gray-400 transition-opacity duration-300 ${
                      copied ? 'opacity-0' : 'opacity-100'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      d="M8 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <Link
              href="https://github.com/mikakort"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <span className="text-blue-300">|</span>
              <span>mikakort</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-neutral-800 rounded-none shadow-md" />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/imageA.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-neutral-900/60 to-black/80" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="space-y-16">
            {/* Education */}
            <div ref={educationRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Education</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={educationInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ transformOrigin: 'left' }}
                />
                <AnimatedBorder delay={0.8}>
                  <p className="text-gray-200">
                    <span className="font-bold">Bois-de-Boulogne</span>
                    <br />
                    Science, Computer Science and Mathematics (In progress)
                  </p>
                </AnimatedBorder>
              </div>
            </div>
            {/* Hobbies */}
            <div ref={hobbiesRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Interests</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={hobbiesInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ transformOrigin: 'left' }}
                />
                <AnimatedBorder delay={0.8}>
                  <div className="flex">
                    <ul className="w-1/2 list-disc list-inside text-gray-300 space-y-2">
                      <li>Programming & Robotics</li>
                      <li>Finance</li>
                      <li>Reading</li>
                    </ul>
                    <ul className="w-1/2 list-disc list-inside text-gray-300 space-y-2">
                      <li>Swimming</li>
                      <li>Running</li>
                      <li>Gym</li>
                    </ul>
                  </div>
                </AnimatedBorder>
              </div>
            </div>
            {/* Languages */}
            <div ref={languagesRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Languages</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  style={{ transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={languagesInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <AnimatedBorder delay={0.8}>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>French (Read, written, spoken)</li>
                    <li>English (Read, written, spoken)</li>
                    <li>Spanish (Read, written, spoken)</li>
                  </ul>
                </AnimatedBorder>
              </div>
            </div>
          </div>
          {/* Programming Languages Card (unchanged) */}
          <Card className="bg-neutral-900/80 border-neutral-800 backdrop-blur-md py-6 px-4 md:px-8 mt-32 mb-12 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-bold">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 mt-4">
                <TechBadge
                  icon={<FileCode className="text-yellow-400" />}
                  name="JavaScript (JS)"
                  description="Web scraping & APIs"
                />
                <TechBadge
                  icon={<FileType2 className="text-blue-400" />}
                  name="TypeScript (TS)"
                  description="Frontend/Backend dev & APIs (New projects)"
                />
                <TechBadge icon={<Atom className="text-cyan-400" />} name="React" description="Web apps" />
                <TechBadge
                  icon={<Rocket className="text-orange-400" />}
                  name="Astro"
                  description="Web apps (New projects)"
                />
                <TechBadge
                  icon={<Layout className="text-orange-400" />}
                  name="HTML/CSS & Tailwind"
                  description="Web layout & styling"
                />
                <TechBadge
                  icon={<Code2 className="text-blue-500" />}
                  name="C++"
                  description="Low level coding & Robotics"
                />
                <TechBadge icon={<Coffee className="text-red-400" />} name="Java" description="Academic projects" />
                <TechBadge
                  icon={
                    <span role="img" aria-label="Python">
                      🐍
                    </span>
                  }
                  name="Python"
                  description="Data science & Ai"
                />
                <TechBadge icon={<Shield className="text-gray-400" />} name="Solidity" description="ETH dev" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-neutral-800 rounded-none shadow-md" />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full max-w-xs h-[440px] rounded-lg cursor-pointer group"
                style={{ perspective: 1000 }}
                onClick={() => setFlippedCardId(flippedCardId === project.id ? null : project.id)}>
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{ rotateY: flippedCardId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}>
                  {/* FRONT */}
                  <div
                    className="absolute w-full h-full bg-neutral-800/90 border border-neutral-700 rounded-lg shadow-lg overflow-hidden flex flex-col"
                    style={{ backfaceVisibility: 'hidden' }}>
                    <div className="h-48 bg-neutral-700/90 relative shrink-0">
                      {project.images && project.images.length > 1 ? (
                        <>
                          <div className="w-full h-full flex">
                            <div className="w-1/2 h-full relative">
                              <Image
                                src={project.images[0]}
                                alt={`${project.title} - Image 1`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                              />
                            </div>
                            <div className="w-1/2 h-full relative">
                              <Image
                                src={project.images[1]}
                                alt={`${project.title} - Image 2`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </>
                      ) : project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-700/90" />
                      )}
                      <span className="absolute top-3 left-3 bg-neutral-900/70 text-gray-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg">
                        {project.year}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                      </div>
                      <div className="mt-auto pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => {
                            const colors = techColors[tag] || { bg: 'bg-gray-900/90', text: 'text-gray-100' };
                            return (
                              <Badge key={index} variant="secondary" className={`${colors.bg} ${colors.text}`}>
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* BACK */}
                  <div
                    className="absolute w-full h-full bg-neutral-800/90 border border-neutral-700 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                    <div className="flex flex-col gap-4 w-full max-w-[200px]">
                      {project.links.github.map((link, index) => {
                        const buttonId = `${project.id}-${index}`;
                        const isPrivate = link === '#';

                        if (privateLinkMessageId === buttonId) {
                          return (
                            <Badge
                              key={buttonId}
                              className="inline-flex items-center justify-center bg-yellow-900/90 text-yellow-100 font-semibold py-3 px-2 rounded-lg w-full text-center text-xs"
                              onClick={(e) => e.stopPropagation()}>
                              <FontAwesomeIcon icon={faLock} className="w-5 h-5 mr-1.5 shrink-0" />
                              <span>Sorry, this repository is still private</span>
                            </Badge>
                          );
                        }

                        const buttonContent = (
                          <>
                            {isPrivate ? (
                              <FontAwesomeIcon icon={faLock} className="w-5 h-5 mr-2" />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            )}
                            GitHub {project.links.github.length > 1 ? (index === 0 ? '(Frontend)' : '(Backend)') : ''}
                          </>
                        );

                        if (isPrivate) {
                          return (
                            <button
                              key={buttonId}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPrivateLinkMessageId(buttonId);
                                setTimeout(() => setPrivateLinkMessageId(null), 2000);
                              }}
                              className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                              {buttonContent}
                            </button>
                          );
                        } else {
                          return (
                            <a
                              key={buttonId}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                              {buttonContent}
                            </a>
                          );
                        }
                      })}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 mr-2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
