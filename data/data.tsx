import { SkillSet } from "../types/SkillSet";
import {
  SiPytorch,
  SiNumpy,
  SiCsharp,
  SiTypescript,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiApachehadoop,
  SiFastapi,
  SiFlutter,
  SiFlask,
  SiDjango,
  SiGodotengine,
  SiFirebase,
  SiUnity,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import { TbBrandCpp } from "react-icons/tb";
import { ProjectData } from "@/types/ProjectData";
import { DiSpark } from "react-icons/di";
import { TimelineEvent } from "@/types";

interface data {
  myName: string;
  myDiscription: string;
  myTitle: string;
  myEducation: TimelineEvent[];
  myExperience: TimelineEvent[];
  educationSummary: string;
  myPhone: string;
  myAddr: string;
  links: {
    myLinkedin: string;
    myGithub: string;
    myItchIo: string;
    myEmail: string;
  };
  mySkills: SkillSet[];
  myProjects: ProjectData[];
}

export const MyData: data = {
  myName: "Ezzat Esam Elsayed",
  myDiscription: `I am an AI engineer specialized in computer vision, a backend
            developer and a game dev hobbyist. Proficient in Python, C#,
            Typescript, and Go.`,
  links: {
    myEmail: "ezzatesam1214@gmail.com",
    myLinkedin: "https://www.linkedin.com/in/ezzatesam/",
    myGithub: "https://github.com/EzzatEsam",
    myItchIo: "https://ezzatesam.itch.io/",
  },
  myTitle: "Communication and Information Engineer",
  myExperience: [
    {
      title: " Intern, Using AI in wireless communications",
      date: "July 2023 - September 2023",
      location: "Zewail city of science and technology",
      description:
        "Developed a ML pipeline for predicting the throughput of a 5G mobile network using environmental data",
    },
    {
      title: "Intern, Robotics",
      date: "July 2023 - September 2023",
      location: "Zewail city of science and technology",
      description:
        " Used ROS (Robot Operating System) , moveit library and OpenCV to control a robotic arm controlled by an Arduino using feed from a connected camera.",
    },
  ],
  myEducation: [
    {
      date: "2019- 2024",
      title: "Zewail City of Science and Technology",
      description: "BSc. Communication and Information Engineering - 3.6/4 GPA",
    },
    {
      date: "2017",
      title: "Zewyet Bem secondary school",
      description: "Thanwya amma - Math - 98.4 %",
    },
  ],
  myAddr: "October Gardens, 6th of October City, Giza, Egypt",
  myPhone: "+201 016 475 725",
  educationSummary:
    "I graduated from zewail city of science and technology in 2024 with a 3.6/4 GPA. I have a BSc in Communication and Information Engineering",
  mySkills: [
    {
      name: "Programming Languages",
      innerSKills: [
        {
          name: "Python",
          logo: <FaPython size={25} color="#326B9B" />,
        },
        {
          name: "C#",
          logo: <SiCsharp size={25} color="#6D4ED4" />,
        },
        {
          name: "C++",
          logo: <TbBrandCpp size={25} color="#6295CB" />,
        },
        {
          name: "Typescript",
          logo: <SiTypescript size={25} color="#2F74C0" />,
        },
        {
          name: "Go",
          logo: <FaGolang size={25} color="#00A7D0" />,
        },
      ],
    },
    {
      name: "AI & Datascience",
      innerSKills: [
        {
          name: "Pytorch",
          logo: <SiPytorch size={25} color="#ED3C0E" />,
        },
        {
          name: "Tensorflow",
          logo: <SiTensorflow size={25} color="#ED8E24" />,
        },
        {
          name: "Numpy",
          logo: <SiNumpy size={25} color="#4BA6C9" />,
        },
        {
          name: "Pandas",
          logo: <SiPandas size={25} color="#120751" />,
        },
        {
          name: "Scikit-learn",
          logo: <SiScikitlearn size={25} color="#F09437" />,
        },
        {
          name: "PySpark",
          logo: <DiSpark size={25} />,
        },
        {
          name: "Hadoop",

          logo: <SiApachehadoop size={25} />,
        },
        // {
        //   name: "OpenCV",
        //   logo: <SiOpencv size={25} color="red" />,
        // },
      ],
    },
    {
      name: "Frontend",
      innerSKills: [
        {
          name: "React",
          logo: <FaReact size={25} color="#5DD3F3" />,
        },
        {
          name: "FLutter",
          logo: <SiFlutter size={25} color="#5AC2F0" />,
        },
      ],
    },
    {
      name: "Backend",
      innerSKills: [
        {
          name: "FastAPI",
          logo: <SiFastapi size={25} />,
        },
        {
          name: "Flask",
          logo: <SiFlask size={25} />,
        },
        {
          name: "Django",
          logo: <SiDjango size={25} color="#2AA473" />,
        },
        {
          name: "NextJS",
          logo: <SiNextdotjs size={25} />,
        },
      ],
    },
    {
      name: "Database",
      innerSKills: [
        {
          name: "MongoDB",
          logo: <SiMongodb size={25} color="green" />,
        },
        {
          name: "MySql",
          logo: <SiMysql size={25} />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase size={25} color="#FFC400" />,
        },
      ],
    },
    {
      name: "Game Dev",
      innerSKills: [
        {
          name: "Unity",
          logo: <SiUnity size={25} />,
        },
        {
          name: "Godot",
          logo: <SiGodotengine size={25} color="#53A4E0" />,
        },
      ],
    },
  ],

  myProjects: [
    {
      name: "MPEG Encoder/Decoder",
      description:
        "Implemented the H264 standard encoder and decoder for video compression/decompression with varying compression ratio up to 97%",
      technologies: ["Python", "OpenCV", "Numpy"],
      image:
        "https://raw.githubusercontent.com/EzzatEsam/MPEG-EncoderDecoderPython/main/2024-05-20-06-34-49.png",
      link: "https://github.com/EzzatEsam/MPEG-EncoderDecoderPython",
    },
    {
      name: "Pumbkin chaos - A top down 2d shooter game",
      description:
        " Developed a game for an online game jam and ranked the 46th over 370 submissions. \n The game utilized various mechanics and features including increasing difficulty, various enemy types, a leveling system and more",
      technologies: ["C#", "Godot"],
      image:
        "https://raw.githubusercontent.com/TeamFMOLs/PumpkinChaos/main/screenshot1.png",
      link: "https://github.com/TeamFMOLs/PumpkinChaos",
    },
    {
      name: "ZC Navigator",
      description:
        "This was a university project for Artificial intelligence course. The goal was to create a simple program to provide paths when navigation the campus. \n The program uses search techniques like DFS, BFS, A* and more.",
      technologies: ["Python", "numpy", "tkinter"],
      image:
        "https://raw.githubusercontent.com/EzzatEsam/Ai-Project-ZC-Navigator/main/image.png",
      link: "https://github.com/EzzatEsam/Ai-Project-ZC-Navigator",
    },
    {
      name: "OP.GG scrapper",
      description:
        "this script provides functionaliteis for scrapping info from OP.GG and saves to csv for further analysis",
      image:
        "https://raw.githubusercontent.com/EzzatEsam/OP.GG-Scrapper/main/screenshots/champ.png",
      link: "https://github.com/EzzatEsam/OP.GG-Scrapper",
      technologies: ["Python", "pandas", "selenium", "beautifulsoup"],
    },
    {
      name: "ZC Transcript analyzer",
      description:
        "A desktop app that can parse the pdf generated by Zewail city website for student grades. This is useful if you want to test how will your GPA be affected if you changed the course grade or enrolled in new courses without having to manually enter all your data in a normal GPA calculator",
      image:
        "https://raw.githubusercontent.com/EzzatEsam/Zc-Transcript-Analyzer/main/Screenshots/program.png",
      link: "https://github.com/EzzatEsam/Zc-Transcript-Analyzer",
      technologies: ["Go", "Fyne (GUI library)"],
    },
    {
      name: "Todo list application  backend API",
      description:
        "An API for a todo list application, supports accounts creation, having multiple todo groups (projects) per account and each group having multiple todos. The API is authenticated with .NET's identity system and secured with JWT tokens.",
      image:
        "https://raw.githubusercontent.com/EzzatEsam/TodoApplicationBackendAspDotNet/main/Github/Screenshots/2024-06-26-21-38-48.png",
      link: "https://github.com/EzzatEsam/TodoApplicationBackendAspDotNet",
      technologies: ["C#", "ASP.NET Core", "Entity Framework core"],
    },
    {
      name: "Todo list application frontend",
      description:
        "A single page react app for a todo list application, styled with tailwindcss",
      image:
        "https://raw.githubusercontent.com/EzzatEsam/TodoAppFrontendReact/main/Github/Screenshots/Home1.png",
      link: "https://github.com/EzzatEsam/TodoAppFrontendReact",
      technologies: ["React", "Tailwindcss"],
    },
  ],
};
