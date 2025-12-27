import { syllabus } from "../data/syllabus"

export default function SS3() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold text-lg">
        {syllabus.SS3.title}
      </h2>
      <p>{syllabus.SS3.content}</p>
    </div>
  )
}
