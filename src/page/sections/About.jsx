import MeImage from "./../../assets/Me.jpg";
import { FaFileDownload, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SocialIcons from "./../comps/socials";
import { GiCheckMark } from "react-icons/gi";

export default function About() {
  return (
    <section
      id="about"
      className="grid-cols-1 sm:mt-8 grid sm:grid-cols-2 gap-8 pb-1"
    >
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-white relative group">
          Ayoub here, Creative{" "}
          <span className="text-amber-400 animate-pulse group-hover:text-amber-500 transition duration-300">
            MERN & Native
          </span>{" "}
          Developer
          <span className="block h-1 w-16 bg-amber-500 mt-2 rounded group-hover:w-24 transition-all duration-300"></span>
        </h1>

        <div className="mt-3 flex items-center">
          <GiCheckMark className="mr-5 text-xl" /> 
          <p >
         
            Crafting <b>full-stack
            applications</b> with clean, scalable code.
          </p>
        </div>

        <div className="mt-3 flex items-center  ">
         
           <GiCheckMark className="mr-5 text-xl" />
          <p >
            Designing and <b>modeling 3D assets </b> for stylized, immersive games.
          </p>
        </div>

        <div className="mt-3 flex  items-center">
      
          <GiCheckMark className="mr-5 text-xl" /> 
          <p >
           Blending <b> tech and storytelling </b>for fast,
            fun,impactful experiences.
          </p>

        </div>

        <section className="mt-4 flex flex-row gap-4">
          <a
            href="/Salhi_Ayoub_Abdelmoumenme_CV.pdf"
            download
            className="rounded-md px-4 py-2 flex items-center gap-2 text-white bg-gradient-to-b from-gray-600 to-gray-700 border border-white/10 shadow-inner shadow-gray-800/40 hover:from-gray-500 hover:to-gray-600 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
          >
            <FaFileDownload className="text-lg" />
            Download CV
          </a>

          <SocialIcons />
        </section>
      </div>

      <div className="flex justify-center">
        <img
          src={MeImage}
          alt="My profile"
          className="w-48 h-90 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
