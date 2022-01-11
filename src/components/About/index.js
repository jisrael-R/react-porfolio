import React from "react";
import Info from "../../about-me";
import "./style.css"

function About(){
    return Info.map((res)=>{
        return(
            <section className="about-me" id="about">
                <div className="image">
                    <img src={`${process.env.PUBLIC_URL}/${res.image}`} alt={res.name}/>
                </div>
                <div 
                    className="content-txt">
                    <div 
                        className="short-info">
                        <h3>{res.name}</h3>
                        <p>{res.description}</p>
                    </div>
                    <div className="paragra">
                        <p>{res.about}</p>

                    </div>

                </div>

            </section>
        );
    })

}

export default About;