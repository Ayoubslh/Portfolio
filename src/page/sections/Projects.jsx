import PCard from "../comps/projectCard";
import inboxAI from "./../../assets/projectsimages/inboxbig.png";
import iotlab from "./../../assets/projectsimages/iot.png";
import sanned from "./../../assets/projectsimages/sanned.png";
import streamous from "./../../assets/projectsimages/streaminplat.png";
import techstore from "./../../assets/projectsimages/techstore.png";

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsArr = [
  {
    PId: 111,
    image: iotlab,
    title: "IOT Lab",
    description: "IOTLAB - A web Platform for: IOT Students , IOT Enthusiats and Self-LearnersIf you want to start in iot or hone your skills , but you don't have access to hardware part this is for you.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL","Peer.js","Socket.io","Arduino-Cli"],
    demo:false
  },
  {
    PId: 222,
    image: inboxAI,
    title: "InboxAI",
    description: "A smart email assistant powered by AI, designed to help you manage emails more efficiently using the LangChain framework for AI Agent development. We implemented two main agents: Email Processing Agent: Categorizes, prioritizes, and summarizes your emails to ensure you focus on what matters most. Reply Suggestion Agent: Generates intelligent email responses, saving you time and effort.",
    stack: ["React","Node.js","Express.js","MongoDB","Langchain.js"],
    demo:false
  },
  {
    PId: 333,
    image: streamous,
    title: "Streamous",
    description: "A simple movie platform that allows users to view and read about Movies.",
    stack: ["HTML","CSS","Javascript","TMDB API"],
    demo:true,
    demoLink:"https://ayoubslh.github.io/MovieApp"
  },

  {
    PId: 444,
    image: techstore,
    title: "TechStore",
    description: "An e-commerce website and mobile app that allows users to buy and sell tech products. Users can create an account, browse products, add items to their cart, and checkout securely.",
    stack: ["React","React Native","Node.js","Express.js","MongoDB"],
    demo:true,
    demoLink:"https://hptecs.vercel.app/"
  }
  ,
  {
    PId: 555,
    image: sanned,
    title: "Sanned",
    description: "A humanitarian mobile apps that allows users in crisis area to request or offer help , offlline first app with online sync when connection is available. Also the possibility of viewing location and offering donations to people in need.",
    stack: ["React Native","Expo","WatermelonDB"],
    demo:true,
    demoLink:"https://drive.google.com/file/d/1T3W6jQNqGaR0KSkDeT6aAflZq0_77DEl/view?usp=drivesdk"
  }
 
];

export default function Projects() {
  return (
    <div id="projects" className="  border-t-4 border-gray-600 mt-15">
     <h1 className="text-center font-semibold text-3xl">Projects</h1>
    <section className="flex flex-col  rounded-lg  mt-6 w-full">
       
      <Carousel   opts={{
    align: "start",
    loop: true,
  }}
  plugins={[
        Autoplay({
          delay: 6000,
        }),
   ]} >
        <CarouselContent className="">
          {ProjectsArr.map((project) => (
            <CarouselItem
              key={project.PId}
              className="h-full w-full"
            >
              <PCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 bg-gray-600 text-white hover:bg-gray-700 w-10 h-10 rounded-full shadow-lg" />
        <CarouselNext className="right-2 bg-gray-600 text-white hover:bg-gray-700 w-10 h-10 rounded-full shadow-lg" />
      </Carousel>
    </section>
    </div>
  );
}
