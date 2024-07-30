import {
  CartesianGrid,
  LineChart as LChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const LineChart = ({ data, title }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[48%] lg:w-fit">
      <h3 className="font-bold mb-2">{title}</h3>

      <div className="rounded-md">
        <ResponsiveContainer width={300} height={300}>
          <LChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
