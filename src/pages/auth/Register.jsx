import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { registerAccount } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("nasabah");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      await registerAccount(
        name,
        phone,
        password,
        role
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f7f5] flex justify-center items-center p-5">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-center text-green-700">
          ALIHASIL
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Buat akun baru
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-4 mt-6"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border rounded-2xl p-4"
            required
          />

          <input
            type="text"
            placeholder="Nomor Telepon"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border rounded-2xl p-4"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border rounded-2xl p-4"
            required
          />

          <div>
            <p className="font-semibold mb-2">
              Pilih Role
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setRole("nasabah")
                }
                className={`p-4 rounded-2xl border ${
                  role === "nasabah"
                    ? "bg-green-600 text-white"
                    : "bg-white"
                }`}
              >
                Nasabah
              </button>

              <button
                type="button"
                onClick={() =>
                  setRole("admin")
                }
                className={`p-4 rounded-2xl border ${
                  role === "admin"
                    ? "bg-green-600 text-white"
                    : "bg-white"
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white rounded-2xl p-4"
          >
            {loading
              ? "Membuat akun..."
              : "Daftar"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm">
          Sudah punya akun?

          <Link
            to="/"
            className="text-green-700 font-semibold ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
