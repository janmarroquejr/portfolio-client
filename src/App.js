import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Hero, Container, Heading, Button} from "react-bulma-components";

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

  if(whichComponentToShow == "About"){
    return (
        <Hero size="fullheight" color="danger" gradient>
          <Hero.Body>
            <About/>
          </Hero.Body>
          
            <HeroFooter components={[about, contact, projects, landing]}/>
          
          
        </Hero>
    );
  }

  else if(whichComponentToShow == "Contact"){
    return (
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Body>
            <Contact/>
          </Hero.Body>
          
            <HeroFooter components={[about, contact, projects, landing]}/>
          
        </Hero>
    );
  }
  else if(whichComponentToShow == "Projects"){
    return (
        <Hero size="fullheight" color="info" gradient>
          <Hero.Body>
            <Projects/>
          </Hero.Body>
          
            <HeroFooter components={[about, contact, projects, landing]}/>
         
        </Hero>
    );
  }

  else if(whichComponentToShow == "Landing"){
    return(
      <Hero size="fullheight" color="info" gradient>
          <Hero.Body>
           <Landing />
          </Hero.Body>
          
            <HeroFooter components={[about, contact, projects, landing]}/>
          
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
           

            
            
