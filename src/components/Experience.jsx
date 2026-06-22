const experiences = [
  {
    title: "Full Stack Developer",
    company: "Critical Tech Works",
    period: "May 2021 – Present",
    location: "Porto, Portugal",
    bullets: [
      "Maintain an Angular and NestJS application leveraging AWS infrastructure.",
      "Engage in proactive decision‑making regarding product and architectural design.",
      "Lead and mentor a team regarding software development and Scrum.",
      "Coordinate with other teams to implement interdependent features.",
    ],
    tags: ["Angular", "NestJS", "RxJS", "AWS", "TypeScript"],
  },
  {
    title: "Full Stack Developer",
    company: "Ludus Cristaltec",
    period: "July 2017 – May 2021",
    location: "Porto, Portugal",
    bullets: [
      "Developed applications for the gambling sector, ensuring compliance with market restrictions.",
      "Contributed to the product creation process, from planning and development to launch.",
      "Maintained multiple applications by resolving bugs and adding new features.",
      "Mentored newcomers on effective practices for Laravel and Vue.js.",
    ],
    tags: ["Vue.js", "Laravel", "Express", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block" />
          Work Experience
        </h2>

        <div className="relative">
          {/* vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-slate-600 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-3 w-9 h-9 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow border border-gray-100 dark:border-slate-700 transition-colors duration-300 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="text-sm text-gray-400 dark:text-slate-400 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{exp.location}</p>
                  <ul className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
