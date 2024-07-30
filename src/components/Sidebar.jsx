import React from 'react';

const Sidebar = () => {
  const menuItems = [
    "Research", "Placement", "Student Metrics", "Higher Studies",
    "Non-Academic Details", "Human Resources (HR)", "Infrastructure",
    "IT", "Hostel and Mess", "Finance", "Department View", 
    "Faculty and Student Details"
  ];

  return (
    <div className="bg-blue-600 text-white w-1/4 md:w-1/5 lg:w-1/6 flex flex-col rounded-lg border border-blue-700 ml-4" style={{ height: 'calc(100vh - 10rem)', padding: '1rem', boxSizing: 'border-box' }}>
      <div className="flex flex-col space-y-0.5 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button 
            key={index} 
            className="hover:bg-blue-700 rounded text-left p-2"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
