import { Menu } from 'lucide-react';

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
        <NavItem icon={<HouseIcon />} label="Home" />
        <NavItem icon={<InboxFullIcon />} label="Inbox" />
        <NavItem icon={<HandshakeIcon />} label="Volunteer" />
        <NavItem icon={<HandsPrayingIcon />} label="Pray" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Share icon — desktop only */}
        <button className="hidden md:flex w-10 h-10 items-center justify-center opacity-80 text-white hover:opacity-100 transition-opacity">
          <ShareFromSquareIcon />
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

/* ── FA6 Light — house ───────────────────────────────────────────────────── */
function HouseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* roof */}
      <path d="M1.5 10.5L10 3L18.5 10.5" />
      {/* left wall, floor, right wall */}
      <path d="M4 9.8V17.5H8V13H12V17.5H16V9.8" />
    </svg>
  );
}

/* ── FA6 Light — inbox-full ──────────────────────────────────────────────── */
function InboxFullIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* stacked document lines */}
      <line x1="4" y1="3.5" x2="16" y2="3.5" />
      <line x1="4" y1="7"   x2="16" y2="7"   />
      <line x1="4" y1="10.5" x2="13" y2="10.5" />
      {/* tray — angled sides, open top center for items */}
      <path d="M1.5 12H6L7.5 10.5H12.5L14 12H18.5V17.5H1.5V12Z" />
    </svg>
  );
}

/* ── FA6 Light — handshake ───────────────────────────────────────────────── */
function HandshakeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* left arm/sleeve */}
      <path d="M1 7.5L5.5 5H8.5L11 7.5" />
      {/* right arm/sleeve */}
      <path d="M19 7.5L14.5 5H12L9.5 7.5" />
      {/* clasped hands center */}
      <path d="M11 7.5C11 7.5 12.5 6 13.5 7L15 8.5C15.5 9 15 10 14 10L11.5 12.5C11 13 10 13.5 9 13L6.5 11.5C5.5 11 5 10 5.5 9L7 7.5C8 6.5 9.5 8 9.5 8L11 7.5Z" />
      {/* finger details */}
      <path d="M9.5 8L8 9.5" />
      <path d="M11 9L9.5 10.5" />
      <path d="M12.5 9.5L11 11" />
    </svg>
  );
}

/* ── FA6 Light — hands-praying ───────────────────────────────────────────── */
function HandsPrayingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* left hand outer edge */}
      <path d="M10 1.5C9.2 2 5.5 5.5 5 9.5C4.7 12 5.5 14.5 7.5 15.5L10 17" />
      {/* right hand outer edge */}
      <path d="M10 1.5C10.8 2 14.5 5.5 15 9.5C15.3 12 14.5 14.5 12.5 15.5L10 17" />
      {/* left inner finger lines */}
      <path d="M10 2.5C9.2 3.2 8 5.5 8 8.5"  strokeWidth="0.95" />
      <path d="M10 2C8.5 3.5 7.5 6.5 7.5 9"  strokeWidth="0.95" />
      {/* right inner finger lines */}
      <path d="M10 2.5C10.8 3.2 12 5.5 12 8.5" strokeWidth="0.95" />
      <path d="M10 2C11.5 3.5 12.5 6.5 12.5 9" strokeWidth="0.95" />
      {/* wrists curving to meet */}
      <path d="M7.5 15.5C7 16.8 7.5 18 10 19" strokeWidth="0.95" />
      <path d="M12.5 15.5C13 16.8 12.5 18 10 19" strokeWidth="0.95" />
    </svg>
  );
}

/* ── FA6 Light — share-from-square ──────────────────────────────────────── */
function ShareFromSquareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* box — open between the arrow base */}
      <path d="M7.5 8H3V17.5H17V8H12.5" />
      {/* arrow shaft */}
      <line x1="10" y1="2" x2="10" y2="12" />
      {/* arrow head */}
      <polyline points="7,5 10,2 13,5" />
    </svg>
  );
}
