import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default App;