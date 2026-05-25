export default function PickupCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        🚛 Pickup Sampah
      </h2>

      <div className="mt-6 border rounded-2xl p-5">

        <h3 className="font-semibold">
          Permintaan pickup berhasil dikirim!
        </h3>

        <p className="text-gray-500 mt-2">
          Estimasi respons kurang dari 24 jam
        </p>

        <div className="mt-4 inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl">
          🟡 Menunggu konfirmasi petugas
        </div>

      </div>

      <div className="space-y-3 mt-5">

        <div className="border rounded-2xl p-4">
          🟢 Permintaan dikonfirmasi petugas
        </div>

        <div className="border rounded-2xl p-4">
          🚛 Petugas dalam perjalanan
        </div>

        <div className="border rounded-2xl p-4">
          👋🏻 Petugas sudah tiba
        </div>

        <div className="border rounded-2xl p-4">
          ✏️ Sampah sedang diproses
        </div>

        <div className="border rounded-2xl p-4">
          ✅ Penyetoran selesai
        </div>

      </div>

    </div>
  );
}