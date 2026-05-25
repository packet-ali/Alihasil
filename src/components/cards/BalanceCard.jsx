export default function BalanceCard() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-6 text-white shadow-xl">

      <div className="flex justify-between items-start">

        <div>

          <p className="opacity-80">
            Koin Lestari Kamu
          </p>

          <h1 className="text-4xl font-bold mt-2">
            🪙 15.000
          </h1>

          <p className="mt-2 opacity-90">
            ≈ Rp 15.000
          </p>

        </div>

        <button className="bg-white text-green-700 px-4 py-2 rounded-2xl font-semibold">
          Tarik Tunai
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-sm opacity-80">
            Sampah Disetor
          </p>

          <h2 className="text-2xl font-bold mt-2">
            67kg
          </h2>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-sm opacity-80">
            Dampak Lingkungan
          </p>

          <h2 className="text-xl font-bold mt-2">
            🌱 120 Pohon
          </h2>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 hidden md:block">
          <p className="text-sm opacity-80">
            Status
          </p>

          <h2 className="text-xl font-bold mt-2">
            Nasabah Aktif
          </h2>
        </div>

      </div>

    </div>
  );
}