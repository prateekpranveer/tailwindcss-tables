import React from 'react';

const DataHighlightingTable = () => {
  // Define sample data internally
  const data = [30, 70, 20, 90, 40, 60];

  return (
    <div>
        <h1 className="p-2 font-bold text-gray-600">
              Data Highlighted Table
            </h1>
    
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Value</th>
          <th className="px-4 py-2 border">Highlight</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => (
          <tr key={index} className={value > 50 ? "bg-green-800 text-white" : "bg-yellow-800 text-white"}>
            <td className="border px-4 py-2">{value}</td>
            <td className="border px-4 py-2">{value > 50 ? "High" : "Low"}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataHighlightingTable;
