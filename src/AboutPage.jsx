import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'
import trustImg from './assets/img/trust.png'
import partnerImg from './assets/img/Team/team.jpg'

const AboutHero = () => (
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy overflow-hidden">
    {/* Decorative Background Shapes */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full hidden md:block rotate-45"></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>

    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
    <div className="absolute inset-0 z-0">
      <img src={officeImg} className="w-full h-full object-cover opacity-10" alt="Background" />
    </div>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-8 h-[1px] bg-primary"></div>
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Our Legacy</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          Commitment to <br />
          <span className="text-white">Professional Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Established in 1997, Raj & Subramanian has grown into a leading chartered accountancy firm with a presence in Chennai and Mumbai.
        </p>
      </div>
    </div>
  </section>
)

const CoreValues = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Background Shapes */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-5%] left-[-10%] w-[30%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 right-[-2%] w-4 h-64 bg-primary/10 rounded-full blur-xl"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Built on a Foundation of Trust and Expertise</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our firm is driven by a set of core values that guide every engagement. We believe in building long-term relationships with our clients by providing proactive and practical solutions.
          </p>
          <div className="space-y-6">
            {[
              { title: "Integrity", desc: "Upholding the highest ethical standards in all our professional dealings." },
              { title: "Excellence", desc: "Striving for perfection and accuracy in every audit and report." },
              { title: "Client Success", desc: "Your growth is the ultimate measure of our success." }
            ].map((v, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">{v.title}</h4>
                  <p className="text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <img src={trustImg} className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[30rem]" alt="Trust" />
          <div className="absolute -bottom-6 -right-6 bg-navy text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
            <div className="text-3xl font-black mb-1 tracking-tighter">100%</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Compliance Record</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Journey = () => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    {/* Background Shapes */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-1/4 w-[30%] h-[40%] bg-primary/5 rounded-full blur-[100px] skew-y-12"></div>
      <div className="absolute bottom-[-10%] left-10 w-64 h-64 border border-slate-200 rounded-full rotate-45"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our History</p>
        <h2 className="text-3xl md:text-5xl font-bold text-navy">The R&S Journey</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-slate-200 hidden md:block"></div>

        <div className="space-y-16">
          {[
            { year: "1997", title: "Founding in Chennai", desc: "The firm was established with a focus on providing audit and taxation services to local businesses." },
            { year: "2002", title: "Mumbai Expansion", desc: "Opened our Mumbai branch to serve the growing financial hub and western Indian markets." },
            { year: "2010", title: "Corporate Advisory", desc: "Expanded our portfolio to include strategic corporate management and project consultancy." },
            { year: "2020", title: "Digital Transformation", desc: "Integrated advanced auditing tools and remote compliance management for a new era." },
            { year: "2022", title: "25th Anniversary", desc: "Celebrated 25 years of excellence and trust in the chartered accountancy profession." }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center md:text-left">
                <div className={`inline-block px-4 py-2 bg-white rounded-xl shadow-sm text-primary font-black text-xl mb-4 border border-slate-100 ${i % 2 === 0 ? 'md:float-right' : ''}`}>
                  {item.year}
                </div>
                <div className="clear-both"></div>
                <h4 className="text-2xl font-bold text-navy mb-2">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md relative z-10 hidden md:block"></div>
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const PartnerCard = ({ name, title, image, onViewProfile }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
             <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
        )}
      </div>
    </div>
    <h4 className="text-2xl font-bold text-navy mb-2">{name}</h4>
    <p className="text-primary font-medium text-sm md:text-base mb-8 leading-tight">{title}</p>
    
    <button 
      onClick={onViewProfile}
      className="text-red-600 font-bold hover:text-red-700 transition-colors flex items-center gap-2 group/btn"
    >
      View Profile
      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
    </button>
  </div>
)

const ProfileModal = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-white rounded-[2rem] shadow-2xl max-w-4xl w-full relative overflow-hidden flex flex-col md:flex-row animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-navy transition-colors z-20 p-2 hover:bg-slate-100 rounded-full"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="md:w-2/5 p-8 flex items-center justify-center bg-slate-50 relative">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
             <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <h4 className="text-3xl md:text-4xl font-black text-navy mb-2">{partner.name}</h4>
          <p className="text-primary font-bold text-lg mb-8 uppercase tracking-[0.1em]">{partner.title}</p>
          
          <div className="w-16 h-1 bg-primary/20 mb-8 rounded-full"></div>
          
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-lg">
              {partner.bio || "A seasoned professional with extensive experience in providing world-class financial consultancy and strategic business solutions."}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Committed to delivering excellence through integrity and a client-focused approach, ensuring sustainable growth and regulatory compliance for businesses across India.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 flex gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Expertise</span>
              <span className="text-sm font-bold text-navy">Corporate Finance & Audit</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Experience</span>
              <span className="text-sm font-bold text-navy">20+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null)

  const partners = [
    {
      name: "G. John Winsten, FCA",
      title: "Founder",
      image: partnerImg,
      bio: "G. John Winsten is the Founder of Raj & Subramanian. With over 25 years of experience in audit and taxation, he has led the firm's growth into a leading consultancy. His expertise lies in strategic financial planning and corporate governance."
    },
    {
      name: "B. Ramasubramanian, FCA",
      title: "Co-Founder",
      image: partnerImg,
      bio: "B. Ramasubramanian is the Co-Founder of Raj & Subramanian. He specializes in indirect taxation and GST consultancy. Under his leadership, the firm has helped numerous clients navigate complex tax regulations with ease."
    },
    {
      name: "T. Ramalingam, ACA",
      title: "Chennai",
      image: partnerImg,
      bio: "T. Ramalingam leads our Chennai operations with a focus on statutory audits and compliance. His meticulous approach ensures that all regulatory requirements are met with precision and transparency."
    },
    {
      name: "T. Vishnurajan, ACA",
      title: "Chennai",
      image: partnerImg,
      bio: "T. Vishnurajan brings extensive knowledge in internal audits and process optimization. He works closely with clients to improve operational efficiency and risk management frameworks."
    },
    {
      name: "V. Venkatraman, ACA",
      title: "Mumbai",
      image: partnerImg,
      bio: "V. Venkatraman heads our Mumbai office, specializing in corporate advisory and project financing. He has a proven track record of facilitating major expansions and financial restructuring."
    },
    {
      name: "A.C. Ravi, FCA",
      title: "Mumbai",
      image: partnerImg,
      bio: "A.C. Ravi is an expert in direct taxation and international tax matters. Based in Mumbai, he provides strategic tax planning for multinational corporations and large domestic enterprises."
    },
    {
      name: "Hitesh K. Mehta, FCA",
      title: "Mumbai",
      image: partnerImg,
      bio: "Hitesh K. Mehta specializes in forensic audits and litigation support. His deep analytical skills help clients resolve complex financial disputes and ensure robust internal controls."
    },
  ]

  return (
    <section id="partners" className="py-24 bg-navy text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4"> Our Partners </h2>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">Guided by Experience, <br className="hidden md:block"/>Driven by Integrity</h3>
          </div>
          <div className="text-slate-400 max-w-sm">
            A core team of 7 partners and 25+ professionals dedicated to providing world-class financial consultancy.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard 
              key={index}
              {...partner}
              onViewProfile={() => setSelectedPartner(partner)}
            />
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedPartner && (
        <ProfileModal 
          partner={selectedPartner} 
          onClose={() => setSelectedPartner(null)} 
        />
      )}
    </section>
  )
}

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <AboutHero />
      <CoreValues />
      <Partners />
      <Journey />
      <Footer />
    </div>
  )
}

export default AboutPage
