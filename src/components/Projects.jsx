const languageColors = {
  Go:         "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
  Python:     "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  JavaScript: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  TypeScript: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  PHP:        "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
  Misc:       "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
};

const projects = [
  {
    name: "ai-miscellaneous",
    description: "A collection of AI skills, agents, plugins and miscellaneous experiments exploring the AI ecosystem.",
    language: "Misc",
    url: "https://github.com/rubenmarques-dev/ai-miscellaneous",
  },
  {
    name: "youtube-api-integration",
    description: "YouTube API Integration service built with Go — search, fetch metadata and manage playlists via a clean REST interface.",
    language: "Go",
    url: "https://github.com/rubenmarques-dev/youtube-api-integration",
  },
  {
    name: "recipe-app-api",
    description: "A fully-featured Recipe API built with Python and Django REST Framework, including user authentication and image uploads.",
    language: "Python",
    url: "https://github.com/rubenmarques-dev/recipe-app-api",
  },
  {
    name: "aws-ts-serverless-setup-tutorial",
    description: "Step-by-step tutorial for setting up an AWS Serverless project with TypeScript, Lambda, API Gateway and the Serverless Framework.",
    language: "TypeScript",
    url: "https://github.com/rubenmarques-dev/aws-ts-serverless-setup-tutorial",
  },
  {
    name: "react-tailwind-todo-list",
    description: "A clean, responsive Todo List app built with React and Tailwind CSS featuring drag-and-drop and local persistence.",
    language: "JavaScript",
    url: "https://github.com/rubenmarques-dev/react-tailwind-todo-list",
  },
  {
    name: "laravel-schedule-api",
    description: "RESTful schedule management API powered by Laravel — CRUD for appointments, recurring events and team availability.",
    language: "PHP",
    url: "https://github.com/rubenmarques-dev/laravel-schedule-api",
  },
  {
    name: "devconnector",
    description: "A full-stack developer connector social network using the MERN stack — profiles, posts, GitHub integration and real-time chat.",
    language: "JavaScript",
    url: "https://github.com/rubenmarques-dev/devconnector",
  },
  {
    name: "hacker-maps",
    description: "An interactive map application for developers to discover tech meetups, hackathons and coworking spaces nearby.",
    language: "JavaScript",
    url: "https://github.com/rubenmarques-dev/hacker-maps",
  },
];

function LanguageDot({ language }) {
  const dotColors = {
    Go:         "bg-cyan-400",
    Python:     "bg-blue-500",
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-400",
    PHP:        "bg-violet-500",
    Misc:       "bg-slate-400",
  };
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${dotColors[language] ?? "bg-gray-400"}`} />
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${languageColors[language] ?? languageColors.Misc}`}>
        {language}
      </span>
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-violet-500 rounded-full inline-block" />
          GitHub Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-5 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-2 mb-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-gray-400 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 break-all">
                  {project.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-slate-700">
                <LanguageDot language={project.language} />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1"
                >
                  View on GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
