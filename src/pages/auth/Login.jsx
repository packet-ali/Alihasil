import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { loginAccount } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      await loginAccount(
        phone,
        password
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        "Nomor telepon atau password salah"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f7f5] flex justify-center items-center p-5">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-6">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">
            ALIHASIL
          </h1>

          <p className="text-gray-500 mt-3">
            Dari Tangan Kamu,
            Bumi Berterima Kasih.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-4 mt-8"
        >
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
              ? "Memproses..."
              : "Login"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm">
          Belum punya akun?

          <Link
            to="/register"
            className="text-green-700 font-semibold ml-1"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
