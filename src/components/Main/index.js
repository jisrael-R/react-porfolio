import React from "react";
import './style.css'
import coverImage from '../../assets/img/cover.jpg'


function Main(){
    
return(
    <main>
        <div className="col">
            <div className="brief">
                <p>I'm a Creative FullStack <span>Dev<span className="span">eloper</span></span></p>
                <div>
                    <small>coding less lines, creating more!</small>
                </div>
            </div>
            <div className="cover">
                <img
                className="main-cover" 
                src={coverImage}
                alt="art"
                />
            </div>
        </div>
        
    </main>
);
};

export default Main;