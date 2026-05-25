import { Star, MapPin, Phone } from "lucide-react";

export default function BankCard({ bank }) {

  const renderStatus = () => {

    if (bank.status === "active") {
      return (
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs inline-block">
          🟢 Aktif
        </div>
      );
    }

    return (
      <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs inline-block">
        🟡 Pickup Penuh
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold">
            ♻️ {bank.name}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500">

            <MapPin size={16} />

            <p className="text-sm">
              {bank.address}
            </p>

          </div>

          <p className="text-sm text-gray-500 mt-2">
            📍 {bank.distance} dari rumahmu
          </p>

        </div>

        <button className="bg-yellow-100 p-2 rounded-xl">
          <Star size={18} className="text-yellow-500" />
        </button>

      </div>

      <div className="mt-5 flex items-center gap-3 flex-wrap">

        {renderStatus()}

        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs">
          ⏰ {bank.hours}
        </div>

      </div>

      <div className="mt-5 space-y-3">

        <div className="border rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            Jenis Sampah Diterima
          </p>

          <div className="flex flex-wrap gap-2 mt-3">

            {bank.accepted.map((item, index) => (

              <div
                key={index}
                className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <div className="border rounded-2xl p-4">

          <div className="flex items-center gap-2">

            <Phone size={16} />

            <p className="font-medium">
              {bank.phone}
            </p>

          </div>

        </div>

        <div className="border rounded-2xl p-4">

          <p className="font-medium">
            🧩 Produk Kerajinan:
          </p>

          <p className="mt-2 text-gray-500">
            {bank.craft
              ? "Tersedia"
              : "Belum tersedia"}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">

        <button className="bg-green-600 text-white py-3 rounded-2xl">
          Lihat Peta
        </button>

        <button className="border py-3 rounded-2xl">
          Hubungi
        </button>

      </div>

    </div>
  );
}