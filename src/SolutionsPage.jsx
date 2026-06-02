import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'

const SolutionsHero = () => (
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
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Strategic Growth</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          Tailored Solutions for <br />
          <span className="text-white">Complex Challenges</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Beyond traditional accounting, we provide high-level strategic advisory to help businesses navigate growth, restructuring, and financial evolution.
        </p>
      </div>
    </div>
  </section>
)

const SolutionCard = ({ title, desc, features, icon, delay }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: delay }}>
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
      <div className="text-primary group-hover:text-white transition-colors duration-500">{icon}</div>
    </div>
    <h3 className="text-3xl font-bold mb-6 text-navy leading-tight">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed">{desc}</p>
    <ul className="space-y-4">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-navy">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
          </div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
)

const SolutionsGrid = () => (
  <section className="py-24 bg-slate-50 relative">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-8">
        <SolutionCard 
          title="Corporate Restructuring & M&A"
          delay="0.1s"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>}
          desc="Navigating complex organizational changes, mergers, and acquisitions requires precision and strategic foresight."
          features={[
            "Transaction Structuring & Due Diligence",
            "Valuation Services (Registered Valuers)",
            "Post-Merger Integration Support",
            "Demergers & Business Divestments"
          ]}
        />
        <SolutionCard 
          title="Project Finance & Capital Raising"
          delay="0.2s"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
          desc="Securing the right capital structure is critical for long-term project success and business expansion."
          features={[
            "Detailed Project Report (DPR) Preparation",
            "Loan Syndication & Debt Restructuring",
            "Working Capital Cycle Optimization",
            "Equity Fundraising Advisory"
          ]}
        />
        <SolutionCard 
          title="Insolvency & Bankruptcy (IBC)"
          delay="0.3s"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>}
          desc="Expert guidance through insolvency resolution processes, acting as authorized representatives and advisors."
          features={[
            "Corporate Insolvency Resolution Process (CIRP)",
            "Resolution Plan Development",
            "Liquidation & Voluntary Winding Up",
            "Representation before NCLT"
          ]}
        />
        <SolutionCard 
          title="Virtual CFO & Management Support"
          delay="0.4s"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>}
          desc="Providing high-level financial leadership for SMEs and startups without the cost of a full-time CFO."
          features={[
            "Strategic Financial Planning & Analysis",
            "Cash Flow Management & Forecasting",
            "Internal Control Implementation",
            "MIS & Board Reporting"
          ]}
        />
      </div>
    </div>
  </section>
)

const IndustryFocus = () => (
  <section className="py-24 bg-white overflow-hidden relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Reach</p>
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Industry-Specific Solutions</h2>
        <p className="text-slate-500">We bring deep domain expertise across various sectors, ensuring that our solutions are contextually relevant.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { name: "Manufacturing", icon: "🏗️" },
          { name: "Real Estate", icon: "🏙️" },
          { name: "Healthcare", icon: "🏥" },
          { name: "IT / Services", icon: "💻" },
          { name: "E-commerce", icon: "🛒" },
          { name: "Banking", icon: "🏦" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-slate-50 rounded-3xl text-center hover:bg-primary group transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <div className="font-bold text-navy text-sm group-hover:text-white uppercase tracking-wider">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <SolutionsHero />

      <SolutionsGrid />
      <IndustryFocus />
      
      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 relative z-10">Need a Strategic Partner?</h2>
            <p className="text-lg text-slate-600 mb-10 relative z-10">Let's discuss how our specialized solutions can drive your business forward.</p>
            <a href="/#contact" className="px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-navy transition-all shadow-xl shadow-primary/20 inline-block relative z-10">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SolutionsPage
