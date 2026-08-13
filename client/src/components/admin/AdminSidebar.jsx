import { NavLink } from "react-router-dom";
import {
  FaGaugeHigh,
  FaEnvelope,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const AdminSidebar = () => {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API}/contact/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (response.ok) {
          setUnread(result.data.unread);
        }
      } catch (error) {
        console.error("Unread messages error:", error);
      }
    };

    fetchUnread();

    // Refresh every 30 seconds
    const interval = setInterval(fetchUnread, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaGaugeHigh />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <FaEnvelope />,
      badge: unread,
    },
   
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        h-screen
        w-64
        flex-col
        border-r
        border-slate-200
        bg-white

        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6 dark:border-slate-800">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          SAGOR<span className="text-blue-600">.</span>
        </h1>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-4 py-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) => `
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              text-sm
              font-semibold
              transition-all
              duration-200

              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>

                  <span>{item.name}</span>
                </div>

                {/* Unread badge */}

                {item.badge > 0 && (
                  <span
                    className={`
                      min-w-6
                      rounded-full
                      px-2
                      py-1
                      text-center
                      text-[11px]
                      font-bold

                      ${
                        isActive
                          ? "bg-white text-blue-600"
                          : "bg-red-500 text-white"
                      }
                    `}
                  >
                    {item.badge > 99 ? "99+" : item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}

      <div className="border-t border-slate-200 p-4 dark:border-slate-800">
        <button
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-semibold
            text-slate-600
            transition
            hover:bg-red-50
            hover:text-red-600

            dark:text-slate-400
            dark:hover:bg-red-500/10
            dark:hover:text-red-400
          "
        >
          <FaArrowRightFromBracket />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;