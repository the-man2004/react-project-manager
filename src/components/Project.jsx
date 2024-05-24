import { useRef } from "react";

export default function Projects({
  project,
  onProjectDelete,
  onAddTask,
  onRemoveTask,
}) {
  const taskInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddTask(taskInput.current.value);
    taskInput.current.value = "";
  }

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
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label
            htmlFor="tasks"
            className="mb-4 font-semibold text-2xl md:text-4xl"
          >
            Tasks
          </label>
          <div>
            <input
              ref={taskInput}
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
              <button
                onClick={() => onRemoveTask(task.id)}
                className="hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
