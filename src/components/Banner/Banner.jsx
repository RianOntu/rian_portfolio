import React from 'react';
import './Banner.css';
import Typewriter from 'typewriter-effect';
import mypic from '../../assets/pic_rian.jpg';

const Banner = () => {
    return (
        <div className='container banner' id="home">
          <div className="flex">
              <div className="description">
                <h1 className='text-white'>Hi,I am <br />  RIAN-AL-NUR</h1><br />
        <div style={{fontSize:'44px',fontWeight:800,color:'white'}}>
        <Typewriter
  options={{
    strings: ['Front-End Developer', 'MERN stack developer','Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
        <p className='text-white'>
        I am very passionate about creating appealing and eye-catching websites.  I also focus on the website functionalities. I love to do this.
        </p>
        <a href='https://drive.google.com/uc?id=1JFOuA7A-f9ooO-z5CJYMlDdb9Mm_XQ4G&export=download'  className='btn text-white'><i class="fa-solid fa-download mr-2"></i>Download Resume</a>

              </div>
              <div className="image">
                <img className='ppic' src={mypic} alt="" />

              </div>
              

          </div>

            
        </div>
    );
};

export default Banner;