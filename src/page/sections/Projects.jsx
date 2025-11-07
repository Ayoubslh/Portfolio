import PCard from "../comps/projectCard";
import inboxAI from "./../../assets/projectsimages/inboxbig.png";
import iotlab from "./../../assets/projectsimages/iot.png";
import sanned from "./../../assets/projectsimages/sanned.png";
import streamous from "./../../assets/projectsimages/streaminplat.png";
import techstore from "./../../assets/projectsimages/techstore.png";
import nextech from "./../../assets/projectsimages/nextech.png";
import loney from "./../../assets/projectsimages/loney.png";

const ProjectsArr = [
  {
    PId: 111,
    image: iotlab,
    title: "IOT Lab",
    description:
      "IOTLAB - A web Platform for: IOT Students , IOT Enthusiats and Self-LearnersIf you want to start in iot or hone your skills , but you don't have access to hardware part this is for you.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Peer.js", "Socket.io", "Arduino-Cli"],
    demo: false,
    codeLink: "https://github.com/Ayoubslh/IOTLAB",
  },
  {
    PId: 222,
    image: inboxAI,
    title: "InboxAI",
    description:
      "A smart email assistant powered by AI, designed to help you manage emails more efficiently using the LangChain framework for AI Agent development. We implemented two main agents: Email Processing Agent: Categorizes, prioritizes, and summarizes your emails to ensure you focus on what matters most. Reply Suggestion Agent: Generates intelligent email responses, saving you time and effort.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Langchain.js"],
    demo: false,
    codeLink: "https://github.com/Ayoubslh/InboxAI",
  },
  {
    PId: 333,
    image: streamous,
    title: "Streamous",
    description: "A simple movie platform that allows users to view and read about Movies.",
    stack: ["HTML", "CSS", "Javascript", "TMDB API"],
    demo: true,
    demoLink: "https://ayoubslh.github.io/MovieApp",
    codeLink: "https://github.com/Ayoubslh/MovieApp",
  },
  {
    PId: 444,
    image: techstore,
    title: "TechStore",
    description:
      "An e-commerce website and mobile app that allows users to buy and sell tech products. Users can create an account, browse products, add items to their cart, and checkout securely. (mobile app repo:storemobile , backend repo: E-Shop )",
    stack: ["React", "React Native", "Node.js", "Express.js", "MongoDB"],
    demo: true,
    demoLink: "https://hptecs.vercel.app/",
    codeLink: "https://github.com/Ayoubslh/StoreWeb",
  },
  {
    PId: 555,
    image: sanned,
    title: "Sanned",
    description:
      "A humanitarian mobile apps that allows users in crisis area to request or offer help , offlline first app with online sync when connection is available. Also the possibility of viewing location and offering donations to people in need.",
    stack: ["React Native", "Expo", "WatermelonDB"],
    demo: true,
    demoLink:
      "https://drive.google.com/file/d/1T3W6jQNqGaR0KSkDeT6aAflZq0_77DEl/view?usp=drivesdk",
    codeLink: "https://github.com/Ayoubslh/Sanned",
  },
  {
    PId: 666,
    image: nextech,
    title: "NexTech",
    description:
      "Nextech squad official website , a tech community that aims to help developers and tech enthusiasts to grow their skills and knowledge through workshops, articles, and projects.",
    stack: ["React", "Taiwlind"],
    demo: true,
    demoLink: "https://nextechsquad.netlify.app",
    codeLink: "https://github.com/Ayoubslh/Nextech",
  },
  {
    PId: 777,
    image: loney,
    title: "Loney",
    description:
      "Loan management system that helps users to manage their personal loans effectively. Users can track their loan amounts, interest rates, payment schedules, and remaining balances all in one place.",
    stack: ["React Native", "Nativewinde"],
    demo: true,
    demoLink:
      "https://mega.nz/file/eMtnETob#_rrTg4sgR0pekDluWioRMD-f3o7mHAFL7-Ik2aQ3Kow",
    codeLink: "https://github.com/Ayoubslh/LMS",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="border-t-4 border-gray-600 mt-15 px-4">
      <h1 className="text-center font-semibold text-3xl">Projects</h1>

      <section className="mt-6 w-full">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {ProjectsArr.map((project) => (
            <div key={project.PId} className="w-full">
              <PCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
