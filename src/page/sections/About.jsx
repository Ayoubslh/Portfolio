import MeImage from './../../assets/Me.jpg'
import { FaFileDownload } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import SocialIcons from './../comps/socials';

export default function About() {
  return (
    <section id="about" className="grid-cols-1 sm:mt-8 grid sm:grid-cols-2 gap-8 pb-1">
      <div>
        <h1 className="text-4xl">
          Your Friendly <span className="text-amber-700">FullStack</span> Developer
        </h1>
        <p> Creative Full-Stack Developer and 3D game Artist </p>
        <p className="mt-6">I don't just code — I create. Whether it's crafting full-stack apps, modeling weapons for a stylized game, or syncing real-time multiplayer logic, I love blending logic with visual storytelling. My goal? Build digital experiences that are fast, fun, and unforgettable.</p>

        <section className="mt-4 flex flex-row gap-4">
         
          <a
            href="/Ayoub_Salhi_CV.pdf"
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
          className="w-48 h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
