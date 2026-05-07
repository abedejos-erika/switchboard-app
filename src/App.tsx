import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import HelperProfileForm from './components/HelperProfileForm';
import GospelWorkerForm from './components/GospelWorkerForm';
import LandingPage from './components/LandingPage';
import { mockUser } from './data/mockData';

type Tab = 'personal' | 'helper' | 'gospel';

const TabIcon = ({ d }: { d: string }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={d} fill="currentColor" />
  </svg>
);

const PERSONAL_PATH = "M14.875 15.0312C16.1875 13.75 17 11.9688 17 10C17 6.15625 13.8438 3 10 3C6.125 3 3 6.15625 3 10C3 11.9688 3.8125 13.75 5.09375 15.0312C5.53125 13.3125 7.125 12 9 12H11C12.8438 12 14.4375 13.3125 14.875 15.0312ZM13.9688 15.75V15.7812C13.8438 14.2188 12.5625 13 11 13H9C7.40625 13 6.125 14.2188 6 15.7812C7.125 16.5625 8.5 17 10 17C11.4688 17 12.8438 16.5625 13.9688 15.75ZM10 18C7.125 18 4.5 16.5 3.0625 14C1.625 11.5312 1.625 8.5 3.0625 6C4.5 3.53125 7.125 2 10 2C12.8438 2 15.4688 3.53125 16.9062 6C18.3438 8.5 18.3438 11.5312 16.9062 14C15.4688 16.5 12.8438 18 10 18ZM10 10C10.5312 10 11 9.71875 11.2812 9.25C11.5625 8.8125 11.5625 8.21875 11.2812 7.75C11 7.3125 10.5312 7 10 7C9.4375 7 8.96875 7.3125 8.6875 7.75C8.40625 8.21875 8.40625 8.8125 8.6875 9.25C8.96875 9.71875 9.4375 10 10 10ZM7.5 8.5C7.5 7.625 7.96875 6.8125 8.75 6.34375C9.5 5.90625 10.4688 5.90625 11.25 6.34375C12 6.8125 12.5 7.625 12.5 8.5C12.5 9.40625 12 10.2188 11.25 10.6875C10.4688 11.125 9.5 11.125 8.75 10.6875C7.96875 10.2188 7.5 9.40625 7.5 8.5Z";
const GOSPEL_PATH = "M10.2188 2.09375L17.5 6.1875C17.8125 6.375 18 6.6875 18 7.03125C18 7.5625 17.5625 8 17 8H2.96875C2.4375 8 2 7.5625 2 7.03125C2 6.6875 2.1875 6.375 2.46875 6.1875L9.75 2.09375C9.90625 2 10.0938 2 10.2188 2.09375ZM10 3.09375L3.0625 7H16.9062L10 3.09375ZM4 13V9H5V13H7.5V9H8.5V13H11.5V9H12.5V13H15V9H16V13C16.25 13 16.5 13.25 16.5 13.5C16.5 13.7812 16.25 14 16 14H4C3.71875 14 3.5 13.7812 3.5 13.5C3.5 13.25 3.71875 13 4 13ZM2.75 15.5C2.75 15.25 2.96875 15 3.25 15H16.75C17 15 17.25 15.25 17.25 15.5C17.25 15.7812 17 16 16.75 16H3.25C2.96875 16 2.75 15.7812 2.75 15.5ZM2 17.5C2 17.25 2.21875 17 2.5 17H17.5C17.75 17 18 17.25 18 17.5C18 17.7812 17.75 18 17.5 18H2.5C2.21875 18 2 17.7812 2 17.5Z";
const BELIEVER_PATH = "M8.21875 4H8.5L7.40625 5.125C6.875 5.25 6.40625 5.5 5.96875 5.84375L4.71875 6.90625C4.65625 6.96875 4.5625 7 4.5 7V5.78125L5.34375 5.0625C6.15625 4.375 7.1875 4 8.21875 4ZM3.5 13.0312V13.5C3.5 14.3438 2.8125 15 2 15H1.5C0.65625 15 0 14.3438 0 13.5V7C0 6.46875 0.4375 6 1 6H2.5H3.5V7V12.0312C4 12.0625 4.5 12.2812 4.84375 12.6562L5.8125 13.5938V13.5625L7.0625 14.8125C7.46875 15.2188 8.125 15.25 8.5625 14.8438C8.65625 14.7812 8.75 14.6562 8.8125 14.5625C8.875 14.4062 9.03125 14.3125 9.1875 14.2812C9.34375 14.25 9.5 14.3125 9.59375 14.4375L9.84375 14.6875C10.25 15.0938 10.9375 15.0625 11.3125 14.625C11.5 14.4375 11.5938 14.1875 11.5625 13.9375C11.5625 13.75 11.6562 13.5625 11.8125 13.4688C12 13.375 12.1875 13.375 12.3438 13.4688C12.7188 13.7188 13.2188 13.6875 13.5625 13.375C13.9688 13 14 12.3438 13.5938 11.9375L10.875 9.21875L9.5 10.5C8.71875 11.25 7.5 11.25 6.6875 10.5312C5.78125 9.71875 5.75 8.28125 6.625 7.4375L9.125 5.09375C9.875 4.40625 10.8438 4 11.875 4C12.8125 4 13.7188 4.34375 14.4375 4.96875L15.4688 5.8125V7C15.375 7 15.2812 6.96875 15.2188 6.90625L13.8125 5.71875C13.2812 5.25 12.5938 5 11.875 5C11.0938 5 10.375 5.3125 9.8125 5.84375L7.3125 8.1875C6.875 8.625 6.875 9.375 7.34375 9.78125C7.78125 10.1562 8.40625 10.1562 8.8125 9.78125L11.1875 7.59375C11.4062 7.40625 11.7188 7.40625 11.9062 7.625C12.0938 7.8125 12.0938 8.125 11.875 8.3125L11.625 8.5625L14.3125 11.2188C14.5312 11.4375 14.6875 11.7188 14.7812 11.9688H16.5V7.03125V6.03125H17.5H19C19.5312 6.03125 20 6.46875 20 7.03125V13.5312C20 14.3438 19.3125 15.0312 18.5 15.0312H18C17.1562 15.0312 16.5 14.3438 16.5 13.5312V12.9688H14.8438C14.7812 13.4062 14.5625 13.8125 14.2188 14.125C13.7188 14.5625 13.0625 14.7188 12.4688 14.5938C12.375 14.8438 12.25 15.0938 12.0625 15.3125C11.3438 16.125 10.125 16.1875 9.3125 15.5312C9.28125 15.5625 9.25 15.5938 9.21875 15.5938C8.40625 16.3438 7.15625 16.3125 6.375 15.5312L5.59375 14.75L4.15625 13.375C3.96875 13.1875 3.75 13.0625 3.5 13.0312ZM2.5 7H1V13.5C1 13.7812 1.21875 14 1.5 14H2C2.25 14 2.5 13.7812 2.5 13.5V7ZM19 7H17.5V13.5C17.5 13.7812 17.7188 14 18 14H18.5C18.75 14 19 13.7812 19 13.5V7Z";

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'personal', label: 'Personal Details',      icon: <TabIcon d={PERSONAL_PATH} /> },
  { key: 'helper',   label: 'Believer Profile',        icon: <TabIcon d={BELIEVER_PATH} /> },
  { key: 'gospel',   label: 'Gospel Worker Profile',  icon: <TabIcon d={GOSPEL_PATH} /> },
];

function App() {
  const [page, setPage] = useState<'landing' | 'edit'>('landing');
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const [saved, setSaved] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  if (page === 'landing') {
    return <LandingPage onGetStarted={() => setPage('edit')} />;
  }

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
