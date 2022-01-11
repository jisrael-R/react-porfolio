import React,{ useState } from 'react';
import './App.css';
import Nav from './components/Header/Nav';
import Main from './components/Main';
import Project from './components/Project/Project';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected]=useState(false);
  return (
    <div className="App">
      <Nav 
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      projectsSelected={projectsSelected}
      setProjectsSelected={setProjectsSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      />
      
      <Main /> 
     <section>
      {projectsSelected && <Project></Project> }
      {aboutSelected && <About></About> }
      {contactSelected && <Contact></Contact>}
      {resumeSelected && <Resume></Resume>}
     </section>
     <Footer />
      
    </div>
  );
}

export default App;
