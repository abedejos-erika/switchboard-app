import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import HelperProfileForm from './components/HelperProfileForm';
import GospelWorkerForm from './components/GospelWorkerForm';
import { mockUser } from './data/mockData';

type Tab = 'personal' | 'helper' | 'gospel';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const [hasHelperProfile, setHasHelperProfile] = useState(mockUser.hasHelperProfile);
  const [hasGospelWorker, setHasGospelWorker] = useState(mockUser.hasGospelWorker);
  const [saved, setSaved] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (tab === 'helper' && !hasHelperProfile) setHasHelperProfile(true);
    if (tab === 'gospel' && !hasGospelWorker) setHasGospelWorker(true);
    setActiveTab(tab);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      <Navbar avatarUrl={mockUser.avatar} />

      <main className="flex-1 flex flex-col items-center gap-12 py-16 px-4">
        <div className="w-full max-w-[1312px] flex flex-col gap-12">
          {/* Page header */}
          <div className="flex items-center gap-12">
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-[32px] font-semibold text-[#181b1f] leading-[40px]">
                Edit Information
              </h1>
              <p className="text-[16px] text-[#181b1f] opacity-75 leading-[20px]">
                Please review and finalize your information to complete your profile.
              </p>
            </div>
            <button
              onClick={handleSave}
              className={`h-10 px-4 rounded-lg text-[14px] font-medium text-white transition-all ${
                saved
                  ? 'bg-green-500'
                  : 'bg-[#3e73d5] hover:bg-[#2f5cb8]'
              }`}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>

          {/* Content */}
          <div className="flex gap-[200px] items-start">
            <Sidebar
              activeTab={activeTab}
              onTabChange={handleTabChange}
              hasHelperProfile={hasHelperProfile}
              hasGospelWorker={hasGospelWorker}
            />

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
