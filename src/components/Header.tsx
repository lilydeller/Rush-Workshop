import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const base =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const active = "bg-slate-200 dark:bg-slate-800";

  const [isDark, setIsDark] = useState(false);

  // On mount, sync state with the <html> class
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");

    if (next) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <header className="border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
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
            className="ml-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium
                       text-slate-700 hover:bg-slate-100
                       dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
            type="button"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
