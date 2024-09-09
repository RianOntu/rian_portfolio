import React,{ useEffect, useRef } from 'react';
import './Contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({  offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  }, [])
    
   
    return (
        <div className='container flex contact mb-5' id="contact">
            <h4 className='git' style={{color:"#326BD3",fontWeight:"600"}}>Get In Touch</h4>
          <div className="contact_info">
          <a className='phone' style={{color:"white"}} href=""><img src={phone} style={{width:"30px",height:"30px"}} alt="" />(+88)01926226076</a>
          <a className='phone' style={{color:"white"}} href="mailto:rianontu13@gmail.com"><img src={email} style={{width:"30px",height:"30px"}} alt="" />Email</a>
          <a className='phone' style={{color:"white"}} href="https://www.linkedin.com/in/rian-al-nur-0553111b5/"><img src={linkedin} style={{width:"30px",height:"30px"}} alt="" />linkedin</a>
          </div>
            
        </div>
    );
};

export default Contact;