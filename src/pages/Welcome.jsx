import DailyVerse from "../components/DailyVerse"

export default function Welcome() {
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>

      <p className="mb-2">
        Welcome to the Agriculture Learning App. This platform is designed to help
        senior secondary school students study Agricultural Science based on the
        WAEC and NECO syllabus.
      </p>

      <p>👉 Select your class (SS1, SS2, or SS3) to begin learning.</p>

      <DailyVerse />
    </section>
  )
}
