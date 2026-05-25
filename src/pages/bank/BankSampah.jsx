import MainLayout from "../../layouts/MainLayout";

import BankCard from "../../components/cards/BankCard";

import banks from "../../data/banks";

export default function BankSampah() {
  return (
    <MainLayout>

      <div className="p-5 space-y-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h1 className="text-2xl font-bold">
            🏦 Bank Sampah Saya
          </h1>

          <p className="text-gray-500 mt-2">
            Temukan bank sampah unit terdekat dari lokasimu
          </p>

          <input
            placeholder="Cari Bank Sampah..."
            className="w-full border rounded-2xl p-4 mt-5"
          />

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-bold">
              ⭐ Unit Favorit
            </h2>

            <button className="text-green-600 font-semibold">
              Kelola
            </button>

          </div>

          <div className="mt-5 border rounded-2xl p-5">

            <h3 className="font-semibold">
              Bank Sampah Melati
            </h3>

            <p className="text-gray-500 mt-2">
              Terakhir digunakan 2 hari lalu
            </p>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            🕘 Riwayat Unit Digunakan
          </h2>

          <div className="space-y-4 mt-5">

            <div className="border rounded-2xl p-4">

              <h3 className="font-semibold">
                Bank Sampah Tegalega
              </h3>

              <p className="text-gray-500 mt-2">
                Pickup terakhir • 12 Mei 2026
              </p>

            </div>

            <div className="border rounded-2xl p-4">

              <h3 className="font-semibold">
                Bank Sampah Melati
              </h3>

              <p className="text-gray-500 mt-2">
                Setor langsung • 7 Mei 2026
              </p>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-bold">
              📍 Rekomendasi Terdekat
            </h2>

            <button className="text-green-600 font-semibold">
              Lihat Semua
            </button>

          </div>

          <div className="space-y-5 mt-6">

            {banks.map((bank, index) => (

              <BankCard
                key={index}
                bank={bank}
              />

            ))}

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            🗺️ Peta Lokasi
          </h2>

          <div className="bg-gray-100 rounded-3xl h-[350px] mt-5 flex items-center justify-center text-gray-400">

            Area Peta Interaktif

          </div>

          <div className="mt-5 bg-green-50 border border-green-100 rounded-2xl p-4 text-green-700 text-sm">

            📍 Peta nantinya akan menampilkan:
            lokasi rumah pengguna,
            radius pickup,
            dan bank sampah unit terdekat.

          </div>

        </div>

      </div>

    </MainLayout>
  );
}