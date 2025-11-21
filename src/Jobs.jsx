// Indokona Job Portal - Single-file React component (Stable Build)
// Usage: paste into a React app (e.g., App.jsx / index.jsx) and ensure Tailwind is enabled.
// This file has been carefully rewritten to remove any syntax errors (no `return` outside functions),
// preserve long mobile scrolling (10x repetition with unique ids), and include recruiter
// application-status controls. All state, effects and handlers live inside the component.

import React, { useState, useEffect } from "react";

const ADMIN_KEY = "indokona-admin-2025"; // change before production

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

const sampleJobs = [
  {
    id: "job1",
    title: "Junior Backend Developer",
    company: "Indokona Fintech",
    type: "Full-time",
    location: "Faridabad, Haryana",
    salary: "₹20,000 - ₹35,000",
    description: "Build and maintain backend APIs, work on integrations and payments.",
    featured: true,
    tags: ["nodejs", "express", "api", "sql"],
    minExp: 0,
    postedAt: new Date().toISOString(),
  },
  {
    id: "job2",
    title: "Frontend Developer (React)",
    company: "Indokona Suite",
    type: "Contract",
    location: "Remote",
    salary: "₹25,000 - ₹45,000",
    description: "Create modern React interfaces & components for SaaS products.",
    featured: false,
    tags: ["react", "javascript", "css"],
    minExp: 1,
    postedAt: new Date().toISOString(),
  },
  {
    id: "job3",
    title: "Product Manager",
    company: "Indokona Suite",
    type: "Full-time",
    location: "Gurgaon, Haryana",
    salary: "₹60,000 - ₹1,10,000",
    description: "Lead product roadmap, go-to-market and cross-functional teams.",
    featured: true,
    tags: ["product", "pm", "roadmap"],
    minExp: 3,
    postedAt: new Date().toISOString(),
  },
];

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString();
}

export default function IndokonaJobPortal() {
  // --- Core UI state ---
  const [view, setView] = useState("home");
  const [selectedJob, setSelectedJob] = useState(null);

  // --- Persistent app state ---
  const [jobs, setJobs] = useState(() => {
    try {
      const saved = localStorage.getItem("indokona_jobs");
      return saved ? JSON.parse(saved) : sampleJobs;
    } catch (e) {
      return sampleJobs;
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("indokona_user");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [applications, setApplications] = useState(() => {
    try {
      const saved = localStorage.getItem("indokona_applications");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const saved = localStorage.getItem("indokona_saved_jobs");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // --- Persistence effects ---
  useEffect(() => {
    try { localStorage.setItem("indokona_jobs", JSON.stringify(jobs)); } catch (e) {}
  }, [jobs]);
  useEffect(() => {
    try { localStorage.setItem("indokona_user", JSON.stringify(user)); } catch (e) {}
  }, [user]);
  useEffect(() => {
    try { localStorage.setItem("indokona_applications", JSON.stringify(applications)); } catch (e) {}
  }, [applications]);
  useEffect(() => {
    try { localStorage.setItem("indokona_saved_jobs", JSON.stringify(savedJobs)); } catch (e) {}
  }, [savedJobs]);

  // --- Long scrolling: repeat jobs 10x with unique ids ---
  // We keep the original jobs array intact; longJobs is for rendering only.
  const longJobs = jobs.flatMap((job) => Array.from({ length: 10 }).map((_, i) => ({ ...job, id: `${job.id}_rep${i}` })));

  // ----------------- Business logic -----------------
  function registerCandidate({ name, email, phone, password, skills = [], expYears = 0, preferredLocations = [] }) {
    const id = uid();
    const newUser = { id, name, email, phone, role: "candidate", password, skills, expYears, preferredLocations };
    setUser(newUser);
    return true;
  }

  function loginCandidate({ email, password }) {
    // Try to match stored user; if no match, create a simple profile for demo
    try {
      const saved = localStorage.getItem("indokona_user");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.email === email) { setUser(parsed); return true; }
      }
    } catch (e) {}
    const id = uid();
    const newUser = { id, name: "Candidate", email, role: "candidate", password, skills: [], expYears: 0, preferredLocations: [] };
    setUser(newUser);
    return true;
  }

  function logout() {
    setUser(null);
    try { localStorage.removeItem("indokona_user"); } catch (e) {}
  }

  function postJob(job, adminKey) {
    if (adminKey !== ADMIN_KEY) return { ok: false, error: "Invalid admin key" };
    const newJob = { ...job, id: `job_${uid()}`, postedAt: new Date().toISOString() };
    setJobs((s) => [newJob, ...s]);
    return { ok: true };
  }

  function applyToJob(jobId, candidateProfile, resumeText, resumeFile) {
    if (!user) return { ok: false, error: "Login required" };
    const app = {
      id: `app_${uid()}`,
      jobId,
      candidateId: user.id,
      candidate: { ...candidateProfile },
      resume: resumeText,
      resumeFile,
      status: "applied",
      appliedAt: new Date().toISOString(),
    };
    setApplications((s) => [app, ...s]);
    return { ok: true };
  }

  function updateApplicationStatus(applicationId, status) {
    setApplications((s) => s.map((a) => (a.id === applicationId ? { ...a, status } : a)));
  }

  function toggleSaveJob(jobId) {
    setSavedJobs((s) => (s.includes(jobId) ? s.filter((x) => x !== jobId) : [jobId, ...s]));
  }

  // Recommendation helpers
  function scoreJobForUser(job, userProfile) {
    if (!userProfile) return 0;
    let score = 0;
    const userSkills = (userProfile.skills || []).map((s) => s.toLowerCase());
    const jobTags = (job.tags || []).map((t) => t.toLowerCase());
    const skillMatches = userSkills.filter((s) => jobTags.includes(s)).length;
    score += skillMatches * 50;
    const expDiff = Math.max(0, job.minExp - (userProfile.expYears || 0));
    if (expDiff <= 0) score += 20; else score -= expDiff * 10;
    const pref = (userProfile.preferredLocations || []).map((p) => p.toLowerCase());
    if (pref.length > 0) {
      const loc = (job.location || "").toLowerCase();
      const locMatch = pref.filter((p) => loc.includes(p)).length;
      score += locMatch * 30;
    }
    if (job.featured) score += 15;
    return score;
  }

  function getRecommendedJobsForUser(userProfile, limit = 6) {
    if (!userProfile) return [];
    const scored = jobs.map((j) => ({ job: j, score: scoreJobForUser(j, userProfile) }));
    scored.sort((a, b) => b.score - a.score);
    const nonZero = scored.filter((s) => s.score > 0 || (userProfile.skills && userProfile.skills.length === 0));
    return nonZero.slice(0, limit).map((s) => ({ ...s.job, _score: s.score }));
  }

  // --- Small utilities ---
  const appStyle = { fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" };

  // --- UI components ---
  function Header() {
    return (
      <header className="bg-gradient-to-r from-gray-900 via-indigo-900 to-indigo-600 text-white p-4 shadow-xl" style={appStyle}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="cursor-pointer" onClick={() => { setView('home'); }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-yellow-500 flex items-center justify-center shadow-md ring-1 ring-white/30">IN</div>
                <div className="leading-4">
                  <div className="font-bold text-lg">Indokona</div>
                  <div className="text-xs text-gray-200">Jobs · Careers</div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex gap-4 items-center text-sm opacity-95">
              <button onClick={() => setView("home")} className="px-3 py-2 rounded hover:bg-white/10 transition">Home</button>
              <button onClick={() => setView("jobs")} className="px-3 py-2 rounded hover:bg-white/10 transition">Jobs</button>
              <button onClick={() => setView("post")} className="px-3 py-2 rounded hover:bg-white/10 transition">Post Job</button>
              <button onClick={() => setView("apps")} className="px-3 py-2 rounded hover:bg-white/10 transition">Applications</button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <button className="text-sm text-white/90" onClick={() => setView('dashboard')}>{user.name || user.email}</button>
                <button className="bg-white text-indigo-700 px-3 py-1 rounded shadow-sm hover:scale-105 transition" onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button className="bg-white text-indigo-700 px-3 py-1 rounded shadow-sm hover:scale-105 transition" onClick={() => setView("register")}>Register</button>
                <button className="border border-white px-3 py-1 rounded hover:bg-white/10 transition" onClick={() => setView("login")}>Login</button>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-16" style={appStyle}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Find your next role at <span className="text-amber-300">Indokona</span></h1>
            <p className="mt-4 text-white/90 max-w-2xl">A premium job board with recommendations tailored to your skills and preferences.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setView('jobs')} className="px-5 py-3 bg-amber-400 text-gray-900 rounded-lg font-semibold shadow-xl transform hover:-translate-y-1 transition">Browse Jobs</button>
              <button onClick={() => setView('post')} className="px-5 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition">Post a Job</button>
            </div>
          </div>
          <div className="w-full md:w-96">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="text-xs text-white/80">Featured role</div>
              <div className="mt-3 p-4 rounded-xl ring-1 ring-white/10" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-semibold">Senior Product Engineer</div>
                    <div className="text-xs text-white/80">Indokona Suite • Remote</div>
                    <div className="mt-2 text-sm text-white/75">Lead product initiatives, own roadmap and scale the platform.</div>
                  </div>
                  <div className="text-sm text-white/70">₹1.2L — ₹2.2L</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-2 bg-amber-300 rounded font-medium transform hover:scale-105 transition">Apply</button>
                  <button className="px-3 py-2 border rounded text-white/85">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Home() {
    const recommended = user ? getRecommendedJobsForUser(user, 4) : [];
    return (
      <section className="p-6 -mt-12" style={appStyle}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 bg-white rounded-3xl shadow-xl ring-1 ring-black/5 relative overflow-hidden">
              <h2 className="text-2xl font-semibold">Latest Jobs</h2>
              <p className="text-sm text-gray-500 mt-1">Free for candidates • Employers can post with admin key</p>

              {user && (
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <div className="text-sm font-medium">Recommended for you</div>
                  <div className="mt-3 grid md:grid-cols-2 gap-3">
                    {recommended.length === 0 ? (
                      <div className="text-sm text-gray-600">No recommendations yet — complete your profile (skills, experience, preferred locations).</div>
                    ) : (
                      recommended.map((r) => (
                        <div key={r.id} className="p-3 bg-white rounded shadow-sm">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold">{r.title}</div>
                              <div className="text-xs text-gray-500">{r.company} • {r.location}</div>
                              <div className="text-xs text-gray-400 mt-1">Match score: {Math.round(r._score)}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <button className="px-2 py-1 bg-indigo-700 text-white rounded text-xs" onClick={() => { setSelectedJob(r); setView('job'); }}>View</button>
                              <button className="px-2 py-1 border rounded text-xs" onClick={() => toggleSaveJob(r.id)}>{savedJobs.includes(r.id) ? 'Saved' : 'Save'}</button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              <div className="mt-6 grid gap-6">
                {longJobs.map((j) => (
                  <div key={j.id} className="animate-fade-in">
                    <JobCard job={j} onView={() => { setSelectedJob(j); setView('job'); }} />
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-6 bg-gradient-to-b from-white to-white/95 rounded-3xl shadow-inner">
              <div className="text-sm text-gray-700 font-medium">Why Indokona</div>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• Curated roles with premium presentation</li>
                <li>• Secure resume uploads</li>
                <li>• Fast, mobile-friendly application flow</li>
                <li>• Employer dashboard (coming)</li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => setView('register')}>Register as Candidate</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  function JobCard({ job, onView }) {
    return (
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 blur opacity-30"></div>

        <div className="relative bg-white rounded-2xl p-5 shadow-lg ring-1 ring-black/5 transform hover:-translate-y-1 transition duration-300 overflow-hidden">
          <div className="flex justify-between items-start gap-4 relative">
            <div>
              <div className="text-xl font-semibold text-gray-900">{job.title}</div>
              <div className="text-sm text-gray-500 mt-1">{job.company} • {job.location} • {job.type}</div>
              <div className="mt-3 text-sm text-gray-700">{job.description}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">{job.salary}</div>
              <div className="mt-3 flex flex-col gap-2">
                <button className="px-3 py-2 bg-indigo-700 text-white rounded-lg text-sm shadow-md hover:scale-105 transition" onClick={onView}>Apply / View</button>
                <div className="text-xs text-gray-400">{formatDate(job.postedAt)}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">IN</div>
              <div className="text-xs text-gray-500">Verified Employer</div>
            </div>
            <div className="ml-auto text-sm text-gray-500">Ref: {job.id}</div>
          </div>

          {job.featured && (
            <div className="absolute top-4 left-0 -translate-x-3">
              <div className="px-3 py-1 rounded-r-full bg-amber-400 text-xs font-semibold text-gray-900 shadow">Featured</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  function JobsList() {
    return (
      <section className="p-6 max-w-6xl mx-auto" style={appStyle}>
        <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {longJobs.map((j) => (
            <JobCard key={j.id} job={j} onView={() => { setSelectedJob(j); setView('job'); }} />
          ))}
        </div>
      </section>
    );
  }

  function JobDetail({ job }) {
    const [showApply, setShowApply] = useState(false);
    return (
      <section className="p-6 max-w-4xl mx-auto" style={appStyle}>
        <button className="text-sm text-indigo-700 mb-4" onClick={() => setView("jobs")}>← Back to Jobs</button>
        <div className="p-6 bg-white rounded-3xl shadow-xl ring-1 ring-black/5 relative overflow-hidden">
          <h3 className="text-2xl font-semibold">{job.title}</h3>
          <div className="text-sm text-gray-600">{job.company} • {job.location} • {job.type}</div>
          <div className="mt-4 text-gray-700">{job.description}</div>
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg shadow-md" onClick={() => { if (!user) { setView("login"); return; } setShowApply(true); }}>Apply Now</button>
            <button className="px-4 py-2 border rounded-lg" onClick={() => { navigator.clipboard?.writeText(window.location.href); alert('Share link copied (demo)'); }}>Share</button>
            <button className="px-4 py-2 border rounded-lg" onClick={() => toggleSaveJob(job.id)}>{savedJobs.includes(job.id) ? 'Saved' : 'Save'}</button>
          </div>
        </div>

        {showApply && <ApplyForm job={job} onClose={() => setShowApply(false)} onSubmit={(data) => {
          const r = applyToJob(job.id, data.profile, data.resume, data.resumeFile);
          if (r.ok) { alert('Application submitted'); setShowApply(false); } else alert(r.error);
        }} />}
      </section>
    );
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function ApplyForm({ job, onClose, onSubmit }) {
    const [profile, setProfile] = useState({ name: user?.name || "", email: user?.email || "", phone: user?.phone || "" });
    const [resume, setResume] = useState("");
    const [fileName, setFileName] = useState("");
    const [resumeFile, setResumeFile] = useState(null);

    async function handleFile(e) {
      const f = e.target.files?.[0];
      if (!f) return;
      const b64 = await fileToBase64(f);
      setFileName(f.name);
      setResumeFile({ name: f.name, data: b64 });
    }

    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Apply for: {job.title}</h4>
            <button className="text-gray-500" onClick={onClose}>✕</button>
          </div>
          <div className="space-y-3">
            <input value={profile.name} onChange={(e) => setProfile((s) => ({ ...s, name: e.target.value }))} placeholder="Full name" className="w-full border p-3 rounded-lg" />
            <input value={profile.email} onChange={(e) => setProfile((s) => ({ ...s, email: e.target.value }))} placeholder="Email" className="w-full border p-3 rounded-lg" />
            <input value={profile.phone} onChange={(e) => setProfile((s) => ({ ...s, phone: e.target.value }))} placeholder="Mobile" className="w-full border p-3 rounded-lg" />
            <textarea value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Write a short cover note" className="w-full border p-3 rounded-lg h-28" />

            <div className="flex gap-3 items-center">
              <label className="cursor-pointer px-4 py-2 border rounded-lg text-sm bg-amber-50">Upload Resume
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
              </label>
              <div className="text-sm text-gray-500">{fileName || 'No file chosen'}</div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 border rounded-lg" onClick={onClose}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => onSubmit({ profile, resume, resumeFile })}>Submit Application</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Register() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", skills: "", expYears: 0, preferredLocations: "" });
    return (
      <section className="p-6 max-w-md mx-auto" style={appStyle}>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Create Candidate Account (Free)</h3>
          <div className="space-y-3">
            <input className="w-full border p-3 rounded-lg" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Mobile" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input type="password" className="w-full border p-3 rounded-lg" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Skills (comma separated, e.g. React, Node)" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} />
            <input type="number" min="0" className="w-full border p-3 rounded-lg" placeholder="Years of experience" value={form.expYears} onChange={(e) => setForm({ ...form, expYears: Number(e.target.value) })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Preferred locations (comma separated)" value={form.preferredLocations} onChange={(e) => setForm({ ...form, preferredLocations: e.target.value })} />
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => {
                const skills = form.skills.split(',').map(s => s.trim()).filter(Boolean);
                const prefs = form.preferredLocations.split(',').map(s => s.trim()).filter(Boolean);
                registerCandidate({ ...form, skills, preferredLocations: prefs });
                alert('Registered — profile saved'); setView('dashboard');
              }}>Create Account</button>
              <button className="text-sm" onClick={() => setView('login')}>Already have an account?</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    return (
      <section className="p-6 max-w-md mx-auto" style={appStyle}>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Candidate Login</h3>
          <div className="space-y-3">
            <input className="w-full border p-3 rounded-lg" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" className="w-full border p-3 rounded-lg" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => { loginCandidate(form); alert('Logged in'); setView('dashboard'); }}>Login</button>
              <button className="text-sm" onClick={() => setView('register')}>Create an account</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Dashboard() {
    if (!user) return <div className="p-6">Please login to see your dashboard.</div>;

    const recommended = getRecommendedJobsForUser(user, 8);
    const applied = applications.filter((a) => a.candidateId === user.id);
    return (
      <section className="p-6 max-w-6xl mx-auto" style={appStyle}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">Welcome, {user.name || user.email}</h2>
                <div className="text-sm text-gray-500">Profile — {user.skills?.length ? user.skills.join(', ') : 'No skills yet'} • {user.expYears || 0} yrs</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded" onClick={() => setView('edit-profile')}>Edit Profile</button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Recommended Jobs</h3>
              {recommended.length === 0 ? <div className="text-sm text-gray-600 mt-2">No recommendations — update profile.</div> : (
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  {recommended.map((r) => (
                    <div key={r.id} className="p-3 bg-white rounded shadow-sm border">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{r.title}</div>
                          <div className="text-xs text-gray-500">{r.company} • {r.location}</div>
                          <div className="text-xs text-gray-400 mt-1">Match: {Math.round(r._score)}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button className="px-2 py-1 bg-indigo-700 text-white rounded text-xs" onClick={() => { setSelectedJob(r); setView('job'); }}>View</button>
                          <button className="px-2 py-1 border rounded text-xs" onClick={() => toggleSaveJob(r.id)}>{savedJobs.includes(r.id) ? 'Saved' : 'Save'}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Applied Jobs</h3>
                {applied.length === 0 ? <div className="text-sm text-gray-600 mt-2">You haven't applied to any jobs yet.</div> : (
                  <div className="mt-3 space-y-3">
                    {applied.map((a) => {
                      const job = jobs.find((j) => j.id === a.jobId) || { title: 'Unknown' };
                      return (
                        <div key={a.id} className="p-3 border rounded">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium">{job.title}</div>
                              <div className="text-xs text-gray-500">Applied on: {formatDate(a.appliedAt)}</div>
                            </div>
                            <div className="text-sm text-gray-600">Status: {a.status}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </div>

          <aside className="p-6 bg-white rounded-2xl shadow-inner">
            <h4 className="font-semibold">Saved Jobs</h4>
            {savedJobs.length === 0 ? <div className="text-sm text-gray-600 mt-2">No saved jobs.</div> : (
              <div className="mt-3 space-y-2">
                {savedJobs.map((id) => {
                  const job = jobs.find((j) => j.id === id) || { title: 'Unknown' };
                  return (
                    <div key={id} className="flex justify-between items-center">
                      <div className="text-sm">{job.title}</div>
                      <div className="flex gap-2">
                        <button className="text-xs border px-2 py-1 rounded" onClick={() => { setSelectedJob(job); setView('job'); }}>View</button>
                        <button className="text-xs px-2 py-1 rounded" onClick={() => toggleSaveJob(id)}>Remove</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-6">
              <h4 className="font-semibold">Profile Quick Stats</h4>
              <div className="text-sm text-gray-600 mt-2">Skills: {user.skills?.length || 0}</div>
              <div className="text-sm text-gray-600">Experience: {user.expYears || 0} yrs</div>
              <div className="mt-4">
                <button className="w-full px-3 py-2 bg-indigo-700 text-white rounded" onClick={() => setView('edit-profile')}>Edit Profile</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }

  function EditProfile() {
    if (!user) return <div className="p-6">Please login.</div>;
    const [form, setForm] = useState({ name: user.name || "", email: user.email || "", phone: user.phone || "", skills: (user.skills || []).join(', '), expYears: user.expYears || 0, preferredLocations: (user.preferredLocations || []).join(', ') });
    return (
      <section className="p-6 max-w-md mx-auto" style={appStyle}>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Edit Profile</h3>
          <div className="space-y-3">
            <input className="w-full border p-3 rounded-lg" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Mobile" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Skills (comma separated)" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} />
            <input type="number" min="0" className="w-full border p-3 rounded-lg" placeholder="Years of experience" value={form.expYears} onChange={(e) => setForm({ ...form, expYears: Number(e.target.value) })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Preferred locations (comma separated)" value={form.preferredLocations} onChange={(e) => setForm({ ...form, preferredLocations: e.target.value })} />

            <div className="flex justify-between items-center">
              <button className="px-4 py-2 border rounded-lg" onClick={() => setView('dashboard')}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => {
                const skills = form.skills.split(',').map(s => s.trim()).filter(Boolean);
                const prefs = form.preferredLocations.split(',').map(s => s.trim()).filter(Boolean);
                const updated = { ...user, name: form.name, email: form.email, phone: form.phone, skills, expYears: form.expYears, preferredLocations: prefs };
                setUser(updated);
                alert('Profile updated');
                setView('dashboard');
              }}>Save Profile</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function PostJob() {
    const [form, setForm] = useState({ title: "", company: "", location: "", type: "Full-time", salary: "", description: "", featured: false, tags: "", minExp: 0 });
    const [key, setKey] = useState("");
    return (
      <section className="p-6 max-w-2xl mx-auto" style={appStyle}>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Post a Job (Employers)</h3>
          <div className="space-y-3">
            <input className="w-full border p-3 rounded-lg" placeholder="Job title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Salary" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} />
            <textarea className="w-full border p-3 rounded-lg" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <input className="w-full border p-3 rounded-lg" placeholder="Tags (comma separated e.g. react,node)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
            <input type="number" className="w-full border p-3 rounded-lg" placeholder="Minimum experience (years)" value={form.minExp} onChange={(e) => setForm({ ...form, minExp: Number(e.target.value) })} />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /> <span className="text-sm">Feature this job (gold badge)</span></label>
            </div>
            <input className="w-full border p-3 rounded-lg" placeholder="Admin Key" value={key} onChange={(e) => setKey(e.target.value)} />
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 border rounded-lg" onClick={() => setView('jobs')}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={() => {
                const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean);
                const payload = { ...form, tags };
                const res = postJob(payload, key);
                if (!res.ok) return alert(res.error);
                alert('Job posted');
                setForm({ title: "", company: "", location: "", type: "Full-time", salary: "", description: "", featured: false, tags: "", minExp: 0 });
                setView('jobs');
              }}>Post Job</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function ApplicationsView() {
    // Recruiter-style view: list applications and allow status update
    return (
      <section className="p-6 max-w-6xl mx-auto" style={appStyle}>
        <h3 className="text-xl font-semibold mb-4">Recruiter — Applications</h3>
        {applications.length === 0 ? (
          <div className="text-gray-600">No applications yet.</div>
        ) : (
          <div className="space-y-3">
            {applications.map((a) => {
              const job = jobs.find((j) => j.id === a.jobId) || { title: 'Unknown' };
              return (
                <div key={a.id} className="p-4 bg-white rounded-2xl shadow-md ring-1 ring-black/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{a.candidate.name || a.candidate.email}</div>
                      <div className="text-sm text-gray-500">Applied for: {job.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{new Date(a.appliedAt).toLocaleString()}</div>
                    </div>
                    <div className="text-sm text-right">
                      <div>Phone: {a.candidate.phone || '—'}</div>
                      {a.resumeFile ? (
                        <a className="text-indigo-600 text-sm block mt-2" href={a.resumeFile.data} target="_blank" rel="noreferrer">Download Resume</a>
                      ) : (
                        <div className="text-sm text-gray-500 mt-2">No file</div>
                      )}
                    </div>
                  </div>

                  {a.resume && <div className="mt-3 text-sm text-gray-700">Cover note: {a.resume}</div>}

                  <div className="mt-4 flex items-center gap-3">
                    <div className="text-sm text-gray-600">Status:</div>
                    <select className="border p-2 rounded" value={a.status} onChange={(e) => updateApplicationStatus(a.id, e.target.value)}>
                      <option value="applied">Applied</option>
                      <option value="review">Under Review</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="rejected">Rejected</option>
                      <option value="selected">Selected</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  // --- Render switch ---
  return (
    <div className="min-h-screen bg-gray-50" style={appStyle}>
      <Header />
      <Hero />
      <main>
        {view === "home" && <Home />}
        {view === "jobs" && <JobsList />}
        {view === "job" && selectedJob && <JobDetail job={selectedJob} />}
        {view === "register" && <Register />}
        {view === "login" && <Login />}
        {view === "post" && <PostJob />}
        {view === "apps" && <ApplicationsView />}
        {view === "dashboard" && <Dashboard />}
        {view === "edit-profile" && <EditProfile />}
      </main>

      <footer className="p-6 text-center text-sm text-gray-600 mt-12">© 2025 Indokona Credit Bazar Pvt. Ltd. — Premium job portal demo</footer>
    </div>
  );
}

/*
Notes:
- This file intentionally avoids top-level `return` statements and keeps all logic inside the exported component.
- longJobs repeats each job 10x for long mobile scrolling while using unique ids to avoid key collisions.

If you still get the 'return outside of function' error when bundling, please paste the exact file and line number of the error and I'll patch it immediately.
*/
