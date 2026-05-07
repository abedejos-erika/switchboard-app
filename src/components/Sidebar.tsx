import { CircleUser, Handshake, Landmark, Users } from 'lucide-react';

type Tab = 'personal' | 'helper' | 'gospel';

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="flex flex-col gap-2 w-[275px] shrink-0">
      <SidebarItem
        icon={<CircleUser size={16} />}
        label="Personal Details"
        active={activeTab === 'personal'}
        onClick={() => onTabChange('personal')}
      />
      <SidebarItem
        icon={<Landmark size={16} />}
        label="Gospel Worker"
        active={activeTab === 'gospel'}
        onClick={() => onTabChange('gospel')}
      />
      {activeTab === 'gospel' && (
        <div className="flex items-start px-6">
          <div className="flex gap-2 items-start flex-1 min-w-0">
            {/* Vertical indicator line */}
            <div className="w-0.5 h-[70px] bg-[#e1e1e6] rounded-full shrink-0 mt-3" />
            {/* Sub-items */}
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-3 h-12 px-4 rounded-lg">
                <span className="text-[#5b6271] shrink-0">
                  <Users size={16} />
                </span>
                <span className="text-[14px] font-medium text-[#181b1f]">My Prayer Circle</span>
              </div>
              <div className="flex items-center gap-3 h-12 px-4 rounded-lg">
                <span className="text-[#5b6271] shrink-0">
                  <AddressCardIcon />
                </span>
                <span className="text-[14px] font-medium text-[#181b1f]">Grace Local Church</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <SidebarItem
        icon={<Handshake size={16} />}
        label="Believer Profile"
        active={activeTab === 'helper'}
        onClick={() => onTabChange('helper')}
      />
    </div>
  );
}

/* ── FA6 Light — address-card ────────────────────────────────────────────── */
function AddressCardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* card outline */}
      <rect x="1.5" y="4" width="17" height="12" rx="1.5" />
      {/* avatar circle */}
      <circle cx="6.5" cy="10" r="2.5" />
      {/* text lines */}
      <line x1="11.5" y1="8"    x2="17"   y2="8"    />
      <line x1="11.5" y1="10.5" x2="17"   y2="10.5" />
      <line x1="11.5" y1="13"   x2="14.5" y2="13"   />
    </svg>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 h-12 px-4 rounded-lg w-full text-left transition-colors ${
        active
          ? 'bg-[#f0f6ff] text-[#181b1f]'
          : 'text-[#5b6271] hover:bg-gray-50'
      }`}
    >
      <span className={active ? 'text-[#5b6271]' : 'text-[#5b6271] opacity-60'}>
        {icon}
      </span>
      <span className={`text-[14px] font-medium ${active ? 'text-[#181b1f]' : 'text-[#5b6271] opacity-60'}`}>
        {label}
      </span>
    </button>
  );
}
