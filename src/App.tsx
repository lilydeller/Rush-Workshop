import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="mx-auto max-w-5xl p-4 text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Lily Deller
      </footer>
    </div>
  );
}


export default App;
