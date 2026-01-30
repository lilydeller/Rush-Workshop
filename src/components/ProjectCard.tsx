import { useState } from "react";

type Props = {
  title: string;
  description: string;
  details: string;
  link: string;
  linkLabel?: string;
};

const ProjectCard = ({ title, description, details, link, linkLabel }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>

      {expanded && (
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">
          {details}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <a
          className="text-sm font-medium text-slate-800 underline underline-offset-4 hover:no-underline dark:text-slate-200"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel ?? "View project →"}
        </a>

        <button
          className="rounded-md border border-slate-300 px-2 py-1 text-sm transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Hide details" : "Show details"}
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
