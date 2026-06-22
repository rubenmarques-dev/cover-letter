export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 dark:text-slate-500">
        <p>© {year} Rúben Marques. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with
          <span className="text-sky-500">React</span>
          +
          <span className="text-violet-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
