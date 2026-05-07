import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <>
      {/* Desktop footer */}
      <footer className="hidden md:flex bg-[#e9edf4] items-center justify-between px-16 py-12 w-full relative">
        <LogoMark color="#3E434D" height={27} />

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
        <LogoMark color="#3E434D" height={20} />

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
