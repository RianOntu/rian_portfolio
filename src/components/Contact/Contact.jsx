import React from 'react';
import './Contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import fb from '../../assets/fb.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
    return (
        <div className='container contact mb-5'>
            <h1 className='text-center gradient-text git'>Get In Touch</h1>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div>
                   <h3><img className='phone' src={phone} alt="" /> +8801953588830</h3>
                   <h3><img className='phone' src={email} alt="" /> rianontu13@gmail.com</h3>
                   <div className="d-flex mt-3">
                    <a href="https://www.facebook.com/rian.ontu"><img src={fb} className='phone mr-3' alt="" /></a>
                    <a href="https://www.linkedin.com/in/rian-ontu-0553111b5/"><img src={linkedin} className='phone' alt="" /></a>
                   </div>

                </div>
                <div>
                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Your Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Your Message</label>
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