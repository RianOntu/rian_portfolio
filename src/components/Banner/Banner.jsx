import React from 'react';
import './Banner.css';
import moon from '../../assets/full-moon.png';
import astronaut from '../../assets/astronaut.png';
import wave from '../../assets/wave.png';

const Banner = () => {
    return (
        <div className='container banner' id="home">
          <div className="flex align-items-center">
              <div className="description">
                <h1 className='text-white'><span style={{fontSize:'20px',fontWeight:400,color:'#326BD3',fontFamily:"monospace"}}>Hi,I am <span class="waving-hand">👋</span></span> <br /> <span className='name' style={{fontFamily:"sans-serif",fontWeight:"800",color:"#CCD6F6",lineHeight:"2",fontSize:'40px'}}>RIAN-AL-NUR</span><br /><span style={{color:"#8892B0",fontSize:'40px',fontWeight:"800"}}>Frontend Dev</span>  </h1><br />
       
        <p className='text-white'>
        I am very passionate about creating appealing and eye-catching websites.  I also focus on the website functionalities. I love to do this. Eagerly waiting for any kind of opportunities !
        </p>
        {/* <a href='https://drive.google.com/uc?id=1gvaU0LND5CSq4KA4K3A2atAoVNZZpzCU&export=download'  className='btn text-white'><i class="fa-solid fa-download mr-2"></i>Download Resume</a> */}

              </div>
              <div className="image">
                <img className='moon' src={moon} alt="" />
                <img style={{height:"120px",width:"120px"}} className='astronaut' src={astronaut} alt="" />


              </div>
              

          </div>

            
        </div>
    );
};

export default Banner;