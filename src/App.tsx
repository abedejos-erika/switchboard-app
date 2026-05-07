import { useState } from 'react';
import { ChevronDown, CircleUser } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import HelperProfileForm from './components/HelperProfileForm';
import GospelWorkerForm from './components/GospelWorkerForm';
import { mockUser } from './data/mockData';

type Tab = 'personal' | 'helper' | 'gospel';

const TAB_LABELS: Record<Tab, string> = {
  personal: 'Personal Details',
  helper: 'Believer Profile',
  gospel: 'Gospel Worker',
};

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

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      <Navbar avatarUrl={mockUser.avatar} />

      <main className="flex-1 flex flex-col items-center md:gap-12 gap-8 md:py-16 py-8 md:px-4 px-4">
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
            {/* Save button — always visible on desktop; on mobile it's next to the dropdown */}
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
            <div className="relative flex-1">
              <button
                onClick={() => setMobileDropdownOpen(prev => !prev)}
                className="w-full h-10 pl-3 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] bg-white flex items-center gap-2 text-left"
              >
                <CircleUser size={16} className="text-[#5b6271] shrink-0" />
                <span className="flex-1">{TAB_LABELS[activeTab]}</span>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65" />
              </button>
              {mobileDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e1e1e6] rounded-lg shadow-md z-50 overflow-hidden">
                  {(Object.entries(TAB_LABELS) as [Tab, string][]).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => handleTabChange(key)}
                      className={`w-full text-left px-4 py-3 text-[14px] transition-colors ${
                        activeTab === key
                          ? 'bg-[#f0f6ff] text-[#181b1f] font-medium'
                          : 'text-[#5b6271] hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
