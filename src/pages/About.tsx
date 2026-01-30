import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | My Portfolio";
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Lily Deller
      </h2>

      <p className="text-slate-600 dark:text-slate-300">
        Coming soon.
      </p>
    </main>
  );
};

export default About;
