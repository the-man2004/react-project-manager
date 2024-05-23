import { useRef } from "react";

export default function AddProject({ onClose, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    if (
      title.current.value !== "" &&
      description.current.value !== "" &&
      dueDate.current.value !== ""
    ) {
      const newProject = {
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
      };

      title.current.value = "";
      description.current.value = "";
      dueDate.current.value = "";

      onSave(newProject);

      console.log(newProject);
    }
  }

  return (
    <div className="col-span-2 mx-auto w-full max-w-[750px] mt-8 p-8">
      <div className="mt-16 flex justify-end">
        <button onClick={onClose} className=" py-2 px-6 rounded-lg">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="py-2 px-6 bg-stone-900 text-white rounded-lg"
        >
          Save
        </button>
      </div>
      <form className="mt-8 flex flex-col font-bold">
        <label htmlFor="title">TITLE</label>
        <input
          ref={title}
          type="text"
          id="title"
          className="mb-4 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        />
        <label htmlFor="description">DESCRIPTION</label>
        <textarea
          ref={description}
          name="description"
          id="description"
          className="mb-4 h-20 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        ></textarea>
        <label htmlFor="">DUE DATE</label>
        <input
          ref={dueDate}
          type="date"
          id="title"
          className="mb-4 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        />
      </form>
    </div>
  );
}
