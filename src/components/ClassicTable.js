import React from 'react';

const ClassicTable = () => {
  return (
    <div>
         <h1 className="p-2 font-bold text-red-600">Classic Table</h1>
    
    <table className="border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Topics</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">No. of SubTopics</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="px-6 py-4 whitespace-nowrap border-b">ReactJs</td>
          <td className="px-6 py-4 whitespace-nowrap border-b">12</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap border-b">NodeJs</td>
          <td className="px-6 py-4 whitespace-nowrap border-b">22</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap border-b">ExpressJs</td>
          <td className="px-6 py-4 whitespace-nowrap border-b">10</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap border-b">TailwindCSS</td>
          <td className="px-6 py-4 whitespace-nowrap border-b">16</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default ClassicTable;
