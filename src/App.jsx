import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
};

export default App;