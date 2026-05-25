import MainLayout from "../../layouts/MainLayout";

import BalanceChart from "../../components/charts/BalanceChart";
import TransactionTable from "../../components/tables/TransactionTable";

export default function Transaksi() {
  return (
    <MainLayout>

      <div className="p-5 space-y-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h1 className="text-2xl font-bold">
            💰 Transaksi & Keuangan
          </h1>

          <p className="text-gray-500 mt-2">
            Pantau seluruh aktivitas dan saldo Koin Lestari kamu
          </p>

          <div className="mt-5">

            <select className="w-full md:w-[300px] border rounded-2xl p-4">

              <option>Semua Transaksi</option>

              <option>Pemasukan</option>

              <option>Pengeluaran</option>

              <option>Setor</option>

              <option>Tarik Tunai</option>

              <option>Belanja</option>

            </select>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <p className="text-gray-500">
              📈 Pemasukan Bulan Ini
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-3">
              🪙 45.000
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <p className="text-gray-500">
              📉 Pengeluaran Bulan Ini
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-3">
              🪙 20.000
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <p className="text-gray-500">
              💰 Saldo Akhir
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-3">
              🪙 25.000
            </h2>

          </div>

        </div>

        <BalanceChart />

        <TransactionTable />

      </div>

    </MainLayout>
  );
}