import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'

const ContactHero = () => (
  // ... (No changes to Hero)
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy overflow-hidden">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
    <div className="absolute inset-0 z-0">
      <img src={officeImg} className="w-full h-full object-cover opacity-10" alt="Background" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-8 h-[1px] bg-primary"></div>
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Get in Touch</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          Connect with Our <br />
          <span className="text-white italic">Financial Experts</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Whether you're looking for a consultation or have a specific inquiry, our team is here to provide the expertise you need.
        </p>
      </div>
    </div>
  </section>
)

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Audit & Assurance',
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

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: 'Audit & Assurance', message: '' });
      } else {
        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">Our Offices</h3>
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">Chennai (HO)</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed ml-16">
                    5/1, 1st Floor, Tilak St,<br />
                    Extension, T. Nagar,<br />
                    Chennai – 600 017.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">Mumbai</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed ml-16">
                    No. 402, B – Wing, 4th Floor,<br />
                    Gitanjali Towers, Ajmal Road, Vile Parle (East),<br />
                    Mumbai – 400 057.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <a href="tel:+914424355201" className="flex items-center gap-6 group p-4 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-navy font-bold">+91 44 4264 1864</div>
                  </div>
                </a>
                <a href="mailto:info@rands.in" className="flex items-center gap-6 group p-4 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-navy font-bold">info@rands.in</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Full Name</label>
                    <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-navy font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Email Address</label>
                    <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-navy font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Phone Number</label>
                    <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="tel" placeholder="+91 00000 00000" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-navy font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-navy font-medium appearance-none">
                      <option>Audit & Assurance</option>
                      <option>Tax Planning</option>
                      <option>Corporate Advisory</option>
                      <option>Careers</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Your Message</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="5" placeholder="How can we help you?" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-navy font-medium resize-none"></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button disabled={isSubmitting} type="submit" className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-navy transition-all shadow-xl shadow-primary/20 disabled:opacity-50">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MapSection = () => (
  <section className="h-[500px] w-full bg-slate-100 relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.793838847994!2d80.2346994!3d13.048790799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526518a5402e75%3A0x8120a93ed59f9e99!2sRaj%20%26%20Subramanian!5e0!3m2!1sen!2sin!4v1778068590452!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
  </section>
)

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <ContactHero />
      <ContactContent />
      <MapSection />
      <Footer />
    </div>
  )
}

export default ContactPage
