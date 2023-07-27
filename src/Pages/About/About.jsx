import "./About.scss";
import resume from "../../assets/Resume1.pdf";
import { BsDownload } from "react-icons/bs";
import {FcBusinesswoman} from "react-icons/Fc";
import Social from "../../Components/Social/Social";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";





const About = () => {
  return (
    <div className="about about_container">
      <div className="name">
        <div>
          <h1 className="txt">
            AB <br /> OU
          </h1>
        </div>
        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
      </div>

      <div className="about_data">
       <div>
       <h1 className="about_heading">Innovative <span>Full-Stack Web Developer</span> with a Knack for Problem-Solving</h1>
       <p className="about_description">Hi, I'm a junior full-stack developer based in the picturesque city of Chandigarh.
        Passionate about transforming ideas into functional and beautiful web applications,
        I never stop learning, always seeking to enhance my knowledge and abilities in the dynamic world of development.
        Eager to embrace challenges, I find immense satisfaction in honing my skills and staying updated with the latest trends in the tech industry.</p>
        <button> <a download="" href={resume} className="button button--flex" >Resume <i><BsDownload /></i></a></button>
        <div className="about_social">
        <Social logo={html} className="social"/>
        <Social logo={node} className="social"/>
        <Social logo={react} className="social" />
        <Social logo={tailwind} className="social" />

        </div>
     
        </div>
        <img className="about_img" alt="Coder GIF" src="https://physicsgurukul.files.wordpress.com/2019/02/character-1.gif" />

      </div>
    </div>
  );
};

export default About;
