export type Project = {
  title: string;
  description: string;
  details: string;
  link: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "My Resume",
    description: "Download my professional resume.",
    details: "A detailed overview of my experience, skills, and technical background.",
    link: `${import.meta.env.BASE_URL}resume.pdf`,
    linkLabel: "View Resume →",
  },
{
  title: "My LinkedIn",
  description: "My professional LinkedIn profile.",
  details: "Experience, internships, technical projects, leadership.",
  link: "https://www.linkedin.com/in/lily-deller/",
  linkLabel: "View LinkedIn →",
},
{
  title: "My Github",
  description: "My GitHub profile with projects and repositories.",
  details: "React, Python, AI, robotics, and more.",
  link: "https://github.com/lilydeller",
  linkLabel: "View GitHub →",
},

];
