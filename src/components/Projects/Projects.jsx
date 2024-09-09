import React, { useEffect } from 'react';
import './Projects.css';
import toy from '../../assets/toy_house.png';
import untlip from '../../assets/untlip.png'
import knowledge from '../../assets/knowledge.png'
import geometry from '../../assets/geometry.png'
import legal from '../../assets/legal.png'
import gthree from '../../assets/gthree.png'
import bootstrap from '../../assets/bootstrap.png';
import javaScript from '../../assets/js.png';
import node from '../../assets/nodejs.png';
import express from '../../assets/express.png';
import mongo from '../../assets/mongodb.png';
import reactjs from '../../assets/react.png';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import react_router from '../../assets/react-router.png';
import tailwind from '../../assets/tailwind.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(() => {
    AOS.init({  offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  }, [])
    return (
        <div className='container projects flex align-items-start' id="projects">
            <h4 className='project_title' style={{color:"#326BD3",fontWeight:"600"}}>Projects</h4>
            <div className="projects_grid">
            <div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={toy} style={{objectFit:"cover"}} alt="Card image cap"/>
  <div class="card-body">
   
    <h5 class="card-title text-center text-white">Toy House</h5>

   
   <div className='project_description' style={{height:'150px'}}>
   <p class="card-text text-center text-white" style={{textAlign:"justify"}}>It is a full stack(MERN) project for kids to explore various car toys.Implemented authentication system using firebase google login and email,password login.Logged in sellers can add toys and see their toys.Implemented see car by categories and subcategories,searching system in the all toys page,private
   route</p>
   </div>
   <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={mongo} alt="" />
        <img style={{width:"30px",height:"30px"}} src={express} alt="" />
        <img style={{width:"30px",height:"30px"}} src={reactjs} alt="" />
        <img style={{width:"30px",height:"30px"}} src={node} alt="" />
   </div>
   
    <div className='d-flex justify-content-center'>
         <a href='https://toy-house-client.web.app/' className='btn text-white'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/toy-house-client" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
         <a href="https://github.com/RianOntu/toy-house-server" className='btn text-white' ><i class="fa-brands fa-github mr-2"></i>Server</a>
    </div>

  </div>
</div>
          {/* second project       */}

          <div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={untlip} style={{objectFit:"cover"}} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Untlip</h5>
    <div className='project_description' style={{height:'150px'}}>
    <p class="card-text text-center text-white">This is a dashboard which is build using HTML,CSS,ReactJS,React Router etc</p>
    </div>
    <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={html} alt="" />
        <img style={{width:"30px",height:"30px"}} src={css} alt="" />
        <img style={{width:"30px",height:"30px"}} src={tailwind} alt="" />
        <img style={{width:"30px",height:"30px"}} src={reactjs} alt="" />
        <img style={{width:"30px",height:"30px"}} src={react_router} alt="" />
   </div>
    
    
    <div className='d-flex justify-content-center'>
         <a href='https://untlip-53382.web.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/untlip" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>
{/* third project */}

<div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={knowledge} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Knowledge Cafe</h5>
    <div className='project_description' style={{height:'150px'}}>
    <p class="card-text text-center text-white">This is a static website/landing page, where user can bookmark any article.Also they can figure out how much time they need to read the articles.</p>
    </div>
    <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={html} alt="" />
        <img style={{width:"30px",height:"30px"}} src={css} alt="" />
        <img style={{width:"30px",height:"30px"}} src={bootstrap} alt="" />
        <img style={{width:"30px",height:"30px"}} src={reactjs} alt="" />
        
   </div>
    
    <div className='d-flex justify-content-center'>
         <a href='https://glittering-lamington-a450cd.netlify.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/knowledge-cafe" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>

<div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={geometry} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Geometry Genius</h5>
    <div className='project_description' style={{height:'150px'}}>
    <p class="card-text text-center text-white">This is a React web app,where users can calculate area of different geometrical shapes</p>
    </div>
    <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={html} alt="" />
        <img style={{width:"30px",height:"30px"}} src={css} alt="" />
        <img style={{width:"30px",height:"30px"}} src={bootstrap} alt="" />
        <img style={{width:"30px",height:"30px"}} src={reactjs} alt="" />
        
   </div>
    
    
    <div className='d-flex justify-content-center'>
         <a href='https://64a280c1992e0e56156f1cad--sunny-liger-3437f4.netlify.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/Geometry_Genious" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>

<div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={legal} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Legal Solutions</h5>
    <div className='project_description' style={{height:'150px'}}>
    <p class="card-text text-center text-white">This is a simple landing page which i converted from a psd to this using HTML,CSS and Bootstrap</p>
    </div>
    <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={html} alt="" />
        <img style={{width:"30px",height:"30px"}} src={css} alt="" />
        <img style={{width:"30px",height:"30px"}} src={bootstrap} alt="" />
        
        
   </div>
    
    
    <div className='d-flex justify-content-center'>
         <a href='https://adorable-travesseiro-49c25b.netlify.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/legal_solution" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>

<div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={gthree} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">G3 Architect</h5>
    <div className='project_description' style={{height:'150px'}}>
    <p class="card-text text-center text-white">This is another simple landing page which i converted from a psd to this using HTML,CSS and Bootstrap</p>
    </div>
    <div className="technologies">
        <img style={{width:"30px",height:"30px"}} src={html} alt="" />
        <img style={{width:"30px",height:"30px"}} src={css} alt="" />
        <img style={{width:"30px",height:"30px"}} src={bootstrap} alt="" />
        
        
   </div>
    
    <div className='d-flex justify-content-center'>
         <a href='https://rianontu.github.io/PH_assignment_2/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/G3_architects" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;