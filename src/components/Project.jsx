export default function Projects({ project, onProjectDelete }) {
  return (
    <div className="col-span-2 max-w-[750px] mt-8 px-8">
      <div className="flex justify-between">
        <h2 className="mt-16 font-semibold text-3xl md:text-5xl">
          {project.title}
        </h2>
        <button onClick={onProjectDelete}>Delete</button>
      </div>
      <p className="mt-4 text-stone-400">{project.dueDate}</p>
      <p className="mt-4 pb-4 font-semibold whitespace-pre border-b border-stone-800">
        {project.description}
      </p>
      <div className="mt-4">
        <form className="flex flex-col">
          <label
            htmlFor="tasks"
            className="mb-4 font-semibold text-2xl md:text-4xl"
          >
            Tasks
          </label>
          <div>
            <input
              type="text"
              id="tasks"
              className="w-[50%] mr-4 p-1 bg-stone-300"
            />
            <button>Add Task</button>
          </div>
        </form>
        <ul className="mt-16 flex flex-col gap-4">
          {project.tasks.map((task) => (
            <li key={task.id} className="flex justify-between font-semibold">
              <p className="ml-4">{task.task}</p>
              <button>Clear</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
