import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 flex items-center justify-between px-5 shadow">
        <div className="flex items-center gap-2">
          <span className="font-bold">Countries of the World</span>
        </div>

        <div className="flex gap-5">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/countries"
            className={({ isActive }) =>
              `text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            Countries
          </NavLink>

          <NavLink
            to="/bucket-list"
            className={({ isActive }) =>
              `text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            Bucket List
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`
            }
          >
            About
          </NavLink>
        </div>
      </nav>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;