export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block" />
          About Me
        </h2>

        <div className="space-y-5 text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
          <p>
            Experienced Full‑Stack Developer with a strong focus on backend development,
            specializing in JavaScript and AWS cloud solutions. Passionate about designing
            scalable and efficient backend systems, I thrive in collaborative environments,
            building strong relationships with the team to drive product success.
          </p>
          <p>
            Dedicated to writing clean, maintainable code and mentoring junior developers.
            Proficient in JavaScript for both front‑end and back‑end solutions, with hands‑on
            experience in AWS cloud using Terraform and the Serverless Framework.
          </p>
          <p>
            A great team player who values collaboration, self‑management and quality.
            Seeking a role where I can contribute my expertise to building robust and
            high‑performing applications.
          </p>
        </div>
      </div>
    </section>
  );
}
