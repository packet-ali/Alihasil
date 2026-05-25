import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  loginUser,
  registerUser,
} from "../../services/authService";

export default function PhoneLogin() {

  const navigate =
    useNavigate();

  const [isRegister,
    setIsRegister] =
    useState(false);

  const [phone,
    setPhone] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const handleSubmit =
    async () => {

      try {

        setLoading(true);

        if (isRegister) {

          await registerUser({
            phone,
            password,
          });

          alert(
            "Akun berhasil dibuat!"
          );

        } else {

          await loginUser({
            phone,
            password,
          });

          alert(
            "Login berhasil!"
          );

        }

        navigate("/dashboard");

      } catch (error) {

        console.error(error);

        alert(error.message);

      } finally {

        setLoading(false);

      }

    };

  return (
    <div className="space-y-4">

      <div>

        <label className="text-sm font-medium text-gray-600">
          Nomor HP
        </label>

        <input
          type="text"
          placeholder="08123456789"
          className="w-full p-4 rounded-2xl border mt-2 outline-none focus:border-green-600"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

      </div>

      <div>

        <label className="text-sm font-medium text-gray-600">
          Password
        </label>

        <input
          type="password"
          placeholder="Masukkan password"
          className="w-full p-4 rounded-2xl border mt-2 outline-none focus:border-green-600"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-green-600 text-white p-4 rounded-2xl font-semibold"
      >

        {loading
          ? "Memproses..."
          : isRegister
          ? "Buat Akun"
          : "Login"}

      </button>

      <button
        onClick={() =>
          setIsRegister(!isRegister)
        }
        className="w-full text-green-700 font-medium"
      >

        {isRegister
          ? "Sudah punya akun? Login"
          : "Belum punya akun? Daftar"}

      </button>

    </div>
  );
}