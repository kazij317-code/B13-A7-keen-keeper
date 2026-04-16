
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import friendsData from "../data/friends.json";

const Home = () => {
  
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setFriends(friendsData);
        setLoading(false);
      }, 600);
    }, []);

    if (loading) return (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#244D3F]"></div>
      </div>
    );

    return (
      <main className="p-6 max-w-7xl mx-auto">
        {/* Banner */}
        <section className="text-center py-16 rounded-[40px]">
          <h2 className="text-5xl font-bold text-[#1F2937] mb-4">Friends to keep close in your life</h2>
          <p className="text-[#64748B] mb-8 text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
          <button className="bg-[#244D3F] text-white px-5 py-3 rounded flex items-center gap-2 mx-auto hover:scale-105 transition shadow-xl font-semibold">
            <Plus size={20} /> Add a Friend
          </button>
        </section>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Friends" value={10} />
          <StatCard label="On Track" value={3} />
          <StatCard label="Need Attention" value={6} />
          <StatCard label="Interactions This Month" value={12} />
        </div>

        <div className="border-t border-gray-300 pt-7 mb-3 font-semibold text-2xl">
          Your Friends
        </div>

        {/* 4-Column Grid for 10 Friends */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </main>
    );
  };

  const StatCard = ({ label, value }) => (
    <div className="bg-white p-5 rounded-lg border-2 border-gray-200 items-center gap-4">

      <div className="text-center">
        <p className="text-[32px] font-semibold text-[#244D3F]">{value}</p>
        <p className="text-[18px] text-[#64748B] font-regular">{label}</p>
      </div>
    </div>
  );

  export default Home;