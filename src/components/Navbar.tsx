import { Home, Inbox, Handshake, Share2 } from 'lucide-react';

interface NavbarProps {
  avatarUrl: string;
}

export default function Navbar({ avatarUrl }: NavbarProps) {
  return (
    <nav className="bg-[#081321] h-[80px] flex items-center justify-between px-16 shrink-0 w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="13" cy="13" r="3" fill="white"/>
          <line x1="13" y1="1" x2="13" y2="7" stroke="white" strokeWidth="2"/>
          <line x1="13" y1="19" x2="13" y2="25" stroke="white" strokeWidth="2"/>
          <line x1="1" y1="13" x2="7" y2="13" stroke="white" strokeWidth="2"/>
          <line x1="19" y1="13" x2="25" y2="13" stroke="white" strokeWidth="2"/>
        </svg>
        <span className="text-white font-bold text-[22px] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          Switchboard
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Inbox size={20} />} label="Inbox" />
        <NavItem icon={<Handshake size={20} />} label="Volunteer" />
        <NavItem icon={<PrayIcon />} label="Pray" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center opacity-80 text-white hover:opacity-100 transition-opacity">
          <Share2 size={20} />
        </button>
        <img
          src={avatarUrl}
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
      <div className="w-10 h-10 flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-white text-[16px] font-normal">{label}</span>
    </div>
  );
}

function PrayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3.5C9 3.5 6 6 6 10v6l3 3" />
      <path d="M15 3.5C15 3.5 18 6 18 10v6l-3 3" />
      <path d="M9 19l3 2 3-2" />
      <path d="M12 3v6" />
    </svg>
  );
}
