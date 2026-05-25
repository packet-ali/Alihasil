import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Sen",
    plastik: 12,
  },
  {
    name: "Sel",
    plastik: 18,
  },
  {
    name: "Rab",
    plastik: 9,
  },
  {
    name: "Kam",
    plastik: 24,
  },
  {
    name: "Jum",
    plastik: 15,
  },
  {
    name: "Sab",
    plastik: 28,
  },
  {
    name: "Min",
    plastik: 19,
  },
];

export default function WasteChart() {
  return (
    <div className="w-full h-64">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={data}>

          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="plastik"
            radius={[12, 12, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}