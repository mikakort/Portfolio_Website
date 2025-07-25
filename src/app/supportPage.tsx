'use client';

import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function Support() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <FadeInOnScroll>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            <header className="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">App Support</h1>
              <p className="text-gray-600 dark:text-gray-300">I'm here to help you get the most out of my apps</p>
            </header>

            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Support
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Need help? I'm here to assist you with any questions or issues.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:mikakort007@gmail.com"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center">
                      Email Support
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      Response time: Within 48 hours
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Quick Help
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Find answers to common questions below.</p>
                  <a
                    href="#faq"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center">
                    View FAQ
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What I Can Help With</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Issues</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      App crashes, bugs, or performance problems
                    </p>
                  </div>

                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How-To Guides</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Learn how to use app features effectively
                    </p>
                  </div>

                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Feature Requests</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Suggest new features or improvements</p>
                  </div>
                </div>
              </div>

              <div id="faq" className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      How do I report a bug or technical issue?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Please email me at mikakort007@gmail.com with details about the issue, including your device
                      model, iOS version, and steps to reproduce the problem. Screenshots or screen recordings are also
                      helpful.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      How can I request a new feature?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      I love hearing from my users! Send me your feature ideas via email. While I can't implement every
                      suggestion, I carefully consider all feedback for future updates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Is my data safe and private?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Yes, I take your privacy seriously. Please review my Privacy Policy for detailed information about
                      how I collect, use, and protect your data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      How often do you release updates?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      I regularly update my apps to fix bugs, improve performance, and add new features. Updates are
                      typically released every few weeks to months, depending on the scope of changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      What iOS versions do you support?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      My apps are designed to work with recent iOS versions. Specific requirements are listed on each
                      app's App Store page. I generally support the current iOS version and several previous versions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Developer Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Contact Details</h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>Developer:</strong> Mikael Kortbaoui
                      </p>
                      <p>
                        <strong>Email:</strong> mikakort007@gmail.com
                      </p>
                      <p>
                        <strong>Location:</strong> Montreal, Canada
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Support Hours</h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>Response Time:</strong> Within 48 hours
                      </p>
                      <p>
                        <strong>Time Zone:</strong> Eastern Time (Montreal, UTC−5/UTC−4)
                      </p>
                      <p>
                        <strong>Languages:</strong> English, French, Spanish
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Still Need Help?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Can't find what you're looking for? Don't hesitate to reach out directly.
                </p>
                <a
                  href="mailto:mikakort007@gmail.com?subject=App Support Request"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Support Email
                </a>
              </div>
            </section>
          </div>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
