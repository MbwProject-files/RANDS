import logoWhite from '../assets/img/logo1.png'
import caIndiaLogo from '../assets/img/CA_India.png'

const Footer = () => (
  <footer id="contact" className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a35 40%, #091525 100%)' }}>

    {/* Decorative background orbs */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}></div>
    <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}></div>

    {/* Premium CTA Banner - Design 3: Compact Geometric Ribbon */}
    <div className="relative py-12 bg-navy overflow-hidden group">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>

      {/* Moving background glow */}
      <div className="absolute -top-1/2 left-0 w-full h-full bg-primary/10 blur-[100px] animate-pulse pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-cyan-400 border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-navy/40">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                Ready to count your <span className="text-white italic">success?</span>
              </h3>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Connect with our strategic partners today</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
            <a href="mailto:info@rands.in" className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white hover:text-navy transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group/btn">
              Get In Touch
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/#services" className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white/60 font-black text-xs uppercase tracking-widest rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm text-center">
              Explore Services
            </a>
          </div>

        </div>
      </div>
    </div>

    {/* Main Footer Grid */}
    <div className="container mx-auto px-6 pt-20 pb-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

        {/* Brand Column — wider */}
        <div className="lg:col-span-4">
          <div className="inline-flex mb-6 overflow-hidden">
            <div className="h-20 px-8 bg-white rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
              <img
                src={caIndiaLogo}
                alt="CA India"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
          <h4 className="text-white font-black uppercase text-lg mb-2 tracking-tight">Raj  &  Subramanian</h4>
          <p className="text-xs text-white/40  tracking-[0.2em] font-semibold mb-4">Chartered Accountants</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
            Established 1997 in Chennai. Empowering Indian businesses with precise audits, strategic tax planning, and expert compliance for over 25 years.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              {
                label: 'in',
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/company/raj-&-subramanian/',
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                )
              },
              // {
              //   label: 'gb',
              //   title: 'Google Business',
              //   href: '#',
              //   icon: (
              //     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.187 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
              //   )
              // },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href !== '#' ? '_blank' : undefined}
                rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
                title={s.title}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                {s.icon}
              </a>
            ))}


          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-7 flex items-center gap-3">
            <span className="w-5 h-0.5 bg-gradient-to-r from-primary to-cyan-400 inline-block rounded-full"></span>
            Quick Links
          </h4>
          <ul className="space-y-3.5">
            {[
              { label: 'Home', href: '/' },
              { label: 'About us', href: '/about' },
              // { label: 'Services', href: '/#services' },
              { label: 'Solutions', href: '/solutions' },
              { label: 'Careers', href: '/careers' },
              { label: 'Alumni', href: '/alumni' },
            ].map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-slate-400 text-sm hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-cyan-400 transition-colors flex-shrink-0 group-hover:scale-125"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-7 flex items-center gap-3">
            <span className="w-5 h-0.5 bg-gradient-to-r from-primary to-cyan-400 inline-block rounded-full"></span>
            Useful Links
          </h4>
          <ul className="space-y-3.5">
            {[
              // { label: 'Income Tax Portal', href: 'https://eportal.incometax.gov.in/' },
              // { label: 'GST Portal', href: 'https://www.gst.gov.in/' },
              // { label: 'MCA Portal', href: 'https://www.mca.gov.in/' },
              // { label: 'ICAI Website', href: 'https://www.icai.org/' },
              // { label: 'RBI Portal', href: 'https://rbi.org.in/' },
              // { label: 'EPFO Home', href: 'https://www.epfindia.gov.in/' },
              { label: 'Ministry of Corporate Affairs', href: 'https://www.mca.gov.in/content/mca/global/en/home.html' },
              { label: 'Income Tax Dept', href: 'https://www.incometaxindia.gov.in/' },
              { label: 'Traces', href: 'https://traces.tdscpc.gov.in/' },
              { label: 'Goods and Service Tax Dept', href: 'https://www.gst.gov.in/' },
              { label: 'Employees Provident Fund', href: 'https://www.epfindia.gov.in/site_en/index.php' },
            ].map(link => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2.5 group hover:text-cyan-300 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 flex-shrink-0 transition-colors"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-7 flex items-center gap-3">
            <span className="w-5 h-0.5 bg-gradient-to-r from-primary to-cyan-400 inline-block rounded-full"></span>
            Contact Us
          </h4>
          <div className="space-y-4">
            {/* Chennai */}
            <div className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-wider mb-0.5">Chennai (Head Office)</div>
                <div className="text-slate-400 text-xs leading-relaxed">5/1, 1st Floor, Tilak St, Extension, T. Nagar, Chennai - 17</div>
              </div>
            </div>
            {/* Mumbai */}
            <div className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-wider mb-0.5">Mumbai</div>
                <div className="text-slate-400 text-xs leading-relaxed">No. 402, B – Wing, 4th Floor,<br />
                  Gitanjali Towers, Ajmal Road, Vile Parle (East),<br />
                  Mumbai – 400 057.</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-white/60 text-[10px] font-black uppercase tracking-wider mb-0.5">Email</div>
                <a href="mailto:info@rands.in" className="text-slate-300 text-xs hover:text-white transition-colors">info@rands.in</a>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Divider with gradient */}
      <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
          <p className="text-slate-500 text-xs">
            © 2026 <span className="text-slate-400 font-semibold">Raj & Subramanian Chartered Accountants.</span> All rights reserved.
          </p>
        </div>
        <p className="text-slate-600 text-xs">
          Powered by <a href="https://mbwit.net" target="_blank" rel="noopener noreferrer" className="text-white font-bold tracking-wide hover:text-cyan-400 transition-colors">MBW</a>
        </p>
      </div>
    </div>

  </footer>
)

export default Footer
