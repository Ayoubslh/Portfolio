import PCard from "../comps/projectCard";
import iotlab from "./../../assets/projectsimages/IOTLab.png";
import inboxAI from "./../../assets/projectsimages/InboxAI.png"
import GuessGame from "./../../assets/projectsimages/GuessGame.png"

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
    description: "A learning platform for IoT enthusiasts and beginners.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL","Peer.js","Socket.io","Arduino-Cli"],
  },
  {
    PId: 222,
    image: inboxAI,
    title: "InboxAI",
    description: "Coming soon...",
    stack: ["React","Node.js","Express.js","MongoDB","Langchain.js"],
  },
  {
    PId: 333,
    image: GuessGame,
    title: "Guess Me Game",
    description: "Coming soon...",
    stack: ["React","Node.js","Express.js","WebSockets"],
  },
  {
    PId: 123,
    image: "",
    title: "Project Four",
    description: "Coming soon...",
    stack: [],
  },
];

export default function Projects() {
  return (
    <div className="mt-10 border-t-2 border-gray-700">
     <h1 className="text-center font-semibold text-3xl">Projects</h1>
    <section className="flex flex-col border-2 border-gray-50  rounded-lg  mt-6 w-full">
       
      <Carousel >
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
