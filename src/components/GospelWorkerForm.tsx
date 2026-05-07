import { useState } from 'react';
import { ChevronDown, Info, Plus } from 'lucide-react';
import { mockUser, countryOptions } from '../data/mockData';

type GospelTab = 'about' | 'heart' | 'network';

const causeOptions = [
  'Agriculture', 'Arts & Media', 'Business as Mission', 'Children & Youth',
  'Church Planting', 'Community Development', 'Cross-cultural', 'Discipleship',
  'Education', 'Healthcare', 'Humanitarian Aid', 'Leadership Development',
  'Refugee Ministry', 'Translation',
];

const allRegions = [
  'North America', 'Central America', 'Caribbean', 'South America',
  'Northern Europe', 'Western Europe', 'Eastern Europe', 'Southern Europe',
  'Central Europe', 'Eastern Asia', 'Southeastern Asia', 'Southern Asia',
  'Russia & Central Asia', 'Northern Africa', 'Western Africa', 'Central Africa',
  'Southern Africa', 'Middle East', 'Oceania', 'Global (All Regions)',
];

const INTRO_EXAMPLE = '"I work with Great Commission Ministries (GCM). GCM is a global network which helps to multiply local church plants. My family and I serve in South Sudan, running an organization which addresses Problem A, Problem B, and Problem C through Activity A, Activity B, and Activity C."';

export default function GospelWorkerForm() {
  const [activeTab, setActiveTab] = useState<GospelTab>('about');

  // About Ministry
  const [ministryName, setMinistryName] = useState('John and Mary Global Mission');
  const [intro, setIntro] = useState(
    "For over two decades, I've been involved in global missions, focusing on leadership development and strategic planning for sustainable community transformation in the developing world."
  );
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('94102');
  const [city, setCity] = useState('San Francisco');
  const [stateVal, setStateVal] = useState('California');
  const [anonymousLocation, setAnonymousLocation] = useState(false);
  const [ministryWebsite, setMinistryWebsite] = useState('');
  const [bookingLink, setBookingLink] = useState('');

  // Heart of Ministry
  const [causes, setCauses] = useState(['Agriculture', 'Cross-cultural']);
  const [selectedRegions, setSelectedRegions] = useState(['North America', 'Central America']);
  const [creativeAccess, setCreativeAccess] = useState(false);

  // Network
  const [churches, setChurches] = useState(['Austin Ridge Church']);
  const [sendingAgency, setSendingAgency] = useState('');
  const [heardAboutUs, setHeardAboutUs] = useState('');

  const addCause = () => setCauses(prev => [...prev, causeOptions[0]]);
  const updateCause = (i: number, val: string) =>
    setCauses(prev => prev.map((c, idx) => idx === i ? val : c));

  const toggleRegion = (region: string) =>
    setSelectedRegions(prev =>
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );

  const addChurch = () => setChurches(prev => [...prev, '']);
  const updateChurch = (i: number, val: string) =>
    setChurches(prev => prev.map((c, idx) => idx === i ? val : c));

  const tabs: { id: GospelTab; label: string }[] = [
    { id: 'about', label: 'About Ministry' },
    { id: 'heart', label: 'Heart of Ministry' },
    { id: 'network', label: 'Network' },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Sub-tab navigation */}
      <div className="border-b border-[#e1e1e6] flex gap-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-12 py-4 text-[14px] font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-[#181b1f] text-[#181b1f]'
                : 'text-[#5b6271] hover:text-[#181b1f]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'about' && (
        <AboutMinistryTab
          ministryName={ministryName}
          setMinistryName={setMinistryName}
          intro={intro}
          setIntro={setIntro}
          country={country}
          setCountry={setCountry}
          zip={zip}
          setZip={setZip}
          city={city}
          setCity={setCity}
          stateVal={stateVal}
          setStateVal={setStateVal}
          anonymousLocation={anonymousLocation}
          setAnonymousLocation={setAnonymousLocation}
          ministryWebsite={ministryWebsite}
          setMinistryWebsite={setMinistryWebsite}
          bookingLink={bookingLink}
          setBookingLink={setBookingLink}
        />
      )}
      {activeTab === 'heart' && (
        <HeartOfMinistryTab
          causes={causes}
          addCause={addCause}
          updateCause={updateCause}
          selectedRegions={selectedRegions}
          toggleRegion={toggleRegion}
          creativeAccess={creativeAccess}
          setCreativeAccess={setCreativeAccess}
        />
      )}
      {activeTab === 'network' && (
        <NetworkTab
          churches={churches}
          addChurch={addChurch}
          updateChurch={updateChurch}
          sendingAgency={sendingAgency}
          setSendingAgency={setSendingAgency}
          heardAboutUs={heardAboutUs}
          setHeardAboutUs={setHeardAboutUs}
        />
      )}
    </div>
  );
}

/* ─── About Ministry ─────────────────────────────────────────────────────── */

function AboutMinistryTab({
  ministryName, setMinistryName,
  intro, setIntro,
  country, setCountry,
  zip, setZip,
  city, setCity,
  stateVal, setStateVal,
  anonymousLocation, setAnonymousLocation,
  ministryWebsite, setMinistryWebsite,
  bookingLink, setBookingLink,
}: {
  ministryName: string; setMinistryName: (v: string) => void;
  intro: string; setIntro: (v: string) => void;
  country: string; setCountry: (v: string) => void;
  zip: string; setZip: (v: string) => void;
  city: string; setCity: (v: string) => void;
  stateVal: string; setStateVal: (v: string) => void;
  anonymousLocation: boolean; setAnonymousLocation: (v: boolean) => void;
  ministryWebsite: string; setMinistryWebsite: (v: string) => void;
  bookingLink: string; setBookingLink: (v: string) => void;
}) {
  const charCount = intro.length;

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">

      {/* Profile Picture */}
      <div className="flex flex-col gap-4">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Profile Picture</label>
        <div className="flex items-center gap-6">
          <img
            src={mockUser.gospelAvatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover shrink-0"
          />
          <button className="h-10 px-4 border border-[#b1b7c5] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors">
            Change Picture
          </button>
        </div>
        <p className="text-[12px] text-[#181b1f] opacity-70 leading-[18px]">
          * We strongly recommend using a unique profile photo for each profile to help distinguish them more easily.
        </p>
      </div>

      {/* Ministry Display Name */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Ministry Display Name *</label>
          <Info size={12} className="text-[#5b6271] opacity-40" />
        </div>
        <input
          type="text"
          value={ministryName}
          onChange={e => setMinistryName(e.target.value)}
          className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
        />
      </div>

      {/* Email (disabled) */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Email Address</label>
        <div className="h-10 px-4 border border-[#e1e1e6] rounded-lg bg-[#f8f8fa] flex items-center">
          <span className="text-[14px] text-[#181b1f] opacity-60">{mockUser.email}</span>
        </div>
      </div>

      {/* Introduction */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Introduction *</label>
          <textarea
            value={intro}
            onChange={e => setIntro(e.target.value)}
            rows={5}
            className="px-4 py-3 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] resize-none bg-white transition-colors"
          />
          <p className="text-[12px] text-[#5b6271] leading-[18px]">
            {charCount} / 500 characters, Min 100 characters
          </p>
        </div>
        <p className="text-[12px] text-[#181b1f] opacity-70 leading-[18px]">
          <span className="font-semibold">Example Intro: </span><br />
          {INTRO_EXAMPLE}
        </p>
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Country</label>
        <div className="relative">
          <select
            value={country}
            onChange={e => setCountry(e.target.value)}
            className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer transition-colors"
          >
            {countryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
        </div>
      </div>

      {/* Zip / City / State */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Zip Code</label>
          <input
            type="text"
            value={zip}
            onChange={e => setZip(e.target.value)}
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">City</label>
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">State</label>
          <input
            type="text"
            value={stateVal}
            onChange={e => setStateVal(e.target.value)}
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
          />
        </div>
      </div>

      {/* Anonymous location */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={anonymousLocation}
          onChange={e => setAnonymousLocation(e.target.checked)}
          className="w-5 h-5 rounded border border-[#b1b7c5] accent-[#3e73d5] shrink-0 cursor-pointer"
        />
        <span className="text-[14px] text-[#181b1f]">Mark location as anonymous</span>
      </label>

      {/* Ministry Website + Booking Link */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Ministry Website</label>
          <input
            type="url"
            value={ministryWebsite}
            onChange={e => setMinistryWebsite(e.target.value)}
            placeholder="Type your ministry website URL..."
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#5b6271] outline-none focus:border-[#3e73d5] transition-colors bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Booking Link</label>
            <Info size={12} className="text-[#5b6271] opacity-40" />
          </div>
          <input
            type="url"
            value={bookingLink}
            onChange={e => setBookingLink(e.target.value)}
            placeholder="e.g., calendly.com"
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#5b6271] outline-none focus:border-[#3e73d5] transition-colors bg-white"
          />
        </div>
      </div>

      {/* Bottom cards */}
      <div className="flex gap-4">
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828]">Request for Your Data</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              Request a copy of the personal data associated with your account.
            </p>
          </div>
          <button className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors w-fit">
            Request for Your Data
          </button>
        </div>
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828]">Request to Delete Profile</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              Submit a request to permanently delete this{' '}
              <span className="font-medium">Gospel Worker Profile</span>
              {' '}and associated account data.
            </p>
          </div>
          <button className="h-10 px-4 bg-[#b42218] rounded-lg text-[14px] font-medium text-white hover:bg-[#9a1d14] transition-colors w-fit">
            Request Profile Deletion
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Heart of Ministry ──────────────────────────────────────────────────── */

function HeartOfMinistryTab({
  causes, addCause, updateCause,
  selectedRegions, toggleRegion,
  creativeAccess, setCreativeAccess,
}: {
  causes: string[]; addCause: () => void; updateCause: (i: number, v: string) => void;
  selectedRegions: string[]; toggleRegion: (r: string) => void;
  creativeAccess: boolean; setCreativeAccess: (v: boolean) => void;
}) {
  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">

      {/* Causes */}
      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Please select one or more causes that are relevant to your ministry
      </p>
      <div className="flex flex-col gap-4">
        {causes.map((cause, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Cause {i + 1}</label>
            <div className="relative">
              <select
                value={cause}
                onChange={e => updateCause(i, e.target.value)}
                className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer transition-colors"
              >
                {causeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={addCause}
            className="flex items-center gap-1 text-[#3e73d5] text-[14px] font-medium hover:opacity-80 transition-opacity"
          >
            <Plus size={14} />
            Add Cause
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e1e1e6]" />

      {/* Regions */}
      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Please select one or more regions where your ministry operates
      </p>
      <div className="flex flex-col gap-4">
        {/* Region tags */}
        <div className="bg-white border border-[#e1e1e6] rounded-lg px-4 py-2.5 flex flex-wrap gap-2">
          {allRegions.map(region => (
            <button
              key={region}
              onClick={() => toggleRegion(region)}
              className={`px-2 py-0.5 rounded-full text-[12px] leading-[18px] transition-colors ${
                selectedRegions.includes(region)
                  ? 'bg-[#3e73d5] text-white'
                  : 'bg-[#f0f6ff] text-[#181b1f] hover:bg-[#daeaff]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Creative Access */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[#e1e1e6] rounded-lg px-4 py-2.5">
            <button
              onClick={() => setCreativeAccess(!creativeAccess)}
              className={`px-2 py-0.5 rounded-full text-[12px] leading-[18px] transition-colors ${
                creativeAccess
                  ? 'bg-[#3e73d5] text-white'
                  : 'bg-[#f0f6ff] text-[#181b1f] hover:bg-[#daeaff]'
              }`}
            >
              Creative Access
            </button>
          </div>
          <p className="text-[12px] text-[#181b1f] opacity-70 leading-[18px]">
            * My ministry operates in a creative access region, and I do not want to disclose my region due to security reasons.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Network ────────────────────────────────────────────────────────────── */

function NetworkTab({
  churches, addChurch, updateChurch,
  sendingAgency, setSendingAgency,
  heardAboutUs, setHeardAboutUs,
}: {
  churches: string[]; addChurch: () => void; updateChurch: (i: number, v: string) => void;
  sendingAgency: string; setSendingAgency: (v: string) => void;
  heardAboutUs: string; setHeardAboutUs: (v: string) => void;
}) {
  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">

      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Share about your network, so we can help mobilize your existing community to support you
      </p>

      {/* Affiliated Churches */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Affiliated Churches *</label>
          {churches.map((church, i) => (
            <input
              key={i}
              type="text"
              value={church}
              onChange={e => updateChurch(i, e.target.value)}
              className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={addChurch}
            className="flex items-center gap-1 text-[#3e73d5] text-[14px] font-medium hover:opacity-80 transition-opacity"
          >
            <Plus size={14} />
            Add Church
          </button>
        </div>
      </div>

      {/* Sending Agency */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">
          Sending Agency / Organization (optional)
        </label>
        <input
          type="text"
          value={sendingAgency}
          onChange={e => setSendingAgency(e.target.value)}
          placeholder="Enter agency name"
          className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white placeholder:text-[#5b6271] placeholder:opacity-60"
        />
      </div>

      {/* How did you hear about us */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">
          How did you hear about us? (optional)
        </label>
        <input
          type="text"
          value={heardAboutUs}
          onChange={e => setHeardAboutUs(e.target.value)}
          placeholder="Type..."
          className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white placeholder:text-[#5b6271] placeholder:opacity-60"
        />
      </div>
    </div>
  );
}
