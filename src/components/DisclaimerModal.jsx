import React, { useState, useEffect } from 'react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already agreed in this session
    const hasAgreed = sessionStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      setIsOpen(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDecline = () => {
    // Redirect if they decline
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded shadow-2xl max-w-3xl w-full p-8 md:p-10 relative flex flex-col animate-scale-in">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">I agree & understand the following:</h2>
        
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 text-justify">
          This website is meant solely for providing general information and not for advertising or soliciting any work directly or indirectly. The information provided on this website is made available to the user only at his/her request. By accessing this website, you acknowledge and confirm that you seek information relating to Raj & Subramanian Chartered Accountants on your own accord and volition. Further, any content provided on this website should not be taken as legal advice. This is neither an advertisement nor for soliciting work. We disclaim liability for any action the user takes relying on content provided on the website.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
          <button 
            onClick={handleAgree}
            className="px-8 py-3 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-bold text-sm tracking-wide transition-colors rounded-sm uppercase"
          >
            I Agree to Proceed
          </button>
          <button 
            onClick={handleDecline}
            className="px-8 py-3 bg-white text-primary border-2 border-primary hover:bg-slate-50 font-bold text-sm tracking-wide transition-colors rounded-sm uppercase"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
