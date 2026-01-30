import { NavLink } from "react-router-dom";

const Header = () => {
  const base =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const active =
    "bg-slate-200 dark:bg-slate-800";

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Lily Deller
        </h1>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${base} text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 ${
                isActive ? active : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${base} text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 ${
                isActive ? active : ""
              }`
            }
          >
            About
          </NavLink>

          <button
            onClick={toggleTheme}
            className="ml-2 rounded-md border border-slate-200 px-3 py-2 text-sm
                       hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            🌙
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
