import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Mail, Archive, Trash2, History } from "lucide-react";
import toast from "react-hot-toast";
import friendsData from "../data/friends.json";


import imageBell from '../assets/BellSimpleZ.png';
import imagePhone from '../assets/PhoneCall.png';
import imageText from '../assets/ChatDots.png';
import imageVideo from '../assets/VideoCamera.png';


const FriendDetails = () => {
  const statusStyles = {
    "Overdue": "bg-[#EF4444] text-white",
    "Almost Due": "bg-[#EFAD44] text-white",
    "On-Track": "bg-[#244D3F] text-white"
  };

  const { id } = useParams();
  const friend = friendsData.find(f => f.id === parseInt(id));
  const [refresh, setRefresh] = useState(false);

  const handleInteraction = (type) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type === 'Call' ? 'Phone' : type} with ${friend.name}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    const existing = JSON.parse(localStorage.getItem('timeline') || '[]');
    localStorage.setItem('timeline', JSON.stringify([entry, ...existing]));

    setRefresh(!refresh);
    toast.success(`Logged ${type} with ${friend.name}!`);
  };

  if (!friend) return <div className="p-10 text-center">Friend not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-50 object-cover" />
          <h2 className="text-[20px] font-semibold">{friend.name}</h2>

          <div className={`mt-2 inline-block text-center text-[12px] font-medium py-1 px-4 rounded-full tracking-widest ${statusStyles[friend.status] || 'bg-gray-100'}`}>
            {friend.status}
          </div>

          
          <div className="flex flex-wrap justify-center gap-2 mb-4 mt-3">
            {friend.tags.map(t => <span key={t} className="text-[12px] font-medium bg-[#CBFADB]  px-3 py-1 rounded-full">{t}</span>)}
          </div>
          <p className="text-gray-500 font-medium text-[16px] mb-4 text-center italic">"{friend.bio}"</p>
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 justify-center">
            <Mail size={16} /> {friend.email}
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 bg-gray-50 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition font-medium">
         

            <img src={imageBell} alt="bell" className="w-5 h-5 md:w-5 md:h-5" />

            Snooze 2 Weeks
          </button>

          <button className="w-full py-3 bg-gray-50 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"><Archive size={18} /> Archive</button>
          <button className="w-full py-3 bg-gray-50 text-red-600 rounded-lg flex items-center justify-center gap-2 hover:bg-red-100 transition"><Trash2 size={18} /> Delete</button>
        </div>

      </div>

      {/* Right Column */}
      <div className="lg:col-span-8 space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <StatMini label="Days Since Contact" value={friend.days_since_contact} />
          <StatMini label="Goal (Days)" value={friend.goal} />
          <StatMini label="Next Due" value={friend.next_due_date} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h4 className="text-[#244D3F] text-[20px] font-medium mb-1">Relationship Goal</h4>
            <p className="text-[18px]"><span className="text-[#64748B]">Connect every</span><span className="font-bold"> {friend.goal} days</span></p>
          </div>
          <button className="px-5 py-2 bg-[#E9E9E9] font-medium text-[14px] border-2 border-gray-300 rounded-lg hover:bg-emerald-100 transition">
            Edit
           

          </button>
        </div>

        <div className="p-8 rounded-xl bg-white">
          <h4 className="text-[20px] font-medium text-[#244D3F] mb-6">Quick Check-In</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           
            <CheckInBtn icon={<img src={imagePhone} alt="phone" className="w-[32px] h-[32px]" />} label="Call" onClick={() => handleInteraction('Call')} />
            
            <CheckInBtn icon={<img src={imageText} alt="text" className="w-[32px] h-[32px]" />} label="Text" onClick={() => handleInteraction('Text')} />
           
            <CheckInBtn icon={<img src={imageVideo} alt="video" className="w-[32px] h-[32px]" />} label="Video" onClick={() => handleInteraction('Video')} />
          </div>
        </div>

        
        <RecentInteractions key={refresh} friendName={friend.name} />
      </div>
    </div>
  );
};

const RecentInteractions = ({ friendName }) => {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('timeline') || '[]');
    
    setInteractions(data.filter(i => i.title.includes(friendName)));
  }, [friendName]);

  const getIcon = (type) => {
   
    if (type === 'Call') return <img src={imagePhone} alt="phone" className="w-[32px] h-[32px]" />;
    
    if (type === 'Video') return <img src={imageVideo} alt="video" className="w-[32px] h-[32px]" />;
   
    return <img src={imageText} alt="text" className="w-[32px] h-[32px]" />;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-medium text-[#244D3F] text-[20px]">Recent Interactions</h4>
        <button className="flex items-center gap-1 hover:text-emerald-600 transition px-5 py-2 bg-[#E9E9E9] font-medium text-[14px] border-2 border-gray-300 rounded-lg">
          <History size={14} /> Full History
        </button>
      </div>

      <div className="space-y-4">
        {interactions.length > 0 ? (
          interactions.map((interaction) => (
            <div key={interaction.id} className="flex items-center gap-4 py-2 border-b border-gray-200 last:border-0">
              <div>
                {getIcon(interaction.type)}
              </div>
              <div className="flex-1">
                <p className="text-[18px]">{interaction.type}</p>
                <p className="text-[16px] text-[#64748B]">{interaction.title}</p>
              </div>
              <p className="text-[#64748B]">{interaction.date}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400 italic">No interactions recorded yet.</p>
        )}
      </div>
    </div>
  );
};

const StatMini = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
    <p className="text-[28px] font-semibold text-[#244D3F]">{value}</p>
    <p className="text-[18px] text-[#64748B] mb-1">{label}</p>
  </div>
);

const CheckInBtn = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 bg-[#E9E9E9]/50  hover:bg-[#E9E9E9]/100 p-6 rounded-xl transition">
    {icon}
    <span className="text-[18px]">{label}</span>
  </button>
);

export default FriendDetails;