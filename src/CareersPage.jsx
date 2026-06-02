import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'

const CareersHero = () => (
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy overflow-hidden">
    {/* Decorative Background Shapes */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>

    {/* Background Decorative Elements */}
    <div className="absolute inset-0 z-0">
      <img src={officeImg} className="w-full h-full object-cover opacity-[0.07]" alt="Background" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-8 h-[1px] bg-primary"></div>
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Join Our Team</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          Shape the Future of <br />
          <span className="text-white font-black italic">Financial Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          At Raj & Subramanian, we believe in nurturing talent and providing a platform where professional growth meets personal fulfillment.
        </p>
      </div>
    </div>
  </section>
)

const CultureSection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Why R&S</p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">A Culture of Continuous Learning & Integrity</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We are more than just a firm of Chartered Accountants; we are a community of professionals dedicated to the highest standards of ethics and excellence. Our environment encourages curiosity, rewards hard work, and values every team member's contribution.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Mentorship", desc: "Work directly with senior partners on complex engagements." },
              { title: "Growth", desc: "Clear career path from articleship to partnership." },
              { title: "Diversity", desc: "Exposure across various industries and service lines." },
              { title: "Ethics", desc: "A foundation built on absolute professional integrity." }
            ].map((v, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 scale-105"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[35rem] object-cover" 
            alt="Team Collaboration" 
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-100">
             <div className="text-primary text-4xl font-black mb-1">25+</div>
             <div className="text-navy font-bold text-xs uppercase tracking-widest">Professionals</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const OpeningsSection = ({ onApply }) => (
  <section className="py-24 bg-slate-50 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Opportunities</p>
        <h2 className="text-3xl md:text-5xl font-bold text-navy">Current Openings</h2>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {[
          { 
            title: "Article Assistants", 
            type: "Full-time (Internship)", 
            location: "Chennai & Mumbai", 
            desc: "For students who have cleared one or both groups of IPCC. We offer diverse exposure across Audit, Tax, and Corporate Law.",
            requirements: ["IPCC Group 1/2 cleared", "Strong analytical skills", "Willingness to learn"]
          },
          { 
            title: "Chartered Accountant (Associate)", 
            type: "Full-time", 
            location: "Mumbai", 
            desc: "Focus on Statutory Audits and Bank Audits. Responsibility includes leading audit teams and direct client interaction.",
            requirements: ["Freshers/1-2 years experience", "Strong command over SA & AS", "Excellent communication"]
          },
          { 
            title: "Audit & Tax Assistant", 
            type: "Full-time", 
            location: "Chennai", 
            desc: "Handling GST returns, Income Tax filings, and supporting senior staff in statutory compliance.",
            requirements: ["B.Com/M.Com graduate", "Knowledge of Tally & MS Excel", "Basic understanding of GST/IT"]
          },
          { 
            title: "Admin Executive", 
            type: "Full-time", 
            location: "Chennai", 
            desc: "Managing office operations, coordinating with vendors, and providing administrative support to the professional staff.",
            requirements: ["Any Graduate", "Proficiency in MS Office", "Good organizational skills"]
          }
        ].map((job, i) => (
          <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full">{job.type}</span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {job.location}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy group-hover:text-primary transition-colors">{job.title}</h3>
              </div>
              <button 
                onClick={() => onApply(job.title)}
                className="px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-primary transition-all text-center"
              >
                Apply Now
              </button>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">{job.desc}</p>
            <div className="flex flex-wrap gap-4">
              {job.requirements.map((req, j) => (
                <span key={j} className="text-xs font-bold text-navy bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {req}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Name (Min 3 chars, letters only)
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(formData.name)) {
      alert('Please enter a valid name (at least 3 characters, letters only).');
      return;
    }

    // Validation: Resume File
    if (!resume) {
      alert('Please upload your resume.');
      return;
    }

    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExtension = resume.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      alert('Only PDF, DOC, and DOCX files are allowed.');
      return;
    }

    const maxSize = 1 * 1024 * 1024; // 1MB
    if (resume.size > maxSize) {
      alert('File size must be less than 1MB.');
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', jobTitle);
    data.append('experience', formData.experience);
    data.append('message', formData.message);
    data.append('resume', resume);

    try {
      const response = await fetch('http://localhost:3001/api/apply', {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      if (result.success) {
        alert('Application sent successfully!');
        onClose();
      } else {
        alert('Failed to send application: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-in">
        <div className="bg-navy p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Apply for Position</h2>
          <p className="text-primary font-bold uppercase tracking-widest text-xs">{jobTitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Full Name</label>
              <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Email Address</label>
              <input required type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="john@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Phone Number</label>
              <input required type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="+91 98765 43210" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Experience (Years)</label>
              <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="e.g. 2 years" onChange={(e) => setFormData({...formData, experience: e.target.value})} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-navy uppercase tracking-widest">Message / Cover Letter</label>
            <textarea required rows="3" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium resize-none" placeholder="Tell us about yourself..." onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-navy uppercase tracking-widest">Upload Resume (PDF/DOC)</label>
            <input required type="file" accept=".pdf,.doc,.docx" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" onChange={(e) => setResume(e.target.files[0])} />
          </div>
          <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-navy transition-all shadow-xl shadow-primary/20 disabled:opacity-50">
            {isSubmitting ? 'Sending Application...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

const ApplicationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { step: "01", title: "Submit Resume", desc: "Send your updated CV and cover letter to careers@rsaccounting.in mentioning the position." },
    { step: "02", title: "Initial Screening", desc: "Our team will review your application and conduct a preliminary technical assessment." },
    { step: "03", title: "Partner Interview", desc: "A deep dive into your technical skills, career aspirations, and cultural fit with our partners." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">The Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">How to Join Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="text-center group relative">
              {/* Connecting Line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[2px] bg-slate-100 z-0">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-in-out"
                    style={{ width: activeStep > i ? '100%' : '0%' }}
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center text-3xl font-black mb-8 transition-all duration-700 ${
                  activeStep === i 
                    ? 'bg-primary text-white scale-110 shadow-xl shadow-primary/20' 
                    : 'bg-slate-50 border border-slate-100 text-primary'
                }`}>
                  {item.step}
                </div>
                <h4 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${activeStep === i ? 'text-navy' : 'text-slate-700'}`}>
                  {item.title}
                </h4>
                <p className={`leading-relaxed transition-colors duration-500 ${activeStep === i ? 'text-slate-600' : 'text-slate-400'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-navy rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Can't find a suitable role?</h3>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">We are always looking for passionate professionals. Send us your resume anyway, and we'll keep you in mind for future opportunities.</p>
          <a href="mailto:careers@rsaccounting.in" className="text-white font-bold text-lg hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
            Submit Your CV General 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleApply = (title) => {
    setSelectedJob(title);
    setIsModalOpen(true);
  };

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <CareersHero />
      <CultureSection />
      <OpeningsSection onApply={handleApply} />
      <ApplicationProcess />
      <Footer />

      <ApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />
    </div>
  )
}

export default CareersPage
