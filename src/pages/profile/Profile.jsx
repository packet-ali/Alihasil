import {
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  useAuth,
} from "../../context/AuthContext";

import {
  logoutAccount,
} from "../../services/authService";

import BottomNavbar from
  "../../components/navbar/BottomNavbar";

import MapPicker from
  "../../components/maps/MapPicker";

export default function Profile() {

  const navigate =
    useNavigate();

  const {
    currentUser,
  } = useAuth();

  const [provinces,
    setProvinces] =
    useState([]);

  const [cities,
    setCities] =
    useState([]);

  const [districts,
    setDistricts] =
    useState([]);

  const [villages,
    setVillages] =
    useState([]);

  const [selectedProvince,
    setSelectedProvince] =
    useState("");

  const [selectedCity,
    setSelectedCity] =
    useState("");

  const [selectedDistrict,
    setSelectedDistrict] =
    useState("");

  const [selectedVillage,
    setSelectedVillage] =
    useState("");

  const [mapPosition,
    setMapPosition] =
    useState([
      -6.914744,
      107.609810,
    ]);

  useEffect(() => {

    fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    )
      .then((res) => res.json())
      .then((data) =>
        setProvinces(data)
      );

  }, []);

  const handleProvinceChange =
    async (e) => {

      const provinceId =
        e.target.value;

      setSelectedProvince(
        provinceId
      );

      const response =
        await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
        );

      const data =
        await response.json();

      setCities(data);

    };

  const handleCityChange =
    async (e) => {

      const cityId =
        e.target.value;

      setSelectedCity(cityId);

      const response =
        await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`
        );

      const data =
        await response.json();

      setDistricts(data);

    };

  const handleDistrictChange =
    async (e) => {

      const districtId =
        e.target.value;

      setSelectedDistrict(
        districtId
      );

      const response =
        await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
        );

      const data =
        await response.json();

      setVillages(data);

    };

  const handleLogout =
    async () => {

      await logoutAccount();

      navigate("/");

    };

  return (

    <div className="min-h-screen bg-[#f4f8f3] pb-28">

      {/* HEADER */}

      <div className="bg-white rounded-b-3xl p-6 shadow-sm">

        <h1 className="text-2xl font-bold text-green-700">
          Profil Saya
        </h1>

      </div>

      <div className="p-5 space-y-5">

        {/* PROFILE */}

        <div className="bg-white rounded-3xl p-6 shadow-sm text-center">

          <img
            src="https://i.pravatar.cc/150"
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h2 className="text-2xl font-bold mt-4">
            {currentUser?.fullName}
          </h2>

          <p className="text-gray-500 mt-1">
            {currentUser?.phone}
          </p>

          <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            {currentUser?.role}
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Nasabah Aktif • Bergabung sejak 2026
          </p>

        </div>

        {/* DATA PENGGUNA */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            Data Pengguna
          </h2>

          <div className="space-y-4">

            <div>

              <p className="text-sm text-gray-500">
                Nama Lengkap
              </p>

              <h3 className="font-semibold mt-1">
                {currentUser?.fullName}
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Nomor HP
              </p>

              <h3 className="font-semibold mt-1">
                {currentUser?.phone}
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Email
              </p>

              <h3 className="font-semibold mt-1">
                Belum ditambahkan
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Nomor KTP
              </p>

              <h3 className="font-semibold mt-1">
                Belum ditambahkan
              </h3>

            </div>

          </div>

        </div>

        {/* E-WALLET */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            E-Wallet Tertaut
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">

              <span>
                🟢 DANA
              </span>

              <span>
                Terhubung
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                ⚪ OVO
              </span>

              <span>
                Belum tertaut
              </span>

            </div>

          </div>

          <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-2xl font-semibold">
            Hubungkan Akun
          </button>

        </div>

        {/* DATA ALAMAT */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            Data Alamat
          </h2>

          <div className="space-y-4">

            {/* PROVINSI */}

            <select
              onChange={handleProvinceChange}
              className="w-full border p-4 rounded-2xl"
            >

              <option>
                Pilih Provinsi
              </option>

              {provinces.map((province) => (

                <option
                  key={province.id}
                  value={province.id}
                >
                  {province.name}
                </option>

              ))}

            </select>

            {/* KOTA */}

            <select
              onChange={handleCityChange}
              className="w-full border p-4 rounded-2xl"
            >

              <option>
                Pilih Kota
              </option>

              {cities.map((city) => (

                <option
                  key={city.id}
                  value={city.id}
                >
                  {city.name}
                </option>

              ))}

            </select>

            {/* KECAMATAN */}

            <select
              onChange={handleDistrictChange}
              className="w-full border p-4 rounded-2xl"
            >

              <option>
                Pilih Kecamatan
              </option>

              {districts.map((district) => (

                <option
                  key={district.id}
                  value={district.id}
                >
                  {district.name}
                </option>

              ))}

            </select>

            {/* KELURAHAN */}

            <select
              onChange={(e) =>
                setSelectedVillage(
                  e.target.value
                )
              }
              className="w-full border p-4 rounded-2xl"
            >

              <option>
                Pilih Kelurahan
              </option>

              {villages.map((village) => (

                <option
                  key={village.id}
                  value={village.id}
                >
                  {village.name}
                </option>

              ))}

            </select>

            {/* DETAIL */}

            <textarea
              placeholder="Detail alamat"
              className="w-full border p-4 rounded-2xl"
            />

            <input
              placeholder="RT / RW"
              className="w-full border p-4 rounded-2xl"
            />

            <input
              placeholder="Kode Pos"
              className="w-full border p-4 rounded-2xl"
            />

            {/* MAP */}

            <div>

              <p className="font-medium mb-3">
                Tentukan lokasi di peta
              </p>

              <MapPicker
                position={mapPosition}
                setPosition={setMapPosition}
              />

              <div className="mt-3 text-sm text-gray-500">

                Latitude:
                {" "}
                {mapPosition[0]}

                <br />

                Longitude:
                {" "}
                {mapPosition[1]}

              </div>

            </div>

          </div>

        </div>

        {/* PENGATURAN */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            Pengaturan Akun
          </h2>

          <div className="space-y-3">

            <button className="w-full border rounded-2xl p-4 text-left">
              Ganti Password
            </button>

            <button className="w-full border rounded-2xl p-4 text-left">
              Platform Tertaut
            </button>

            <button className="w-full border rounded-2xl p-4 text-left">
              Preferensi Notifikasi
            </button>

          </div>

        </div>

        {/* KEAMANAN */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="font-bold text-lg mb-4">
            Keamanan
          </h2>

          <div className="space-y-3">

            <button className="w-full border rounded-2xl p-4 text-left">
              Aktivitas Login
            </button>

            <button className="w-full border rounded-2xl p-4 text-left">
              Logout Semua Perangkat
            </button>

          </div>

        </div>

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-4 rounded-2xl font-semibold"
        >
          Logout
        </button>

      </div>

      <BottomNavbar />

    </div>
  );
}