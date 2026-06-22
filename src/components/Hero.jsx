export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500 opacity-10 dark:opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-violet-500 opacity-10 dark:opacity-15 rounded-full blur-3xl" />
      </div>

      {/* Avatar */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full border-4 border-indigo-500 dark:border-violet-500 shadow-lg overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/9823415?v=4"
            alt="Rúben Marques"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white dark:border-slate-900" title="Available for work" />
      </div>

      {/* Name & title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
        Rúben Marques
      </h1>
      <p className="text-xl sm:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-3">
        Full Stack Developer
      </p>
      <p className="flex items-center gap-1.5 text-gray-500 dark:text-slate-400 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        Póvoa de Varzim, Portugal
      </p>

      {/* Tagline */}
      <p className="max-w-xl text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
        Experienced Full‑Stack Developer with a strong focus on backend development,
        specializing in JavaScript and AWS cloud solutions.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition-colors duration-200"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
