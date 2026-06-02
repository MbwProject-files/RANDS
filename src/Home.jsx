import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import aboutImg1 from './assets/img/RandS_img.png'
import aboutImg2 from './assets/img/RandS_img2.png'



const Hero = () => {
  const banners = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  ]



  const bannerTitles = [
    { prefix: "Providing uncompromising precision in", highlight: "Audit & Assurance." },
    { prefix: "Strategic excellence in", highlight: "Income Tax & GST Advisory." },
    { prefix: "Comprehensive solutions for", highlight: "Corporate Law Compliance." },
    { prefix: "Expert guidance in", highlight: "Financial & Management Consultancy." }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] bg-primary/30 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary/20 rounded-full blur-[120px]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full hidden md:block rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-white/10 rounded-[4rem] hidden md:block -rotate-12"></div>
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-navy">
        {banners.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-out ${index === currentSlide ? 'scale-105' : 'scale-100'}`}
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
        {/* Subtle, elegant dark overlay for legibility */}
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Centered Minimalist Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center text-white mt-12">

        <div className="relative w-full max-w-4xl min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-6">
          {bannerTitles.map((title, index) => (
            <h1
              key={index}
              className={`absolute w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] tracking-tight transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              {title.prefix} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-black">
                {title.highlight}
              </span>
            </h1>
          ))}
        </div>



        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="/services" className="px-8 py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl rounded-sm shadow-primary/20">
            Our Services
          </a>
          <a href="/contact" className="px-8 py-3.5 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all rounded-sm">
            Contact Us
          </a>
        </div>
      </div>

      {/* Interactive Icon Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {[
          {
            // Audit - Clipboard/Check
            icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
          },
          {
            // Tax - Calculator/Percent
            icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
          },
          {
            // Law - Scale
            icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
          },
          {
            // Consultancy - Trending Up/Lightbulb
            icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
          }
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`group relative flex flex-col items-center transition-all duration-500 ${i === currentSlide ? 'text-cyan-400 scale-110' : 'text-white/50 hover:text-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`transition-all duration-500 ${i === currentSlide ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`}>
              {item.icon}
            </div>

            {/* Active Indicator Line */}
            <div className={`mt-2 h-1 rounded-full transition-all duration-700 ease-out ${i === currentSlide ? 'w-6 bg-cyan-400' : 'w-0 bg-transparent'}`}></div>
          </button>
        ))}
      </div>
    </section>
  )
}


const NotificationTicker = () => {
  const notices = [
    { tag: "GST", text: "New GST compliance rules effective from April 2026 — updated filing requirements for all registered taxpayers." },
    { tag: "Income Tax", text: "ITR filing deadline for AY 2025-26 extended to July 31, 2026. File early to avoid penalties." },
    { tag: "MCA", text: "MCA mandates updated KYC for all Directors by June 30, 2026 — non-compliance attracts disqualification." },
    { tag: "TDS", text: "Section 194Q TDS on purchase of goods — applicable for buyers with turnover exceeding ₹10 crore." },
    { tag: "Audit", text: "ICAI releases revised SA 701 — Key Audit Matters reporting now mandatory for all listed entities." },
    { tag: "Corporate Law", text: "Annual return (MGT-7) due date for FY 2025-26 falls on October 29, 2026. Ensure timely filing." },
  ]

  const items = [...notices, ...notices]

  return (
    <div className="bg-navy border-b border-white/10 py-3 overflow-hidden ticker-wrap relative">
      <div className="flex items-stretch">
        <div className="flex-shrink-0 flex items-center gap-2 bg-primary px-5 z-10 relative">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Updates</span>
          <div className="absolute -right-3 top-0 h-full w-4 bg-primary" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
        </div>
        <div className="overflow-hidden flex-1 pl-6">
          <div className="animate-marquee">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 pr-12 whitespace-nowrap">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 border border-cyan-400/30 rounded px-2 py-0.5">
                  {item.tag}
                </span>
                <span className="text-white/80 text-xs font-medium">{item.text}</span>
                <span className="text-white/20 text-lg font-thin px-2">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start || typeof target !== 'number') return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}



const ServiceCard = ({ title, items, icon, delay, href }) => (
  <div className="bg-white p-6 rounded-3xl border border-primary/50 shadow-sm hover:shadow-2xl hover:border-primary/80 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: delay }}>
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-500">
      <div className="text-primary group-hover:text-white transition-colors duration-500">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40"></span>
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-6 pt-4 border-t border-slate-50">
      {/* <a href={href || "/services"} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-navy transition-colors">
        Read More
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a> */}
    </div>
  </div>
)

const Services = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Services</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-navy leading-tight">Professional Solutions for Your Business</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          title="Assurance Services"
          delay="0.1s"
          href="/services#assurance"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          items={[
            "Comprehensive Assurance. Trusted Outcomes.",
            "Independent assurance focused on transparency, control, and stakeholder confidence."
          ]}
        />
        <ServiceCard
          title="Income Tax"
          delay="0.2s"
          href="/services#income-tax"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
          items={[
            "Clarity in Tax. Confidence in Decisions.",
            "Focused advisory and compliance support across all aspects of direct taxation."
          ]}
        />
        <ServiceCard
          title="Goods & Services Tax (GST)"
          delay="0.3s"
          href="/services#gst"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
          items={[
            "Structured Indirect Tax. Seamless Compliance.",
            "End-to-end GST support ensuring accuracy, compliance, and efficiency."
          ]}
        />
        <ServiceCard
          title="International Tax"
          delay="0.4s"
          href="/services#international-tax"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
          items={[
            "Cross-Border Expertise. Global Perspective.",
            "Advisory and compliance support for businesses with international operations."
          ]}
        />
        <ServiceCard
          title="Advisory & Consulting"
          delay="0.5s"
          href="/services#advisory"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          items={[
            "Insight Driven. Value Focused.",
            "Strategic and financial advisory enabling informed decisions and sustainable growth."
          ]}
        />
        <ServiceCard
          title="Corporate Secretarial"
          delay="0.6s"
          href="/services#corporate-secretarial"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 18a10.003 10.003 0 01-9.308-6.303l.054-.09m9.254-2.107a10.007 10.007 0 018.122-8.122m-2.454 1.158L8.91 20.1m3-11.1L3.55 15.01m15.144 2.152L8.55 13.01" /></svg>}
          items={[
            "Governance. Compliance. Continuity.",
            "Structured support for corporate and regulatory compliance requirements."
          ]}
        />
        <ServiceCard
          title="Legal Services"
          delay="0.7s"
          href="/services#legal"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
          items={[
            "Structured Legal Support. Business Aligned.",
            "Practical legal support aligned with business and regulatory needs."
          ]}
        />
        <ServiceCard
          title="Support Services"
          delay="0.8s"
          href="/services#support"
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 9a3 3 0 100 6 3 3 0 000-6z" /></svg>}
          items={[
            "Efficient Execution. Reliable Support.",
            "End-to-end operational and compliance support for smooth business functioning."
          ]}
        />
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    {/* Background Shapes */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-5%] left-[-10%] w-[30%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 right-20 w-40 h-40 border border-slate-200 rounded-full hidden lg:block rotate-12"></div>
      <div className="absolute top-1/2 left-[-2%] w-4 h-64 bg-primary/10 rounded-full blur-xl"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Decorative blur blob */}
          <div className="absolute -top-10 -left-10 w-52 h-52 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

          {/* Main large image */}
          <div className="relative z-10 w-full max-w-xl">
            <img
              src={aboutImg1}
              className="w-full h-[36rem] object-cover rounded-[2rem] shadow-2xl"
              alt="R&S Team"
            />

            {/* Smaller offset image */}
            <div className="absolute -bottom-14 -right-8 w-64 h-64 z-20 hidden md:block">
              <img
                src={aboutImg2}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                alt="R&S Office"
              />
            </div>

            {/* 25+ badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="text-primary text-4xl font-black mb-0.5">25+</div>
              <div className="text-navy font-bold text-xs uppercase tracking-tighter">Years of Legacy</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Story</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-navy mb-8 leading-tight uppercase">RAJ & SUBRAMANIAN <br className="hidden md:block" />Chartered Accountants</h3>
          <div className="space-y-6 mb-10">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Founded in 1997, with a presence in Chennai and Mumbai, we are a trusted Chartered Accountancy firm delivering audit, tax, and advisory solutions to businesses and institutions across India.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 25 years of experience, we bring clarity to complexity—combining technical expertise with a practical, business-first approach. Our focus goes beyond compliance to enabling stronger financial control, informed decision-making, and sustainable growth.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Built on a foundation of integrity and precision, we partner with our clients to deliver consistent, long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-primary transition-all duration-300">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">✓</div>
              <span className="font-bold text-navy group-hover:text-white transition-colors">Ethics First</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-primary transition-all duration-300">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">✓</div>
              <span className="font-bold text-navy group-hover:text-white transition-colors">Client Driven</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Highlights = () => {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const items = [
    {
      label: "Years of Experience",
      value: 30,
      suffix: "+",
      desc: "Trusted expertise since 1997",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      label: "Expert Partners",
      value: 7,
      suffix: "",
      desc: "Led by seasoned FCA professionals",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      label: "Locations",
      value: 2,
      suffix: "",
      desc: "Chennai (HQ) & Mumbai — serving clients pan-India",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      label: "Clients",
      value: 2000,
      suffix: "+",
      desc: "2000+ clients served across various sectors",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-navy relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large Premium Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[70%] bg-cyan-900/20 rounded-full blur-[100px]" style={{ animationDelay: '2s' }}></div>

        {/* Floating Geometric Outlines */}
        <div className="absolute top-20 left-[10%] w-64 h-64 border border-white/5 rounded-full hidden lg:block animate-spin-slow" style={{ animationDuration: '40s' }}></div>
        <div className="absolute bottom-20 right-[15%] w-96 h-96 border border-cyan-400/5 rounded-[4rem] hidden lg:block -rotate-12"></div>

        {/* Subtler Elements */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/5 rounded-[2rem] rotate-45 hidden md:block"></div>
        <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      {/* Subtle background slant */}
      {/* Removed slant for better dark theme consistency */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">

          {/* Left Content */}
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-sm font-black text-cyan-400 uppercase tracking-[0.2em] mb-4">Our Impact</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Where Expertise <br className="hidden lg:block" /> Meets Results.
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              For over 25 years, we’ve built a reputation grounded in trust, precision, and consistent delivery - driving measurable outcomes for our clients.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full opacity-50"></div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {items.map((item, i) => (
              <HighlightCard key={i} item={item} started={started} delay={i * 100} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

const HighlightCard = ({ item, started, delay }) => {
  const count = useCountUp(item.value, 2000, started)
  return (
    <div
      className="bg-white p-8 rounded-3xl border border-primary/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-primary/80 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
          {item.icon}
        </div>
        <div className="text-5xl font-black text-navy tabular-nums group-hover:text-primary transition-colors duration-500">
          {count}<span className="text-2xl ml-1">{item.suffix}</span>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-navy mb-2">{item.label}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}



const LatestUpdates = () => {
  const updates = [
    {
      date: "Oct 15, 2026",
      category: "Taxation",
      title: "New Goods and Services Tax (GST) Compliance Rules for SMEs",
      desc: "Understanding the latest notifications and how they impact monthly filing."
    },
    {
      date: "Sep 28, 2026",
      category: "Corporate Law",
      title: "MCA Extends Deadline for Annual Return Filing",
      desc: "An overview of the Ministry of Corporate Affairs' recent circular on deadline relaxations."
    },
    {
      date: "Sep 10, 2026",
      category: "Audit",
      title: "The Changing Landscape of Statutory Audits in 2026",
      desc: "Key focus areas for auditors and management this financial year end."
    }
  ]

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Firm Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy leading-tight">Latest Updates & News</h3>
          </div>
          <a href="#" className="font-bold text-primary hover:text-navy transition-colors flex items-center gap-2 group pb-2">
            View All Updates
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-slate-400 tracking-widest">{update.date}</span>
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">{update.category}</span>
              </div>
              <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors leading-snug">
                {update.title}
              </h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">
                {update.desc}
              </p>
              <div className="w-12 h-12 rounded-full bg-slate-50 flex flex-shrink-0 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const colors = [
    'from-primary to-primary/80',
    'from-primary to-primary/90',
    'from-primary/90 to-primary',
    'from-primary to-primary/70',
    'from-primary/80 to-primary',
  ]

  const testimonials = [
    {
      quote: "Raj & Subramanian have been our trusted advisors for over 12 years. Their attention to detail in statutory audits and GST compliance has saved us enormous time and risk. Truly world-class professionals.",
      name: "Rajesh Mehta",
      title: "Managing Director",
      company: "Mehta Exports Pvt. Ltd., Chennai",
      rating: 5,
    },
    {
      quote: "Their expertise in faceless tax assessments is unparalleled. They handled our entire Income Tax appeal seamlessly and we got a favorable outcome. I would recommend R&S to any corporate house without hesitation.",
      name: "Priya Subramaniam",
      title: "CFO",
      company: "TechSpark Solutions, Mumbai",
      rating: 5,
    },
    {
      quote: "We were struggling with complex project financing for our Mumbai expansion. The R&S Mumbai team structured the entire deal brilliantly. Their command over corporate finance is exceptional.",
      name: "Arun Krishnamurthy",
      title: "CEO",
      company: "Apex Infrastructure Ltd., Mumbai",
      rating: 5,
    },
    {
      quote: "As a growing SME, we needed a CA firm that understood our scale. R&S stepped in and streamlined our entire compliance calendar — GST, TDS, and statutory audit — all handled with zero delays.",
      name: "Sunita Patel",
      title: "Founder",
      company: "Patel Textiles, Ahmedabad",
      rating: 5,
    },
    {
      quote: "The bank audit team at R&S is incredibly meticulous and professional. Their domain knowledge and systematic approach have given our board complete confidence in our financial disclosures.",
      name: "K. Venkataraman",
      title: "General Manager – Finance",
      company: "South Indian Cooperative Bank",
      rating: 5,
    },
  ]

  const total = testimonials.length
  const [active, setActive] = useState(0)

  const prev = () => setActive((p) => (p - 1 + total) % total)
  const next = () => setActive((p) => (p + 1) % total)

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [])

  const visible = [0, 1, 2].map((offset) => {
    const idx = (active + offset) % total
    return { ...testimonials[idx], color: colors[idx], idx }
  })

  return (
    <section className="py-12 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-2">Client Voices</p>
            <h3 className="text-3xl md:text-4xl font-bold text-navy leading-tight hover:text-navy">
              Trusted by Leaders<br className="hidden md:block" /> Across India
            </h3>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-navy font-bold text-base">5.0</span>
              <span className="text-slate-400 text-xs">/ 5 Average Rating</span>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-primary transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.idx}-${i}`}
              className="bg-white rounded-3xl p-6 border border-primary/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col group"
            >
              {/* Accent bar */}
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${t.color} mb-4`}></div>

              {/* Quote icon */}
              <svg className="w-6 h-6 text-slate-100 mb-2 group-hover:text-primary/20 transition-colors duration-300" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed flex-grow text-xs mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-primary/10 mb-4"></div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy text-xs">{t.name}</div>
                  <div className="text-slate-400 text-[10px]">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${i === active ? 'w-6 h-1.5 bg-navy' : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}


function Home() {
  return (
    <div className="scroll-smooth overflow-x-hidden w-full relative">
      <Header />
      <Hero />

      <About />
      <Highlights />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
