import React, { useEffect } from 'react';
import './AboutMe.css';
import about_me2 from '../../assets/aboutme3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({  offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  }, [])
    return (
        <div className='container aboutme' id="aboutme">
            <h1 className='text-center gradient-text aboutme_text'>About Me</h1>
            <div className="flex mt-5">
              <div data-aos="fade-right">
              <img className='about_me' src={about_me2} alt="" />
              </div>
              
              <div className='about_me_desc' data-aos="fade-left">
                <p className='text-white text-justify'>
                I am RIAN-AL-NUR, a recent graduate with a BSc in Computer Science and Engineering from the American International University-Bangladesh. Throughout my academic journey, I have acquired a diverse range of skills and knowledge. Additionally, I have recently completed MERN stack development training from Programming Hero.Frontend development is my passion, and I am eager to work collaboratively in a team environment while continuously learning new web technologies. I am also driven to contribute to a company's needs and goals.
                </p>
              </div>
            </div>
            
        </div>
    );
};

export default AboutMe;