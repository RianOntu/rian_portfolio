import React, { useEffect } from 'react';
import './Skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import bootstrap from '../../assets/bootstrap.png';
import javaScript from '../../assets/js.png';
import node from '../../assets/nodejs.png';
import express from '../../assets/express.png';
import reactjs from '../../assets/react.png';
import mongo from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import github from '../../assets/github.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Skills = () => {
    useEffect(() => {
        AOS.init({  offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
      }, [])
    return (
        <div className='container skills' id="skills">
           <h1 className='text-center text-white skills-text'>My Skills</h1>
           <div className="grid skill_icon mt-5 mb-5" data-aos="fade-up">
           <img src={html} alt="" />
           <img src={css} alt="" />
           <img src={bootstrap} alt="" />
           <img src={javaScript} alt="" />
           <img src={node} alt="" />
           <img src={express} alt="" />
           <img src={reactjs} alt="" />
           <img src={mongo} alt="" />
           <img src={firebase} alt="" />
           <img src={github} alt="" />
            
           </div>
            
        </div>
    );
};

export default Skills;