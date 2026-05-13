import React, { useState, useEffect } from "react";
import {
  Building2,
  Wallet,
  BarChart3,
  Smartphone,
  Bell,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Users,
  Home,
  TrendingUp,
  Star,
  Zap,
  Clock,
  Shield,
} from "lucide-react";

export default function DormEaseLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Room & Tenant Management",
      description:
        "Track occupancy in real-time, assign rooms effortlessly, and manage complete tenant profiles with document storage.",
    },
    {
      icon: <Wallet className="w-7 h-7" />,
      title: "Automated Billing & Payments",
      description:
        "Generate monthly invoices automatically, track payment status, and send reminders without lifting a finger.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Real-Time Analytics",
      description:
        "Monitor income, expenses, and occupancy rates with beautiful dashboards that update instantly.",
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Access",
      description:
        "Manage your dormitory from anywhere. Both admins and tenants get full mobile access on any device.",
    },
    {
      icon: <Bell className="w-7 h-7" />,
      title: "Smart Notifications",
      description:
        "Automated rent reminders, maintenance updates, and announcements keep everyone informed.",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Maintenance Tracking",
      description:
        "Log requests, track resolution status, and maintain a complete history of all maintenance activities.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Dorm Owner, Manila",
      text: "DormEase reduced our manual work by 60% and improved rent collection dramatically. Best decision we made!",
      rating: 5,
    },
    {
      name: "Roberto Cruz",
      role: "Property Manager, Cebu",
      text: "The automated billing alone saved us countless hours. Our tenants love the mobile access too.",
      rating: 5,
    },
    {
      name: "Angela Reyes",
      role: "Dorm Administrator, Davao",
      text: "Finally, a system that actually understands how dorms in the Philippines operate. Highly recommended!",
      rating: 5,
    },
  ];

  const stats = [
    { value: "2,000+", label: "Rooms Managed" },
    { value: "150+", label: "Happy Dorm Owners" },
    { value: "99.8%", label: "Uptime" },
    { value: "₱5M+", label: "Rent Collected Monthly" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-x-hidden">
      {/* Claude Sonnet 4.5 Vibe Coding Credit */}
     

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap');
        
        @layer base {
          * {
            @apply box-border;
          }
          
          body {
            @apply m-0 p-0 font-['Sora'] antialiased overflow-x-hidden;
            font-family: 'Sora', system-ui, -apple-system, sans-serif;
          }
          
          html {
            @apply scroll-smooth;
          }
        }
        
        @layer components {
          .gradient-text {
            @apply bg-gradient-to-r from-violet-400 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent;
          }
          
          .glow-box {
            @apply relative bg-slate-900/60 backdrop-blur-xl border border-violet-500/20 transition-all duration-500 ease-out;
          }
          
          .glow-box:hover {
            @apply border-violet-500/50 -translate-y-2 shadow-[0_20px_60px_rgba(167,139,250,0.3)];
          }
          
          @media (max-width: 768px) {
            .glow-box:hover {
              @apply -translate-y-1 shadow-[0_10px_40px_rgba(167,139,250,0.3)];
            }
          }
          
          .btn-primary {
            @apply relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-600 
                   border-0 px-10 py-4 font-semibold text-base rounded-xl cursor-pointer 
                   transition-all duration-300 shadow-[0_10px_30px_rgba(167,139,250,0.3)] text-white;
          }
          
          .btn-primary::before {
            @apply content-[''] absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-orange-500 
                   opacity-0 transition-opacity duration-300;
          }
          
          .btn-primary:hover::before {
            @apply opacity-100;
          }
          
          .btn-primary:hover {
            @apply -translate-y-0.5 shadow-[0_15px_40px_rgba(236,72,153,0.4)];
          }
          
          .btn-primary:active {
            @apply translate-y-0;
          }
          
          .btn-primary span {
            @apply relative z-10;
          }
          
          .btn-secondary {
            @apply bg-violet-500/10 border-2 border-violet-500/30 px-10 py-3.5 font-semibold 
                   text-base rounded-xl cursor-pointer transition-all duration-300 text-white;
          }
          
          .btn-secondary:hover {
            @apply bg-violet-500/20 border-violet-500/50 -translate-y-0.5;
          }
          
          .btn-secondary:active {
            @apply translate-y-0;
          }
          
          @media (max-width: 768px) {
            .btn-primary, .btn-secondary {
              @apply px-8 py-3.5 text-base;
            }
          }
          
          @media (max-width: 640px) {
            .btn-primary, .btn-secondary {
              @apply w-full justify-center;
            }
          }
        }
        
        @layer utilities {
          .noise-bg {
            @apply relative overflow-hidden;
          }
          
          .noise-bg::before {
            content: '';
            @apply absolute inset-0 pointer-events-none opacity-5;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          
          .mesh-gradient {
            @apply absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 pointer-events-none;
            animation: pulse-glow 8s ease-in-out infinite;
          }
          
          .mesh-1 {
            @apply -top-[200px] -right-[100px];
            background: radial-gradient(circle, #a78bfa 0%, transparent 70%);
          }
          
          .mesh-2 {
            @apply -bottom-[200px] -left-[100px];
            background: radial-gradient(circle, #ec4899 0%, transparent 70%);
            animation-delay: 4s;
          }
          
          .mesh-3 {
            @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
            background: radial-gradient(circle, #f97316 0%, transparent 70%);
            animation-delay: 2s;
          }
          
          @media (max-width: 768px) {
            .mesh-gradient {
              @apply w-[300px] h-[300px] blur-[80px];
            }
            
            .mesh-1 {
              @apply -top-[100px] -right-[50px];
            }
            
            .mesh-2 {
              @apply -bottom-[100px] -left-[50px];
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @media (max-width: 768px) {
            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
          }
          
          .animate-slide-in {
            animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          .feature-card {
            @apply opacity-0;
          }
          
          .feature-card.visible {
            animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .vibe-banner {
            @apply fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-violet-600/90 via-fuchsia-600/90 to-purple-600/90 
                  backdrop-blur-md border-b border-white/20 shadow-lg;
            animation: slideDown 0.5s ease-out;
          }

          .claude-badge {
            @apply inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold 
                  backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(10px) rotate(-5deg); 
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.5; 
          }
          50% { 
            opacity: 1; 
          }
        }
        
        /* Custom scrollbar with Tailwind colors */
        ::-webkit-scrollbar {
          @apply w-2.5;
        }
        
        ::-webkit-scrollbar-track {
          @apply bg-slate-950;
        }
        
        ::-webkit-scrollbar-thumb {
          @apply rounded-md;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
        }
        
        /* Delay classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Mesh Gradient Background */}
      <div className="mesh-1 mesh-gradient"></div>
      <div className="mesh-2 mesh-gradient"></div>
      <div className="mesh-3 mesh-gradient"></div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                DormEase
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Pricing
              </button>
              <button className="btn-primary">
                <span className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-4 space-y-3 animate-slide-in">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Pricing
              </button>
              <button className="btn-primary w-full mt-2">
                <span className="flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 noise-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`space-y-6 sm:space-y-8 text-center lg:text-left ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-xs sm:text-sm font-semibold text-violet-300 animate-slide-in backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                Trusted by 150+ Dorm Owners in the Philippines
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-slide-in delay-100 tracking-tight">
                Modern Dormitory Management Made{" "}
                <span className="gradient-text">Simple</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed animate-slide-in delay-200 max-w-2xl mx-auto lg:mx-0">
                Manage tenants, payments, maintenance requests, and reports —
                all in one powerful platform. Say goodbye to Excel spreadsheets
                and paperwork chaos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in delay-300 justify-center lg:justify-start">
                <button className="btn-primary group">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="btn-secondary">View Features</button>
              </div>

              {/* Stats with modern styling */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 animate-slide-in delay-400">
                <div className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    2,000+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    Rooms Managed
                  </div>
                </div>
                <div className="text-center lg:text-left border-x border-slate-700/50 px-2 group">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    99.8%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    System Uptime
                  </div>
                </div>
                <div className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    ₱5M+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    Monthly Collection
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Dashboard Preview */}
            <div className="relative animate-slide-in delay-500 mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative glow-box rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-float">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-400 mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Total Revenue
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">
                      ₱324,500
                    </div>
                    <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                      <span>↗</span> +12.5% from last month
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:border-violet-500/30 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Occupancy Rate
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          42/45 rooms
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl sm:text-2xl font-bold text-green-400">
                        93%
                      </div>
                      <div className="text-xs text-green-400/60">Excellent</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:border-pink-500/30 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Wallet className="w-5 h-5 text-pink-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Payments Collected
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          This month
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl sm:text-2xl font-bold text-pink-400">
                        38/42
                      </div>
                      <div className="text-xs text-pink-400/60">90.5%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Pending Requests
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          Maintenance
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl sm:text-2xl font-bold text-orange-400">
                        5
                      </div>
                      <div className="text-xs text-orange-400/60">Priority</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-slate-950/50">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Still Managing Your Dorm with{" "}
            <span className="gradient-text">Excel and Paper?</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
            {[
              {
                icon: "📊",
                text: "Manual tracking of payments is time-consuming and error-prone",
              },
              {
                icon: "🏠",
                text: "Hard to monitor available rooms and occupancy rates",
              },
              {
                icon: "⏰",
                text: "Tenants forget rent due dates, causing delayed payments",
              },
              {
                icon: "📈",
                text: "No clear financial reports to track your business growth",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="glow-box rounded-xl sm:rounded-2xl p-5 sm:p-6 text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-3">{problem.icon}</div>
                <p className="text-slate-300 text-base sm:text-lg">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Everything You Need in{" "}
              <span className="gradient-text">One System</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Powerful features designed specifically for dormitory management
              in the Philippines
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card visible glow-box rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950/50 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Get Started in{" "}
              <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 px-4">
              No technical expertise required
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Register Your Dormitory",
                description:
                  "Create your account and add your dormitory details in minutes. No credit card required for the trial.",
              },
              {
                step: "02",
                title: "Add Rooms and Tenants",
                description:
                  "Set up your rooms, define pricing, and invite tenants to the platform. Bulk import available for existing data.",
              },
              {
                step: "03",
                title: "Start Managing Operations",
                description:
                  "Track payments, handle maintenance requests, and access real-time reports. Everything in one dashboard.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="glow-box rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Loved by <span className="gradient-text">Dorm Owners</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 px-4">
              See what our users are saying
            </p>
          </div>

          <div className="relative">
            <div className="glow-box rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center space-y-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed italic px-4">
                "{testimonials[activeTestimonial].text}"
              </p>

              <div>
                <div className="font-bold text-lg sm:text-xl">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-slate-400 text-sm sm:text-base">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>

              <div className="flex justify-center gap-2 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeTestimonial
                        ? "bg-violet-500 w-8"
                        : "bg-slate-600 hover:bg-slate-500 w-2"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-slate-950/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 px-4">
              Choose the plan that fits your dormitory size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Basic",
                price: "₱999",
                period: "/month",
                description: "Perfect for small dormitories",
                features: [
                  "Up to 20 rooms",
                  "Unlimited tenants",
                  "Payment tracking",
                  "Basic reports",
                  "Email support",
                ],
              },
              {
                name: "Pro",
                price: "₱2,499",
                period: "/month",
                description: "For growing dormitories",
                features: [
                  "Up to 50 rooms",
                  "Unlimited tenants",
                  "Advanced analytics",
                  "Automated billing",
                  "Priority support",
                  "Mobile app access",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large operations",
                features: [
                  "Unlimited rooms",
                  "Multiple properties",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 support",
                  "Custom training",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`glow-box rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 ${plan.popular ? "ring-2 ring-violet-500 shadow-2xl shadow-violet-500/20" : ""} ${plan.popular ? "md:scale-105 md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1 bg-violet-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm sm:text-base">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm sm:text-base">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    plan.popular ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  <span>Get Started</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
            Ready to Simplify Your{" "}
            <span className="gradient-text">Dorm Operations?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 px-4">
            Join 150+ successful dorm owners who've transformed their management
            process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn-primary text-base sm:text-lg">
              <span className="flex items-center justify-center gap-2">
                Book a Free Demo <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            <button className="btn-secondary text-base sm:text-lg">
              Contact Sales
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 pt-4 px-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold gradient-text">
                  DormEase
                </span>
              </div>
              <p className="text-slate-400 text-sm sm:text-base">
                Modern dormitory management for the digital age.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs sm:text-sm">
            <p>© 2026 DormEase. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
