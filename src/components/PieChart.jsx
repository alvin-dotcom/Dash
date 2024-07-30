import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart as PChart,
} from "recharts";

export const PieChart = ({ data, title }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-fit">
      <h3 className="font-bold mb-2">{title}</h3>

      <div className="rounded-md">
        <ResponsiveContainer width={300} height={300}>
          <PChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
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
