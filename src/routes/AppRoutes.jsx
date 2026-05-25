import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";

import Dashboard from "../pages/dashboard/Dashboard";

import Profile from "../pages/profile/Profile";

import SetorSampah from "../pages/setor/SetorSampah";

import BankSampah from "../pages/bank/BankSampah";

import Transaksi from "../pages/transaksi/Transaksi";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/setor"
        element={
          <ProtectedRoute>
            <SetorSampah />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bank-sampah"
        element={
          <ProtectedRoute>
            <BankSampah />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transaksi"
        element={
          <ProtectedRoute>
            <Transaksi />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}