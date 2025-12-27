export default function Sidebar({ activeClass, setActiveClass }) {
  const classes = ["SS1", "SS2", "SS3"]

  return (
    <aside className="md:w-56 bg-green-100 p-4 rounded-xl">
      <h3 className="font-semibold mb-3">Class</h3>

      {classes.map((cls) => (
        <button
          key={cls}
          onClick={() => setActiveClass(cls)}
          className={`w-full mb-2 py-2 rounded-lg text-white transition
            ${
              activeClass === cls
                ? "bg-green-900"
                : "bg-green-600 hover:bg-green-800"
            }`}
        >
          {cls}
        </button>
      ))}
    </aside>
  )
}
