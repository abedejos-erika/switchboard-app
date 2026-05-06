import { useState } from 'react';
import { ChevronDown, ExternalLink, Trash2, Plus } from 'lucide-react';
import { mockUser, countryOptions } from '../data/mockData';

type SubTab = 'about' | 'heart' | 'gifts' | 'network';

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

const specialRegions = ['Creative Access'];

export default function HelperProfileForm() {
  const [subTab, setSubTab] = useState<SubTab>('heart');
  const [profile, setProfile] = useState({
    displayName: mockUser.displayName,
    email: mockUser.email,
    country: mockUser.country,
    zipCode: mockUser.zipCode,
    city: mockUser.city,
    state: mockUser.state,
    bookingLink: mockUser.bookingLink,
    socialLinks: { ...mockUser.socialLinks },
    isPublic: true,
    showEmail: false,
  });
  const [causes, setCauses] = useState(['Agriculture', 'Cross-cultural']);
  const [selectedRegions, setSelectedRegions] = useState(['North America', 'Central America']);
  const [selectedSpecial, setSelectedSpecial] = useState<string[]>(['Creative Access']);

  const update = (field: string, value: string | boolean) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };
  const updateSocial = (platform: string, value: string) => {
    setProfile(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, [platform]: value } }));
  };
  const addCause = () => setCauses(prev => [...prev, causeOptions[0]]);
  const updateCause = (i: number, val: string) =>
    setCauses(prev => prev.map((c, idx) => (idx === i ? val : c)));
  const toggleRegion = (r: string) =>
    setSelectedRegions(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
    );
  const toggleSpecial = (r: string) =>
    setSelectedSpecial(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
    );

  const subTabs: { key: SubTab; label: string }[] = [
    { key: 'about', label: 'About You' },
    { key: 'heart', label: 'Your Heart' },
    { key: 'gifts', label: 'Your Gifts' },
    { key: 'network', label: 'Your Network' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Sub-tab navigation */}
      <div className="border-b border-[#e1e1e6] flex gap-6">
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

      {/* Tab content */}
      {subTab === 'about' && (
        <AboutYouTab profile={profile} update={update} updateSocial={updateSocial} />
      )}
      {subTab === 'heart' && (
        <YourHeartTab
          causes={causes}
          addCause={addCause}
          updateCause={updateCause}
          selectedRegions={selectedRegions}
          toggleRegion={toggleRegion}
          selectedSpecial={selectedSpecial}
          toggleSpecial={toggleSpecial}
        />
      )}
      {subTab === 'gifts' && <YourGiftsTab />}
      {subTab === 'network' && <YourNetworkTab />}
    </div>
  );
}

/* ── About You ─────────────────────────────────────────────────────────── */
function AboutYouTab({
  profile,
  update,
  updateSocial,
}: {
  profile: useAboutState;
  update: (f: string, v: string | boolean) => void;
  updateSocial: (p: string, v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img src={mockUser.avatar} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="text-[18px] font-semibold text-[#181b1f]">{profile.displayName}</p>
            <p className="text-[14px] text-[#5b6271]">{profile.email}</p>
          </div>
        </div>
        <InputField label="Display Name *" value={profile.displayName} onChange={v => update('displayName', v)} />
        <InputField label="Email Address" value={profile.email} onChange={v => update('email', v)} type="email" />
        <div className="flex flex-col gap-4">
          <p className="text-[14px] font-medium text-[#181b1f] opacity-70">Location</p>
          <div className="flex gap-4">
            <SelectField label="Country" value={profile.country} options={countryOptions} onChange={v => update('country', v)} />
            <InputField label="Zip Code" value={profile.zipCode} onChange={v => update('zipCode', v)} />
          </div>
          <div className="flex gap-4">
            <InputField label="City" value={profile.city} onChange={v => update('city', v)} />
            <InputField label="State" value={profile.state} onChange={v => update('state', v)} />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Booking Link</label>
          <div className="flex items-center gap-2 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <ExternalLink size={16} className="text-[#5b6271] opacity-60 shrink-0" />
            <input type="url" value={profile.bookingLink} onChange={e => update('bookingLink', e.target.value)}
              className="flex-1 text-[14px] text-[#3e434d] outline-none bg-transparent" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Social Links</label>
          <SocialLinkInput label="f" color="#1877F2" value={profile.socialLinks.facebook} onChange={v => updateSocial('facebook', v)} placeholder="Facebook URL" />
          <SocialLinkInput label="in" color="#0A66C2" value={profile.socialLinks.linkedin} onChange={v => updateSocial('linkedin', v)} placeholder="LinkedIn URL" />
          <SocialLinkInput label="𝕏" color="#000" value={profile.socialLinks.twitter} onChange={v => updateSocial('twitter', v)} placeholder="Twitter/X URL" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[14px] font-medium text-[#181b1f] opacity-70">Profile Visibility</p>
          <label className="flex items-center gap-2 cursor-pointer">
            <label className="toggle-switch"><input type="checkbox" checked={profile.isPublic} onChange={e => update('isPublic', e.target.checked)} /><span className="toggle-slider" /></label>
            <span className="text-[14px] text-[#324054]">Make my helper profile visible to others</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <label className="toggle-switch"><input type="checkbox" checked={profile.showEmail} onChange={e => update('showEmail', e.target.checked)} /><span className="toggle-slider" /></label>
            <span className="text-[14px] text-[#324054]">Show email address on public profile</span>
          </label>
        </div>
      </div>
      <DataSection />
    </div>
  );
}

/* ── Your Heart ─────────────────────────────────────────────────────────── */
function YourHeartTab({
  causes, addCause, updateCause,
  selectedRegions, toggleRegion,
  selectedSpecial, toggleSpecial,
}: {
  causes: string[];
  addCause: () => void;
  updateCause: (i: number, v: string) => void;
  selectedRegions: string[];
  toggleRegion: (r: string) => void;
  selectedSpecial: string[];
  toggleSpecial: (r: string) => void;
}) {
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
                  onChange={e => updateCause(i, e.target.value)}
                  className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer"
                >
                  {causeOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
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
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e1e1e6]" />

      {/* Regions */}
      <div className="flex flex-col gap-6">
        <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
          Select regions you're passionate about
        </p>

        {/* Region tag grid */}
        <div className="flex flex-wrap gap-2 p-4 border border-[#e1e1e6] rounded-lg bg-white">
          {allRegions.map(region => {
            const active = selectedRegions.includes(region);
            return (
              <button
                key={region}
                onClick={() => toggleRegion(region)}
                className={`px-2 py-0.5 rounded-full text-[12px] leading-[18px] transition-colors ${
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

        {/* Special access tags */}
        <div className="flex flex-wrap gap-2 p-4 border border-[#e1e1e6] rounded-lg bg-white">
          {specialRegions.map(region => {
            const active = selectedSpecial.includes(region);
            return (
              <button
                key={region}
                onClick={() => toggleSpecial(region)}
                className={`px-2 py-0.5 rounded-full text-[12px] leading-[18px] transition-colors ${
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
      </div>
    </div>
  );
}

/* ── Your Gifts ─────────────────────────────────────────────────────────── */
const giftOptions = [
  'Teaching', 'Evangelism', 'Discipleship', 'Intercession', 'Prophecy',
  'Administration', 'Helps / Service', 'Hospitality', 'Giving', 'Leadership',
  'Mercy', 'Exhortation', 'Knowledge', 'Wisdom', 'Faith', 'Healing',
];

function YourGiftsTab() {
  const [selected, setSelected] = useState(['Teaching', 'Evangelism', 'Discipleship']);
  const toggle = (g: string) =>
    setSelected(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-6 w-full">
      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Select your spiritual gifts and ministry strengths
      </p>
      <div className="flex flex-wrap gap-2">
        {giftOptions.map(gift => (
          <button
            key={gift}
            onClick={() => toggle(gift)}
            className={`px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors border ${
              selected.includes(gift)
                ? 'bg-[#3e73d5] text-white border-[#3e73d5]'
                : 'bg-white text-[#5b6271] border-[#e1e1e6] hover:border-[#3e73d5] hover:text-[#3e73d5]'
            }`}
          >
            {gift}
          </button>
        ))}
      </div>
      {selected.length > 0 && (
        <div>
          <p className="text-[12px] text-[#5b6271] mb-2">Selected ({selected.length})</p>
          <div className="flex flex-wrap gap-2">
            {selected.map(g => (
              <span key={g} className="px-2 py-0.5 bg-[#f0f6ff] text-[#3e73d5] text-[12px] font-medium rounded-full">
                {g}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Your Network ────────────────────────────────────────────────────────── */
function YourNetworkTab() {
  const [org, setOrg] = useState('Tentmakers Network');
  const [role, setRole] = useState('Church Planter');
  const [years, setYears] = useState('5');

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
      <p className="text-[14px] font-medium text-[#181b1f] opacity-70">
        Tell us about your ministry network and affiliation
      </p>
      <InputField label="Organization / Sending Church" value={org} onChange={setOrg} />
      <div className="flex gap-4">
        <InputField label="Your Role" value={role} onChange={setRole} />
        <InputField label="Years in Ministry" value={years} onChange={setYears} type="number" />
      </div>
      <div className="flex flex-col gap-3 p-4 bg-[#f0f6ff] rounded-lg">
        <p className="text-[14px] font-medium text-[#181b1f]">Looking to connect with</p>
        {['Local churches', 'Mission organizations', 'Individual volunteers', 'Prayer partners'].map(opt => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#3e73d5]" />
            <span className="text-[14px] text-[#324054]">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

/* ── Data / Delete Section ───────────────────────────────────────────────── */
function DataSection() {
  return (
    <>
      <div className="bg-white border border-[#e1e1e6] rounded-xl p-8">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-semibold text-[#181b1f]">Request for Your Data</p>
            <p className="text-[14px] text-[#5b6271] leading-[22px] max-w-lg">
              You can request a copy of all personal data we hold about you. We will send it to your registered email within 30 days.
            </p>
          </div>
          <button className="h-10 px-4 border border-[#b1b7c5] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 whitespace-nowrap shrink-0">
            Request Data
          </button>
        </div>
      </div>
      <div className="bg-white border border-[#e1e1e6] rounded-xl p-8">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-semibold text-[#181b1f]">Request to Delete Profile</p>
            <p className="text-[14px] text-[#5b6271] leading-[22px] max-w-lg">
              Submitting this request will permanently delete your Helper Profile and all associated data. This action cannot be undone.
            </p>
          </div>
          <button className="flex items-center gap-2 h-10 px-4 border border-red-200 rounded-lg text-[14px] font-medium text-red-600 hover:bg-red-50 whitespace-nowrap shrink-0">
            <Trash2 size={16} />
            Delete Profile
          </button>
        </div>
      </div>
    </>
  );
}

/* ── Shared field components ─────────────────────────────────────────────── */
function InputField({ label, value, onChange, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <label className="text-[14px] font-medium text-[#181b1f] opacity-70">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)}
        className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white" />
    </div>
  );
}

function SelectField({ label, value, options, onChange }: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <label className="text-[14px] font-medium text-[#181b1f] opacity-70">{label}</label>
      <div className="relative">
        <select value={value} onChange={e => onChange(e.target.value)}
          className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer">
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
      </div>
    </div>
  );
}

function SocialLinkInput({ label, color, value, onChange, placeholder }: {
  label: string; color: string; value: string; onChange: (v: string) => void; placeholder: string;
}) {
  return (
    <div className="flex items-center gap-3 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
      <span className="font-bold text-[14px] w-5 text-center shrink-0" style={{ color }}>{label}</span>
      <input type="url" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="flex-1 text-[14px] text-[#3e434d] outline-none bg-transparent placeholder:text-[#b1b7c5]" />
    </div>
  );
}

type useAboutState = {
  displayName: string; email: string; country: string; zipCode: string;
  city: string; state: string; bookingLink: string;
  socialLinks: { facebook: string; linkedin: string; twitter: string };
  isPublic: boolean; showEmail: boolean;
};
