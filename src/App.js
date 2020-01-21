import React, {useState} from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Hero} from "react-bulma-components";

import About from "./components/About"
import Contact from "./components/Contact"
import HeroFooter from "./components/HeroFooter"
import Projects from "./components/Projects"
import Landing from "./components/Landing"

function App() {
  const [whichComponentToShow, setComponentToShow] = useState("Landing")
  
  const about = () => {
    setComponentToShow("About")
  }

  const contact = () => {
    setComponentToShow("Contact")
  }
  
  const projects = () => {
    setComponentToShow("Projects")
  }

  const landing = () => {
    setComponentToShow("Landing")
  }

  if(whichComponentToShow === "About"){
    return (
        <Hero size="fullheight" color="danger" gradient>
          <HeroFooter components={[about, contact, projects, landing]}/>
          <Hero.Body>
            <About/>
          </Hero.Body>
        </Hero>
    );
  }
          
  else if(whichComponentToShow === "Contact"){
    return (
        <Hero size="fullheight" color="primary" gradient>
          <HeroFooter components={[about, contact, projects, landing]}/>
          <Hero.Body>
            <Contact/>
          </Hero.Body>
        </Hero>
    );
  }
          
          
  else if(whichComponentToShow === "Projects"){
    return (
        <Hero size="fullheight" className="my-projects">
          <HeroFooter components={[about, contact, projects, landing]}/>
          <Hero.Body>
            <Projects/>
          </Hero.Body>
        </Hero>
    );
  }
          
         

  else if(whichComponentToShow === "Landing"){
    return(
      <Hero size="fullheight" color="dark" gradient>
          <HeroFooter components={[about, contact, projects, landing]}/>
          <Hero.Body>
           <Landing />
          </Hero.Body>
        </Hero>
    )
  }
          
  else{
    return(
      <h1 className="has-text-center"> This page does not exist</h1>
    )
  }
}

export default App;
          

           

            
            
          
          

