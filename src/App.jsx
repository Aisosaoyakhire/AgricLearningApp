import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import Welcome from "./pages/Welcome"
import SS1 from "./pages/SS1"
import SS2 from "./pages/SS2"
import SS3 from "./pages/SS3"

export default function App() {
  const [activeClass, setActiveClass] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row gap-4 p-4">
        <Sidebar activeClass={activeClass} setActiveClass={setActiveClass} />

        <main className="flex-1">
          {!activeClass && <Welcome />}
          {activeClass === "SS1" && <SS1 />}
          {activeClass === "SS2" && <SS2 />}
          {activeClass === "SS3" && <SS3 />}
        </main>
      </div>

      <Footer />
    </div>
  )
}
