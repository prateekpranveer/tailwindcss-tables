import React from 'react';

const DashboardTable = () => {
  return (
    <div>
     <h1 className='p-2 text-blue-600 font-bold mt-6'>Dashboard Table</h1>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Sales</td>
          <td className="px-6 py-4 whitespace-nowrap">$10,000</td>
          <td className="px-6 py-4 whitespace-nowrap text-green-500">+15%</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Revenue</td>
          <td className="px-6 py-4 whitespace-nowrap">$20,000</td>
          <td className="px-6 py-4 whitespace-nowrap text-red-500">-5%</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
  );
};

export default DashboardTable;
