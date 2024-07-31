import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Student Operations", path: "/dashboard/student-operations" },
    { name: "Human Resources", path: "/dashboard/human-resources" },
    { name: "Finance", path: "/dashboard/finance" },
    { name: "Placements", path: "/dashboard/placements" },
    { name: "Strategic Projects", path: "/dashboard/strategic-projects" },
  ];

  return (
    <div
      className="bg-blue-600 text-white w-1/4 md:w-1/5 lg:w-1/6 flex flex-col rounded-lg border border-blue-700 ml-4"
      style={{
        height: "calc(100vh - 1rem)",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div className="flex flex-col space-y-0.5 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <button className="hover:bg-blue-700 rounded text-left p-2">
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
