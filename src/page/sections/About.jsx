import MeImage from "./../../assets/Me.jpg";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SocialIcons from "./../comps/socials";
import { GiCheckMark } from "react-icons/gi";

export default function About() {
  return (
    <section id="about" className="hero-gradient min-h-screen flex items-center py-20">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-400">Available for work</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="text-white block">Hi, I'm</span>
                <span className="gradient-text block mt-2">Ayoub Salhi</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mt-4 font-medium">
                Full-Stack Developer & 3D Artist
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I create <span className="text-amber-400 font-semibold">seamless digital experiences</span> by blending 
                full-stack development with creative 3D artistry.
              </p>
              
              <div className="grid gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <GiCheckMark className="text-amber-400 flex-shrink-0" />
                  <span>Building <strong className="text-white">scalable MERN & React Native applications</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="text-amber-400 flex-shrink-0" />
                  <span>Crafting <strong className="text-white">stylized 3D assets</strong> for immersive games</span>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="text-amber-400 flex-shrink-0" />
                  <span>Merging <strong className="text-white">tech & storytelling</strong> for impactful solutions</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold hover:from-amber-500 hover:to-amber-600 transition-all flex items-center gap-2 hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                Let's Talk
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-amber-400/50 transition-all flex items-center gap-2"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10">
                <img
                  src={MeImage}
                  alt="Ayoub Salhi - Full-Stack Developer"
                  className="w-80 h-96 sm:w-96 sm:h-[28rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
