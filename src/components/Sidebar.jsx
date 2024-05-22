export default function Sidebar() {
  return (
    <aside className="mt-8 p-8 col-span-1 min-h-screen text-white bg-stone-900 rounded-tr-xl">
      <h2 className="my-8 uppercase text-xl md:text-3xl">your projects</h2>
      <button className="px-4 py-2 bg-stone-700 rounded-xl">
        + Add Project
      </button>
      <menu className="flex flex-col gap-2 mt-8">
        <li className="py-1 px-2 rounded-lg text-stone-500 hover:text-white hover:bg-stone-800">
          <button>Learn React</button>
        </li>
      </menu>
    </aside>
  );
}
