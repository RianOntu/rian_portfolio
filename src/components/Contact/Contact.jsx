import React,{ useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import fb from '../../assets/fb.png';
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
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(import.meta.env.VITE_serviceId, import.meta.env.VITE_templateId, form.current, import.meta.env.VITE_publicKey)
          .then((result) => {
              console.log(result.text);
              form.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='container contact mb-5' id="contact">
            <h1 className='text-center text-white git'>Get In Touch</h1>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className='contact_info' data-aos="fade-right">
                   <h3 className='text-white'><img className='phone' src={phone} alt="" /> +8801953588830</h3>
                   <h3 className='text-white'><img className='phone' src={email} alt="" /> rianontu13@gmail.com</h3>
                   <div className="d-flex mt-3">
                    <a href="https://www.facebook.com/rian.ontu"><img src={fb} className='phone mr-3' alt="" /></a>
                    <a href="https://www.linkedin.com/in/rian-ontu-0553111b5/"><img src={linkedin} className='phone' alt="" /></a>
                   </div>

                </div>
                <div className='form' data-aos="fade-left">
                <form ref={form} onSubmit={sendEmail}>
  <div class="form-group">
    <label for="exampleInputEmail1" className='text-white'>Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='text-white'>Your Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='text-white'>Your Message</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
  </div>
  
  <button type="submit" class="btn text-white w-100">Submit</button>
</form>

                </div>
            </div>
            
        </div>
    );
};

export default Contact;