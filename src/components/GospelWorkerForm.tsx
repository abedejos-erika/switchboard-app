import { useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import { gospelWorkerMockData } from '../data/mockData';

const denominationOptions = ['Non-denominational', 'Baptist', 'Presbyterian', 'Methodist', 'Pentecostal', 'Catholic', 'Anglican', 'Lutheran'];
const roleOptions = ['Church Planter', 'Evangelist', 'Missionary', 'Discipler', 'Pastor', 'Bible Teacher', 'Relief Worker'];
const regionOptions = ['Southeast Asia', 'East Asia', 'South Asia', 'Middle East', 'Africa', 'Latin America', 'Eastern Europe', 'Central Asia'];
const allSkills = ['Teaching', 'Evangelism', 'Discipleship', 'Community Development', 'Church Planting', 'Medical', 'Translation', 'Music', 'Children Ministry', 'Youth Ministry'];

export default function GospelWorkerForm() {
  const [data, setData] = useState({ ...gospelWorkerMockData });

  const update = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  return (
    <div className="bg-white border border-[#e1e1e6] rounded-xl p-8 flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-[20px] font-semibold text-[#181b1f]">Gospel Worker Profile</p>
        <p className="text-[14px] text-[#5b6271]">Share your ministry background and areas of service.</p>
      </div>

      {/* Organization & Role */}
      <div className="flex gap-4">
        <InputField
          label="Organization"
          value={data.organization}
          onChange={v => update('organization', v)}
        />
        <SelectField
          label="Role / Title"
          value={data.role}
          options={roleOptions}
          onChange={v => update('role', v)}
        />
      </div>

      {/* Years of Experience */}
      <div className="flex gap-4">
        <InputField
          label="Years of Experience"
          value={data.yearsOfExperience}
          onChange={v => update('yearsOfExperience', v)}
          type="number"
        />
        <SelectField
          label="Denomination / Affiliation"
          value={data.denomination}
          options={denominationOptions}
          onChange={v => update('denomination', v)}
        />
      </div>

      {/* Field of Service */}
      <SelectField
        label="Primary Field of Service"
        value={data.fieldOfService}
        options={regionOptions}
        onChange={v => update('fieldOfService', v)}
      />

      {/* Bio */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Ministry Bio</label>
        <textarea
          value={data.bio}
          onChange={e => update('bio', e.target.value)}
          rows={4}
          className="px-4 py-3 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] resize-none bg-white transition-colors"
          placeholder="Describe your ministry background and calling..."
        />
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-3">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Skills & Areas of Ministry</label>
        <div className="flex flex-wrap gap-2">
          {allSkills.map(skill => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors border ${
                data.skills.includes(skill)
                  ? 'bg-[#3e73d5] text-white border-[#3e73d5]'
                  : 'bg-white text-[#5b6271] border-[#e1e1e6] hover:border-[#3e73d5] hover:text-[#3e73d5]'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {data.skills.map(skill => (
              <span key={skill} className="flex items-center gap-1 px-3 py-1 bg-[#f0f6ff] text-[#3e73d5] text-[13px] font-medium rounded-full">
                {skill}
                <button onClick={() => toggleSkill(skill)} className="hover:opacity-70">
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Supporting documents */}
      <div className="flex flex-col gap-3">
        <label className="text-[14px] font-medium text-[#181b1f] opacity-70">Supporting Documents (Optional)</label>
        <div className="border-2 border-dashed border-[#e1e1e6] rounded-xl p-8 flex flex-col items-center gap-3 text-center hover:border-[#3e73d5] transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[#f0f6ff] flex items-center justify-center">
            <Plus size={24} className="text-[#3e73d5]" />
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#181b1f]">Upload documents</p>
            <p className="text-[13px] text-[#5b6271]">Support letters, credentials, or ministry reports (PDF, max 5MB)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <label className="text-[14px] font-medium text-[#181b1f] opacity-70">{label}</label>
      <input
        type={type}
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
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <label className="text-[14px] font-medium text-[#181b1f] opacity-70">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full h-10 pl-4 pr-10 border border-[#e1e1e6] rounded-lg text-[14px] text-[#181b1f] outline-none focus:border-[#3e73d5] bg-white appearance-none cursor-pointer"
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
