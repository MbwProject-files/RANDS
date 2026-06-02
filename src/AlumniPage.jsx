import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'

const AlumniHero = () => (
  // ... (no changes to Hero)
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy overflow-hidden">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full hidden md:block rotate-45"></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
    <div className="absolute inset-0 z-0">
      <img src={officeImg} className="w-full h-full object-cover opacity-10" alt="Background" />
    </div>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-8 h-[1px] bg-primary"></div>
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Our Network</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          The R&S <br />
          <span className="text-white italic">Alumni Legacy</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Celebrating the journeys of our professionals who have carried the R&S values to leadership roles across the globe.
        </p>
      </div>
    </div>
  </section>
)

const NetworkStats = () => (
  <section className="py-12 bg-white relative -mt-12 z-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100">
        {[
          { label: "Alumni Members", value: "200+" },
          { label: "Global Presence", value: "15+ Countries" },
          { label: "CFOs & Leaders", value: "40+" },
          { label: "Years of Legacy", value: "25+" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-navy mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const AlumniVoices = () => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Voices of Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold text-navy">Once an R&S, Always an R&S</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Anand Krishnan",
            role: "Former Article Assistant",
            current: "VP Finance, Global Tech Corp",
            quote: "My articleship at R&S was the most defining period of my career. The hands-on exposure to complex audits gave me a foundation that I still rely on today.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
          },
          {
            name: "Meera Subramaniam",
            role: "Former Senior Manager",
            current: "Independent Consultant",
            quote: "The culture of integrity and precision at R&S is unparalleled. It's not just a workplace; it's a school of professional excellence.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
          },
          {
            name: "Rahul Mehta",
            role: "Former Associate",
            current: "Partner, Boutique Audit Firm",
            quote: "R&S doesn't just build careers; it builds character. The mentorship from the partners was instrumental in my journey to starting my own practice.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
          }
        ].map((alumni, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group mx-auto w-full max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={alumni.img} className="w-10 h-10 rounded-xl object-cover shadow-sm" alt={alumni.name} />
              <div>
                <h4 className="font-bold text-navy text-sm">{alumni.name}</h4>
                <p className="text-[9px] text-primary font-bold uppercase tracking-wider">{alumni.role}</p>
              </div>
            </div>
            <p className="text-slate-600 italic mb-4 text-xs leading-relaxed">"{alumni.quote}"</p>
            <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Currently</span>
               <span className="text-xs font-bold text-navy">{alumni.current}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ConnectSection = ({ onRegister }) => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
           <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Stay Connected</p>
           <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Join the R&S Alumni Network</h2>
           <p className="text-lg text-slate-600 mb-8 leading-relaxed">
             We are building a dedicated platform for our alumni to reconnect, share opportunities, and participate in exclusive firm events. Whether you were with us for three years or ten, you are part of the R&S story.
           </p>
           <ul className="space-y-4 mb-10">
              {[
                "Exclusive networking events",
                "Newsletter with firm & alumni updates",
                "Mentorship opportunities for current articles",
                "Continuing Professional Education (CPE) sessions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-navy">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  {item}
                </li>
              ))}
           </ul>
           <button onClick={onRegister} className="px-10 py-4 bg-navy text-white font-bold rounded-xl hover:bg-primary transition-all shadow-xl shadow-primary/20 inline-block">
             Join our Network
           </button>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 scale-105"></div>
           <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl" alt="Alumni Event" />
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl mt-8" alt="Handshake" />
           </div>
        </div>
      </div>
    </div>
  </section>
)

const AlumniModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tenure: '',
    currentRole: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Name (Min 3 chars, letters only)
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(formData.name)) {
      alert('Please enter a valid name (at least 3 characters, letters only).');
      return;
    }

    // Validation: Phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/alumni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your registration has been sent successfully.');
        onClose();
      } else {
        alert('Failed to send registration: ' + result.message);
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
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Alumni Network</h2>
          <p className="text-primary font-bold uppercase tracking-widest text-xs">Reconnect with Raj & Subramanian</p>
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
              <input required type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="9876543210" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Tenure at R&S (e.g. 2015-2018)</label>
              <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="2018-2021" onChange={(e) => setFormData({...formData, tenure: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Current Role</label>
              <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="Financial Controller" onChange={(e) => setFormData({...formData, currentRole: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-navy uppercase tracking-widest">Company Name</label>
              <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium" placeholder="Global Corp" onChange={(e) => setFormData({...formData, company: e.target.value})} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-navy uppercase tracking-widest">Message (Optional)</label>
            <textarea rows="3" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-navy font-medium resize-none" placeholder="Anything else you'd like to share..." onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          </div>
          <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-navy transition-all shadow-xl shadow-primary/20 disabled:opacity-50">
            {isSubmitting ? 'Processing...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

const AlumniPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <AlumniHero />
      <NetworkStats />
      <AlumniVoices />
      <ConnectSection onRegister={() => setIsModalOpen(true)} />
      <Footer />

      <AlumniModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default AlumniPage
