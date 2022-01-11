import React from "react";
import Info from "../../about-me";
import './style.css';

function Footer(){
  return Info.map((res)=>{
      return (
          <section className="footer" id="contact">
              <div className="contactList">
                <a className="slow" href={res.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
                <a className="slow" href={res.github} rel="noreferrer" target="_blank">Github</a>
                <a className="slow" href="mailto:jorman.iisrael@me.com">Email</a>
              </div>  
          </section>
      );
  });
}

export default Footer;