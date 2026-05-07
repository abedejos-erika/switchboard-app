import { Home, Inbox, Handshake, Share2, Menu } from 'lucide-react';

interface NavbarProps {
  avatarUrl: string;
}

export default function Navbar({ avatarUrl }: NavbarProps) {
  return (
    <nav className="bg-[#081321] md:h-[80px] h-[56px] flex items-center justify-between md:px-16 px-4 shrink-0 w-full">
      {/* Logo */}
      <div className="flex items-center gap-[4.676px]">
        <img
          src={`${import.meta.env.BASE_URL}logo-mark-white.svg`}
          alt=""
          className="shrink-0"
          style={{ width: '26.05px', height: '26.384px' }}
        />
        <span className="text-white whitespace-nowrap" style={{ fontFamily: "'Myanmar MN', 'Myanmar Text', serif", fontWeight: 700, fontSize: '22.711px', lineHeight: 'normal' }}>
          Switchboard
        </span>
      </div>

      {/* Navigation Links — desktop only */}
      <div className="hidden md:flex items-center gap-8">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Inbox size={20} />} label="Inbox" />
        <NavItem icon={<Handshake size={20} />} label="Volunteer" />
        <NavItem icon={<PrayIcon />} label="Pray" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Share icon — desktop only */}
        <button className="hidden md:flex w-10 h-10 items-center justify-center opacity-80 text-white hover:opacity-100 transition-opacity">
          <Share2 size={20} />
        </button>
        {/* Hamburger — mobile only */}
        <button className="md:hidden w-8 h-8 flex items-center justify-center opacity-80 text-white hover:opacity-100 transition-opacity">
          <Menu size={20} />
        </button>
        <img
          src={avatarUrl}
          alt="User avatar"
          className="md:w-10 md:h-10 w-8 h-8 rounded-full object-cover"
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
