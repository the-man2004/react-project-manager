export default function Sidebar({
  onAddProjectClick,
  projects,
  onProjectSelect,
}) {
  return (
    <aside className="mt-8 p-8 col-span-1 text-white bg-stone-900 rounded-tr-xl">
      <h2 className="my-8 uppercase text-xl md:text-3xl">your projects</h2>
      <button
        onClick={() => onAddProjectClick("open")}
        className="px-4 py-2 bg-stone-700 rounded-xl"
      >
        + Add Project
      </button>
      <menu className="flex flex-col gap-2 mt-8">
        {projects.map((project, index) => (
          <li
            key={index}
            className="py-1 px-2 rounded-lg text-stone-500 hover:text-white hover:bg-stone-800"
          >
            <button
              onClick={() => onProjectSelect(index)}
              className="text-left w-full"
            >
              {project.title}
            </button>
          </li>
        ))}
      </menu>
    </aside>
  );
}
