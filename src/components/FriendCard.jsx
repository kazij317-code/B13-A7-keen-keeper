import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  
  const statusStyles = {
    "Overdue": "bg-[#EF4444] text-white",
    "Almost Due": "bg-[#EFAD44] text-white",
    "On-Track": "bg-[#244D3F] text-white"
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block h-full">
      <div className="bg-white rounded-lg p-6 border-2 border-gray-200 h-full flex flex-col items-center hover:shadow-md transition-all">
        
        {/* Profile Image*/}
        <div className="w-24 h-24 mb-4">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-full h-full rounded-full object-cover ring-4 ring-gray-50"
          />
        </div>

        {/* Text Section */}
        <h3 className="font-semibold  text-[20px] mb-1 text-center">{friend.name}</h3>
        <p className="text-[12px] text-[#64748B] font-regular mb-4 text-center">
          {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-1.5 mb-6 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="text-[12px] font-medium bg-[#CBFADB]  px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-auto text-center text-[12px] font-medium py-2 px-4 rounded-full tracking-widest ${statusStyles[friend.status] || 'bg-gray-100'}`}>
          {friend.status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;