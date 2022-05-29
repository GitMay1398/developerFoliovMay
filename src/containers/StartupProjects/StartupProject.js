import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
          <div className="startup-project-text">
          <section class="tiles">
              {bigProjects.projects.map(project => {
              return (
        
                <article class="style1">
                  <span class="image">
                  <img src={project.image} alt={project.imageAlt}/>
                  </span>
                  <a href="" target="_blank">
                      <h2>{project.titleProjet}</h2>
                      <div class="content">
                          <p>{project.projectDescription}</p>
                      </div>
                  </a>
                </article>
              );
              })}
          </section>
          </div>
         </div>
    </div>

    </Fade>
    
    );
  }
