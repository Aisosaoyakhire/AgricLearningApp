import { useEffect, useState } from "react"
import { verses } from "../data/verses"

export default function DailyVerse() {
  const [verse, setVerse] = useState({})

  useEffect(() => {
    const random = verses[Math.floor(Math.random() * verses.length)]
    setVerse(random)
  }, [])

  return (
    <div className="mt-4 bg-green-50 border-l-4 border-green-700 p-4 rounded">
      <strong className="text-green-700">Daily Motivation</strong>
      <p className="italic mt-2">“{verse.text}”</p>
      <small className="text-gray-600">{verse.ref}</small>
    </div>
  )
}
                                