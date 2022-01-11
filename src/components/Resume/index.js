import React from "react";
import Info from "../../about-me";
import './style.css'

function Resume(){
    return Info.map((res)=>{
    return(
    <section className="resu-cont" id="#resume">
        <div>
            <h2 className="resu-title">Resume</h2>
            </div>
        <div className="resu-list">
            <div className="list-tech">
                <div>
                    <h3>Front End</h3>
                </div>
            <ol>
                {res.frontEnd.map(select =>
                <li>{select}</li>
                )}
            </ol>
            </div>

            <div className="list-tech">
                <div>
                    <h3>Back End</h3>
                </div>
            <ol>
            {res.backEnd.map(select =>
                <li>{select}</li>
                )}
            </ol>
            </div>
         </div>

    </section>);


}
    
)}
export default Resume;