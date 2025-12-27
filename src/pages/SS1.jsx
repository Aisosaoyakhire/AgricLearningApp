import { syllabus } from "../data/syllabus"

export default function SS1() {
  return (
    <section className="space-y-4">
      {syllabus.SS1.map((topic, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-lg">{topic.title}</h2>
          <p>{topic.content}</p>
        </div>
      ))}
    </section>
  )
}
