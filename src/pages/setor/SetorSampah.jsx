import MainLayout from "../../layouts/MainLayout";

import WasteTable from "../../components/tables/WasteTable";
import PickupCard from "../../components/cards/PickupCard";

export default function SetorSampah() {

  const categories = [
    "🧴 Botol Plastik",
    "📦 Kardus",
    "🥫 Kaleng",
    "📰 Kertas",
  ];

  return (
    <MainLayout>

      <div className="p-5 space-y-5">

        <WasteTable />

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Setor Sampahmu Sekarang
          </h2>

          <div className="mt-6">

            <h3 className="font-semibold">
              1. Pilih Jenis Sampah
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">

              {categories.map((item, index) => (

                <button
                  key={index}
                  className="border px-5 py-3 rounded-2xl hover:bg-green-50 transition"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold">
              2. Estimasi Berat
            </h3>

            <div className="grid grid-cols-3 gap-3 mt-4">

              <button className="border rounded-2xl p-4 hover:bg-green-50">
                &lt; 5kg
              </button>

              <button className="border rounded-2xl p-4 hover:bg-green-50">
                5 - 10kg
              </button>

              <button className="border rounded-2xl p-4 hover:bg-green-50">
                &gt; 10kg
              </button>

            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold">
              3. Checklist Edukasi
            </h3>

            <div className="space-y-4 mt-4">

              <label className="flex items-center gap-3 border rounded-2xl p-4">

                <input type="checkbox" />

                <span>
                  Bersihkan sampah terlebih dahulu
                </span>

              </label>

              <label className="flex items-center gap-3 border rounded-2xl p-4">

                <input type="checkbox" />

                <span>
                  Pastikan tidak ada sisa makanan
                </span>

              </label>

              <label className="flex items-center gap-3 border rounded-2xl p-4">

                <input type="checkbox" />

                <span>
                  Pisahkan label dan tutup botol
                </span>

              </label>

              <label className="flex items-center gap-3 border rounded-2xl p-4">

                <input type="checkbox" />

                <span>
                  Keringkan sebelum disetor
                </span>

              </label>

            </div>

            <div className="mt-4 bg-yellow-50 text-yellow-700 p-4 rounded-2xl text-sm">
              Kondisi sampah memengaruhi nilai saldomu.
            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold">
              4. Metode Setor
            </h3>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div className="border rounded-3xl p-5">

                <h4 className="font-bold">
                  📍 Antar Sendiri
                </h4>

                <div className="mt-4">

                  <p className="font-semibold">
                    Bank Sampah Tegalega
                  </p>

                  <p className="text-gray-500 mt-1">
                    1,2 km dari lokasi kamu
                  </p>

                  <div className="mt-3 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-xl">
                    🟢 Buka sampai 16.00
                  </div>

                </div>

                <button className="mt-5 bg-green-600 text-white px-5 py-3 rounded-2xl">
                  Buka Maps
                </button>

              </div>

              <div className="border rounded-3xl p-5">

                <h4 className="font-bold">
                  🚛 Dijemput Petugas
                </h4>

                <p className="text-gray-500 mt-4">
                  Jadwalkan pickup langsung dari rumahmu
                </p>

                <button className="mt-5 bg-green-600 text-white px-5 py-3 rounded-2xl">
                  Request Pickup
                </button>

              </div>

            </div>

          </div>

        </div>

        <PickupCard />

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            📜 Riwayat Penyetoran
          </h2>

          <div className="space-y-4 mt-6">

            <div className="border rounded-2xl p-5">

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-semibold">
                    ✅ Setoran diterima
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Jenis: Botol Plastik
                  </p>

                  <p className="text-gray-500">
                    Berat final: 3,4kg
                  </p>

                </div>

                <div className="text-green-600 font-bold">
                  🪙 13.600
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}