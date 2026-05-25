import {
  Headphones,
} from "lucide-react";

import { useState } from "react";

import CustomerServiceModal from "../modal/CustomerServiceModal";

export default function TopNavbar() {

  const [openCS, setOpenCS] = useState(false);

  return (
    <>
      <div className="bg-white shadow-sm px-5 py-4 flex items-center justify-between sticky top-0 z-50">

        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Alihasil"
            className="w-10 h-10 object-contain"
          />

          <div>

            <h1 className="font-bold text-xl text-green-700">
              ALIHASIL
            </h1>

            <p className="text-xs text-gray-500">
              Dari Tangan Kamu, Bumi Berterima Kasih.
            </p>

          </div>

        </div>

        <button
          onClick={() => setOpenCS(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-2xl shadow-sm hover:opacity-90 transition"
        >

          <Headphones size={18} />

          <span className="text-sm font-medium">
            Bantuan
          </span>

        </button>

      </div>

      <CustomerServiceModal
        open={openCS}
        onClose={() => setOpenCS(false)}
      />

    </>
  );
}