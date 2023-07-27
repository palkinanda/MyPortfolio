import Tag from "../Tag/Tag";
import "./ProjectTemplate.scss";

const ProjectTemplate = ({ projectName, projectIcon, projectDesc, tags, button, icon, img, link }) => {
  return (
    <div className="project">
      <div className="project-details">
        <h2 className="project-name">{projectName} <i>{projectIcon}</i></h2>

        <span className="project-desc">{projectDesc}</span>

        <div className="tags">
          {/*<h2 className="tech-stack">Technologies used:</h2>

          {/*<div className="tags-wrapper">
            {tags.map((tag) => {
              return <Tag key={projectName} title={tag} />;
            })}
          </div> */}
          <a href={link} target="_blank"><button className="button">{button} <i>{icon}</i></button></a>

        </div>
      </div>

      <div className="project-image">
        <a href={link} target="_blank"> <img src={img} alt="project" /></a>
      </div>
    </div>
  );
};

export default ProjectTemplate;
