import React from "react";

const DataTable = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-[32%]">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">SL No.</th>
              <th className="px-4 py-2">Dept.</th>
              <th className="px-4 py-2">Stud.No</th>
              <th className="px-4 py-2">Present</th>
              <th className="px-4 py-2">Absent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">01.</td>
              <td className="border px-4 py-2">CSE</td>
              <td className="border px-4 py-2">520</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">02.</td>
              <td className="border px-4 py-2">Mech</td>
              <td className="border px-4 py-2">320</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">03.</td>
              <td className="border px-4 py-2">Civil</td>
              <td className="border px-4 py-2">120</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">04.</td>
              <td className="border px-4 py-2">CSE</td>
              <td className="border px-4 py-2">520</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">05.</td>
              <td className="border px-4 py-2">Biotech</td>
              <td className="border px-4 py-2">320</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">06.</td>
              <td className="border px-4 py-2">EEE</td>
              <td className="border px-4 py-2">220</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">07.</td>
              <td className="border px-4 py-2">ECE</td>
              <td className="border px-4 py-2">120</td>
              <td className="border px-4 py-2 text-green-500">5</td>
              <td className="border px-4 py-2 text-red-500">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
