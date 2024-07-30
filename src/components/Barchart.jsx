import React from "react";
import {
  Bar,
  BarChart as BChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ctScoreData = [
  { name: "CSE", score: 25 },
  { name: "CS", score: 60 },
  { name: "CC", score: 40 },
  { name: "GT", score: 90 },
  { name: "BDA", score: 20 },
  { name: "BT", score: 50 },
  { name: "IOT", score: 70 },
  { name: "EEE", score: 95 },
  { name: "Mech", score: 80 },
  { name: "Civil", score: 15 },
  { name: "BCA", score: 10 },
];
const ALTERNATE_COLORS = ["#00C49F", "#8884d8"];

const BarChart = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[66%]">
      <h3 className="font-bold mb-2">{title}</h3>

      <div className="h-fit rounded-md">
        <ResponsiveContainer width="100%" height={400}>
          <BChart data={ctScoreData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#0088FE" />
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
