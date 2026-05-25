import transactions from "../../data/transactions";

export default function TransactionTable() {

  const renderStatus = (status) => {

    if (status === "success") {
      return (
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs inline-block">
          🟢 Berhasil
        </div>
      );
    }

    return (
      <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs inline-block">
        🟡 Menunggu Verifikasi
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            📜 Riwayat Transaksi
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Mutasi saldo dan aktivitas akun
          </p>

        </div>

      </div>

      <table className="w-full min-w-[700px] mt-6">

        <thead>

          <tr className="border-b text-left text-gray-500">

            <th className="pb-4">Tanggal</th>

            <th className="pb-4">Aktivitas</th>

            <th className="pb-4">Status</th>

            <th className="pb-4">Nominal</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((item, index) => (

            <tr
              key={index}
              className="border-b last:border-none"
            >

              <td className="py-5">
                {item.date}
              </td>

              <td className="py-5 font-medium">
                {item.activity}
              </td>

              <td className="py-5">
                {renderStatus(item.status)}
              </td>

              <td
                className={`py-5 font-bold ${
                  item.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.amount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}