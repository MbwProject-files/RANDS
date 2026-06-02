import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import officeImg from './assets/img/office.png'

const ServicesHero = () => (
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
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Our Expertise</span>
          <div className="w-8 h-[1px] bg-primary"></div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
          Comprehensive <br />
          <span className="text-white">Financial Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empowering your business with precision-driven audit, strategic tax planning, and expert corporate consultancy.
        </p>
      </div>
    </div>
  </section>
)

const ServiceSection = ({ title, subtitle, items, icon, image, reverse = false, id, description }) => (
  <section id={id} className={`py-24 ${reverse ? 'bg-slate-50' : 'bg-white'} relative overflow-hidden border-b border-slate-100 last:border-0`}>
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        <div className="lg:w-1/2 animate-fade-in-up">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
            {icon}
          </div>
          <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">{title}</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            {description}
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {items.map((group, i) => (
              <div key={i} className="space-y-4">
                <h4 className="font-black text-primary uppercase tracking-widest text-[10px] mb-2">{group.category}</h4>
                <ul className="space-y-2">
                  {group.services.map((service, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 scale-105"></div>
          <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100">
             <div className="aspect-video bg-navy/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
             <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">01</div>
                  <p className="text-sm font-bold text-navy">Meticulous planning and execution</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">02</div>
                  <p className="text-sm font-bold text-navy">Regulatory compliance guarantee</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { step: "01", title: "Discovery", desc: "Understanding your business goals, challenges, and specific financial requirements." },
    { step: "02", title: "Analysis", desc: "Deep dive into records and systems to identify risks and opportunities." },
    { step: "03", title: "Strategy", desc: "Developing a tailored roadmap for compliance, tax efficiency, or growth." },
    { step: "04", title: "Execution", desc: "Implementing solutions with rigorous oversight and periodic reporting." }
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
       {/* Background Shapes */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Our Method</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Deliver Excellence</h2>
          <p className="text-slate-400">Our systematic approach ensures that every engagement is handled with the highest level of professionalism and accuracy.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="relative group">
              {/* Connecting Line */}
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-white/10 z-0">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-in-out"
                    style={{ width: activeStep > i ? '100%' : '0%' }}
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 transition-all duration-700 ${
                  activeStep === i 
                    ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/50' 
                    : 'bg-white/5 border border-white/10 text-primary'
                }`}>
                  {item.step}
                </div>
                <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeStep === i ? 'text-slate-100' : 'text-slate-400'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CTASection = () => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
    <div className="container mx-auto px-6">
      <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">Ready to streamline your financial operations?</h2>
          <p className="text-lg text-slate-600 mb-10">Connect with our expert partners for a comprehensive consultation tailored to your business needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-navy transition-all shadow-xl shadow-primary/20">
              Book a Consultation
            </a>
            <a href="tel:+914424355201" className="px-10 py-4 bg-white border border-slate-200 text-navy font-bold rounded-xl hover:border-primary transition-all">
              Call Our Office
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ServicesPage = () => {
  useEffect(() => {
    // Handle scrolling to section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative bg-white">
      <Header />
      <ServicesHero />
      
      <ServiceSection 
        id="assurance"
        subtitle="Assurance"
        title="Assurance Services"
        description="Comprehensive Assurance. Trusted Outcomes. Independent assurance focused on transparency, control, and stakeholder confidence."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
        items={[
          { category: "Core Assurance", services: ["Statutory & Tax Audits", "Financial Statement Audits & Reviews", "Internal & Risk-Based Audits", "Bank, Stock & Revenue Audits"] },
          { category: "Risk & Control", services: ["Internal Financial Controls (IFC)", "Risk & Governance Reviews", "Process & SOP Evaluations", "Management & Operational Audits"] },
          { category: "Special Assignments", services: ["Due Diligence (Financial & Transaction)", "Investigation & Forensic Audits", "Fraud Risk Reviews", "Certifications & Agreed Procedures"] },
          { category: "Systems & Regulatory", services: ["Information Systems (IT) Audits", "Compliance & Regulatory Audits", "Limited Reviews & Other Engagements"] }
        ]}
      />

      <ServiceSection 
        id="income-tax"
        subtitle="Compliance"
        reverse={true}
        title="Income Tax"
        description="Clarity in Tax. Confidence in Decisions. Focused advisory and compliance support across all aspects of direct taxation."
        image="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?q=80&w=2070&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>}
        items={[
          { category: "Advisory & Planning", services: ["Tax Structuring & Planning", "Capital Gains & Transaction Structuring", "Tax Optimization Strategies"] },
          { category: "Compliance", services: ["Income Tax Return Filing", "TDS / Withholding Compliance", "Advance Tax Computation"] },
          { category: "Litigation", services: ["Assessments & Appeals", "Representation before Authorities", "Notices & Response Handling"] },
          { category: "Extended Capabilities", services: ["Support across complex tax matters", "Restructuring Support", "Regulatory Updates"] }
        ]}
      />

      <ServiceSection 
        id="gst"
        subtitle="Indirect Tax"
        title="Goods & Services Tax (GST)"
        description="Structured Indirect Tax. Seamless Compliance. End-to-end GST support ensuring accuracy, compliance, and efficiency."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
        items={[
          { category: "Advisory", services: ["GST Structuring & Planning", "Classification & Tax Positioning", "Transaction Analysis"] },
          { category: "Compliance", services: ["Registration & Setup", "Return Filing & Reconciliations", "Input Credit Management"] },
          { category: "Litigation", services: ["Assessments & Notices", "Appeals & Representation", "Refund Processing Support"] },
          { category: "Extended Capabilities", services: ["Support for evolving GST regulations", "Business Requirement Alignment"] }
        ]}
      />

      <ServiceSection 
        id="international-tax"
        subtitle="Global Tax"
        reverse={true}
        title="International Tax"
        description="Cross-Border Expertise. Global Perspective. Advisory and compliance support for businesses with international operations."
        image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>}
        items={[
          { category: "Advisory", services: ["Cross-Border Transaction Structuring", "International Tax Planning", "DTAA Advisory"] },
          { category: "Transfer Pricing", services: ["TP Advisory & Documentation", "TP Compliance & Reporting", "TP Audits & Assessments"] },
          { category: "Compliance", services: ["Withholding Tax Planning", "FEMA Compliance", "Cross-Border Reporting"] },
          { category: "Extended Capabilities", services: ["Global regulatory compliance", "Complex cross-border structures"] }
        ]}
      />

      <ServiceSection 
        id="advisory"
        subtitle="Consulting"
        title="Advisory & Consulting"
        description="Insight Driven. Value Focused. Strategic and financial advisory enabling informed decisions and sustainable growth."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
        items={[
          { category: "Strategy", services: ["Business Structuring & Expansion", "Growth & Scaling Strategy", "Corporate Governance"] },
          { category: "Financial Advisory", services: ["Budgeting & MIS", "Working Capital Optimization", "Cost & Profitability Analysis"] },
          { category: "Transactions", services: ["M&A Support", "Due Diligence", "Business Valuation"] },
          { category: "Technology", services: ["ERP & System Advisory", "Process Improvement", "Data & MIS Frameworks"] }
        ]}
      />

      <ServiceSection 
        id="corporate-secretarial"
        subtitle="Governance"
        reverse={true}
        title="Corporate Secretarial"
        description="Governance. Compliance. Continuity. Structured support for corporate and regulatory compliance requirements."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 18a10.003 10.003 0 01-9.308-6.303l.054-.09m9.254-2.107a10.007 10.007 0 018.122-8.122m-2.454 1.158L8.91 20.1m3-11.1L3.55 15.01m15.144 2.152L8.55 13.01"/></svg>}
        items={[
          { category: "Core Services", services: ["Company Incorporation", "ROC Filings", "Annual Compliance", "Maintenance of Statutory Records"] },
          { category: "Governance", services: ["Board Documentation", "Shareholder Documentation", "Corporate Governance Advisory"] },
          { category: "Extended Capabilities", services: ["Corporate law support", "Regulatory framework advisory"] }
        ]}
      />

      <ServiceSection 
        id="legal"
        subtitle="Legal"
        title="Legal Services"
        description="Structured Legal Support. Business Aligned. Practical legal support aligned with business and regulatory needs."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>}
        items={[
          { category: "Advisory", services: ["Legal & Regulatory Advisory", "Contract Drafting & Review"] },
          { category: "Litigation", services: ["Representation Support", "NCLT / Insolvency Matters"] },
          { category: "Extended Capabilities", services: ["Commercial dispute support", "Regulatory matter handling"] }
        ]}
      />

      <ServiceSection 
        id="support"
        subtitle="Operations"
        reverse={true}
        title="Support Services"
        description="Efficient Execution. Reliable Support. End-to-end operational and compliance support for smooth business functioning."
        image="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop"
        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 9a3 3 0 100 6 3 3 0 000-6z"/></svg>}
        items={[
          { category: "Accounting", services: ["Bookkeeping", "Financial Statement Preparation", "MIS Reporting"] },
          { category: "Compliance", services: ["TDS & GST Filings", "Tax Filings", "Payroll Processing"] },
          { category: "Business Support", services: ["Virtual CFO", "Budgeting", "Cash Flow Tracking"] },
          { category: "Operations", services: ["Bank Liaison", "Funding Support", "Backend Finance Operations"] }
        ]}
      />

      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default ServicesPage
