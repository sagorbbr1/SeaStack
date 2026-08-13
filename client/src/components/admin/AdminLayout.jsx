import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaGaugeHigh,
  FaEnvelope,
  FaArrowRightFromBracket,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  const navItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: FaGaugeHigh,
    },
    {
      label: "Messages",
      path: "/admin/messages",
      icon: FaEnvelope,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Mobile Header */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-40
          flex
          h-16
          items-center
          justify-between
          border-b
          border-slate-200
          bg-white/90
          px-5
          backdrop-blur-xl

          lg:hidden

          dark:border-slate-800
          dark:bg-slate-900/90
        "
      >
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          SAGOR<span className="text-blue-600">.</span>
        </h1>

        <button
          onClick={() => setSidebarOpen(true)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-700
            hover:bg-slate-100

            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-slate-950/50
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-72
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-300

          dark:border-slate-800
          dark:bg-slate-900

          lg:translate-x-0

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo */}

        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6 dark:border-slate-800">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              SAGOR<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-0.5 text-xs text-slate-400">
              Admin Panel
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-slate-500
              hover:bg-slate-100

              lg:hidden

              dark:hover:bg-slate-800
            "
          >
            <FaXmark />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 p-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Management
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all

                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }
                `}
              >
                <Icon />

                {item.label}
              </NavLink>
            );
          })}
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

      {/* Main */}

      <main className="min-h-screen lg:ml-72">
        <div className="px-4 pt-20 sm:px-6 lg:px-8 lg:pt-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;