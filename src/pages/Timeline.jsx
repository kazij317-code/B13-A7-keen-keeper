import React, { useState, useEffect } from "react";
import imageCall from '../assets/call.png';
import imageVideo from '../assets/video.png';
import imageText from '../assets/text.png';

const Timeline = () => {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('timeline') || '[]');
    setHistory(data);
  }, []);

  const filteredHistory = history
    .filter(item => {
      const matchesType = filter === "All" || item.type === filter;

      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesType && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });

  const getIcon = (type) => {

    if (type === 'Text') return <img src={imageText} alt="text" className="w-8 h-8" />;
    if (type === 'Call') return <img src={imageCall} alt="call" className="w-8 h-8" />;
    return <img src={imageVideo} alt="video" className="w-8 h-8" />
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-6">
      <div className="justify-between items-center mb-8">
        <h2 className="text-[48px] font-bold">Timeline</h2>

        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 border-2 rounded-lg border-gray-300 px-3 py-2 text-sm font-bold">
          
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-300 outline-none border border-gray-400 rounded-lg px-2 py-1 md:w-auto"
          >
            <option value="All">Filter timeline</option>
            <option value="Text">Texts</option>
            <option value="Call">Calls</option>
            <option value="Video">Videos</option>
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by friend name or interaction type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-300 outline-none border border-gray-400 rounded-lg px-2 py-1 w-full md:flex-1 text-sm"
          />

          {/* Sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-gray-300 outline-none border border-gray-400 rounded-lg px-2 py-1 w-full md:w-auto"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

        </div>
        

      </div>

      <div className="space-y-4">
        {filteredHistory.length > 0 ? filteredHistory.map(item => (
          <div key={item.id} className="bg-white p-5 rounded-lg border-2 border-gray-200 flex items-center gap-5">
            <div className="">{getIcon(item.type)}</div>
            <div>
              <h4 className="font-medium text-[#244D3F] text-[20px]">{item.title}</h4>
              <p className="text-[16px] font-medium text-[#64748B]">{item.date}</p>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 text-gray-400">No history found yet.</div>
        )}
      </div>
    </div>
  );
};

export default Timeline;