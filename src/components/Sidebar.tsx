import { User, Handshake, Landmark, Plus } from 'lucide-react';

type Tab = 'personal' | 'helper' | 'gospel';

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  hasHelperProfile: boolean;
  hasGospelWorker: boolean;
}

export default function Sidebar({ activeTab, onTabChange, hasHelperProfile, hasGospelWorker }: SidebarProps) {
  return (
    <div className="flex flex-col gap-2 w-[275px] shrink-0">
      {/* Personal Details */}
      <SidebarItem
        icon={<User size={16} />}
        label="Personal Details"
        active={activeTab === 'personal'}
        onClick={() => onTabChange('personal')}
      />

      {/* Helper Profile */}
      {hasHelperProfile ? (
        <SidebarItem
          icon={<Handshake size={16} />}
          label="Helper Profile"
          active={activeTab === 'helper'}
          onClick={() => onTabChange('helper')}
        />
      ) : (
        <SidebarItemWithAdd
          icon={<Handshake size={16} />}
          label="Helper Profile"
          onAdd={() => onTabChange('helper')}
        />
      )}

      {/* Gospel Worker */}
      {hasGospelWorker ? (
        <SidebarItem
          icon={<Landmark size={16} />}
          label="Gospel Worker"
          active={activeTab === 'gospel'}
          onClick={() => onTabChange('gospel')}
        />
      ) : (
        <SidebarItemWithAdd
          icon={<Landmark size={16} />}
          label="Gospel Worker"
          onAdd={() => onTabChange('gospel')}
        />
      )}
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

function SidebarItemWithAdd({
  icon,
  label,
  onAdd,
}: {
  icon: React.ReactNode;
  label: string;
  onAdd: () => void;
}) {
  return (
    <div className="flex items-center gap-3 h-12 px-4 rounded-lg w-full">
      <span className="text-[#5b6271] opacity-60">{icon}</span>
      <span className="text-[14px] font-medium text-[#5b6271] opacity-60 flex-1">{label}</span>
      <button
        onClick={onAdd}
        className="flex items-center gap-1 text-[#3e73d5] text-[14px] font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
      >
        <Plus size={14} />
        <span>Add Profile</span>
      </button>
    </div>
  );
}
