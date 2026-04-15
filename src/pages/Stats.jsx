import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";


const Stats = () => {
  const history = JSON.parse(localStorage.getItem('timeline') || '[]');
  
  const data = [

    { name: 'Text', value: history.filter(h => h.type === 'Text').length },
    { name: 'Call', value: history.filter(h => h.type === 'Call').length },
    { name: 'Video', value: history.filter(h => h.type === 'Video').length },
  ].filter(d => d.value > 0);

  const COLORS = [ '#7E35E1', '#244D3F', '#37A163'];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[48px] font-bold mb-8">Friendship Analytics</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-medium mb-6 text-[#244D3F]">By Interaction Type</h3>
        {data.length > 0 ? (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-20">No interactions recorded yet. Start a check-in from a friend's page!</p>
        )}
      </div>
    </div>
  );
};

export default Stats;