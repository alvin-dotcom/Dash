import React from 'react';
import Sidebar from './Sidebar';
import Barchart from './Barchart';
import DataTable from './DataTable';
import ChartBox from './ChartBox';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 overflow-auto">
        <div className="w-full flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <ChartBox title="Absent and OD student" />
          <ChartBox title="Score Statistics" />
          <ChartBox title="Internship Statistics" />
          <ChartBox title="Acquisition Costs" />
        </div>
        <div className="w-full flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4">
          <DataTable title="ATD Figures" />
          <Barchart title="Average CT Score" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
