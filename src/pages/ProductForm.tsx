export default function ProductForm() {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="w-full max-w-md rounded-md bg-zinc-800 p-10">
        {error.map((error, index) => (
          <div key={index} className="my-4 bg-red-600 p-2 font-bold text-white">
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            {...register("title")}
            className="my-2 w-full rounded-md bg-zinc-600 px-4 py-2 text-white"
            autoFocus
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="my-2 w-full rounded-md bg-zinc-600 px-4 py-2 text-white"
          ></textarea>

          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="my-2 w-full rounded-md bg-zinc-600 px-4 py-2 text-white"
          />

          <button
            type="submit"
            className="mt-3 w-full cursor-pointer bg-zinc-500 p-3 font-bold uppercase text-white transition-colors hover:bg-zinc-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
