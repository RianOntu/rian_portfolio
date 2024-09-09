import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Certification from './components/Certification/Certification';
import Resume from './Resume/Resume';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Skills></Skills>
      <Projects></Projects>
      <Certification></Certification>
      <Contact></Contact>
    </div>
  );
};

export default App;