import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

export default function MainLayout() {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="app-nav">
        <div className="app-nav-inner">
          {/* Logo */}
          <div className="app-logo">〰️</div>

          {/* Hamburger */}
          <button className="app-menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* Links */}
          <div className={`app-links ${open ? "open" : ""}`}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "app-link active" : "app-link"
              }
              onClick={() => setOpen(false)}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/Task"
              className={({ isActive }) =>
                isActive ? "app-link active" : "app-link"
              }
              onClick={() => setOpen(false)}
            >
              Tasks
            </NavLink>

            <NavLink
              to="/habits"
              className={({ isActive }) =>
                isActive ? "app-link active" : "app-link"
              }
              onClick={() => setOpen(false)}
            >
              Habits
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "app-link active" : "app-link"
              }
              onClick={() => setOpen(false)}
            >
              Settings
            </NavLink>

            <button onClick={logout} className="app-logout">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
