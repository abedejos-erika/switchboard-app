import { useState } from 'react';
import { ChevronDown, CircleUser, Handshake, Landmark, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import HelperProfileForm from './components/HelperProfileForm';
import GospelWorkerForm from './components/GospelWorkerForm';
import { mockUser } from './data/mockData';

type Tab = 'personal' | 'helper' | 'gospel';

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'personal', label: 'Personal Details',      icon: <CircleUser size={16} /> },
  { key: 'helper',   label: 'Believer Profile',        icon: <Handshake size={16} /> },
  { key: 'gospel',   label: 'Gospel Worker Profile',  icon: <Landmark size={16} /> },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const [saved, setSaved] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setMobileDropdownOpen(false);
  };

  const activeTabMeta = TABS.find(t => t.key === activeTab)!;

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      <Navbar avatarUrl={mockUser.avatar} />

      <main className="flex-1 flex flex-col items-center md:gap-12 gap-8 md:py-16 py-8 px-4">
        <div className="w-full max-w-[1312px] flex flex-col md:gap-12 gap-6">

          {/* Page header */}
          <div className="flex items-center gap-4 md:gap-12">
            <div className="flex-1 flex flex-col gap-1 md:gap-2">
              <h1 className="md:text-[32px] text-[24px] font-semibold text-[#181b1f] leading-tight md:leading-[40px]">
                Edit Information
              </h1>
              <p className="md:text-[16px] text-[14px] text-[#181b1f] opacity-75 leading-[20px]">
                Please review and finalize your information to complete your profile.
              </p>
            </div>
            {/* Save button — desktop only (mobile has it beside the dropdown) */}
            <button
              onClick={handleSave}
              className={`hidden md:block h-10 px-4 rounded-lg text-[14px] font-medium text-white transition-all ${
                saved ? 'bg-green-500' : 'bg-[#3e73d5] hover:bg-[#2f5cb8]'
              }`}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>

          {/* Mobile tab selector + Save */}
          <div className="md:hidden flex items-center gap-3">
            {/* Trigger button */}
            <div className="relative flex-1">
              <button
                onClick={() => setMobileDropdownOpen(prev => !prev)}
                className="w-full h-10 pl-3 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] bg-white flex items-center gap-2 text-left"
              >
                <span className="text-[#5b6271] shrink-0">{activeTabMeta.icon}</span>
                <span className="flex-1 leading-[22px]">{activeTabMeta.label}</span>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
              </button>

              {/* Popover */}
              {mobileDropdownOpen && (
                <>
                  {/* Backdrop to close on outside click */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMobileDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e1e1e6] rounded-[12px] p-2 z-50 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.10),0px_4px_6px_-2px_rgba(16,24,40,0.05)]">
                    {TABS.map(({ key, label, icon }) => (
                      <button
                        key={key}
                        onClick={() => handleTabChange(key)}
                        className="w-full flex items-center gap-3 px-4 py-[10px] rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {/* Icon */}
                        <span className="flex items-center justify-center w-5 h-5 shrink-0 text-[#5b6271]">
                          {icon}
                        </span>
                        {/* Label */}
                        <span className="flex-1 text-left text-[14px] text-[#181b1f] leading-[22px]">
                          {label}
                        </span>
                        {/* Active checkmark badge */}
                        {activeTab === key && (
                          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#3e73d5] shrink-0">
                            <Check size={10} strokeWidth={3} className="text-white" />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Save button */}
            <button
              onClick={handleSave}
              className={`h-10 px-4 rounded-lg text-[14px] font-medium text-white transition-all whitespace-nowrap ${
                saved ? 'bg-green-500' : 'bg-[#3e73d5] hover:bg-[#2f5cb8]'
              }`}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>

          {/* Content */}
          <div className="flex md:gap-[200px] gap-0 items-start">
            {/* Sidebar — desktop only */}
            <div className="hidden md:block">
              <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            <div className="flex-1 min-w-0">
              {activeTab === 'personal' && <PersonalDetailsForm />}
              {activeTab === 'helper' && <HelperProfileForm />}
              {activeTab === 'gospel' && <GospelWorkerForm />}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
