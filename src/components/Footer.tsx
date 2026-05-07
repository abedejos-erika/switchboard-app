export default function Footer() {
  return (
    <>
      {/* Desktop footer */}
      <footer className="hidden md:flex bg-[#e9edf4] items-center justify-between px-16 py-12 w-full relative">
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

      {/* Mobile footer */}
      <footer className="md:hidden bg-[#f8f8fa] flex flex-col gap-6 px-4 py-6 w-full">
        {/* Logo */}
        <div className="flex items-center gap-[3.5px]">
          <img
            src="/logo-mark-dark.svg"
            alt=""
            className="shrink-0"
            style={{ width: '19.538px', height: '19.788px' }}
          />
          <span className="text-[#3e434d] whitespace-nowrap" style={{ fontFamily: "'Myanmar MN', 'Myanmar Text', serif", fontWeight: 700, fontSize: '17.03px', lineHeight: 'normal' }}>
            Switchboard
          </span>
        </div>

        {/* Stacked links */}
        <div className="flex flex-col gap-4">
          {['Support', 'Terms & Conditions', 'Privacy Policy'].map(link => (
            <a
              key={link}
              href="#"
              className="text-[14px] text-[#181b1f] opacity-65 hover:opacity-100 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[14px] text-[#181b1f] opacity-65">
          © 2026 Tentmakers Network, Inc.
        </p>
      </footer>
    </>
  );
}
