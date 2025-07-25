'use client';

import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <FadeInOnScroll>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            <header className="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </header>

            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy describes how I, Mikael Kortbaoui, collect, use, and protect your information when
                  you use my mobile applications. I am committed to protecting your privacy and ensuring you understand
                  how your information is handled.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information I Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Information You Provide</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I may collect information that you voluntarily provide to me, such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>Account information (username, email address)</li>
                      <li>Profile information and preferences</li>
                      <li>Content you create or share within the app</li>
                      <li>Communications with me (support requests, feedback)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Automatically Collected Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      When you use my apps, I may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>Device information (model, operating system, unique identifiers)</li>
                      <li>Usage data (features used, session duration, crash reports)</li>
                      <li>Performance data (app launch time, response times)</li>
                      <li>Location data (if permission is granted and required for app functionality)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  How I Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>App Functionality:</strong> To provide and maintain app features and services
                  </li>
                  <li>
                    <strong>User Experience:</strong> To personalize and improve your app experience
                  </li>
                  <li>
                    <strong>Customer Support:</strong> To respond to your requests and provide technical support
                  </li>
                  <li>
                    <strong>Analytics:</strong> To understand app usage patterns and improve performance
                  </li>
                  <li>
                    <strong>Security:</strong> To detect and prevent fraud, security issues, and technical problems
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable laws and regulations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I do not sell, rent, or trade your personal information. I may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With third-party services that help me operate my apps
                    (analytics, crash reporting, cloud storage)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect my rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of assets
                  </li>
                  <li>
                    <strong>Consent:</strong> With your explicit consent for specific purposes
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  My apps may use third-party services for analytics, crash reporting, and other functionality. These
                  services have their own privacy policies:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Apple Analytics (for iOS apps)</li>
                  <li>Firebase Analytics and Crashlytics (Google)</li>
                  <li>Other services as specified in individual app descriptions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I implement appropriate technical and organizational measures to protect your information against
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                  the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Retention</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I retain your information only for as long as necessary to provide my services and fulfill the
                  purposes outlined in this policy. When information is no longer needed, I securely delete or anonymize
                  it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights and Choices</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, please contact me using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My apps are not intended for children under 13 years of age. I do not knowingly collect personal
                  information from children under 13. If I become aware that I have collected personal information from
                  a child under 13, I will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I may update this Privacy Policy from time to time. I will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Me</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or my privacy practices, please contact me:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Email:</strong> mikakort007@gmail.com
                  </p>
                  <p>
                    <strong>Developer:</strong> Mikael Kortbaoui
                  </p>
                  <p>
                    <strong>Location:</strong> Montreal, Canada
                  </p>
                  <p>
                    <strong>Response Time:</strong> I aim to respond to all inquiries within 48 hours
                  </p>
                </div>
              </div>
            </section>
          </div>
        </FadeInOnScroll>
      </div>
    </main>
  );
}
