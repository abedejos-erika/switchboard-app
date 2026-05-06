import { useState } from 'react';
import { ChevronDown, Calendar, Plus, Info } from 'lucide-react';
import { mockUser, genderOptions, languageOptions, proficiencyOptions } from '../data/mockData';

export default function PersonalDetailsForm() {
  const [user, setUser] = useState({ ...mockUser });
  const [languages, setLanguages] = useState([
    { language: mockUser.language, proficiency: mockUser.proficiency },
  ]);

  const update = (field: string, value: string | boolean) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const addLanguage = () => {
    setLanguages(prev => [...prev, { language: 'English', proficiency: 'Basic' }]);
  };

  const updateLanguage = (index: number, field: 'language' | 'proficiency', value: string) => {
    setLanguages(prev => prev.map((l, i) => i === index ? { ...l, [field]: value } : l));
  };

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
      {/* Profile Picture */}
      <div className="flex flex-col gap-4">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Profile Picture</label>
        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button className="h-10 px-4 border border-[#b1b7c5] rounded-lg text-[14px] font-medium text-[#181b1f] hover:bg-gray-50 transition-colors">
            Change Picture
          </button>
        </div>
      </div>

      {/* Name + Gender Row */}
      <div className="flex gap-4 items-end">
        <InputField
          label="First Name *"
          value={user.firstName}
          onChange={v => update('firstName', v)}
        />
        <InputField
          label="Last Name *"
          value={user.lastName}
          onChange={v => update('lastName', v)}
        />
        <SelectField
          label="Gender *"
          value={user.gender}
          options={genderOptions}
          onChange={v => update('gender', v)}
          hasInfo
        />
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex items-center justify-between">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Date of Birth *</label>
          <Info size={12} className="text-[#5b6271] opacity-40" />
        </div>
        <div className="flex items-center gap-2 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
          <Calendar size={16} className="text-[#181b1f] opacity-65" />
          <input
            type="text"
            value={user.dateOfBirth}
            onChange={e => update('dateOfBirth', e.target.value)}
            className="flex-1 text-[14px] text-[#181b1f] outline-none bg-transparent"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <p className="text-[14px] text-[#181b1f] opacity-65 leading-[22px]">
          If sharing your exact date of birth raises security concerns, you can indicate just the year (or approximate year) of your birth and select any month and day.
        </p>
      </div>

      {/* Language(s) */}
      <div className="flex flex-col gap-4">
        {languages.map((lang, idx) => (
          <div key={idx} className="flex gap-4 items-end">
            <SelectField
              label="Language *"
              value={lang.language}
              options={languageOptions}
              onChange={v => updateLanguage(idx, 'language', v)}
            />
            <SelectField
              label="Proficiency *"
              value={lang.proficiency}
              options={proficiencyOptions}
              onChange={v => updateLanguage(idx, 'proficiency', v)}
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={addLanguage}
            className="flex items-center gap-1 text-[#3e73d5] text-[14px] font-medium hover:opacity-80 transition-opacity"
          >
            <Plus size={14} />
            Add another language
          </button>
        </div>
      </div>

      {/* Timezone */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Time Zone</label>
          <div className="flex items-center gap-2 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <span className="flex-1 text-[14px] text-[#3e434d]">{user.timezone}</span>
            <ChevronDown size={16} className="text-[#181b1f] opacity-65" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={user.autoTimezone}
              onChange={e => update('autoTimezone', e.target.checked)}
            />
            <span className="toggle-slider" />
          </label>
          <span className="text-[14px] text-[#324054]">Automatically update timezone from my device</span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Phone Number *</label>
          <div className="flex items-center gap-4 h-10 px-4 border border-[#e1e1e6] rounded-lg bg-white">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[18px]">🇺🇸</span>
              <span className="text-[14px] text-[#3e434d]">{user.phoneCode}</span>
              <ChevronDown size={12} className="text-[#5b6271]" />
            </div>
            <div className="w-px h-4 bg-[#e1e1e6]" />
            <input
              type="tel"
              value={user.phone}
              onChange={e => update('phone', e.target.value)}
              className="flex-1 text-[14px] text-[#3e434d] outline-none bg-transparent"
            />
          </div>
        </div>
        <label className="flex items-start gap-2 cursor-pointer">
          <div className="mt-0.5 shrink-0">
            <input
              type="checkbox"
              checked={user.smsSubscribed}
              onChange={e => update('smsSubscribed', e.target.checked)}
              className="w-5 h-5 rounded-md border border-[#b1b7c5] accent-[#3e73d5]"
            />
          </div>
          <span className="text-[14px] text-[#181b1f] leading-[22px]">
            Subscribe to SMS notification with opportunities. You can reply STOP at any time to unsubscribe from this notification service.
          </span>
        </label>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <label className="text-[14px] font-medium text-[#181b1f] opacity-70 whitespace-nowrap">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-10 px-4 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] transition-colors bg-white"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  hasInfo,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  hasInfo?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70 whitespace-nowrap">{label}</label>
        {hasInfo && <Info size={12} className="text-[#5b6271] opacity-40" />}
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer transition-colors"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#181b1f] opacity-65 pointer-events-none" />
      </div>
    </div>
  );
}
