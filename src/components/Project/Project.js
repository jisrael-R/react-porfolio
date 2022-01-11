import React from "react";
import ProjectList from "../ProjectList";
import './style.css'
function Project(){
    
    return(
        <section className="project" id="projects">
            <div className="title-container" >
                <h1 className="title">Porfolio</h1>
            </div>
           <ProjectList />
        </section>
    )
}

export default Project;