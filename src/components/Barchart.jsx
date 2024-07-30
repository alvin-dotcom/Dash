import React from 'react';

const BarChart = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[66%]">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="h-48 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default BarChart;
