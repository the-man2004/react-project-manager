import noProjects from "../assets/no-projects.png";

export default function NotSelected() {
  return (
    <div className="col-span-2 mt-8">
      <img
        src={noProjects}
        className="mt-24 mb-4 w-24 h-auto mx-auto"
        alt="image showing an empty project"
      />
      <h2 className="text-center text-xl font-bold md:text-3xl">
        No Project Selected
      </h2>
      <p className="text-center mt-4">
        Select a project or get started with a new one
      </p>
      <button className="block mt-6 mx-auto py-2 px-4 bg-stone-900 text-stone-500 rounded-lg">
        Create new project
      </button>
    </div>
  );
}
