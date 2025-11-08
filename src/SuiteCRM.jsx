import React, { useState } from 'react';
import { Home, Users, FileText, Zap, TrendingUp, Settings, LogOut, Menu, X, Briefcase, MessageSquare, CreditCard, Shield, Award, Bell, Search, Plus, Eye, Edit, Trash2, Check, Clock, DollarSign, Mail, Phone, Building, Download, Send, BarChart3 } from 'lucide-react';

export default function IndokonaCRMSuite() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'verification', label: 'User Verification', icon: Shield },
    { id: 'posting', label: 'Verified Posting Hub', icon: MessageSquare },
    { id: 'ai-builder', label: 'AI Business Builder', icon: Zap },
    { id: 'ads-automation', label: 'Ads Automation', icon: TrendingUp },
    { id: 'crm', label: 'CRM & Leads', icon: Users },
    { id: 'ai-assistant', label: 'AI Assistant', icon: Briefcase },
    { id: 'admin', label: 'Admin Control', icon: Settings },
    { id: 'integrations', label: 'Integrations', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'verification':
        return <UserVerification />;
      case 'posting':
        return <PostingHub />;
      case 'ai-builder':
        return <AIBusinessBuilder />;
      case 'ads-automation':
        return <AdsAutomation />;
      case 'crm':
        return <CRMLeads />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'admin':
        return <AdminControl />;
      case 'integrations':
        return <Integrations />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-black/40 backdrop-blur-xl border-b border-purple-500/20 fixed w-full z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:text-purple-400 transition">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white">
                IS
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">INDOKONA SUITE</h1>
                <p className="text-purple-300 text-xs">India's All-in-One Business OS</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 border border-purple-500/30 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <button className="relative text-white hover:text-purple-400 transition">
              <Bell size={22} />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-white text-sm">Admin</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-xl border-r border-purple-500/20 fixed h-full`}>
          <div className="p-4 space-y-2 mt-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition mt-8">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 p-6`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Verified Businesses', value: '856', change: '+8%', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Posts', value: '3,456', change: '+23%', icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
    { label: 'Revenue (₹)', value: '12.5L', change: '+15%', icon: DollarSign, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
        <h1 className="text-4xl font-bold mb-2">Welcome to Indokona Suite 🚀</h1>
        <p className="text-purple-100 text-lg">India's All-in-One Verified Business Operating System</p>
        <p className="text-purple-200 text-sm mt-2">Developed by: Indokona Credit Bazar Pvt. Ltd. | Contact: +91 8800905879</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">New business verified</p>
                  <p className="text-gray-400 text-xs">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
              <Plus size={20} className="inline mr-2" />
              New Post
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
              <Zap size={20} className="inline mr-2" />
              AI Builder
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
              <Users size={20} className="inline mr-2" />
              Add Lead
            </button>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
              <TrendingUp size={20} className="inline mr-2" />
              Run Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// User Verification Component
function UserVerification() {
  const [verifications, setVerifications] = useState([
    { id: 1, name: 'Rohit Sharma', business: 'Tech Solutions Pvt Ltd', pan: 'ABCDE1234F', status: 'pending' },
    { id: 2, name: 'Priya Gupta', business: 'Digital Marketing Agency', pan: 'FGHIJ5678K', status: 'pending' },
    { id: 3, name: 'Amit Kumar', business: 'E-commerce Store', pan: 'LMNOP9012Q', status: 'pending' },
  ]);

  const handleVerify = (id) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'verified' } : v));
  };

  const handleReject = (id) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'rejected' } : v));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">User Verification Dashboard</h2>
        
        <div className="space-y-4">
          {verifications.map((verification) => (
            <div key={verification.id} className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {verification.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{verification.name}</h3>
                    <p className="text-gray-400 text-sm">{verification.business}</p>
                    <p className="text-purple-300 text-sm mt-1">PAN: {verification.pan}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {verification.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => handleVerify(verification.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                      >
                        <Check size={18} className="inline mr-2" />
                        Verify
                      </button>
                      <button
                        onClick={() => handleReject(verification.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                      >
                        <X size={18} className="inline mr-2" />
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className={`px-4 py-2 rounded-lg font-semibold ${
                      verification.status === 'verified' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {verification.status === 'verified' ? '✓ Verified' : '✗ Rejected'}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Aadhaar</p>
                  <p className="text-white font-semibold">**** **** 1234</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">GST</p>
                  <p className="text-white font-semibold">27ABCDE1234F1Z5</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Applied</p>
                  <p className="text-white font-semibold">2 hours ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Posting Hub Component
function PostingHub() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Verified Posting Hub</h2>
        
        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-6">
          <textarea
            placeholder="Share your business updates (Only verified users can post)..."
            className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
            rows="4"
          ></textarea>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              <button className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition">
                📷 Image
              </button>
              <button className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition">
                🎥 Video
              </button>
              <button className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition">
                📋 Listing
              </button>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Post
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <h4 className="text-white font-bold">Verified Business Name</h4>
                  <p className="text-gray-400 text-sm">✓ Verified • 2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                🚀 Excited to announce our new product launch! Check it out and let us know what you think.
              </p>
              <div className="h-64 bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg mb-4"></div>
              <div className="flex items-center gap-6 text-gray-400">
                <button className="hover:text-purple-400 transition">❤️ 234 Likes</button>
                <button className="hover:text-purple-400 transition">💬 45 Comments</button>
                <button className="hover:text-purple-400 transition">↗️ 12 Shares</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// AI Business Builder Component
function AIBusinessBuilder() {
  const [brandName, setBrandName] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (brandName) setGenerated(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">AI Business Builder</h2>
        
        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-8 mb-6">
          <label className="text-white font-semibold block mb-3">Enter Your Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="e.g., TechVision Solutions"
            className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 mb-4"
          />
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
          >
            <Zap size={24} className="inline mr-2" />
            Generate Complete Business Setup
          </button>
        </div>

        {generated && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4">✨ AI Generated Logo</h3>
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-6xl font-bold">{brandName.charAt(0)}</span>
              </div>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4">🎨 Brand Kit</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Tagline</p>
                  <p className="text-white font-semibold">"Innovating Tomorrow's Solutions"</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Brand Colors</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-12 h-12 bg-purple-600 rounded"></div>
                    <div className="w-12 h-12 bg-pink-600 rounded"></div>
                    <div className="w-12 h-12 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Font Family</p>
                  <p className="text-white font-semibold">Inter, Roboto</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 lg:col-span-2">
              <h3 className="text-white font-bold text-lg mb-4">📱 Social Media Kit</h3>
              <div className="grid grid-cols-3 gap-4">
                {['Facebook Post', 'Instagram Story', 'LinkedIn Banner'].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="h-32 bg-gradient-to-br from-purple-900 to-pink-900 rounded mb-3"></div>
                    <p className="text-white text-sm">{item}</p>
                    <button className="mt-2 text-purple-400 text-xs hover:text-purple-300">
                      <Download size={14} className="inline mr-1" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Ads Automation Component
function AdsAutomation() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Ads Automation Hub</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">🎯 Campaign Creator</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Campaign Name"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <select className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500">
                <option>Select Platform</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Google Ads</option>
              </select>
              <input
                type="text"
                placeholder="Budget (₹)"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Generate AI Ad Copy
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">📊 AI Suggestions</h3>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-semibold mb-2">Headline</p>
                <p className="text-white">"Transform Your Business Today 🚀"</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-semibold mb-2">Description</p>
                <p className="text-white text-sm">Discover the power of AI-driven solutions for your business growth.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-semibold mb-2">Hashtags</p>
                <p className="text-white text-sm">#BusinessGrowth #AI #Innovation #Digital</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">📅 30-Day Marketing Calendar</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition cursor-pointer">
                <p className="text-white font-bold">{i + 1}</p>
                <p className="text-purple-300 text-xs mt-1">Post</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// CRM & Leads Component
function CRMLeads() {
  const leads = [
    { id: 1, name: 'Rajesh Kumar', company: 'Tech Corp', status: 'new', value: '₹50,000' },
    { id: 2, name: 'Sneha Patel', company: 'Digital Hub', status: 'contacted', value: '₹75,000' },
    { id: 3, name: 'Vikram Singh', company: 'Startup XYZ', status: 'qualified', value: '₹1,20,000' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">CRM & Lead Management</h2>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
            <Plus size={18} className="inline mr-2" />
            Add Lead
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400 text-sm font-semibold">New Leads</p>
            <p className="text-white text-3xl font-bold mt-2">24</p>
          </div>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-400 text-sm font-semibold">In Progress</p>
            <p className="text-white text-3xl font-bold mt-2">18</p>
          </div>
          <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-400 text-sm font-semibold">Converted</p>
            <p className="text-white text-3xl font-bold mt-2">42</p>
          </div>
        </div>

        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{lead.name}</h4>
                    <p className="text-gray-400 text-sm">{lead.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    lead.status === 'new' ? 'bg-green-500/20 text-green-400' :
                    lead.status === 'contacted' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {lead.status}
                  </span>
                  <span className="text-white font-bold">{lead.value}</span>
                  <button className="text-purple-400 hover:text-purple-300">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-400 hover:text-blue-300">
                    <Edit size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// AI Assistant Component
function AIAssistant() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">AI Assistant & Proposal</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">📝 Proposal Generator</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Client Name"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Project Type"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <textarea
                placeholder="Project Details"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                rows="4"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Generate Proposal
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">✉️ Email Writer</h3>
            <div className="space-y-4">
              <select className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500">
                <option>Email Type</option>
                <option>Follow-up</option>
                <option>Introduction</option>
                <option>Thank You</option>
                <option>Pitch</option>
              </select>
              <input
                type="text"
                placeholder="Recipient Name"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <textarea
                placeholder="Key Points to Include"
                className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                rows="4"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Generate Email
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">🎯 Business Pitch Deck</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Problem', 'Solution', 'Market', 'Business Model', 'Competition', 'Team', 'Financials', 'Ask'].map((slide, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition cursor-pointer">
                  <div className="h-24 bg-gradient-to-br from-purple-900 to-pink-900 rounded mb-3 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-white text-sm">{slide}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
              <Download size={18} className="inline mr-2" />
              Generate Complete Pitch Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Admin Control Component
function AdminControl() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Admin Control Panel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold mb-4">👥 User Management</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Users</span>
                <span className="text-white font-semibold">1,234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Active Today</span>
                <span className="text-green-400 font-semibold">456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pending Verification</span>
                <span className="text-yellow-400 font-semibold">23</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold mb-4">💰 Revenue</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">This Month</span>
                <span className="text-white font-semibold">₹12.5L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Last Month</span>
                <span className="text-gray-400 font-semibold">₹10.8L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Growth</span>
                <span className="text-green-400 font-semibold">+15.7%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold mb-4">📊 Subscriptions</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Starter</span>
                <span className="text-blue-400 font-semibold">567</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pro</span>
                <span className="text-purple-400 font-semibold">234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Enterprise</span>
                <span className="text-pink-400 font-semibold">55</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-6">
          <h3 className="text-white font-bold text-lg mb-4">🛡️ Content Moderation</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg"></div>
                  <div>
                    <p className="text-white font-semibold">Flagged Content #{i}</p>
                    <p className="text-gray-400 text-sm">Reported by 3 users</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition">
                    Approve
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">⚙️ System Settings</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg transition text-left px-4">
                Platform Configuration
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg transition text-left px-4">
                Email Templates
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg transition text-left px-4">
                Security Settings
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">📋 Recent Actions</h3>
            <div className="space-y-2">
              {['User verified', 'Content approved', 'Payment processed', 'New subscription'].map((action, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-3">
                  <p className="text-white text-sm">{action}</p>
                  <p className="text-gray-400 text-xs mt-1">{idx + 1} min ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Integrations Component
function Integrations() {
  const integrations = [
    { name: 'Razorpay', icon: '💳', status: 'connected', color: 'green' },
    { name: 'Stripe', icon: '💰', status: 'available', color: 'gray' },
    { name: 'WhatsApp API', icon: '💬', status: 'connected', color: 'green' },
    { name: 'Google Analytics', icon: '📊', status: 'available', color: 'gray' },
    { name: 'Mailchimp', icon: '✉️', status: 'connected', color: 'green' },
    { name: 'Zapier', icon: '⚡', status: 'available', color: 'gray' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Integrations & White-Label</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {integrations.map((integration, idx) => (
            <div key={idx} className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{integration.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  integration.status === 'connected' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {integration.status}
                </span>
              </div>
              <h3 className="text-white font-bold mb-2">{integration.name}</h3>
              <button className={`w-full py-2 rounded-lg font-semibold transition ${
                integration.status === 'connected'
                  ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                  : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
              }`}>
                {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">🎨 White-Label Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Brand Name</label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-2">Custom Domain</label>
                <input
                  type="text"
                  placeholder="app.yourdomain.com"
                  className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Primary Color</label>
                <input
                  type="color"
                  defaultValue="#9333ea"
                  className="w-full h-12 bg-white/10 border border-purple-500/30 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-2">Logo Upload</label>
                <button className="w-full bg-white/10 border border-purple-500/30 rounded-lg p-3 text-white hover:bg-white/20 transition">
                  Choose File
                </button>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Save White-Label Settings
          </button>
        </div>
      </div>
    </div>
  );
}

// Analytics Component
function Analytics() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Analytics & Reports</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Page Views', value: '45.2K', change: '+12%' },
            { label: 'Conversions', value: '1,234', change: '+8%' },
            { label: 'Revenue', value: '₹12.5L', change: '+15%' },
            { label: 'ROI', value: '245%', change: '+23%' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-white text-2xl font-bold">{stat.value}</p>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-6">
          <h3 className="text-white font-bold text-lg mb-4">📈 Growth Chart</h3>
          <div className="h-64 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg flex items-end justify-around p-4">
            {[40, 60, 45, 80, 65, 90, 75].map((height, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg w-12 transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">🎯 Top Performing Content</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <p className="text-white font-semibold text-sm">Post Title #{i}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-xs">Views: 1.2K</span>
                    <span className="text-green-400 text-xs">+15%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">👥 User Demographics</h3>
            <div className="space-y-4">
              {[
                { label: 'Startups', percentage: 45, color: 'purple' },
                { label: 'Agencies', percentage: 30, color: 'pink' },
                { label: 'Freelancers', percentage: 15, color: 'blue' },
                { label: 'Others', percentage: 10, color: 'green' },
              ].map((demo, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{demo.label}</span>
                    <span className="text-gray-400 text-sm">{demo.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r from-${demo.color}-600 to-${demo.color}-400 h-2 rounded-full transition-all`}
                      style={{ width: `${demo.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}