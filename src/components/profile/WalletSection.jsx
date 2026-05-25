export default function WalletSection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            E-wallet Tertaut
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Hubungkan akun e-wallet untuk tarik tunai
          </p>

        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded-2xl">
          Hubungkan
        </button>

      </div>

      <div className="space-y-4 mt-6">

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h3 className="font-semibold">
              🟢 DANA
            </h3>

            <p className="text-sm text-gray-500">
              Terhubung
            </p>
          </div>

          <div className="text-green-600 font-semibold">
            Aktif
          </div>

        </div>

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h3 className="font-semibold">
              🟢 GoPay
            </h3>

            <p className="text-sm text-gray-500">
              Terhubung
            </p>
          </div>

          <div className="text-green-600 font-semibold">
            Aktif
          </div>

        </div>

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h3 className="font-semibold">
              ⚪ OVO
            </h3>

            <p className="text-sm text-gray-500">
              Belum ditautkan
            </p>
          </div>

          <div className="text-gray-400 font-semibold">
            Tidak Aktif
          </div>

        </div>

      </div>

    </div>
  );
}