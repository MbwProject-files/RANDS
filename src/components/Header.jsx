import { useState, useEffect } from 'react'
import logoBlue from '../assets/img/logo1.png'
import logoWhite from '../assets/img/logo1.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTheme = isScrolled || isMenuOpen
    ? 'bg-white py-4 text-navy shadow-lg'
    : 'bg-transparent py-4 lg:py-6 text-white'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navTheme}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center group z-50 relative -ml-4">
          <img
            src={isScrolled || isMenuOpen ? logoBlue : logoWhite}
            alt="Raj & Subramanian Logo"
            style={{
              width: '300px',
              height: '85px',
              filter: isScrolled || isMenuOpen ? 'none' : 'brightness(0) invert(1)'
            }}
            className="object-contain transition-all duration-500"
          />
        </a>
        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-2 font-bold text-[13px] tracking-widest uppercase">
          <a href="/" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">Home</a>
          <a href="/about" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">About us</a>
          {/* <a href="/services" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">Services</a> */}
          <a href="/solutions" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">Solutions</a>
          <a href="/careers" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">Careers</a>
          <a href="/alumni" className="px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">Alumni</a>
          <a href="/contact" className={`px-6 py-3 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap ${isScrolled || isMenuOpen ? 'bg-primary text-white hover:bg-navy shadow-primary/20' : 'bg-white text-navy hover:bg-primary hover:text-white'}`}>Contact Us</a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`xl:hidden focus:outline-none z-50 relative p-2 ml-4 rounded-lg transition-colors ${isScrolled || isMenuOpen ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`xl:hidden absolute top-0 left-0 w-full bg-white transition-all duration-500 ease-in-out border-b border-slate-100 overflow-hidden ${isMenuOpen ? 'max-h-[100vh] py-8 pt-24 opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-4 font-bold text-base tracking-widest uppercase px-6 text-navy">
          <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">Home</a>
          <a href="/about" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">About us</a>
          <a href="/services" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">Services</a>
          <a href="/solutions" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">Solutions</a>
          <a href="/careers" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">Careers</a>
          <a href="/alumni" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary hover:text-white transition-all w-full text-center py-4 border-b border-slate-50">Alumni</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-6 px-10 py-4 bg-primary text-white rounded-xl hover:bg-navy transition-all shadow-xl w-full max-w-[280px] text-center text-sm">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
