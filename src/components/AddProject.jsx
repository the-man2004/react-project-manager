export default function AddProject({ onClose }) {
  return (
    <div className="col-span-2 max-w-[750px] mt-8 p-8">
      <div className="mt-16 flex justify-end">
        <button onClick={onClose} className=" py-2 px-6 rounded-lg">
          Cancel
        </button>
        <button className="py-2 px-6 bg-stone-900 text-white rounded-lg">
          Save
        </button>
      </div>
      <form className="mt-8 flex flex-col font-bold">
        <label htmlFor="title">TITLE</label>
        <input
          type="text"
          id="title"
          className="mb-4 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        />
        <label htmlFor="description">DESCRIPTION</label>
        <textarea
          name="description"
          id="description"
          className="mb-4 h-20 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        ></textarea>
        <label htmlFor="">DUE DATE</label>
        <input
          type="date"
          id="title"
          className="mb-4 font-semibold bg-stone-200 outline-none focus:border-b-2 border-stone-900"
        />
      </form>
    </div>
  );
}
