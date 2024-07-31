import React from "react";
import Sidebar from "./Sidebar";
import Barchart from "./Barchart";
import DataTable from "./DataTable";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";
// import { ColouredBarChart } from "./ColouredBarChart";

const absentData = [
  { name: "Absent", value: 5 },
  { name: "OD", value: 2 },
  { name: "Present", value: 3 },
];

const scoreData = [
  { name: "Above 90%", value: 30 },
  { name: "Above 80%", value: 15 },
  { name: "Above 70%", value: 35 },
  { name: "Below 60%", value: 20 },
];

const internshipData = [
  { name: "Paid", value: 10 },
  { name: "Unpaid", value: 20 },
  { name: "NO ITS", value: 48 },
  { name: "Paying", value: 22 },
];

const acquisitionData = [
  { year: 2016, cost: 10000 },
  { year: 2017, cost: 15000 },
  { year: 2018, cost: 20000 },
  { year: 2019, cost: 30000 },
  { year: 2020, cost: 25000 },
  { year: 2021, cost: 35000 },
];

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

const YTDData = [
  {
    YTDTarget: 77888,
    YTDActual: 55000,
  },
  { YTDTarget: 64000, YTDActual: 67000 },
  { YTDTarget: 84508, YTDActual: 46000 },
];

export const YTDBarChart = ({ title, data }) => {
  const ALTERNATE_COLORS = ["#00C49F", "#8884d8"];
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[66%] m-5">
      <h3 className="font-bold mb-2">{title}</h3>

      <div className="h-fit rounded-md">
        <ResponsiveContainer width="100%" height={400}>
          <BChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="YTDTarget" fill="#0088FE" />
            <Bar dataKey="YTDActual" fill="pink" />
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const data = [
  { name: "2024", value: 5000 },
  { name: "2023", value: 3000 },
  { name: "2022", value: 2000 },
];

export const HorizontalBarGraph = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">YOY Attrition %</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BChart width={500} height={200} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};

const StudentOperations = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4 overflow-auto ">
          <h1 className="text-center font-semibold text-5xl m-10">
            Student Operations
          </h1>
          <div className="flex gap-8 mb-5 mx-5 text-center flex-wrap justify-center text-2xl lg:flex-row">
            <div className="bg-gray-200 p-5  w-full md:w-fit shadow-md border-gray-900">
              <h1>New Enrollments</h1>
              <p className="bg-white p-5">76896</p>
            </div>
            <div className="bg-gray-200 p-5 shadow-md w-full md:w-fit">
              <h1>Total Enrollements</h1>
              <p className="bg-white p-5">76896</p>
            </div>
            <div className="bg-gray-200 p-5 shadow-md w-full md:w-fit">
              <h1>Student Attributes</h1>
              <p className="bg-white p-5">76896</p>
            </div>
            <div className="bg-gray-200 p-5 shadow-md w-full md:w-fit">
              <h1>Attendance(Till Date)</h1>
              <p className="bg-white p-5">76896</p>
            </div>
            <div className="bg-gray-200 p-5 shadow-md w-full md:w-fit">
              <h1>Student Acquisition Cost</h1>
              <p className="bg-white p-5">76896</p>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-6 justify-around mb-8">
            <PieChart title="Absent And OD" data={absentData} />
            <PieChart title="Score Statisticss" data={scoreData} />
            {/* <PieChart title="Internship Statistics" data={internshipData} /> */}
            <LineChart title="Acquisition Cost" data={acquisitionData} />
          </div>
          <div className="w-full h-fit flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4 m-5">
            <DataTable title="ATD Figures" />
            <Barchart title="Average CT Score" data={ctScoreData} />
            <YTDBarChart title={"YTD Target vs Actual"} data={YTDData} />
            {/* <Barchart title="Average CT Score"  /> */}
          </div>
          <HorizontalBarGraph />
        </div>
      </div>
    </>
  );
};

export default StudentOperations;
