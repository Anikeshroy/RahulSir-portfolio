import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter, } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

const Body =styled.div`
background-color: ${({ theme }) => theme.bg};

width:100%;
height:90vh;
overflow-x:hidden;
position:relative;
`;
function App() {
  return(
    <ThemeProvider theme={darkTheme} >
      <BrowserRouter>
      <Navbar />
      <Body>
          <Hero />
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/>
          <Contact/>
      </Body>
      </BrowserRouter>
    
    </ThemeProvider>
    );
}

export default App;
