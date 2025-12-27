
import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  LayoutGrid, 
  Activity, 
  Download, 
  Play, 
  Send, 
  Plus, 
  Minus, 
  MessageSquare, 
  Lock, 
  Eye, 
  Settings, 
  Cpu, 
  Globe 
} from 'lucide-react';

// --- Types ---

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// --- Components ---

const Header: React.FC = () => (
  <nav className="fixed w-full z-50 top-0 border-b border-slate-800 bg-background/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-2">
        <div className="shadow-neon-blue rounded-lg overflow-hidden">
          <img src="icon1.png" className="w-8 h-8 object-cover" alt="Crown Screens Logo" />
        </div>
        <span className="text-xl font-bold text-white tracking-wide">Crown Screens</span>
      </div>
      
      <div className="hidden md:flex space-x-8 font-medium">
        <a href="#" className="text-primary transition-colors hover:text-white">Home</a>
        <a href="#features" className="text-slate-400 hover:text-primary transition-colors">Features</a>
        <a href="#guide" className="text-slate-400 hover:text-primary transition-colors">Guide</a>
        <a href="#faq" className="text-slate-400 hover:text-primary transition-colors">FAQ</a>
      </div>

      <div className="flex items-center space-x-3">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-700 hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
          <Eye size={16} /> Partners
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-primary hover:opacity-90 rounded-lg text-sm font-medium text-white shadow-neon-blue transition-opacity">
          <Download size={16} /> Download
        </button>
      </div>
    </div>
  </nav>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, stats }) => (
  <div className="bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all group hover:-translate-y-1 duration-300">
    <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{description}</p>
    <div className="flex gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-slate-900/50 border border-slate-800 px-3 py-1.5 rounded-lg">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
          <div className="text-xs font-semibold text-primary">{stat.value}</div>
        </div>
      ))}
    </div>
  </div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-800 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group transition-colors"
      aria-expanded={isOpen}
    >
      <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-slate-200 group-hover:text-primary'}`}>
        {question}
      </span>
      {isOpen ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-slate-500 flex-shrink-0 group-hover:text-primary transition-colors" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-slate-400 leading-relaxed text-sm md:text-base">{answer}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      title: "Mass Device Sync",
      description: "Millisecond-level latency sending keystrokes, gestures, and commands to hundreds of devices simultaneously. Realize true 'one-to-many' operations.",
      icon: <Zap className="text-primary" />,
      stats: [{ label: "Latency", value: "< 2ms" }, { label: "Capacity", value: "Unlimited" }]
    },
    {
      title: "Visual Dashboard",
      description: "Real-time thumbnail previews for all connected devices. Monitor device status and performance metrics from a single, unified interface.",
      icon: <LayoutGrid className="text-secondary" />,
      stats: [{ label: "Refresh Rate", value: "60 FPS" }, { label: "Modes", value: "Grid/List" }]
    },
    {
      title: "Wireless ADB Protocol",
      description: "Based on standard ADB Over WiFi. Break free from cable clutter and access your remote device pool anytime, anywhere.",
      icon: <Cpu className="text-primary" />,
      stats: [{ label: "Connection", value: "WiFi/USB" }, { label: "Support", value: "Android 5+" }]
    },
    {
      title: "Enterprise-Grade Security",
      description: "All data streams are encrypted with AES-256. Supports role-based access control to protect sensitive business operations.",
      icon: <Lock className="text-secondary" />,
      stats: [{ label: "Encryption", value: "AES-256" }, { label: "Auth", value: "SSO Ready" }]
    },
    {
      title: "Global Node Relay",
      description: "Utilize built-in relay servers to manage devices across different regions and networks while maintaining extreme link stability.",
      icon: <Globe className="text-primary" />,
      stats: [{ label: "Uptime", value: "99.9%" }, { label: "Nodes", value: "Global" }]
    },
    {
      title: "Smart Automation",
      description: "Record and replay complex tasks. Supports visual process design with Python/JS script extensions to maximize efficiency.",
      icon: <Settings className="text-secondary" />,
      stats: [{ label: "Scripting", value: "Python/JS" }, { label: "Flow", value: "Visual" }]
    }
  ];

  const faqs = [
    {
      question: "How many devices does Crown Screens support?",
      answer: "There is no software-imposed limit. Capacity is primarily determined by your host hardware (CPU/RAM). On high-performance workstations, we have successfully managed 500+ concurrent devices."
    },
    {
      question: "Does the software require Root access?",
      answer: "No. Crown Screens is developed based on standard ADB protocols. No Root is required for screen sharing, touch control, or file management on Android devices."
    },
    {
      question: "Can I remotely control devices across different regions?",
      answer: "Yes. With our built-in Relay Server feature, you can seamlessly control devices anywhere in the world as long as they have internet access."
    },
    {
      question: "What operating systems are supported?",
      answer: "We currently support Windows 10/11, macOS (Intel/M1/M2/M3), and major Linux distributions. Mobile device support includes Android 5.0 and above."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <img src="icon1.png" className="relative inline-flex rounded-full h-3 w-3 object-cover" alt="badge icon" />
                </div>
                Version 4.2 Now Live
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Next-Gen <br />
                <span className="text-gradient">Multi-Device</span><br />
                Command Center
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Built for professional developers and QA teams. Control, sync, and automate hundreds of devices from a single interface to skyrocket your productivity.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <button className="bg-gradient-primary hover:scale-105 active:scale-95 text-white font-bold py-4 px-10 rounded-xl shadow-neon-blue transition-all flex items-center gap-2 group">
                  <Download size={22} className="group-hover:translate-y-0.5 transition-transform" /> START FREE TRIAL
                </button>
                <button className="border border-slate-600 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center gap-2">
                  <Play size={20} /> WATCH DEMO
                </button>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all text-sm">
                <div className="flex items-center gap-2"><Settings size={16}/> Windows 10/11</div>
                <div className="flex items-center gap-2"><Smartphone size={16}/> Android 5.0+</div>
                <div className="flex items-center gap-2"><Activity size={16}/> macOS / Linux</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
              <div className="relative z-10 bg-slate-900 border border-slate-700 p-2 rounded-2xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dashboard Preview" 
                  className="rounded-xl w-full h-auto grayscale-[0.2]"
                />
                <div className="absolute -bottom-6 -right-6 bg-surface border border-slate-700 p-4 rounded-xl shadow-xl hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-300">Server Status: Online</span>
                  </div>
                  <div className="text-xl font-bold text-white">492 Devices Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Competitive Edge</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Designed for large-scale deployment, instant response, and ultimate stability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Steps */}
      <section id="guide" className="py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Get Started in <span className="text-primary">3 Minutes</span></h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Download & Install", desc: "Get the installer for your OS from the official site and run the one-click setup.", icon: <Download /> },
                  { step: "02", title: "Activate ADB Mode", desc: "Connect your device via USB once to authorize Wireless ADB, then you can disconnect the cables forever.", icon: <Cpu /> },
                  { step: "03", title: "Start Managing", desc: "Devices appear automatically in the dashboard. You can start syncing or running scripts immediately.", icon: <LayoutGrid /> },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-3xl border border-white/5">
                <div className="aspect-video bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center relative group cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800" className="opacity-40 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tutorial" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="text-white fill-white ml-1" size={32} />
                     </div>
                   </div>
                </div>
                <p className="mt-6 text-center text-sm text-slate-400 italic font-medium">"The most intuitive multi-device manager I've ever used for mobile app testing." — Tech Review Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <MessageSquare className="mx-auto text-primary mb-4" size={40} />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about Crown Screens.</p>
          </div>
          <div className="bg-surface rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                {...faq} 
                isOpen={openFaq === i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-[2rem]">
            <div className="bg-background rounded-[2rem] py-16 px-8">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to Scale Your Efficiency?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Join 10,000+ professionals worldwide. Download now and start your 14-day full feature trial.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-background font-black py-4 px-12 rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl">
                  Start Free Trial Now
                </button>
                <button className="border border-slate-700 text-white font-bold py-4 px-12 rounded-xl hover:bg-slate-800 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src="icon1.png" className="w-8 h-8 rounded-lg shadow-neon-blue" alt="footer logo" />
                <span className="text-2xl font-bold text-white tracking-wide">Crown Screens</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Professional-grade multi-device management solution. Built by developers, for developers, powering massive mobile operations worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-primary transition-colors border border-slate-800"><Send size={20}/></a>
                <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-primary transition-colors border border-slate-800"><MessageSquare size={20}/></a>
                <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-primary transition-colors border border-slate-800"><Monitor size={20}/></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Change Log</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Keys</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-600 text-sm">
              © 2024 Crown Screens Software. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
