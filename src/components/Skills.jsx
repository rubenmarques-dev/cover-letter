const skills = [
  { name: "JavaScript",          color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" },
  { name: "TypeScript",          color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  { name: "Angular",             color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
  { name: "NestJS",              color: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300" },
  { name: "RxJS",                color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" },
  { name: "Vue.js",              color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
  { name: "React",               color: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300" },
  { name: "Node.js",             color: "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-300" },
  { name: "Express",             color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300" },
  { name: "Laravel",             color: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" },
  { name: "Python",              color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
  { name: "AWS",                 color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" },
  { name: "Terraform",           color: "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300" },
  { name: "Serverless Framework",color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300" },
  { name: "REST APIs",           color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-violet-500 rounded-full inline-block" />
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
