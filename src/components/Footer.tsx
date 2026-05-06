export default function Footer() {
  return (
    <footer className="bg-[#e9edf4] flex items-center justify-between px-16 py-12 w-full relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" stroke="#3e434d" strokeWidth="2" fill="none"/>
          <circle cx="13" cy="13" r="3" fill="#3e434d"/>
          <line x1="13" y1="1" x2="13" y2="7" stroke="#3e434d" strokeWidth="2"/>
          <line x1="13" y1="19" x2="13" y2="25" stroke="#3e434d" strokeWidth="2"/>
          <line x1="1" y1="13" x2="7" y2="13" stroke="#3e434d" strokeWidth="2"/>
          <line x1="19" y1="13" x2="25" y2="13" stroke="#3e434d" strokeWidth="2"/>
        </svg>
        <span className="text-[#3e434d] font-bold text-[22px]" style={{ fontFamily: 'Georgia, serif' }}>
          Switchboard
        </span>
      </div>

      {/* Center links */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        {['Support', 'Terms & Conditions', 'Privacy Policy'].map(link => (
          <a
            key={link}
            href="#"
            className="text-[16px] text-[#181b1f] opacity-65 hover:opacity-100 transition-opacity"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[16px] text-[#181b1f] opacity-65 text-right whitespace-nowrap">
        © 2026 Tentmakers Network, Inc.
      </p>
    </footer>
  );
}
