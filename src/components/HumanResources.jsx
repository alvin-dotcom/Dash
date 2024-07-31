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
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const attritionData = [{
  name: "Less tha 2 years",
  value: 44
},
{
  name: "3 to 4 years",
  value: 49
},
{
  name: "More than 5 years",
  value: 52
}]

const ReasonData = [{
  name: "Better Job Opportunity",
  value: 44
},
{
  name: "Transportation",
  value: 12
},
{
  name: "Compensation",
  value: 59
},
{
  name: "Organisation",
  value: 42
}]

const periodData = [{
  name: "<1 Month",
  value: 29
},
{
  name: "2 Months",
  value: 20
},
{
  name: "3 Months",
  value: 52
},
{
  name: "> 3 Months",
  value: 12
}]

const YOYData = [
  {
    name: "Faculty",
    "value1": 10,
    value2 : 23,
    value3 : 13
  },
  {
    name: "Non Faculty",
    value1: 13,
    value2 : 43,
    value3 : 18
  },
  {
    name: "Total",
    value1: 10,
    value2 : 23,
    value3 : 50
  }
]

const facultyCTC = [
  {
    name:"International Affairs",
    CTC : 2000000
  },
  {
    name:"Planning and Monitering",
    CTC : 1233901
  },
  {
    name:"Academic Strategy",
    CTC : 1050000
  },
  {
    name:"School of Media",
    CTC : 1307000
  },
  {
    name:"School of Design",
    CTC : 1560000
  },
  {
    name:"School of Art",
    CTC : 1400000
  },
  {
    name:"School of Law",
    CTC : 1300000
  }
]

const NonFacultyCTC = [
  {
    name:"IT",
    CTC : 198765
  },
  {
    name:"HR",
    CTC : 188765
  },
  {
    name:"Academics",
    CTC : 148765
  },
  {
    name:"Legal",
    CTC : 130700
  },
  {
    name:"Schools",
    CTC : 156000
  },
  {
    name:"Admin",
    CTC : 140000
  },
  {
    name:"Others",
    CTC : 100000
  }
]

export const CTCHorizontalBarGraph = ({title, data, color}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
      <BChart width={500} height={250} data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend/>
        <Bar dataKey="CTC" fill={color} />
      </BChart>
      </ResponsiveContainer>
    </div>
  );
};




const AttritionVerticalBarChart = ({ title, data }) => {
  const ALTERNATE_COLORS = ["#00C49F", "#8884d8"];
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[66%]">
      <h3 className="font-bold mb-2">{title}</h3>

      <div className="h-fit rounded-md">
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
            
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const AttritionHorizontalBarGraph = ({title, data}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
      <BChart width={500} height={200} data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend/>
        <Bar dataKey="value" fill={"#ff7c43"} />
      </BChart>
      </ResponsiveContainer>
    </div>
  );
};

const PeriodHorizontalBarGraph = ({title, data}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
      <BChart width={500} height={200} data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend/>
        <Bar dataKey="value" fill={"#d45087"} />
      </BChart>
      </ResponsiveContainer>
    </div>
  );
};

const ReasonsHorizontalBarGraph = ({title, data}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
      <BChart width={500} height={200} data={data}  margin={{ left: 50, right: 20 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip />
        <Legend/>
        <Bar dataKey="value" fill={"#ffa600"} />
      </BChart>
      </ResponsiveContainer>
    </div>
  );
};


const HumanResources = () => {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 overflow-auto ">
      
        <div className="w-full flex flex-wrap gap-6 justify-around mb-8">
        
      <div className="overflow-x-auto">
      <h3 className="font-bold mb-2">Headcount</h3>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr className="px-6">
              
              <th className="px-14 py-2">Faculty Type</th>
              <th className="px-14 py-2">Count</th>
              <th className="px-14 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td className="border px-14 py-2 text-green-500">7673</td>
              <td className="border px-14 py-2 text-red-500">2445</td>
              <td className="border px-14 py-2 text-red-500">9445</td>
            </tr>
            </tbody>
            </table>
            </div>
            <div className="overflow-x-auto">
            <h3 className="font-bold mb-2">Attrition Numbers</h3>
        <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
            <tr className="px-6">
              
            <th className="px-11 py-2">Faculty Type</th>
              <th className="px-14 py-2">Count</th>
              <th className="px-14 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td className="border px-14 py-2 text-green-500">6388</td>
              <td className="border px-14 py-2 text-red-500">2563</td>
              <td className="border px-14 py-2 text-red-500">7563</td>
            </tr>
            </tbody>
            </table>
            </div>
            <div className="overflow-x-auto">
            <h3 className="font-bold mb-2">Current Open Positions</h3>
            <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
            <tr className="px-6">
              
            <th className="px-11 py-2">Faculty Type</th>
              <th className="px-14 py-2">Count</th>
              <th className="px-14 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td className="border px-14 py-2 text-green-500">8373</td>
              <td className="border px-14 py-2 text-red-500">2456</td>
              <td className="border px-14 py-2 text-red-500">10456</td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>
        <div className="w-full h-fit flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-white rounded-lg shadow-md grid-cols-1 md:grid grid-cols-2 flex-1 p-4 w-full md:w-[48%] lg:w-[32%]">
     <AttritionHorizontalBarGraph data={attritionData} title={"Attrition Longitivity"}/>
     <ReasonsHorizontalBarGraph data={ReasonData} title={"Attrition Reasons"}/>

     <PeriodHorizontalBarGraph data={periodData} title={"Period of open Positions"}/>
     <AttritionVerticalBarChart data={YOYData} title={"Attrition YOY"}/>
    <CTCHorizontalBarGraph data={facultyCTC} title={"Faculty Average CTC 2024"} color={"#570bb7"}/>
    <CTCHorizontalBarGraph data={NonFacultyCTC} title={"Non-Faculty Median Average CTC 2024"} color={"#52c1fa"}/>

            </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default HumanResources