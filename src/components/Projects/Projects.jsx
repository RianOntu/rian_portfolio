import React, { useEffect } from 'react';
import './Projects.css';
import toy from '../../assets/toy-house.png';
import chef from '../../assets/chef_world.png';
import dream from '../../assets/dream-job.png';
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
        <div className='container projects' id="projects">
            <h1 className='text-center text-white project_title'>My Projects</h1>
            <div className="row row-cols-1 mt-5">
            <div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={toy} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Toy House</h5>
    <p class="card-text text-center text-white">● It is a full stack(MERN) project for kids to explore various car toys.
● Implemented authentication system using firebase google login and email,password login.
● Logged in sellers can add toys and see their toys.
● Implemented see car by categories and subcategories,searching system in the all toys page,private
route</p>
    <hr />
    <h5 className='text-center text-white'>Used Technologies:</h5>
    <div className="technologies">
      <p className="technology">HTML</p>
      <p className="technology">CSS</p>
      <p className="technology">ReactJS</p>
      <p className="technology">Bootstrap</p>
      <p className="technology">Firebase</p>
      <p className="technology">NodeJS</p>
      <p className="technology">ExpressJS</p>
      <p className="technology">MongoDB</p>
      <p className="technology">React-router</p>
      <p className="technology">AOS</p>
    </div>
    <hr />
    <div className='d-flex justify-content-center'>
         <a href='https://toy-house-client.web.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/toy-house-client" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
         <a href="https://github.com/RianOntu/toy-house-server" className='btn text-white' ><i class="fa-brands fa-github mr-2"></i>Server</a>
    </div>

  </div>
</div>
          {/* second project       */}

          <div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={chef} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Chef's World</h5>
    <p class="card-text text-center text-white">● It is a project built using NodeJS,ReactJS to explore various Indian chefs.
● Implemented authentication system using firebase google,github login and email password login.
● Logged in users can see chef details.
● Logged in users can mark a recipe as favorite.</p>
    <hr />
    <h5 className='text-center text-white'>Used Technologies:</h5>
    <div className="technologies">
      <p className="technology">HTML</p>
      <p className="technology">CSS</p>
      <p className="technology">ReactJS</p>
      <p className="technology">Bootstrap</p>
      <p className="technology">Firebase</p>
      <p className="technology">NodeJS</p>
      <p className="technology">ExpressJS</p>
     
      <p className="technology">React-router</p>
      <p className="technology">React Lazy Load</p>
    </div>
    <hr />
    <div className='d-flex justify-content-center'>
         <a href='https://chef-recipe-hunter-clien-ea96f.web.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/chef-recipe-client" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
         <a href="https://github.com/RianOntu/chef-recipe-server" className='btn text-white' ><i class="fa-brands fa-github mr-2"></i>Server</a>
    </div>

  </div>
</div>
{/* third project */}

<div class="card mb-5" data-aos="fade-up">
  <img class="card-img-top" src={dream} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center text-white">Dream Job</h5>
    <p class="card-text text-center text-white">● It is a website where people can find jobs.It is built using ReactJS.
● People can see jobs and job details.
● People can apply for jobs.
● People can filter their applied jobs by onsite and remote conditions.</p>
    <hr />
    <h5 className='text-center text-white'>Used Technologies:</h5>
    <div className="technologies">
      <p className="technology">HTML</p>
      <p className="technology">CSS</p>
      <p className="technology">ReactJS</p>
      <p className="technology">Bootstrap</p>
      
     
      <p className="technology">React-router</p>
      <p className="technology">Sweet Alert2</p>
    </div>
    <hr />
    <div className='d-flex justify-content-center'>
         <a href='https://64b93eb6142fcf05859368e1--resilient-maamoul-12530d.netlify.app/' className='btn text-white mr-5'><i class="fa-solid fa-up-right-from-square mr-2"></i>Live</a>
         <a href="https://github.com/RianOntu/dream-job" className='btn text-white mr-5' ><i class="fa-brands fa-github mr-2"></i>Client</a>
        
    </div>

  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;