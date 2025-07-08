import MeImage from './../../assets/Me.jpg'
import Techstack from './Techstack'
import { Button } from '@/components/ui/button'
import { FaFileDownload } from "react-icons/fa";
import {FiLinkedin, FiGithub } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md";
import  SocialIcons from './../comps/socials'

export default function About(){

    return(
       <section className="grid-cols-1 sm:mt-8 grid sm:grid-cols-2 gap-8 pb-1 ">
  <div>
   <h1 className='text-4xl'>Your Friendly <span className='text-amber-700'>FullStack</span> Developper</h1>
   <p>small description</p>

   <p className='mt-6'>another catchy crunchy paragraph</p>
   <section className='mt-4 flex flex-row gap-4  '>
    <Button className="
        relative overflow-hidden 
        bg-gradient-to-b from-gray-600 to-gray-700 
        text-white border border-white/10 
        shadow-inner shadow-gray-800/40
        hover:from-gray-500 hover:to-gray-600
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/20 before:to-transparent 
        before:translate-x-[-100%] hover:before:translate-x-[100%] 
        before:transition-transform before:duration-700
      " >Resume <span><FaFileDownload /></span></Button>
        <SocialIcons/>
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

    )
}