
import { FaReact, FaNodeJs, } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import TechCard from "../comps/techCard";

export default function Techstack(){
    return(
        <div className="border-t-2 border-gray-900 gap-6 mt-4 px-2 py-4">
        <h1 className="text-center font-semibold text-3xl">Tech Stack</h1>
        <div className="grid grid-col-3 gap4  ">
            
            
           <TechCard>   <FaReact className="text-blue-500 text-3xl" /></TechCard>
            <TechCard><FaNodeJs className="text-green-500 text-3xl" />  </TechCard>
                 <TechCard><TbBrandReactNative className="text-blue-500 text-3xl"/> </TechCard>
                     <TechCard>  <SiMongodb className="text-green-600 text-3xl"/></TechCard>
                         <TechCard>  <GrMysql className="text-blue-400 text-3xl"/></TechCard>

            
            
           
           

            

        </div>
        </div>

    )
}