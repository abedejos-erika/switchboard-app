interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Nav — dark plum, centered logo only */}
      <nav className="bg-[#433846] h-[80px] flex items-center justify-center shrink-0 w-full">
        <div className="flex items-center gap-[4.676px]">
          <img
            src="/logo-mark-white.svg"
            alt=""
            className="shrink-0"
            style={{ width: '26.05px', height: '26.384px' }}
          />
          <span
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: "'Myanmar MN', 'Myanmar Text', serif",
              fontWeight: 700,
              fontSize: '22.711px',
              lineHeight: 'normal',
            }}
          >
            Switchboard
          </span>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center py-16 md:px-4 px-6">
        <div className="w-full max-w-[1312px] flex flex-col gap-12">

          {/* Text block */}
          <div
            className="flex flex-col gap-6 md:gap-6 text-[#181b1f]"
            style={{ fontFamily: "'Albert Sans', sans-serif", fontWeight: 600, lineHeight: 1.5 }}
          >
            <h1 className="md:text-[48px] text-[36px]">
              Edit Multiple Profiles, All in One Place
            </h1>

            <div className="flex flex-col gap-4 md:text-[24px] text-[18px] opacity-75">
              <p>Hello! Thanks so much for participating in our prototype.</p>
              <p>
                We're exploring ways to make it easier for you to edit multiple profiles in one place.
                Feel free to explore at your own pace, and we'd love to hear your thoughts afterward!
              </p>
            </div>
          </div>

          {/* Note box */}
          <div
            className="bg-[#e7f9f2] border border-[#6fbf9f] rounded-[12px] px-8 py-6 w-full"
            style={{ fontFamily: "'Albert Sans', sans-serif", fontWeight: 600, lineHeight: 1.5 }}
          >
            <p className="md:text-[24px] text-[18px] text-[#181b1f] opacity-75">
              Note: Please note that this is not the final product—everything you see is part of a prototype and won't affect the live experience.
            </p>
          </div>

          {/* Tip */}
          <p
            className="md:text-[24px] text-[18px] text-[#181b1f] opacity-75"
            style={{ fontFamily: "'Albert Sans', sans-serif", fontWeight: 600, lineHeight: 1.5 }}
          >
            💡 TIP: For this session, you can assume you're already logged in and are editing your profiles.
          </p>

          {/* CTA button */}
          <button
            onClick={onGetStarted}
            className="self-start bg-[#3f7c74] hover:bg-[#336660] transition-colors rounded-full px-8 py-4 md:text-[24px] text-[20px] text-[#f6f6f4] whitespace-nowrap"
            style={{ fontFamily: "'Albert Sans', sans-serif", fontWeight: 600, lineHeight: 1.5 }}
          >
            Let's Get Started
          </button>

        </div>
      </main>
    </div>
  );
}
