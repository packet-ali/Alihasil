import logo from "../../../public/logo.png";

import PhoneLogin from "../../components/auth/PhoneLogin";

export default function Login() {

  return (
    <div className="min-h-screen bg-[#F6FFF7] flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-sm">

        <div className="text-center">

          <img
            src={logo}
            alt="Alihasil"
            className="w-24 mx-auto"
          />

          <h1 className="text-3xl font-bold mt-5">
            ALIHASIL
          </h1>

          <p className="text-green-700 mt-3 font-medium">
            Dari Tangan Kamu,
            Bumi Berterima Kasih.
          </p>

          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Kelola setoran sampah,
            saldo lingkungan,
            dan transaksi daur ulang
            dalam satu aplikasi.
          </p>

        </div>

        <div className="mt-8">

          <PhoneLogin />

        </div>

      </div>

    </div>
  );
}