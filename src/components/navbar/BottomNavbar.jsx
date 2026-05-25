import {
  House,
  User,
  Recycle,
  Landmark,
  Wallet,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function BottomNavbar() {

  const location = useLocation();

  const menus = [
    {
      name: "Beranda",
      path: "/dashboard",
      icon: <House size={22} />,
    },
    {
      name: "Profil",
      path: "/profile",
      icon: <User size={22} />,
    },
    {
      name: "Setor",
      path: "/setor",
      icon: <Recycle size={22} />,
    },
    {
      name: "Bank",
      path: "/bank-sampah",
      icon: <Landmark size={22} />,
    },
    {
      name: "Transaksi",
      path: "/transaksi",
      icon: <Wallet size={22} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50">

      <div className="flex justify-around py-3">

        {menus.map((menu, index) => {

          const active = location.pathname === menu.path;

          return (
            <Link
              key={index}
              to={menu.path}
              className={`flex flex-col items-center text-xs ${
                active
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >

              {menu.icon}

              <span className="mt-1">
                {menu.name}
              </span>

            </Link>
          );
        })}

      </div>

    </div>
  );
}