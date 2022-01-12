import React from "react";
import './style.css'

function Nav(props){
    const{
        aboutSelected, 
        setAboutSelected,
        projectsSelected,
        setProjectsSelected,
        contactSelected, 
        setContactSelected,
        resumeSelected,
        setResumeSelected

    } = props;
    return(
    
       <header>
           
           <h2>
               <a className="brand-logo" href="../react-porfolio/">Jorman Israel</a>
           </h2>
           <nav>
               <ul className="nav-list">
                   <li>
                       <a 
                     className={`${aboutSelected}`}
                       href="#about"
                       onClick={()=> {
                           setAboutSelected(true);
                           setProjectsSelected(false);
                           setContactSelected(false);
                           setResumeSelected(false);
                    }}
                       >About Me</a>
                   </li>
                   <li>
                       <a 
                     className={`${projectsSelected}`}
                       href="#projects"
                       onClick={()=> {
                           setAboutSelected(false);
                           setProjectsSelected(true);
                           setResumeSelected(false);
                           setContactSelected(false);
                    }}
                       >Porfolio</a>
                   </li>
                   <li>
                       <a 
                       className={`${contactSelected}`}
                       href="#contact"
                       onClick={()=> {
                           setAboutSelected(false);
                           setProjectsSelected(false);
                           setContactSelected(true);
                           setProjectsSelected(false);
                           setResumeSelected(false);
                    }}
                       >Contact</a>
                   </li>
                   <li>
                       <a 
                       className={`${resumeSelected}`} 
                       href="#resume"
                       onClick={()=> {
                           setAboutSelected(false);
                           setProjectsSelected(false);
                           setContactSelected(false);
                           setResumeSelected(true);
                    }}
                       >Resume</a>
                   </li>
               </ul>
           </nav>
       </header>
       
    );
}

export default Nav;
