import { User, Handshake, Landmark } from 'lucide-react';

type Tab = 'personal' | 'helper' | 'gospel';

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="flex flex-col gap-2 w-[275px] shrink-0">
      <SidebarItem
        icon={<User size={16} />}
        label="Personal Details"
        active={activeTab === 'personal'}
        onClick={() => onTabChange('personal')}
      />
      <SidebarItem
        icon={<Handshake size={16} />}
        label="Believer Profile"
        active={activeTab === 'helper'}
        onClick={() => onTabChange('helper')}
      />
      <SidebarItem
        icon={<Landmark size={16} />}
        label="Gospel Worker"
        active={activeTab === 'gospel'}
        onClick={() => onTabChange('gospel')}
      />
    </div>
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

