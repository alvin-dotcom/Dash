import React from "react";
import {
  Bar,
  BarChart as BChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Sidebar from "./Sidebar";

const Papers23 = [
  {
    name: "Target",
    uv: 1500,
    pv: 1400,
    amt: 1400,
  },
  {
    name: "YTD Target",
    uv: 1500,
    pv: 117,
    amt: 117,
  },
  {
    name: "YTD Actual",
    uv: 1500,
    pv: 200,
    amt: 200,
  },
];

const Papers22 = [
  {
    name: "Target",
    uv: 1500,
    pv: 1000,
    amt: 1000,
  },
  {
    name: "YTD Target",
    uv: 1500,
    pv: 83,
    amt: 83,
  },
  {
    name: "YTD Actual",
    uv: 1500,
    pv: 120,
    amt: 120,
  },
];

const Patents23 = [
  {
    name: "Target",
    uv: 80,
    pv: 80,
    amt: 80,
  },
  {
    name: "YTD Target",
    uv: 100,
    pv: 8,
    amt: 8,
  },
  {
    name: "YTD Actual",
    uv: 100,
    pv: 4,
    amt: 4,
  },
];

const Patents22 = [
  {
    name: "Target",
    uv: 80,
    pv: 80,
    amt: 80,
  },
  {
    name: "YTD Target",
    uv: 80,
    pv: 8,
    amt: 8,
  },
  {
    name: "YTD Actual",
    uv: 80,
    pv: 4,
    amt: 4,
  },
];

const BarChart = ({ data, title, col }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="h-fit rounded-md">
        <ResponsiveContainer width="100%" height={400}>
          <BChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill={col} />
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Finance = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <BarChart data={Papers23} title="Research Papers 2023" col="#FF8042" />
        <BarChart data={Papers22} title="Research Papers 2022" col="blue" />
        <BarChart data={Patents23} title="Patents 2023" col="#FF8042"/>
        <BarChart data={Patents22} title="Patents 2022" col="blue" />
      </div>
    </div>
  );
};

export default Finance;
