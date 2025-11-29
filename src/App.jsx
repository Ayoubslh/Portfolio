
import Navbar from "./page/comps/navbar"
import About from "./page/sections/About"
import Projects from "./page/sections/Projects"
import Techstack from "./page/sections/Techstack"
import Contact from "./page/sections/Contact"
import Footer from "./page/sections/footer"
function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <About />
        <Techstack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
