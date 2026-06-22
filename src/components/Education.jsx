const education = [
  {
    degree: "Master in Informatics and Computing Engineering",
    school: "FEUP — Faculdade de Engenharia da Universidade do Porto",
    period: "Mar 2020",
    location: "Porto, Portugal",
    description:
      "Master thesis on machine learning studying artificial neural networks to forecast the sales of a big retail company. Implementation done in Python using the Keras framework to create a time series predictive model.",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Developer",     issuer: "Amazon Web Services", date: "September 2024" },
  { name: "Professional Scrum Master II",       issuer: "Scrum.org",           date: "April 2024" },
  { name: "Professional Scrum Master I",        issuer: "Scrum.org",           date: "December 2023" },
  { name: "AWS Certified Cloud Practitioner",   issuer: "Amazon Web Services", date: "September 2023" },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">

        {/* Education */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block" />
          Education
        </h2>
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <div key={i} className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <span className="text-sm text-gray-400 dark:text-slate-400 whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">{edu.school}</p>
              <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{edu.location}</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-violet-500 rounded-full inline-block" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
              <span className="mt-1 flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </span>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">{cert.name}</p>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold mt-0.5">{cert.issuer}</p>
                <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
