import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Note: removed external './indokona-bootstrap.css' import to avoid build errors when the file is missing.
// Any additional custom CSS is embedded below via a <style> tag. If you prefer a separate file,
// create 'indokona-bootstrap.css' in the same folder and import it again.
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
    <div className="indokona-root">
      {/* Embedded styles (avoids missing CSS file) */}
      <style>{`
        :root{--indokona-purple:#7c3aed;--indokona-pink:#ec4899}
        .indokona-gradient-hero { background: linear-gradient(90deg, var(--indokona-purple), var(--indokona-pink)); }
        .indokona-glass { background: rgba(0,0,0,0.45); backdrop-filter: blur(6px); }
        .indokona-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(139,92,246,0.15); }
        .indokona-avatar-grad { background: linear-gradient(135deg,#8b5cf6,#ec4899); }
        .indokona-pulse:hover { box-shadow: 0 10px 30px rgba(139,92,246,0.15); }
        .indokona-sidebar { transition: width .3s ease; }
        .indokona-progress-purple { background: linear-gradient(90deg,var(--indokona-purple),var(--indokona-pink)); height: 100%; border-radius: 12px; }
        /* Responsive adjustments for very small screens */
        @media (max-width: 575.98px){
          .indokona-root .container-fluid{padding-left:0.75rem;padding-right:0.75rem}
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="navbar navbar-dark bg-dark fixed-top indokona-glass border-bottom" style={{ borderColor: 'rgba(124,58,237,0.18)' }}>
        <div className="container-fluid px-3">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-link text-white p-0" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="d-flex align-items-center gap-2">
              <div className="rounded-2 p-2 indokona-avatar-grad text-white d-flex align-items-center justify-content-center" style={{ width: 40, height: 40, fontWeight: 700 }}>
                IS
              </div>
              <div className="d-none d-sm-block">
                <h1 className="h6 mb-0 text-white fw-bold">INDOKONA SUITE</h1>
                <small className="text-muted">India's All-in-One Business OS</small>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="position-relative d-none d-md-block">
              <Search size={16} className="position-absolute" style={{ left: 10, top: 10, color: '#a3a3a3' }} />
              <input type="text" className="form-control bg-transparent text-white ps-4 pe-3" placeholder="Search..." style={{ minWidth: 220, borderColor: 'rgba(124,58,237,0.18)' }} />
            </div>

            <button className="btn btn-sm btn-link position-relative text-white p-0" aria-label="Notifications">
              <Bell size={20} />
              {notifications > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{notifications}</span>
              )}
            </button>

            <div className="d-flex align-items-center gap-2 bg-transparent rounded-2 px-2 py-1">
              <div className="rounded-circle indokona-avatar-grad" style={{ width: 32, height: 32 }}></div>
              <span className="text-white small">Admin</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex" style={{ paddingTop: 64 }}>
        {/* Sidebar */}
        <aside className={`indokona-sidebar indokona-glass text-light position-fixed h-100 ${sidebarOpen ? '': 'collapsed'}`} style={{ width: sidebarOpen ? 260 : 0, overflow: 'hidden', borderRight: '1px solid rgba(124,58,237,0.18)' }}>
          <div className="p-3 pt-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button key={item.id} onClick={() => setActivePage(item.id)} className={`btn w-100 text-start d-flex align-items-center gap-3 mb-2 ${isActive ? 'text-white indokona-pulse' : 'text-muted'} `} style={{ background: isActive ? 'linear-gradient(90deg,#6d28d9,#ec4899)' : 'transparent', borderRadius: 10 }}>
                  <Icon size={18} />
                  <span className="fw-medium">{item.label}</span>
                </button>
              );
            })}

            <div className="mt-4">
              <button className="btn btn-outline-danger w-100 d-flex align-items-center gap-2">
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1" style={{ marginLeft: sidebarOpen ? 260 : 0, transition: 'margin-left .3s' }}>
          <div className="container-fluid p-4">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

// ---------- Subcomponents (Bootstrap converted) ----------

function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: Users, colorClass: 'bg-primary' },
    { label: 'Verified Businesses', value: '856', change: '+8%', icon: Shield, colorClass: 'bg-success' },
    { label: 'Active Posts', value: '3,456', change: '+23%', icon: MessageSquare, colorClass: 'bg-warning' },
    { label: 'Revenue (₹)', value: '12.5L', change: '+15%', icon: DollarSign, colorClass: 'bg-danger' },
  ];

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="card indokona-gradient-hero text-white shadow-lg rounded-3 p-4">
          <h2 className="h3">Welcome to Indokona Suite 🚀</h2>
          <p className="mb-1">India's All-in-One Verified Business Operating System</p>
          <small className="text-white-50">Developed by: Indokona Credit Bazar Pvt. Ltd. | Contact: +91 8800905879</small>
        </div>
      </div>

      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="col-12 col-md-6 col-lg-3">
            <div className="card indokona-card text-white p-3 h-100 indokona-pulse">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className={`rounded-3 d-flex align-items-center justify-content-center ${stat.colorClass}`} style={{ width: 48, height: 48 }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3 className="h4 mb-0">{stat.value}</h3>
                    <small className="text-muted">{stat.label}</small>
                  </div>
                </div>
                <small className="text-success fw-semibold">{stat.change}</small>
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-12 col-lg-6">
        <div className="card indokona-card p-3">
          <h5>Recent Activities</h5>
          <div className="mt-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="d-flex align-items-center gap-3 mb-2 p-2 rounded-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="rounded-circle indokona-avatar-grad" style={{ width: 40, height: 40 }}></div>
                <div className="flex-grow-1">
                  <div className="fw-semibold text-white">New business verified</div>
                  <small className="text-muted">2 minutes ago</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <div className="card indokona-card p-3">
          <h5>Quick Actions</h5>
          <div className="row g-2 mt-2">
            <div className="col-6"><button className="btn w-100 btn-primary d-flex align-items-center justify-content-center gap-2"><Plus size={16} /> New Post</button></div>
            <div className="col-6"><button className="btn w-100" style={{ background: 'linear-gradient(90deg,#2563eb,#06b6d4)', color: '#fff' }}><Zap size={16} /> AI Builder</button></div>
            <div className="col-6"><button className="btn w-100" style={{ background: 'linear-gradient(90deg,#10b981,#059669)', color: '#fff' }}><Users size={16} /> Add Lead</button></div>
            <div className="col-6"><button className="btn w-100" style={{ background: 'linear-gradient(90deg,#f97316,#ef4444)', color: '#fff' }}><TrendingUp size={16} /> Run Campaign</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserVerification() {
  const [verifications, setVerifications] = useState([
    { id: 1, name: 'Rohit Sharma', business: 'Tech Solutions Pvt Ltd', pan: 'ABCDE1234F', status: 'pending' },
    { id: 2, name: 'Priya Gupta', business: 'Digital Marketing Agency', pan: 'FGHIJ5678K', status: 'pending' },
    { id: 3, name: 'Amit Kumar', business: 'E-commerce Store', pan: 'LMNOP9012Q', status: 'pending' },
  ]);

  const handleVerify = (id) => setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'verified' } : v));
  const handleReject = (id) => setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'rejected' } : v));

  return (
    <div className="card indokona-card p-3">
      <h3 className="mb-3">User Verification Dashboard</h3>

      <div className="d-grid gap-3">
        {verifications.map((verification) => (
          <div key={verification.id} className="card p-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.08)' }}>
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle indokona-avatar-grad d-flex align-items-center justify-content-center text-white" style={{ width: 64, height: 64, fontSize: 20 }}>{verification.name.charAt(0)}</div>
                <div>
                  <div className="fw-bold text-white">{verification.name}</div>
                  <small className="text-muted">{verification.business}</small>
                  <div className="mt-1 text-info small">PAN: {verification.pan}</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                {verification.status === 'pending' ? (
                  <>
                    <button className="btn btn-success" onClick={() => handleVerify(verification.id)}><Check size={16} /> Verify</button>
                    <button className="btn btn-danger" onClick={() => handleReject(verification.id)}><X size={16} /> Reject</button>
                  </>
                ) : (
                  <span className={`px-3 py-2 rounded-2 fw-semibold ${verification.status === 'verified' ? 'text-success bg-success bg-opacity-10' : 'text-danger bg-danger bg-opacity-10'}`}>
                    {verification.status === 'verified' ? '✓ Verified' : '✗ Rejected'}
                  </span>
                )}
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 col-md-4"><small className="text-muted">Aadhaar</small><div className="fw-semibold text-white">**** **** 1234</div></div>
              <div className="col-12 col-md-4"><small className="text-muted">GST</small><div className="fw-semibold text-white">27ABCDE1234F1Z5</div></div>
              <div className="col-12 col-md-4"><small className="text-muted">Applied</small><div className="fw-semibold text-white">2 hours ago</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostingHub() {
  return (
    <div className="card indokona-card p-3">
      <h3>Verified Posting Hub</h3>

      <div className="card p-3 mt-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <textarea className="form-control bg-transparent text-white" rows={4} placeholder="Share your business updates (Only verified users can post)..."></textarea>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">📷 Image</button>
            <button className="btn btn-outline-secondary">🎥 Video</button>
            <button className="btn btn-outline-secondary">📋 Listing</button>
          </div>
          <button className="btn btn-primary">Post</button>
        </div>
      </div>

      <div className="mt-2">
        {[1,2,3].map(i => (
          <div key={i} className="card p-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="rounded-circle indokona-avatar-grad" style={{ width: 48, height: 48 }}></div>
              <div>
                <div className="fw-bold text-white">Verified Business Name</div>
                <small className="text-muted">✓ Verified • 2 hours ago</small>
              </div>
            </div>
            <p className="text-muted">🚀 Excited to announce our new product launch! Check it out and let us know what you think.</p>
            <div className="mb-3" style={{ height: 200, background: 'linear-gradient(180deg,#1e1b4b,#3b0764)', borderRadius: 12 }}></div>
            <div className="d-flex gap-3 text-muted">
              <button className="btn btn-link text-decoration-none">❤ 234 Likes</button>
              <button className="btn btn-link text-decoration-none">💬 45 Comments</button>
              <button className="btn btn-link text-decoration-none">↗ 12 Shares</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIBusinessBuilder() {
  const [brandName, setBrandName] = useState('');
  const [generated, setGenerated] = useState(false);
  const handleGenerate = () => { if (brandName) setGenerated(true); };

  return (
    <div className="card indokona-card p-3">
      <h3>AI Business Builder</h3>

      <div className="card p-3 mt-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <label className="form-label text-white fw-semibold">Enter Your Brand Name</label>
        <input className="form-control bg-transparent text-white mb-3" value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder="e.g., TechVision Solutions" />
        <button className="btn btn-primary w-100" onClick={handleGenerate}><Zap size={16} /> Generate Complete Business Setup</button>
      </div>

      {generated && (
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h6 className="fw-bold">✨ AI Generated Logo</h6>
              <div className="d-flex align-items-center justify-content-center" style={{ height: 200, background: 'linear-gradient(90deg,#6d28d9,#ec4899)', borderRadius: 12 }}>
                <span className="display-1 text-white fw-bold">{brandName.charAt(0)}</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h6 className="fw-bold">🎨 Brand Kit</h6>
              <div>
                <p className="mb-1 text-muted">Tagline</p>
                <div className="fw-semibold text-white">"Innovating Tomorrow's Solutions"</div>

                <p className="mt-3 mb-1 text-muted">Brand Colors</p>
                <div className="d-flex gap-2 mt-2">
                  <div style={{ width: 48, height: 48, background: '#7c3aed', borderRadius: 6 }}></div>
                  <div style={{ width: 48, height: 48, background: '#ec4899', borderRadius: 6 }}></div>
                  <div style={{ width: 48, height: 48, background: '#2563eb', borderRadius: 6 }}></div>
                </div>

                <p className="mt-3 mb-1 text-muted">Font Family</p>
                <div className="fw-semibold text-white">Inter, Roboto</div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h6 className="fw-bold">📱 Social Media Kit</h6>
              <div className="row g-2 mt-2">
                {['Facebook Post', 'Instagram Story', 'LinkedIn Banner'].map((item, idx) => (
                  <div key={idx} className="col-12 col-md-4 text-center">
                    <div style={{ height: 120, background: 'linear-gradient(90deg,#3b0764,#1e1b4b)', borderRadius: 8 }}></div>
                    <p className="text-white small mt-2">{item}</p>
                    <button className="btn btn-link text-decoration-none text-info"><Download size={14} /> Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AdsAutomation() {
  return (
    <div className="card indokona-card p-3">
      <h3>Ads Automation Hub</h3>

      <div className="row g-3 mt-3 mb-3">
        <div className="col-12 col-lg-6">
          <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6>🎯 Campaign Creator</h6>
            <div className="mt-2 d-grid gap-2">
              <input className="form-control bg-transparent text-white" placeholder="Campaign Name" />
              <select className="form-select bg-transparent text-white"><option>Select Platform</option><option>Facebook</option><option>Instagram</option><option>LinkedIn</option><option>Google Ads</option></select>
              <input className="form-control bg-transparent text-white" placeholder="Budget (₹)" />
              <button className="btn btn-primary">Generate AI Ad Copy</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6>📊 AI Suggestions</h6>
            <div className="mt-2">
              <div className="p-2 mb-2" style={{ background: 'rgba(255,255,255,0.02)' }}><small className="text-info">Headline</small><div className="text-white">"Transform Your Business Today 🚀"</div></div>
              <div className="p-2 mb-2" style={{ background: 'rgba(255,255,255,0.02)' }}><small className="text-info">Description</small><div className="text-white small">Discover the power of AI-driven solutions for your business growth.</div></div>
              <div className="p-2 mb-2" style={{ background: 'rgba(255,255,255,0.02)' }}><small className="text-info">Hashtags</small><div className="text-white small">#BusinessGrowth #AI #Innovation #Digital</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <h6>📅 30-Day Marketing Calendar</h6>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="p-2 text-center rounded-2" style={{ minWidth: 42, background: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}>
              <div className="fw-bold text-white">{i+1}</div>
              <small className="text-info">Post</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CRMLeads() {
  const leads = [
    { id: 1, name: 'Rajesh Kumar', company: 'Tech Corp', status: 'new', value: '₹50,000' },
    { id: 2, name: 'Sneha Patel', company: 'Digital Hub', status: 'contacted', value: '₹75,000' },
    { id: 3, name: 'Vikram Singh', company: 'Startup XYZ', status: 'qualified', value: '₹1,20,000' },
  ];

  return (
    <div className="card indokona-card p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">CRM & Lead Management</h3>
        <button className="btn btn-primary"><Plus size={14} /> Add Lead</button>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12 col-md-4"><div className="p-3 rounded-3" style={{ background: 'rgba(16,185,129,0.08)' }}><small className="text-success">New Leads</small><div className="fw-bold text-white fs-4">24</div></div></div>
        <div className="col-12 col-md-4"><div className="p-3 rounded-3" style={{ background: 'rgba(59,130,246,0.08)' }}><small className="text-info">In Progress</small><div className="fw-bold text-white fs-4">18</div></div></div>
        <div className="col-12 col-md-4"><div className="p-3 rounded-3" style={{ background: 'rgba(139,92,246,0.08)' }}><small className="text-warning">Converted</small><div className="fw-bold text-white fs-4">42</div></div></div>
      </div>

      <div className="d-grid gap-3">
        {leads.map(lead => (
          <div key={lead.id} className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle indokona-avatar-grad d-flex align-items-center justify-content-center text-white" style={{ width: 48, height: 48 }}>{lead.name.charAt(0)}</div>
                <div>
                  <div className="fw-bold text-white">{lead.name}</div>
                  <small className="text-muted">{lead.company}</small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <span className={`px-2 py-1 rounded-pill small fw-semibold ${lead.status === 'new' ? 'text-success' : lead.status === 'contacted' ? 'text-info' : 'text-warning'}`} style={{ background: 'rgba(255,255,255,0.02)' }}>{lead.status}</span>
                <div className="fw-bold text-white">{lead.value}</div>
                <button className="btn btn-link text-decoration-none text-muted"><Eye size={16} /></button>
                <button className="btn btn-link text-decoration-none text-muted"><Edit size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIAssistant() {
  return (
    <div className="card indokona-card p-3">
      <h3>AI Assistant & Proposal</h3>

      <div className="row g-3 mt-2">
        <div className="col-12 col-lg-6">
          <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6>📝 Proposal Generator</h6>
            <div className="mt-2 d-grid gap-2">
              <input className="form-control bg-transparent text-white" placeholder="Client Name" />
              <input className="form-control bg-transparent text-white" placeholder="Project Type" />
              <textarea className="form-control bg-transparent text-white" rows={4} placeholder="Project Details"></textarea>
              <button className="btn btn-primary">Generate Proposal</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6>✉ Email Writer</h6>
            <div className="mt-2 d-grid gap-2">
              <select className="form-select bg-transparent text-white"><option>Email Type</option><option>Follow-up</option><option>Introduction</option><option>Thank You</option><option>Pitch</option></select>
              <input className="form-control bg-transparent text-white" placeholder="Recipient Name" />
              <textarea className="form-control bg-transparent text-white" rows={4} placeholder="Key Points to Include"></textarea>
              <button className="btn btn-info text-white">Generate Email</button>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6>🎯 Business Pitch Deck</h6>
            <div className="row g-2 mt-2">
              {['Problem','Solution','Market','Business Model','Competition','Team','Financials','Ask'].map((slide,idx)=>(
                <div key={idx} className="col-6 col-md-3 text-center">
                  <div style={{ height: 70, background: 'linear-gradient(90deg,#3b0764,#1e1b4b)', borderRadius: 8 }} className="d-flex align-items-center justify-content-center mb-2"><span className="fw-bold text-white">{idx+1}</span></div>
                  <div className="text-white small">{slide}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary w-100 mt-3"><Download size={16} /> Generate Complete Pitch Deck</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminControl() {
  return (
    <div className="card indokona-card p-3">
      <h3>Admin Control Panel</h3>

      <div className="row g-3 mt-3 mb-3">
        <div className="col-12 col-md-4"><div className="p-3" style={{ background: 'rgba(255,255,255,0.02)' }}><h6 className="fw-bold">👥 User Management</h6><div className="d-flex justify-content-between"><small className="text-muted">Total Users</small><div className="fw-semibold text-white">1,234</div></div></div></div>
        <div className="col-12 col-md-4"><div className="p-3" style={{ background: 'rgba(255,255,255,0.02)' }}><h6 className="fw-bold">💰 Revenue</h6><div className="d-flex justify-content-between"><small className="text-muted">This Month</small><div className="fw-semibold text-white">₹12.5L</div></div></div></div>
        <div className="col-12 col-md-4"><div className="p-3" style={{ background: 'rgba(255,255,255,0.02)' }}><h6 className="fw-bold">📊 Subscriptions</h6><div className="d-flex justify-content-between"><small className="text-muted">Starter</small><div className="fw-semibold text-white">567</div></div></div></div>
      </div>

      <div className="card p-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <h6>🛡 Content Moderation</h6>
        <div className="mt-2 d-grid gap-2">
          {[1,2,3].map(i=> (
            <div key={i} className="d-flex justify-content-between align-items-center p-2" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
              <div className="d-flex gap-2 align-items-center"><div style={{ width:44, height:44, background: 'linear-gradient(90deg,#fb923c,#ef4444)', borderRadius: 8 }}></div><div><div className="fw-semibold text-white">Flagged Content #{i}</div><small className="text-muted">Reported by 3 users</small></div></div>
              <div className="d-flex gap-2"><button className="btn btn-success btn-sm">Approve</button><button className="btn btn-danger btn-sm">Remove</button></div>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6 className="fw-bold">⚙ System Settings</h6>
            <div className="d-grid gap-2 mt-2"><button className="btn btn-outline-light text-start">Platform Configuration</button><button className="btn btn-outline-light text-start">Email Templates</button><button className="btn btn-outline-light text-start">Security Settings</button></div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h6 className="fw-bold">📋 Recent Actions</h6>
            <div className="mt-2 d-grid gap-2">{['User verified','Content approved','Payment processed','New subscription'].map((action,idx)=>(<div key={idx} className="p-2" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 6 }}><div className="fw-semibold text-white small">{action}</div><small className="text-muted">{idx+1} min ago</small></div>))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Integrations() {
  const integrations = [
    { name: 'Razorpay', icon: '💳', status: 'connected' },
    { name: 'Stripe', icon: '💰', status: 'available' },
    { name: 'WhatsApp API', icon: '💬', status: 'connected' },
    { name: 'Google Analytics', icon: '📊', status: 'available' },
    { name: 'Mailchimp', icon: '✉', status: 'connected' },
    { name: 'Zapier', icon: '⚡', status: 'available' },
  ];

  return (
    <div className="card indokona-card p-3">
      <h3>Integrations & White-Label</h3>
      <div className="row g-3 mt-3 mb-3">
        {integrations.map((integration, idx)=>(
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="fs-3">{integration.icon}</div>
                <div className={`px-2 py-1 rounded-pill small ${integration.status === 'connected' ? 'text-success' : 'text-muted'}`} style={{ background: 'rgba(255,255,255,0.02)' }}>{integration.status}</div>
              </div>
              <div className="fw-bold text-white mb-2">{integration.name}</div>
              <button className={`btn w-100 ${integration.status === 'connected' ? 'btn-outline-danger' : 'btn-outline-primary'}`}>{integration.status === 'connected' ? 'Disconnect' : 'Connect'}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <h6>🎨 White-Label Settings</h6>
        <div className="row g-3 mt-2">
          <div className="col-12 col-md-6">
            <label className="form-label text-muted small">Brand Name</label>
            <input className="form-control bg-transparent text-white" placeholder="Your Company Name" />

            <label className="form-label text-muted small mt-2">Custom Domain</label>
            <input className="form-control bg-transparent text-white" placeholder="app.yourdomain.com" />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label text-muted small">Primary Color</label>
            <input type="color" defaultValue="#9333ea" className="form-control form-control-color" />

            <label className="form-label text-muted small mt-2">Logo Upload</label>
            <button className="btn btn-outline-light w-100">Choose File</button>
          </div>
        </div>
        <button className="btn btn-primary w-100 mt-3">Save White-Label Settings</button>
      </div>
    </div>
  );
}

function Analytics() {
  const stats = [
    { label: 'Page Views', value: '45.2K', change: '+12%' },
    { label: 'Conversions', value: '1,234', change: '+8%' },
    { label: 'Revenue', value: '₹12.5L', change: '+15%' },
    { label: 'ROI', value: '245%', change: '+23%' },
  ];

  const demographics = [
    { label: 'Startups', percentage: 45, colorHex: '#7c3aed' },
    { label: 'Agencies', percentage: 30, colorHex: '#ec4899' },
    { label: 'Freelancers', percentage: 15, colorHex: '#2563eb' },
    { label: 'Others', percentage: 10, colorHex: '#10b981' },
  ];

  return (
    <div className="card indokona-card p-3">
      <h3>Analytics & Reports</h3>

      <div className="row g-3 mt-3 mb-3">
        {stats.map((stat,idx)=>(
          <div key={idx} className="col-12 col-md-6 col-lg-3">
            <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
              <small className="text-muted">{stat.label}</small>
              <div className="d-flex align-items-end justify-content-between mt-2">
                <div className="fw-bold text-white fs-4">{stat.value}</div>
                <div className="text-success small">{stat.change}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <h6>📈 Growth Chart</h6>
        <div className="d-flex align-items-end gap-2 mt-3" style={{ height: 160 }}>
          {[40,60,45,80,65,90,75].map((height,idx)=> (
            <div key={idx} style={{ width: 28, height: `${height}%`, borderRadius: 8, background: 'linear-gradient(180deg,#7c3aed,#ec4899)' }}></div>
          ))}
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
            <h6 className="fw-bold">🎯 Top Performing Content</h6>
            <div className="mt-2 d-grid gap-2">
              {[1,2,3,4].map(i=> (
                <div key={i} className="p-2" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 6 }}>
                  <div className="fw-semibold text-white small">Post Title #{i}</div>
                  <div className="d-flex justify-content-between mt-2"><small className="text-muted">Views: 1.2K</small><small className="text-success">+15%</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
            <h6 className="fw-bold">👥 User Demographics</h6>
            <div className="mt-2 d-grid gap-2">
              {demographics.map((demo,idx)=>(
                <div key={idx}>
                  <div className="d-flex justify-content-between mb-1"><div className="text-white small">{demo.label}</div><div className="text-muted small">{demo.percentage}%</div></div>
                  <div className="w-100 bg-transparent rounded-pill" style={{ height: 8, background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ width: `${demo.percentage}%` }} className="indokona-progress-purple"></div>
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
