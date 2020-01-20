import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Hero, Container, Heading, Button} from "react-bulma-components";

import About from "./components/About"
import Contact from "./components/Contact"
import HeroFooter from "./components/HeroFooter"
import Projects from "./components/Projects"

function App() {
  return (
      <Hero size="fullheight" color="info" gradient>
        <Hero.Body>
          <About/>
          
          
          
        </Hero.Body>
      </Hero>
     );
}

export default App;
