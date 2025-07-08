import PCard from "../comps/projectCard";
import iotlab from "./../../assets/projectsimages/IOTLab.png";
import inboxAI from "./../../assets/projectsimages/InboxAI.png"
import GuessGame from "./../../assets/projectsimages/GuessGame.png"
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
    image: GuessGame,
    title: "Guess Me Game",
    description: "A simplr fun Gmae built with react and Express , Two players try to guess eachother's picture by asking quetions, players must be present",
    stack: ["React","Node.js","Express.js","WebSockets"],
    demo:false
  },
 
];

export default function Projects() {
  return (
    <div id="projects" className="  border-t-4 border-gray-600 mt-15">
     <h1 className="text-center font-semibold text-3xl">Projects</h1>
    <section className="flex flex-col border-2 border-gray-50  rounded-lg  mt-6 w-full">
       
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
