import { FaReact, FaNodeJs, FaJava, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb,SiVite ,SiExpress, SiFirebase} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiSocketdotio, SiBlender, SiUnity, SiGit, SiGithub,SiShadcnui,SiLangchain  } from "react-icons/si";

import { LiaProjectDiagramSolid } from "react-icons/lia"; // For PeerJS
import { FaGithub } from "react-icons/fa";

export const TechArrLanguages = [
  { icon: IoLogoJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: FaJava, name: "Java", color: "#f89820" },
  { icon: FaCss3Alt, name: "CSS3", color: "#2965f1" },
  { icon: FaHtml5, name: "HTML5", color: "#e34f26" },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    name: "C",
    color: "#00599C",
  },
];

export const TechArrFront = [
  {
    icon: FaReact,
    name: "React",
    color: "#61DAFB", // React Blue
  },
  {
    icon: SiVite,
    name: "Vite",
    color: "#646CFF", // Vite Purple
  },
];


export const TechArrBack = [
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#3C873A", // Node Green
  },
  {
    icon: SiExpress,
    name: "Express.js",
    color: "#000000", // Black (minimal logo)
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248", // Mongo Green
  },
  {
    icon: GrMysql,
    name: "MySQL",
    color: "#00758F", // MySQL Blue
  },
  
 
];

export const TechArrMobile = [
  {
    icon: TbBrandReactNative,
    name: "React Native",
    color: "#61DAFB", // Same as React
  },
   {
    icon: SiFirebase,
    name: "Firebase",
    color: "#FFCA28", // Firebase Yellow
  },
]

export const TechArrTools = [
  {
    icon: LiaProjectDiagramSolid,
    name: "PeerJS",
    color: "#764ABC", // Just a nice purple (no official color)
  },
  {
    icon: SiSocketdotio,
    name: "Socket.IO",
    color: "#010101", // Black
  },
   {
    icon: SiLangchain,
    name: "Langchain.js",
    color: "#3b3b3b",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    color: "#38BDF8",
  },
  {
    icon: SiShadcnui,
    name: "shadcn/ui",
    color: "#FFFFFF", // Neutral white
  },
  {
    icon: SiBlender,
    name: "Blender",
    color: "#F5792A",
  },
  {
    icon: SiUnity,
    name: "Unity",
    color: "#000000",
  },
  {
    icon: SiGit,
    name: "Git",
    color: "#F05032",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#181717",
  },
];