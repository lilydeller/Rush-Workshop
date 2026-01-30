import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | My Portfolio";
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Projects
      </h2>

      <section className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </section>
    </main>
  );
};

export default Home;
