
import Navbar from "./page/comps/navbar"
import About from "./page/sections/About"
import Projects from "./page/sections/Projects"
import Techstack from "./page/sections/Techstack"
import Contact from "./page/sections/Contact"
import Footer from "./page/sections/footer"
function App() {
 
  return (
    
   
    <div className=" min-h-screen  bg-gray-950">   
       <Navbar></Navbar>
       <div className="mx-auto flex max-w-3xl flex-col px-8">
       <main className="grow">
       <About></About>
       <Techstack/>
       <Projects/>
       <Contact/>
       <Footer/>

       </main>
       </div>
    </div>

    
   
  )
}

export default App
