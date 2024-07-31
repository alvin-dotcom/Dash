import React from "react";
import Sidebar from "./Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart as BChart,
  Bar,
} from "recharts";

const DeptwisePlaced = [
  { name: "CSE", value: 50 },
  { name: "EEE", value: 20 },
  { name: "Mech", value: 30 },
  { name: "Civil", value: 20 },
  { name: "Biotech", value: 30 }
];

const OfferMetrics = [
  { name: "Marquee", value: 50 },
  { name: "Super Dream", value: 20 },
  { name: "Dream", value: 30 },
  { name: "Off-Campus", value: 20 },
];

const EligibilityData = [
  {
    name: "CSE",
    Eligible: 4000,
    Placed: 2400,
    amt: 2400,
  },
  {
    name: "EEE",
    Eligible: 3000,
    Placed: 1398,
    amt: 2210,
  },
  {
    name: "Mech",
    Eligible: 2000,
    Placed: 9800,
    amt: 2290,
  },
  {
    name: "Civil",
    Eligible: 2780,
    Placed: 3908,
    amt: 2000,
  },
  {
    name: "Biotech",
    Eligible: 1890,
    Placed: 4800,
    amt: 2181,
  },
  {
    name: "ECE",
    Eligible: 2390,
    Placed: 3800,
    amt: 2500,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const StraightPie = ({ data, col, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold m-8">{title}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180} 
            endAngle={0} 
            outerRadius={120}
            fill={col}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// BarChart functional component
const EligibilityBarChart = ({ title, data, col1, col2 }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-bold m-8">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Eligible" fill={col1} />
          <Bar dataKey="Placed" fill={col2} />
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};

const Finance = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 overflow-auto">
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-15">
      <StraightPie data={DeptwisePlaced} col={"#8884d8"} title={"Department-wise Placement"} />
      <StraightPie data={OfferMetrics} col={"#8884d8"} title={"Offer Metrics"} />
      </div>
        <EligibilityBarChart title={"Eligibility Data"} data={EligibilityData} col1={"blue"} col2={"orange"} />
      </div>
    </div>
  );
};

export default Finance;
