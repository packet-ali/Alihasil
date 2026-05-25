import wastePrices from "../../data/wastePrices";

export default function WasteTable() {

  const renderStatus = (status) => {

    if (status === "accepted") {
      return (
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs inline-block">
          🟢 Sedang diterima
        </div>
      );
    }

    if (status === "limited") {
      return (
        <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs inline-block">
          🟡 Hampir penuh
        </div>
      );
    }

    return (
      <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs inline-block">
        🔴 Tidak diterima
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">

      <h2 className="text-xl font-bold">
        ♻️ Tabel Nilai Sampah
      </h2>

      <table className="w-full mt-6 min-w-[650px]">

        <thead>

          <tr className="text-left text-gray-500 border-b">

            <th className="pb-4">Jenis Sampah</th>

            <th className="pb-4">Harga</th>

            <th className="pb-4">Status</th>

          </tr>

        </thead>

        <tbody>

          {wastePrices.map((item, index) => (

            <tr
              key={index}
              className="border-b last:border-none"
            >

              <td className="py-5 font-medium">
                {item.category}
              </td>

              <td className="py-5">
                🪙 {item.price}
              </td>

              <td className="py-5">
                {renderStatus(item.status)}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}