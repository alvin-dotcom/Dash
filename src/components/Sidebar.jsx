import {React, useState} from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {title: "Research", path: "/research"},
    {title: "Placement", path: "/placement"},
    {title: "Student Metrics", path: "/student-metrics"},
    {title: "Higher Studies", path: "/higher-studies"},
    {title: "Non-Academic Details", path: "/non-academic"},
    {title: "Human Resources (HR)", path: "/hr"},
    {title: "Infrastructure", path: "/infra"},
    {title: "IT", path: "/it"},
    {title: "Hostel and Mess", path: "/hostel"},
    {title: "Finance", path: "/finance"},
    {title: "Department View", path: "/departments"},
    {title: "Faculty and Student Details", path: "/faculty"},
  ];

  const [Tab, setTab]=useState(menuItems[0])

  return (
    <div
      className="bg-blue-600 text-white w-1/4 md:w-1/5 lg:w-1/6 flex flex-col rounded-lg border border-blue-700 ml-4"
      style={{
        height: "calc(100vh - 10rem)",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div className="flex flex-col space-y-0.5 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link
          key={index}
          className={`hover:bg-blue-700 rounded text-left p-2 ${Tab === item ? "bg-blue-700" : ""}`}
          onClick={() => setTab(item)}
          to={item.path}
        >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
