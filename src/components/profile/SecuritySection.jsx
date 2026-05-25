export default function SecuritySection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Keamanan Akun
      </h2>

      <div className="space-y-4 mt-6">

        <div className="border rounded-2xl p-4">

          <h3 className="font-semibold">
            Aktivitas Login
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Periksa riwayat login akunmu
          </p>

        </div>

        <div className="border rounded-2xl p-4">

          <h3 className="font-semibold">
            Logout Semua Perangkat
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Keluar dari seluruh perangkat aktif
          </p>

        </div>

        <div className="border rounded-2xl p-4">

          <h3 className="font-semibold">
            Preferensi Notifikasi
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            WhatsApp, email, transaksi, pickup
          </p>

        </div>

      </div>

    </div>
  );
}