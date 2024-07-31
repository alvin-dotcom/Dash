import React from "react";
import Sidebar from "./Sidebar";
import Barchart from "./Barchart";
import DataTable from "./DataTable";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";

import {
  Bar,
  BarChart as BChart,
  CartesianGrid,
  PieChart as PChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Profit", value: 9466323 },
  { name: "Revenue", value: 54664311 },
  { name: "Expenses", value: 5456677 },
];

const schoolWiseData = [
  { name: "School A", value: 400 },
  { name: "School B", value: 300 },
];

const tableData = [
  {
    col1: "Revenue",
    col2: "Discounts & Scholarships",
    col3: "120000",
    col4: "110000",
    col5: "130000",
  },
  {
    col1: "Revenue",
    col2: "Transport",
    col3: "150000",
    col4: "160000",
    col5: "170000",
  },
  {
    col1: "Revenue",
    col2: "Tuition",
    col3: "190000",
    col4: "200000",
    col5: "210000",
  },
  {
    col1: "Revenue",
    col2: "Total Revenue",
    col3: "230000",
    col4: "240000",
    col5: "250000",
  },
  {
    col1: "Expenses",
    col2: "Cost of Service	",
    col3: "60000",
    col4: "55000",
    col5: "65000",
  },
  {
    col1: "Expenses",
    col2: "Cost of Acquisition	",
    col3: "75000",
    col4: "80000",
    col5: "85000",
  },
  {
    col1: "Expenses",
    col2: "Facilities Cost	",
    col3: "95000",
    col4: "100000",
    col5: "105000",
  },
  {
    col1: "Expenses",
    col2: "Total Expenses",
    col3: "115000",
    col4: "120000",
    col5: "125000",
  },
  {
    col1: "Profit",
    col2: "Investments	",
    col3: "60000",
    col4: "55000",
    col5: "65000",
  },
  {
    col1: "Profit",
    col2: "Student Fee",
    col3: "75000",
    col4: "80000",
    col5: "85000",
  },
  {
    col1: "Profit",
    col2: "Other Revenues",
    col3: "95000",
    col4: "100000",
    col5: "105000",
  },
  {
    col1: "Profit",
    col2: "Total Profit",
    col3: "115000",
    col4: "120000",
    col5: "125000",
  },
];

const YOYData = [
  {
    name: "Sales",
    value1: 250,
  },
  {
    name: "Admin",
    value2: 180,
  },
  {
    name: "CCE",
    value3: 190,
  },
  {
    name: "IT",
    value4: 50,
  },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const SchoolWiseDoughNutChart = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <PChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="40%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const DoughnutChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full ">
      <h2 className="text-xl font-bold text-center">
        Budget planned vs Actual
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <PChart width={700} height={400}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PChart>
      </ResponsiveContainer>
    </div>
  );
};

const YTDVerticalBarChart = ({ title, data }) => {
  const ALTERNATE_COLORS = ["#00C49F", "#8884d8"];
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-full">
      <h3 className="font-bold mb-2">{title}</h3>

      <ResponsiveContainer width="100%" height={200}>
        <BChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value1" fill="#00C49F" />
          <Bar dataKey="value2" fill="#0088FE" />
          <Bar dataKey="value3" fill="#8884d8" />
          <Bar dataKey="value4" fill="#88456D" />
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};

const Finance = () => {
  return (
    <>
      <div className="flex h-screen ">
        <Sidebar />
        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-15 h-fit">
          <div className="max-h-fit">
            <DoughnutChart />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 w-full ">
            <h3 className="text-xl font-bold text-center mb-2">
              Profit And Loss Statement
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      GL Group
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      GL (In INR Mn)
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Budget</th>
                    <th className="border border-gray-300 px-4 py-2">Actual</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td
                        className={`border border-gray-300 px-4 py-2 ${
                          rowIndex % 4 === 0 ? "row-span-4" : ""
                        }`}
                      >
                        {rowIndex % 4 === 0 ? row.col1 : ""}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.col2}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.col3}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.col4}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.col5}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <YTDVerticalBarChart title="YTD Actual vs Target" data={YOYData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
