import { useState } from "react";

import ProfilePhotoModal from "../modal/ProfilePhotoModal";

export default function UserInfo() {

  const [openPhoto, setOpenPhoto] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex flex-col md:flex-row md:items-center gap-5">

          <button
            onClick={() => setOpenPhoto(true)}
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl"
          >
            👤
          </button>

          <div className="flex-1">

            <h1 className="text-2xl font-bold">
              Ali Nurhikam
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-3">

              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Nasabah
              </div>

              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Nasabah Aktif
              </div>

            </div>

            <p className="text-gray-500 mt-3">
              Bergabung sejak 12 Januari 2026
            </p>

          </div>

        </div>

      </div>

      <ProfilePhotoModal
        open={openPhoto}
        onClose={() => setOpenPhoto(false)}
      />
    </>
  );
}