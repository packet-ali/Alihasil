import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Minggu 1",
    saldo: 10000,
  },
  {
    name: "Minggu 2",
    saldo: 18000,
  },
  {
    name: "Minggu 3",
    saldo: 14000,
  },
  {
    name: "Minggu 4",
    saldo: 25000,
  },
];

export default function BalanceChart() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            📈 Grafik Saldo
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Pergerakan Koin Lestari
          </p>

        </div>

      </div>

      <div className="w-full h-[300px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="name" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="saldo"
              stroke="#16a34a"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}