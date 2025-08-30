import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OnboardingWizard from './components/OnboardingWizard';
import ClientDashboard from './components/ClientDashboard';
import SampleBlog from './components/SampleBlog';
import VideoModal from './components/VideoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/aiblogmaster_logo.png" alt="aiblogmaster.com Logo" className="h-8" />
            <span className="text-2xl font-bold text-gray-800">aiblogmaster.com</span>
          </div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Features</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Reviews</Link>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Sign In</button>
            <Link to="/onboarding" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start for $1</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="hero-section text-center py-20">
                <div className="container mx-auto px-4">
                  <p className="text-blue-600 text-lg mb-2">🚀 Launch Your Money-Making Blog Today</p>
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Your Income-Generating <span className="text-blue-600">Blog on Autopilot</span>
                  </h1>
                  <p className="text-xl text-gray-700 mb-8">
                    We use AI to write, post, and monetize a professional blog for you. You collect the profits. All for just <span className="font-bold text-blue-600">$1/month.</span>
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link to="/onboarding" className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                      Start My Money-Making Blog for $1
                    </Link>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="px-8 py-4 border border-gray-300 text-gray-800 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                    >
                      ▷ Watch Demo
                    </button>
                  </div>
                  <div className="mt-16 bg-gray-800 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
                    <div className="aspect-video bg-black flex items-center justify-center text-white text-2xl">
                      <p>Watch How It Works</p>
                    </div>
                    <p className="text-gray-400 text-sm py-2">3-minute demo of the complete system</p>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="features-section bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-12">Everything You Need to Make Money Online</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-ai.png" alt="AI Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Content</h3>
                      <p className="text-gray-600">4 high-quality, SEO-optimized blog posts written by AI every month</p>
                    </div>
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-money.png" alt="Money Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Monetization</h3>
                      <p className="text-gray-600">Built-in affiliate links, AdSense integration, and revenue sharing</p>
                    </div>
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-pinterest.png" alt="Pinterest Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Pinterest Marketing</h3>
                      <p className="text-gray-600">5 unique pins created and posted automatically for each blog post</p>
                    </div>
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-email.png" alt="Email Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email List Building</h3>
                      <p className="text-gray-600">Automatic subscriber collection with broadcast capabilities</p>
                    </div>
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-setforget.png" alt="Set & Forget Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Set & Forget</h3>
                      <p className="text-gray-600">Complete automation for an entire year after initial setup</p>
                    </div>
                    <div className="card p-6 rounded-lg shadow-md">
                      <img src="/icon-multiformat.png" alt="Multi-format Icon" className="mx-auto mb-4 h-16" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Format Content</h3>
                      <p className="text-gray-600">Audio versions, videos, and social media content included</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pricing Section */}
              <section className="pricing-section bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-12">Simple, Transparent Pricing</h2>
                  <p className="text-xl text-gray-700 mb-12">Start with our basic plan and upgrade as your income grows. No hidden fees, no long-term contracts.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pricing Card 1 */}
                    <div className="card p-6 rounded-lg shadow-lg bg-white">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Momentum</h3>
                      <p className="text-gray-600 mb-4">Perfect for getting started</p>
                      <p className="price text-5xl font-bold text-blue-600 mb-6">$1<span className="text-xl text-gray-600">/month</span></p>
                      <ul className="text-left text-gray-700 mb-8">
                        <li className="mb-2">✓ 4 AI-written blog posts/month</li>
                        <li className="mb-2">✓ Automated Pinterest posting</li>
                        <li className="mb-2">✓ Revenue sharing (70% yours)</li>
                        <li className="mb-2">✓ Email list building</li>
                        <li className="mb-2">✓ Basic analytics</li>
                      </ul>
                      <Link to="/onboarding" className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                      </Link>
                    </div>

                    {/* Pricing Card 2 (Popular) */}
                    <div className="card popular p-6 rounded-lg shadow-lg bg-white relative">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Momentum Pro</h3>
                      <p className="text-gray-600 mb-4">For serious content creators</p>
                      <p className="price text-5xl font-bold text-blue-600 mb-6">$10<span className="text-xl text-gray-600">/month</span></p>
                      <ul className="text-left text-gray-700 mb-8">
                        <li className="mb-2">✓ 8 AI-written blog posts/month</li>
                        <li className="mb-2">✓ AI video generation</li>
                        <li className="mb-2">✓ Full social media distribution</li>
                        <li className="mb-2">✓ Priority support</li>
                        <li className="mb-2">✓ Advanced analytics</li>
                      </ul>
                      <Link to="/onboarding" className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                      </Link>
                    </div>

                    {/* Pricing Card 3 */}
                    <div className="card p-6 rounded-lg shadow-lg bg-white">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Momentum Elite</h3>
                      <p className="text-gray-600 mb-4">Maximum earning potential</p>
                      <p className="price text-5xl font-bold text-blue-600 mb-6">$25<span className="text-xl text-gray-600">/month</span></p>
                      <ul className="text-left text-gray-700 mb-8">
                        <li className="mb-2">✓ Everything in Pro</li>
                        <li className="mb-2">✓ AI course creator</li>
                        <li className="mb-2">✓ 2 free email broadcasts/month</li>
                        <li className="mb-2">✓ Custom monetization strategies</li>
                        <li className="mb-2">✓ 1-on-1 consultation</li>
                      </ul>
                      <Link to="/onboarding" className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="testimonials-section bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-12">Real Results from Real Users</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="testimonial-card p-6 rounded-lg shadow-md">
                      <p className="text-gray-700 italic mb-4">
                        "Made $347 in my first month with zero effort. The AI writes better than I do!"
                      </p>
                      <p className="font-semibold text-gray-800">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm">Food Blogger</p>
                    </div>
                    <div className="testimonial-card p-6 rounded-lg shadow-md">
                      <p className="text-gray-700 italic mb-4">
                        "Finally, a blogging solution that actually works. My Pinterest traffic exploded."
                      </p>
                      <p className="font-semibold text-gray-800">Mike Chen</p>
                      <p className="text-gray-600 text-sm">DIY Enthusiast</p>
                    </div>
                    <div className="testimonial-card p-6 rounded-lg shadow-md">
                      <p className="text-gray-700 italic mb-4">
                        "The automated email marketing feature alone is worth 10x the price."
                      </p>
                      <p className="font-semibold text-gray-800">Laura Martinez</p>
                      <p className="text-gray-600 text-sm">Travel Writer</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="cta-section bg-blue-600 text-white py-20 text-center">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-6">Ready to Start Making Money?</h2>
                  <p className="text-xl mb-8">
                    Join thousands of users who are already earning passive income with their AI-powered blogs.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link to="/onboarding" className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                      Start My Blog for $1/Month
                    </Link>
                    <Link to="/sample-blog" className="px-8 py-4 border border-white text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                      View Sample Blog
                    </Link>
                  </div>
                  <p className="text-sm mt-8 opacity-80">No setup fees • Cancel anytime • 30-day money-back guarantee</p>
                </div>
              </section>

              {/* Footer */}
              <footer className="footer bg-gray-900 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                  <p>&copy; 2025 aiblogmaster.com. All rights reserved.</p>
                  <div className="mt-4 space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                  </div>
                </div>
              </footer>
            </>
          } />
          <Route path="/onboarding" element={<OnboardingWizard />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/sample-blog" element={<SampleBlog />} />
        </Routes>
      </div>
      <VideoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} videoSrc="#" />
    </Router>
  );
}

export default App;


