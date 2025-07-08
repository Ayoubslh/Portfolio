
import Navbar from "./page/comps/navbar"
import About from "./page/sections/About"
import Projects from "./page/sections/Projects"
import Techstack from "./page/sections/Techstack"
function App() {
 
  return (
   
    <div className=" min-h-screen  bg-gray-950">   
       <Navbar></Navbar>
       <div className="mx-auto flex max-w-3xl flex-col px-8">
       <main className="grow">
       <About></About>
       <Techstack/>
       <Projects/>
       </main>
       </div>
    </div>

    
   
  )
}

export default App
