import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cover from "./Components/Cover/Cover.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Achievement from './Components/Achievments/Acheivment.jsx'
import Projects from "./Components/Projects/Projects.jsx";
import Certificate from "./Components/Certificate/Certificate.jsx"
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Cover />
      {/* <DivSpace /> */}
      <AboutMe />
      <Skills />
      <Projects />
      <Achievement/>
      <Certificate/>
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
