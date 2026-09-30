export default function NewtodoModal() {
  return (
    <div className=" bg-black/20 fixed inset-0 flex items-center justify-center  ">
      <div className="bg-white rounded-2xl shadow-2xl w-4/12 h-160 p-10 ">
        <div className="bg-amber-300 w-full h-21 flex ">
          <div className="bg-amber-900 w-90 h-full text-start flex items-start gap-3">
            <div>
              <button
                type="button"
                aria-label="Add new task"
                className="flex h-12 w-12 items-center justify-center
             rounded-xl bg-violet-100 text-violet-600
             transition-colors hover:bg-violet-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Add new Task</h1>
              <p className="text-white/30 text-sm">
                Make room for what matters today
              </p>
            </div>
          </div>

          <div className="bg-amber-700 w-33 h-full flex justify-end ">
            <div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
                className="flex h-8 w-8 items-center justify-center
             rounded-lg text-slate-500 transition-colors
             hover:bg-slate-100 hover:text-slate-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
