'use client';

import Link from 'next/link';
import RotatingTextWrapper from '@/components/RotatingTextWrapper';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);
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
      description: 'Custom prompts for AI IDEs (TS, Astro, AI, Auth)',
      tags: ['TypeScript', 'Astro', 'AI', 'Authentication'],
      year: '2025',
    },
    {
      id: 2,
      title: 'Portfolio Management & Stock Analysis App',
      description: 'Portfolio management and stock analysis (TS, Astro, APIs, JWT, OAuth & StripeJS)',
      tags: ['TypeScript', 'Astro', 'APIs', 'JWT', 'OAuth', 'StripeJS'],
      year: '2025',
    },
    {
      id: 3,
      title: 'Voice and Chat App',
      description: 'Voice and chat app (MERN, WebRTC, WebSockets & APIs)',
      tags: ['MERN', 'WebRTC', 'WebSockets', 'APIs'],
      year: '2024',
    },
    {
      id: 4,
      title: 'Arbitrage Algorithm for Decentralized Exchanges',
      description: 'Arbitrage algorithm between decentralized exchanges (DEX, Web3, Solidity & JS)',
      tags: ['DEX', 'Web3', 'Solidity', 'JavaScript'],
      year: '2023',
    },
    {
      id: 5,
      title: 'AI Model for Digital Detection',
      description: 'Artificial intelligence model for digital detection without libraries (Python & AI)',
      tags: ['Python', 'AI'],
      year: '2023',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-[400px] mb-8">
              <RotatingTextWrapper />
            </div>
            <p className="text-2xl text-blue-700 dark:text-blue-300 mb-6 font-medium">Fintech Developer</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:mikaikort007@gmail.com"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-blue-600 dark:text-blue-400 transition-opacity duration-300 ${
                    copied ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
              View My Projects
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
          <div className="bg-neutral-900/80 border border-neutral-800 backdrop-blur-md rounded-2xl shadow-2xl p-10 md:p-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              <p className="mb-8 text-gray-200">
                <span className="font-bold">Bois-de-Boulogne</span>
                <br />
                Science, Computer Science and Mathematics (In progress)
              </p>
              <h2 className="text-2xl font-bold text-white mb-6">Hobbies</h2>
              <ul className="list-disc list-inside mb-8 text-gray-300">
                <li>Programming</li>
                <li>Finance</li>
                <li>Reading</li>
                <li>Swimming</li>
                <li>Running</li>
                <li>Gym</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
              <ul className="list-disc list-inside mb-8 text-gray-300">
                <li>French (Read, written, spoken)</li>
                <li>English (Read, written, spoken)</li>
                <li>Spanish (Read, written, spoken)</li>
              </ul>
              <h2 className="text-2xl font-bold text-white mb-6">Programming Languages</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>JavaScript (JS)</li>
                <li>TypeScript (TS)</li>
                <li>React</li>
                <li>Astro</li>
                <li>HTML/CSS && Tailwind</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>Haskell</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 w-full bg-neutral-800 rounded-none shadow-md" />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-800/90 border border-neutral-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-sm transform hover:-translate-y-1">
                <div className="h-48 bg-neutral-700/90 flex items-center justify-center text-2xl font-bold text-gray-400">
                  {project.year}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-900/90 text-blue-100 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
