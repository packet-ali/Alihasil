import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  useAuth,
} from "../../context/AuthContext";

import BottomNavbar from
  "../../components/navbar/BottomNavbar";

const saldoData = [
  { month: "Jan", saldo: 4000 },
  { month: "Feb", saldo: 7000 },
  { month: "Mar", saldo: 10000 },
  { month: "Apr", saldo: 15000 },
];

const sampahData = [
  { name: "PET", kg: 12 },
  { name: "Kardus", kg: 9 },
  { name: "Kaleng", kg: 5 },
  { name: "Kaca", kg: 7 },
];

const marketplaceData = [
  {
    name: "Tas Daur Ulang",
    price: "25.000",
    creator: "BSU Tegalega",
    material: "80% Plastik Sachet",
  },
  {
    name: "Pot Tanaman",
    price: "15.000",
    creator: "BSU Melati",
    material: "Botol Plastik",
  },
];

export default function Dashboard() {

  const {
    currentUser,
  } = useAuth();

  return (

    <div className="min-h-screen bg-[#f4f8f3] pb-28">

      {/* HEADER */}

      <div className="bg-white rounded-b-3xl p-5 shadow-sm">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              className="w-12 h-12 rounded-xl"
            />

            <div>

              <h1 className="font-bold text-xl text-green-700">
                ALIHASIL
              </h1>

              <p className="text-xs text-gray-500">
                Dari Tangan Kamu,
                Bumi Berterima Kasih.
              </p>

            </div>

          </div>

          <button
            className="bg-green-100 text-green-700 px-4 py-2 rounded-2xl text-sm font-semibold"
          >
            💬 CS
          </button>

        </div>

      </div>

      <div className="p-5 space-y-5">

        {/* USER */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <p className="text-gray-500 text-sm">
            Selamat datang kembali 👋
          </p>

          <h1 className="text-2xl font-bold mt-1">
            {currentUser?.fullName}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Role:
            {" "}
            {currentUser?.role}
          </p>

        </div>

        {/* SALDO */}

        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-3xl p-6 shadow-lg">

          <p className="opacity-90">
            Koin Lestari Kamu
          </p>

          <h1 className="text-4xl font-bold mt-2">
            🪙 {currentUser?.totalCoins}
          </h1>

          <p className="mt-2 opacity-90">
            ≈ Rp {currentUser?.totalCoins}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-white/20 rounded-2xl p-4">

              <p className="text-sm">
                Sampah Disetor
              </p>

              <h2 className="text-xl font-bold mt-1">
                {currentUser?.totalWaste} kg
              </h2>

            </div>

            <div className="bg-white/20 rounded-2xl p-4">

              <p className="text-sm">
                Dampak Lingkungan
              </p>

              <h2 className="text-xl font-bold mt-1">
                {currentUser?.environmentalImpact}
              </h2>

            </div>

          </div>

          <button
            className="w-full mt-6 bg-white text-green-700 py-3 rounded-2xl font-semibold"
          >
            Tarik Tunai
          </button>

        </div>

        {/* GRAFIK SAMPAH */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <div className="flex justify-between items-center mb-4">

            <h2 className="font-bold text-lg">
              Grafik Sampah
            </h2>

            <span className="text-sm text-gray-500">
              Bulanan
            </span>

          </div>

          <div className="h-60">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={sampahData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="kg"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* GRAFIK SALDO */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <div className="flex justify-between items-center mb-4">

            <h2 className="font-bold text-lg">
              Grafik Saldo
            </h2>

            <span className="text-sm text-gray-500">
              Periode
            </span>

          </div>

          <div className="h-60">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={saldoData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="saldo"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* PICKUP */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            🚛 Jadwal Pickup Berikutnya
          </h2>

          <div className="space-y-2">

            <p className="font-medium">
              Senin, 18 Mei
            </p>

            <p className="text-gray-500">
              08.00 - 11.00 WIB
            </p>

            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              🟡 Dalam Perjalanan
            </div>

          </div>

          <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-2xl font-semibold">
            Ajukan Penjemputan
          </button>

        </div>

        {/* MARKETPLACE */}

        <div className="space-y-4">

          <div className="flex justify-between items-center">

            <h2 className="font-bold text-lg">
              Marketplace Daur Ulang
            </h2>

            <button className="text-green-700 text-sm font-semibold">
              Lihat Semua
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {marketplaceData.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-5 shadow-sm"
              >

                <div className="h-40 bg-gray-100 rounded-2xl mb-4"></div>

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-green-700 font-semibold mt-2">
                  🪙 {item.price}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Dibuat oleh:
                  {" "}
                  {item.creator}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  ♻️ {item.material}
                </p>

                <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-2xl font-semibold">
                  Checkout
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      <BottomNavbar />

    </div>
  );
}