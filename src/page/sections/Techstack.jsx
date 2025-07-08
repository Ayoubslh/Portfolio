
import TechCard from "@/page/comps/techCard"
import { TechArrLanguages,TechArrBack,TechArrFront,TechArrMobile,TechArrTools } from "./../../constants/technologies"; 


export default function Techstack() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto border-t-4 border-gray-600 mt-15">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
      <section>
      
        <h1 className="text-3xl">Languages</h1>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        
        {TechArrLanguages.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      </section>
        <section className="mt-10 border-t-2 border-gray-600">
        <h1 className="text-3xl mt-4">Frontend</h1>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        
        {TechArrFront.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      </section>
         <section className="mt-10 border-t-2 border-gray-600">
      
        <h1 className="text-3xl mt-4">Backend</h1>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        
        {TechArrBack.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      </section>

        <section className="mt-10 border-t-2 border-gray-600">
      
        <h1 className="text-3xl mt-4">Mobile</h1>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        
        {TechArrMobile.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      </section>

        <section className="mt-10 border-t-2 border-gray-600">
      
        <h1 className="text-3xl mt-4">Tools</h1>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
        
        {TechArrTools.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      </section>

    </section>
  );
}

