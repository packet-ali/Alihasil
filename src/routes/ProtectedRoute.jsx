import {
  Navigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

export default function ProtectedRoute({
  children,
}) {

  const {
    currentUser,
    loading,
  } = useAuth();

  if (loading) {

    return (
      <div className="h-screen flex items-center justify-center">
        Memuat...
      </div>
    );

  }

  if (!currentUser) {

    return <Navigate to="/" />;

  }

  return children;
}