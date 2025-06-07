import Link from 'next/link';

export default function Home() {
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Mikaël Kortbaoui
            </h1>
            <p className="text-2xl text-blue-700 dark:text-blue-300 mb-6 font-medium">Fintech Developer</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:mikaikort007@gmail.com"
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                mikaikort007@gmail.com
              </a>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">(450) 435-4536</span>
            </div>
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-10 md:p-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">Education</h2>
              <p className="mb-8 text-gray-800 dark:text-gray-200">
                <span className="font-bold">Bois-de-Boulogne</span>
                <br />
                Science, Computer Science and Mathematics (In progress)
              </p>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">Hobbies</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700 dark:text-gray-300">
                <li>Programming</li>
                <li>Finance</li>
                <li>Reading</li>
                <li>Swimming</li>
                <li>Running</li>
                <li>Gym</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">Languages</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700 dark:text-gray-300">
                <li>French (Read, written, spoken)</li>
                <li>English (Read, written, spoken)</li>
                <li>Spanish (Read, written, spoken)</li>
              </ul>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">Programming Languages</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-400">
                  {project.year}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full">
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
