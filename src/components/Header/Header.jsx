import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark ">
 <div className="container">
 <a class="navbar-brand" href="#" style={{color:"#326BD3"}}>RianOntu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
     
      <li class="nav-item ">

        <a class="nav-link"  href="#home"><span style={{color:"white"}}>01.</span><span style={{color:"#326BD3"}}>Home</span></a>
      </li>
      <li class="nav-item ">

        <a class="nav-link"  href="#aboutme"><span style={{color:"white"}}>02.</span><span style={{color:"#326BD3"}}>About Me</span></a>
      </li>
      <li class="nav-item ">

        <a class="nav-link"  href="#skills"><span style={{color:"white"}}>03.</span><span style={{color:"#326BD3"}}>Skills</span></a>
      </li>
      <li class="nav-item ">

        <a class="nav-link"  href="#projects"><span style={{color:"white"}}>04.</span><span style={{color:"#326BD3"}}>Projects</span>
        </a>
      </li>
      
      <li class="nav-item ">

        <a class="nav-link"  href="#contact"><span style={{color:"white"}}>05.</span><span style={{color:"#326BD3"}}>Contact</span></a>
      </li>
    
    </ul>
  
  </div>
 </div>
</nav>
            
        </div>
    );
};

export default Header;