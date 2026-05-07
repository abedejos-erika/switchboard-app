import { useState } from 'react';
import { ChevronDown, Plus, X, Info } from 'lucide-react';
import { mockUser, countryOptions } from '../data/mockData';

type SubTab = 'about' | 'heart' | 'gifts' | 'network';

/* ── Social icon SVGs ────────────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="3" fill="#0A66C2"/>
      <rect x="5" y="8" width="2" height="6" fill="white"/>
      <circle cx="6" cy="6.5" r="1.2" fill="white"/>
      <path d="M9 8h2v1c.4-.7 1.1-1 2-1 1.7 0 2.5 1 2.5 2.8V14h-2v-3c0-.8-.3-1.3-1-1.3-.8 0-1.5.5-1.5 1.3V14H9V8Z" fill="white"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="3" fill="#000"/>
      <path d="M11.4 9.1 14.8 5h-1.3l-2.9 3.1-2.3-3.1H5l3.5 5.1L5 15h1.3l3.2-3.4 2.5 3.4H15l-3.6-5.9Z" fill="white"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="3" fill="#1877F2"/>
      <path d="M11.5 10.5H13l.5-2h-2V7.5C11.5 7 11.8 6.5 12.5 6.5H13.5V4.5C13 4.5 12.3 4.5 11.5 4.5 9.8 4.5 8.5 5.7 8.5 7.5v1H6.5v2H8.5v5h3v-5Z" fill="white"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f09433"/>
          <stop offset="50%" stopColor="#dc2743"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
      <rect width="20" height="20" rx="4" fill="url(#ig-grad)"/>
      <rect x="5" y="5" width="10" height="10" rx="2.5" stroke="white" strokeWidth="1.4" fill="none"/>
      <circle cx="10" cy="10" r="2.5" stroke="white" strokeWidth="1.4" fill="none"/>
      <circle cx="14" cy="6" r="0.8" fill="white"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#5b6271" strokeWidth="1.3"/>
      <ellipse cx="9" cy="9" rx="3.5" ry="7" stroke="#5b6271" strokeWidth="1.3"/>
      <line x1="2" y1="9" x2="16" y2="9" stroke="#5b6271" strokeWidth="1.3"/>
      <line x1="3" y1="5.5" x2="15" y2="5.5" stroke="#5b6271" strokeWidth="0.9"/>
      <line x1="3" y1="12.5" x2="15" y2="12.5" stroke="#5b6271" strokeWidth="0.9"/>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */
const causeOptions = [
  'Agriculture', 'Arts & Media', 'Business as Mission', 'Children at Risk',
  'Church Planting', 'Community Development', 'Cross-cultural', 'Discipleship',
  'Education', 'Evangelism', 'Healthcare', 'Humanitarian Aid',
  'Justice & Advocacy', 'Leadership Development', 'Linguistics & Translation',
  'Missions Mobilization', 'Prayer', 'Sports Ministry', 'Theological Education',
  'Urban Ministry', 'Women & Girls', 'Youth Ministry',
];

const allRegions = [
  'North America', 'Central America', 'Caribbean', 'South America',
  'Northern Europe', 'Western Europe', 'Eastern Europe', 'Southern Europe',
  'Central Europe', 'Eastern Asia', 'Southeastern Asia', 'Southern Asia',
  'Russia & Central Asia', 'Northern Africa', 'Western Africa', 'Central Africa',
  'Southern Africa', 'Middle East', 'Oceania', 'Global (All Regions)',
];

const expertiseOptions = [
  'Accounting and Finance', 'Business Management', 'Common Conversations',
  'Cross-cultural Ministry', 'Data and Analytics', 'Design', 'Education',
  'Healthcare', 'Human Resources', 'IT and Networking',
  'Marketing and Communications', 'Switchboard Expertise',
  'Website Creation and Maintenance',
];

const unsupportedOptions = [
  'Agriculture and Food Production', 'Artificial Intelligence',
  'Building Design and Construction', 'Legal',
];

const mockBio = "For over two decades, I've been involved in global missions, focusing on leadership development and strategic planning for sustainable community transformation in the developing world.";

/* ── Main component ─────────────────────────────────────────────────────── */
export default function HelperProfileForm() {
  const [subTab, setSubTab] = useState<SubTab>('about');

  const [profile, setProfile] = useState({
    displayName: mockUser.displayName,
    email: mockUser.email,
    bio: mockBio,
    country: mockUser.country,
    zipCode: mockUser.zipCode,
    city: mockUser.city,
    state: mockUser.state,
    locationAnonymous: false,
    bookingLink: mockUser.bookingLink,
    linkedin: mockUser.socialLinks.linkedin,
    twitter: '',
    facebook: '',
    instagram: '',
    website: '',
  });

  const [causes, setCauses] = useState(['Agriculture', 'Cross-cultural']);
  const [selectedRegions, setSelectedRegions] = useState(['North America', 'Central America']);
  const [creativeAccess, setCreativeAccess] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState([
    'Accounting and Finance', 'Business Management',
  ]);
  const [church, setChurch] = useState('Austin Ridge Church');

  const subTabs: { key: SubTab; label: string }[] = [
    { key: 'about', label: 'About You' },
    { key: 'heart', label: 'Your Heart' },
    { key: 'gifts', label: 'Your Gifts' },
    { key: 'network', label: 'Your Network' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Sub-tab navigation */}
      <div className="border-b border-[#e1e1e6] flex gap-6 overflow-x-auto scrollbar-none">
        {subTabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSubTab(key)}
            className={`h-12 py-4 text-[14px] font-medium whitespace-nowrap transition-colors ${
              subTab === key
                ? 'border-b-2 border-[#181b1f] text-[#181b1f]'
                : 'text-[#5b6271] hover:text-[#181b1f]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {subTab === 'about' && (
        <AboutYouTab
          profile={profile}
          setProfile={setProfile}
        />
      )}
      {subTab === 'heart' && (
        <YourHeartTab
          causes={causes}
          setCauses={setCauses}
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
          creativeAccess={creativeAccess}
          setCreativeAccess={setCreativeAccess}
        />
      )}
      {subTab === 'gifts' && (
        <YourGiftsTab
          selectedExpertise={selectedExpertise}
          setSelectedExpertise={setSelectedExpertise}
        />
      )}
      {subTab === 'network' && (
        <YourNetworkTab church={church} setChurch={setChurch} />
      )}
    </div>
  );
}

/* ── About You ─────────────────────────────────────────────────────────── */
type ProfileState = {
  displayName: string; email: string; bio: string;
  country: string; zipCode: string; city: string; state: string;
  locationAnonymous: boolean; bookingLink: string;
  linkedin: string; twitter: string; facebook: string; instagram: string; website: string;
};

function AboutYouTab({
  profile,
  setProfile,
}: {
  profile: ProfileState;
  setProfile: React.Dispatch<React.SetStateAction<ProfileState>>;
}) {
  const set = (field: keyof ProfileState, value: string | boolean) =>
    setProfile(prev => ({ ...prev, [field]: value }));

  const bioLength = profile.bio.length;

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white border border-[#e1e1e6] rounded-xl md:p-8 p-6 flex flex-col md:gap-8 gap-6 w-full">

        {/* Profile Picture */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] font-medium text-[#181b1f] opacity-70">Profile Picture</p>
          <div className="flex items-center gap-6">
            <img
              src={mockUser.believerAvatar}
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

        {/* Display Name */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Display Name *</label>
            <Info size={12} className="text-[#5b6271] opacity-40" />
          </div>
          <input
            type="text"
            value={profile.displayName}
            onChange={e => set('displayName', e.target.value)}
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white w-full"
          />
        </div>

        {/* Email Address (disabled) */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Email Address</label>
          <div className="h-10 px-4 border border-[#e1e1e6] rounded-lg bg-[#f8f8fa] flex items-center">
            <span className="text-[14px] text-[#181b1f] opacity-60 leading-[22px]">{profile.email}</span>
          </div>
        </div>

        {/* Profile Bio */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center gap-2">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Profile Bio</label>
          </div>
          <textarea
            value={profile.bio}
            onChange={e => set('bio', e.target.value)}
            maxLength={500}
            rows={5}
            className="px-4 py-3 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white w-full resize-none leading-[22px]"
          />
          <p className="text-[12px] text-[#5b6271] leading-[18px]">
            {bioLength} / 500 characters, Min 100 characters
          </p>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Country</label>
          <div className="relative">
            <select
              value={profile.country}
              onChange={e => set('country', e.target.value)}
              className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer"
            >
              {countryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
          </div>
        </div>

        {/* Zip / City / State */}
        <div className="flex md:flex-row flex-col gap-4 w-full">
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Zip Code</label>
            <input
              type="text"
              value={profile.zipCode}
              onChange={e => set('zipCode', e.target.value)}
              className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">City</label>
            <input
              type="text"
              value={profile.city}
              onChange={e => set('city', e.target.value)}
              className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">State</label>
            <input
              type="text"
              value={profile.state}
              onChange={e => set('state', e.target.value)}
              className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
            />
          </div>
        </div>

        {/* Anonymous checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={profile.locationAnonymous}
            onChange={e => set('locationAnonymous', e.target.checked)}
            className="w-5 h-5 border border-[#b1b7c5] rounded-md cursor-pointer accent-[#3e73d5]"
          />
          <span className="text-[14px] text-[#181b1f] leading-[22px]">Mark location as anonymous</span>
        </label>

        {/* Booking Link */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Booking Link</label>
            <Info size={12} className="text-[#5b6271] opacity-40" />
          </div>
          <input
            type="url"
            value={profile.bookingLink}
            onChange={e => set('bookingLink', e.target.value)}
            placeholder="e.g., calendly.com"
            className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white placeholder:text-[#5b6271] placeholder:opacity-60 w-full"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e1e1e6]" />

        {/* Social Links */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Social Links</label>

          {/* LinkedIn (filled) */}
          <div className="flex items-center gap-4 h-11 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="shrink-0"><LinkedInIcon /></span>
            <input
              type="url"
              value={profile.linkedin}
              onChange={e => set('linkedin', e.target.value)}
              className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent leading-[22px]"
            />
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-4 h-11 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="shrink-0"><TwitterIcon /></span>
            <input
              type="url"
              value={profile.twitter}
              onChange={e => set('twitter', e.target.value)}
              placeholder="Add Twitter handle"
              className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent leading-[22px] placeholder:text-[#181b1f] placeholder:opacity-50"
            />
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-4 h-11 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="shrink-0"><FacebookIcon /></span>
            <input
              type="url"
              value={profile.facebook}
              onChange={e => set('facebook', e.target.value)}
              placeholder="Add Facebook url"
              className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent leading-[22px] placeholder:text-[#181b1f] placeholder:opacity-50"
            />
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 h-11 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="shrink-0"><InstagramIcon /></span>
            <input
              type="url"
              value={profile.instagram}
              onChange={e => set('instagram', e.target.value)}
              placeholder="Add Instagram handle"
              className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent leading-[22px] placeholder:text-[#181b1f] placeholder:opacity-50"
            />
          </div>

          {/* Website */}
          <div className="flex items-center gap-4 h-11 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="shrink-0"><GlobeIcon /></span>
            <input
              type="url"
              value={profile.website}
              onChange={e => set('website', e.target.value)}
              placeholder="Add personal website url"
              className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent leading-[22px] placeholder:text-[#181b1f] placeholder:opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828] leading-[24px]">Request for Your Data</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              Request a copy of the personal data associated with your account.
            </p>
          </div>
          <button className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors self-start">
            Request for Your Data
          </button>
        </div>
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828] leading-[24px]">Request to Delete Profile</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              Submit a request to permanently delete this <span className="font-medium">Believer Profile</span> and associated account data.
            </p>
          </div>
          <button className="h-10 px-4 bg-[#b42218] rounded-lg text-[14px] font-medium text-white hover:bg-[#9a1d14] transition-colors self-start">
            Request Profile Deletion
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Your Heart ─────────────────────────────────────────────────────────── */
function YourHeartTab({
  causes, setCauses,
  selectedRegions, setSelectedRegions,
  creativeAccess, setCreativeAccess,
}: {
  causes: string[];
  setCauses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRegions: string[];
  setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
  creativeAccess: boolean;
  setCreativeAccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleRegion = (r: string) =>
    setSelectedRegions(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
    );

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
      {/* Ministry Causes */}
      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
          Select ministry causes you're passionate about
        </p>
        <div className="flex flex-col gap-4">
          {causes.map((cause, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Cause {i + 1}</label>
              <div className="relative">
                <select
                  value={cause}
                  onChange={e => setCauses(prev => prev.map((c, idx) => idx === i ? e.target.value : c))}
                  className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer"
                >
                  {causeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              onClick={() => setCauses(prev => [...prev, causeOptions[0]])}
              className="flex items-center gap-1 text-[#3e73d5] text-[14px] font-medium hover:opacity-80 transition-opacity"
            >
              <Plus size={14} />
              Add Cause
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e1e1e6]" />

      {/* Regions */}
      <div className="flex flex-col gap-8">
        <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
          Select regions you're passionate about
        </p>

        {/* Regions tag box */}
        <div className="bg-white px-4 py-2.5 rounded-lg flex flex-wrap gap-2">
          {allRegions.map(region => {
            const active = selectedRegions.includes(region);
            return (
              <button
                key={region}
                onClick={() => toggleRegion(region)}
                className={`px-2 py-[3px] rounded-full text-[12px] leading-[18px] transition-colors ${
                  active
                    ? 'bg-[#3e73d5] text-white'
                    : 'bg-[#f0f6ff] text-[#181b1f] hover:bg-[#ddeafc]'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>

        {/* Creative Access box */}
        <div className="bg-white px-4 py-2.5 rounded-lg flex flex-wrap gap-2">
          <button
            onClick={() => setCreativeAccess(prev => !prev)}
            className={`px-2 py-[3px] rounded-full text-[12px] leading-[18px] transition-colors ${
              creativeAccess
                ? 'bg-[#3e73d5] text-white'
                : 'bg-[#f0f6ff] text-[#181b1f] hover:bg-[#ddeafc]'
            }`}
          >
            Creative Access
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Your Gifts ─────────────────────────────────────────────────────────── */
function YourGiftsTab({
  selectedExpertise,
  setSelectedExpertise,
}: {
  selectedExpertise: string[];
  setSelectedExpertise: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const toggle = (tag: string) =>
    setSelectedExpertise(prev =>
      prev.includes(tag) ? prev.filter(x => x !== tag) : [...prev, tag]
    );

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Select your expertise and how you can serve
      </p>

      {/* Expertise tags */}
      <div className="bg-white px-4 py-2.5 rounded-lg flex flex-wrap gap-2">
        {expertiseOptions.map(tag => {
          const active = selectedExpertise.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggle(tag)}
              className={`px-2 py-[3px] rounded-full text-[12px] leading-[18px] transition-colors ${
                active
                  ? 'bg-[#3e73d5] text-white'
                  : 'bg-[#f0f6ff] text-[#181b1f] hover:bg-[#ddeafc]'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Unsupported (starred) tags */}
      <div className="bg-white px-4 py-2.5 rounded-lg flex flex-wrap gap-2">
        {unsupportedOptions.map(tag => (
          <span
            key={tag}
            className="px-2 py-[3px] rounded-full text-[12px] leading-[18px] bg-[#f0f6ff] text-[#181b1f]"
          >
            {tag} *
          </span>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-[12px] text-[#181b1f] opacity-70 leading-[18px]">
        * We don't currently support requests within that area of expertise. However, by indicating this area now, you help us to prioritize that domain area and we ensure that you will be informed when that category goes live.
      </p>
    </div>
  );
}

/* ── Your Network ─────────────────────────────────────────────────────────── */
function YourNetworkTab({
  church,
  setChurch,
}: {
  church: string;
  setChurch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Main card */}
      <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
        <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
          Select your church affiliation
        </p>

        {/* Church field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Church</label>
          <div className="flex items-center gap-2 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="flex-1 text-[14px] text-[#181b1f] leading-[22px]">{church}</span>
            {church && (
              <button
                onClick={() => setChurch('')}
                className="text-[#181b1f] opacity-65 hover:opacity-100 transition-opacity shrink-0"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828] leading-[24px]">Prayer Circles You've Joined</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              Request a copy of the personal data associated with your account.
            </p>
          </div>
          <button className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors self-start">
            Go to Joined Circles
          </button>
        </div>
        <div className="flex-1 border border-[#e1e1e6] rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-semibold text-[#101828] leading-[24px]">Your Contacts</p>
            <p className="text-[14px] text-[#181b1f] opacity-70 leading-[22px]">
              List of Kingdom Relationships and connections you've built on Switchboard.
            </p>
          </div>
          <button className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors self-start">
            See My Contacts
          </button>
        </div>
      </div>
    </div>
  );
}
