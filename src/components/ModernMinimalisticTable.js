import React from 'react';

const ModernMinimalisticTable = () => {
  return (
    <div>
        <h1 className="p-2 font-bold text-sky-600">
            Modern Minimalistic Table
          </h1>
    <table className="min-w-full divide-y divide-gray-200 text-xs">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Topics</th>
          <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">No. of Subtopics</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2 whitespace-nowrap">ReactJs</td>
          <td className="px-4 py-2 whitespace-nowrap">12</td>
        </tr>
        <tr>
          <td className="px-4 py-2 whitespace-nowrap">NodeJs</td>
          <td className="px-4 py-2 whitespace-nowrap">22</td>
        </tr>
        <tr>
          <td className="px-4 py-2 whitespace-nowrap">ExpressJs</td>
          <td className="px-4 py-2 whitespace-nowrap">10</td>
        </tr>
        <tr>
          <td className="px-4 py-2 whitespace-nowrap">TailwindCSS</td>
          <td className="px-4 py-2 whitespace-nowrap">16</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default ModernMinimalisticTable;
