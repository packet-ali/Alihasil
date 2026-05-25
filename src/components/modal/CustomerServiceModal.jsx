import {
  X,
  MessageCircleMore,
  Headphones,
  Phone,
  BookOpen,
} from "lucide-react";

export default function CustomerServiceModal({
  open,
  onClose,
}) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-end md:items-center justify-center">

      <div className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-3xl p-6 animate-slideUp">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-green-700">
              Customer Service
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Kami siap membantu kebutuhanmu 🌱
            </p>
          </div>

          <button
            onClick={onClose}
            className="bg-gray-100 p-2 rounded-xl"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-4 mt-6">

          <button className="w-full flex items-center gap-4 bg-green-50 hover:bg-green-100 transition p-4 rounded-2xl">

            <div className="bg-green-600 p-3 rounded-xl">
              <MessageCircleMore
                size={22}
                className="text-white"
              />
            </div>

            <div className="text-left">
              <h3 className="font-semibold">
                Chat Bantuan
              </h3>

              <p className="text-sm text-gray-500">
                Konsultasi langsung dengan admin
              </p>
            </div>

          </button>

          <button className="w-full flex items-center gap-4 bg-white border hover:bg-gray-50 transition p-4 rounded-2xl">

            <div className="bg-yellow-500 p-3 rounded-xl">
              <Headphones
                size={22}
                className="text-white"
              />
            </div>

            <div className="text-left">
              <h3 className="font-semibold">
                Bantuan & FAQ
              </h3>

              <p className="text-sm text-gray-500">
                Panduan setor & pertanyaan umum
              </p>
            </div>

          </button>

          <button className="w-full flex items-center gap-4 bg-white border hover:bg-gray-50 transition p-4 rounded-2xl">

            <div className="bg-green-500 p-3 rounded-xl">
              <Phone
                size={22}
                className="text-white"
              />
            </div>

            <div className="text-left">
              <h3 className="font-semibold">
                Hubungi Kami
              </h3>

              <p className="text-sm text-gray-500">
                +62 812-3456-7890
              </p>
            </div>

          </button>

          <button className="w-full flex items-center gap-4 bg-white border hover:bg-gray-50 transition p-4 rounded-2xl">

            <div className="bg-blue-500 p-3 rounded-xl">
              <BookOpen
                size={22}
                className="text-white"
              />
            </div>

            <div className="text-left">
              <h3 className="font-semibold">
                Panduan Setor
              </h3>

              <p className="text-sm text-gray-500">
                Cara setor sampah yang benar
              </p>
            </div>

          </button>

        </div>

      </div>
    </div>
  );
}