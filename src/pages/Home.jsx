
import { Plus } from "lucide-react";


const Home = () => {

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
      
      <div className="border-t-1 border-gray-400 pt-7 mb-3 font-semibold text-2xl">
        Your Friends
      </div>
    </main>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-white p-5 rounded-[8px] border border-gray-100 shadow-sm items-center gap-4">
    {/* <div className="p-3 bg-gray-50 rounded">{icon}</div> */}
    <div className="text-center">
      <p className="text-[32px] font-semibold text-[#244D3F]">{value}</p>
      <p className="text-[18px] text-[#64748B] font-regular">{label}</p>
    </div>
  </div>
);

export default Home;