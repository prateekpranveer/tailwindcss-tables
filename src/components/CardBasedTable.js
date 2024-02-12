import React from 'react';

const CardBasedTable = () => {
  return (
    <div className=''>
        <h1 className='p-2 font-bold text-purple-700'>Card Based Table</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">Topic: ReactJs</div>
        <div className="px-4 py-2">No of Subtopics: 12</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">Topic: NodeJs</div>
        <div className="px-4 py-2">No of Subtopics: 22</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">Topic: ExpressJs</div>
        <div className="px-4 py-2">No of Subtopics: 10</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">Topic: TailwindCSS</div>
        <div className="px-4 py-2">No of Subtopics: 16</div>
      </div>
      {/* Add more cards as needed */}
    </div>
    </div>
  );
};

export default CardBasedTable;
