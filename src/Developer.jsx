import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Globe, TrendingUp, Search, Palette, Zap, CheckCircle, ArrowRight, Star, Users, Award, Send } from 'lucide-react';

export default function TechServicesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const services = [
    { icon: <Code className="w-8 h-8" />, title: "Software Development", desc: "Custom software solutions tailored to your business needs" },
    { icon: <Globe className="w-8 h-8" />, title: "Website Development", desc: "Responsive, modern websites that drive results" },
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Applications", desc: "iOS & Android apps with seamless user experience" },
    { icon: <Zap className="w-8 h-8" />, title: "Website CRM", desc: "Customer relationship management systems" },
    { icon: <Search className="w-8 h-8" />, title: "SEO Services", desc: "Rank higher on Google and drive organic traffic" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Digital Marketing", desc: "Complete digital marketing strategies that convert" },
    { icon: <Globe className="w-8 h-8" />, title: "Google Listing", desc: "Optimize your Google My Business presence" },
    { icon: <Palette className="w-8 h-8" />, title: "Graphics & Logo Design", desc: "Stunning visuals that represent your brand" },
    { icon: <Zap className="w-8 h-8" />, title: "API Integration", desc: "Seamless third-party integrations" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const handleSubmit = async () => {
    try {
      await axios.post("https://indokonabackend-1.onrender.com/api/contact/", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="w-8 h-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">TechSolutions</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition">Services</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-2">
            <a href="#services" className="block text-gray-300 hover:text-purple-400 py-2">Services</a>
            <a href="#about" className="block text-gray-300 hover:text-purple-400 py-2">About</a>
            <a href="#contact" className="block text-gray-300 hover:text-purple-400 py-2">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Digitally</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From websites to mobile apps, SEO to digital marketing - We build solutions that drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-300">We deliver excellence in every project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Quality First</h3>
              <p className="text-gray-300">We never compromise on quality. Every project is delivered with perfection.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Client Focused</h3>
              <p className="text-gray-300">Your success is our priority. We work closely with you at every step.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Quick turnaround times without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-300">Let's discuss your project and grow your business together</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
              >
                <option value="" className="bg-slate-800">Select Service</option>
                <option value="website" className="bg-slate-800">Website Development</option>
                <option value="mobile" className="bg-slate-800">Mobile App</option>
                <option value="seo" className="bg-slate-800">SEO</option>
                <option value="marketing" className="bg-slate-800">Digital Marketing</option>
                <option value="design" className="bg-slate-800">Graphics/Logo Design</option>
                <option value="software" className="bg-slate-800">Software Development</option>
                <option value="other" className="bg-slate-800">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition mb-6"
            ></textarea>

            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Send Message <Send className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-purple-500" />
            <span className="ml-2 text-lg font-bold text-white">TechSolutions</span>
          </div>
          <p className="text-gray-400 mb-4">Building digital solutions that transform businesses</p>
          <p className="text-gray-500 text-sm">© 2024 TechSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}