import React from "react";
import Sidebar from "./Sidebar";
import Barchart from "./Barchart";
import DataTable from "./DataTable";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";

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

const HumanResources = () => {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 overflow-auto ">
        <div className="w-full flex flex-wrap gap-6 justify-around mb-8">
          <PieChart title="Absent And OD" data={absentData} />
          <PieChart title="Score Statisticss" data={scoreData} />
          {/* <PieChart title="Internship Statistics" data={internshipData} /> */}
          <LineChart title="Acquisition Cost" data={acquisitionData} />
        </div>
        <div className="w-full h-fit flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4">
          <DataTable title="ATD Figures" />
          <Barchart title="Average CT Score" />
        </div>
      </div>
    </div>
    </>
  )
}

export default HumanResources