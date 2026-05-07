export default function Footer() {
  return (
    <footer className="bg-[#e9edf4] flex items-center justify-between px-16 py-12 w-full relative">
      {/* Logo */}
      <div className="flex items-center gap-[4.676px]" style={{ width: '172px' }}>
        <img
          src="/logo-mark-dark.svg"
          alt=""
          className="shrink-0"
          style={{ width: '26.05px', height: '26.384px' }}
        />
        <span className="text-[#3e434d] whitespace-nowrap" style={{ fontFamily: "'Myanmar MN', 'Myanmar Text', serif", fontWeight: 700, fontSize: '22.71px', lineHeight: 'normal' }}>
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
