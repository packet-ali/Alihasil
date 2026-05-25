import { X, Image, Upload, Trash2 } from "lucide-react";

export default function ProfilePhotoModal({
  open,
  onClose,
}) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-end md:items-center justify-center">

      <div className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-3xl p-6 animate-slideUp">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Foto Profil
          </h2>

          <button
            onClick={onClose}
            className="bg-gray-100 p-2 rounded-xl"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-4 mt-6">

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl border hover:bg-gray-50">

            <Image size={22} />

            <span>
              Lihat Foto
            </span>

          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl border hover:bg-gray-50">

            <Upload size={22} />

            <span>
              Ubah Foto
            </span>

          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl border text-red-500 hover:bg-red-50">

            <Trash2 size={22} />

            <span>
              Hapus Foto
            </span>

          </button>

        </div>

      </div>

    </div>
  );
}