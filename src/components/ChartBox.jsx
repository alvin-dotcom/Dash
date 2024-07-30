import React from 'react';

const ChartBox = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[23.5%]">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="h-32 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default ChartBox;
