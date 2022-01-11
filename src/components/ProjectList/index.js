import React from "react";
import JSON from '../../porfolio'
import "./style.css"

function ProjectList(){
 return JSON.map((pages)=>{
    return(
        <div className="contain">
                    
        <div className="info">
        
            <img 
            className="project-img"
            src={`${process.env.PUBLIC_URL}/${pages.image}`} 
            alt={pages.name}></img>
            <div className="text">
                <h3>{pages.name}</h3>
            <p className="decription">{pages.description}</p>
            <p className="tech">{pages.technologies}</p>
            <div className="anchors">
                <a href={pages.repo} rel="noreferrer" target='_blank'>Repo</a>
                <a href={pages.deployed} rel="noreferrer" target='_blank'>Deployed</a>
            </div>
            </div>
        </div>

    </div>
    );
 });
}
export default ProjectList;