import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";
import project from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import {AiOutlineShoppingCart} from "react-icons/Ai";
import {FiArrowUpRight} from "react-icons/Fi";
import Intelligo from "../../assets/intelligo.png";
import {LuMapPin} from "react-icons/Lu";
import {FaMapPin} from "react-icons/Fa"


const Projects = () => {
  const [tags] = useState([
    "React",
    "CSS/SCSS",
    "NodeJS",
    "Express",
    "More...",
  ]);
  return (
    <div className="projects-wrapper">
    <div></div>
      <ProjectTemplate
      heading="Projects"
        projectName="CityKart"
        projectIcon={<AiOutlineShoppingCart/>}
        projectDesc="CityKart Provides an E-commerce platform for local retail sellers to list their items and for buyer to explore their inventory. It creates a marketplace city listing down every shop with seller detail.
        Buyers can see a real time inventory of a seller, compare the prices of similar products being sold by other shops nearby them."
        button="visit site"
        icon={<FiArrowUpRight/>}
        link={"https://city-kartstartup.netlify.app/"}
        img={project}
      />
      <ProjectTemplate
        projectName="Intelligo"
        projectIcon={<LuMapPin/>}
        projectDesc="Intelligo is an intelligent tourist guide system that Benefits the tourist by offering customized offers
        Suggestions, route optimization, discover hidden treasures, Ensure safety and comfort throughout the journey. The problem that this project aims to solve is the challenge that many tourists
face when trying to navigate an unfamiliar area."
        button="visit site"
        icon={<FiArrowUpRight/>}
        link={"https://travelwebsitenikhil.netlify.app/"}
        img={Intelligo}
      />
      <div></div>
    </div>
    
  );
};

export default Projects;
