import React from "react";
import Sidebar from "./Sidebar";
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

const Maintenance = [
  {
    name: "Refurbishment",
    uv:20,
    pv: 15,
    amt: 15,
  },
  {
    name: "IT Equipment",
    uv: 20,
    pv: 12,
    amt: 117,
  },
  {
    name: "Research",
    uv: 20,
    pv: 12,
    amt: 200,
  },
  {
    name: "Labs",
    uv: 20,
    pv: 11,
    amt: 200,
  },
  {
    name: "CCB/HBO",
    uv: 20,
    pv: 9,
    amt: 200,
  },
  {
    name: "Maintenance",
    uv: 20,
    pv: 2,
    amt: 200,
  },
];

const Growth = [
  {
    name: "New Land",
    uv: 70,
    pv: 25,
    amt: 25,
  },
  {
    name: "New Hostel",
    uv: 70,
    pv: 30,
    amt: 27,
  },
  {
    name: "New Campus",
    uv: 70,
    pv: 50,
    amt: 20,
  },
];

/* Data for Vertical Bar Graphs*/

const Papers = [
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

const Projects = [
  {
    name: "Target",
    uv: 20,
    pv: 20,
    amt: 20,
  },
  {
    name: "YTD Target",
    uv: 4,
    pv: 4,
    amt: 4,
  },
  {
    name: "YTD Actual",
    uv: 20,
    pv: 7,
    amt: 7,
  },
];

const Patents = [
  {
    name: "Target",
    uv: 40,
    pv: 40,
    amt: 40,
  },
  {
    name: "YTD Target",
    uv: 40,
    pv: 10,
    amt: 10,
  },
  {
    name: "YTD Actual",
    uv: 40,
    pv: 4,
    amt: 4,
  },
];

const HorizontalBarChart = ({ data, title, col}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="h-fit rounded-md">
        <ResponsiveContainer width="100%" height={400}>
          <BChart
            layout="vertical"
            data={data}
            margin={{ left: 60, right: 20 }} 
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={100}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill={col} />
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const BarChart = ({ data, title, col }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full m-12">
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

const StrategicProjects = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 overflow-auto">
        <HorizontalBarChart title={"CAPEX Maintenance"} data={Maintenance} col={"orange"} />
        <HorizontalBarChart title={"CAPEX Growth"} data={Growth} col={"green"} />

        <div className="flex flex-wrap justify-between gap-4">
          <div className="bg-red-200 border-2 border-black p-4 rounded-lg w-full sm:w-[48%] lg:w-[24%]">
            <h1 className="font-bold mb-2">Key GPTW Initiatives: Plan vs Actual</h1>
            <div className="bg-white p-2 rounded-md">
              <p>Placeholder for info</p>
            </div>
          </div>

          <div className="bg-red-200 border-2 border-black p-4 rounded-lg w-full sm:w-[48%] lg:w-[24%]">
            <h1 className="font-bold mb-2">Key Initiatives for NIRF/NAAC</h1>
            <div className="bg-white p-2 rounded-md">
              <p>Placeholder for info</p>
            </div>
          </div>

          <div className="bg-red-200 border-2 border-black p-4 rounded-lg w-full sm:w-[48%] lg:w-[24%]">
            <h1 className="font-bold mb-2">Key Projects/CAPEX Initiatives</h1>
            <div className="bg-white p-2 rounded-md">
              <p>Placeholder for info</p>
            </div>
          </div>

          <div className="bg-red-200 border-2 border-black p-4 rounded-lg w-full sm:w-[48%] lg:w-[24%]">
            <h1 className="font-bold mb-2">Other Key Projects</h1>
            <div className="bg-white p-2 rounded-md">
              <p>Placeholder for info</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-15">
        <BarChart data={Papers} title="Research Papers by School" col="green" />
        <BarChart data={Projects} title="Research Projects by School" col="red" />
        <BarChart data={Patents} title="Research Patents by School" col="yellow"/>
      </div>
      </div>
    </div>
  )
}

export default StrategicProjects