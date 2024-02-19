
import React, { useState } from "react";



const Portfolio = () => {
  const [projects] = useState([
   
  ]);

  return (
    <section className="sections work">
      
      <div className="section-content">
      <p className="about-me"> I hav experience with HTML, CCS, Javascript, Github, Node.JS, Insomnia, MongoDB, Docker, API's, Heroku, Postman, VS Code, Bycrpt, NPM, etc. </p>
        {projects.map((project, i) => (
          <div className="wrapper">
            <div className="container" key={i}>
              <a href={project.appUrl}>
               
              </a>
              <div className="text-block">
                {project.name}
                <br/>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;