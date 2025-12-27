import { syllabus } from "../data/syllabus"

export default function SS2() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold text-lg">
        {syllabus.SS2.title}
      </h2>
      <p>{syllabus.SS2.content}</p>
    </div>
  )
}
