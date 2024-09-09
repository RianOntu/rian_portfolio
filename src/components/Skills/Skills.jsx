import React, { useEffect } from 'react';
import './Skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import bootstrap from '../../assets/bootstrap.png';
import javaScript from '../../assets/js.png';
import node from '../../assets/nodejs.png';
import express from '../../assets/express.png';
import reactjs from '../../assets/react.png';
import github1 from '../../assets/github1.png';
import typescript from '../../assets/typescript.png';
import php from '../../assets/php.png';
import sql from '../../assets/sql-server.png';
import sass from '../../assets/sass.png';
import c from '../../assets/letter-c.png';
import laravel1 from '../../assets/laravel1.png';
import vercel1 from '../../assets/vercel1.png';
import npm from '../../assets/npm.png';
import yarn from '../../assets/yarn.png';
import postman from '../../assets/postman.png';
import vscode from '../../assets/vscode.png';
import mongo from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import mysql1 from '../../assets/mysql1.png';





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
        <div className='container skills flex' id="skills">
           <h4 className='skills-text' style={{color:"#326BD3",fontWeight:"600"}}>Skills</h4>
           <div className="grid skill_icon align-items-start" >
            <div className="flex-column">
              <h6 style={{color:"white"}}>LANGUAGES</h6>
              <div className="">
                <div className="flex flexed mt-4">
                <img src={javaScript} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>JavaScript</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={typescript} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>TypeScript</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={javaScript} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>ES6</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={php} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>PHP</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={sql} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>SQL</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={html} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>HTML</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={css} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>CSS</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={sass} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>SASS</h6>
                </div>
                <div className="flex flexed mt-3">
                <img src={c} style={{width:"30px",height:"30px"}} alt="" />
                <h6 style={{color:"#8892B0"}}>C</h6>
                </div>

                
               
              </div>
            </div>
            <div className="flex-column">
            <h6 style={{color:"white"}} className='framework'>FRAMEWORKS</h6>
                <div className="flex flexed mt-4">
                
                <img src={node} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>NodeJS</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={express} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>ExpressJS</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={laravel1} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Laravel</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={reactjs} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>ReactJS</h6>
                </div>
            </div>
            <div className="flex-column">
                <h6 className='tools' style={{color:"white"}}>TOOLS</h6>
                <div className="flex flexed mt-4">
                
                <img src={github1} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Git & GitHub</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={vercel1} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Vercel</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={npm} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>npm</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={yarn} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Yarn</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={postman} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Postman</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={vscode} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>VS CODE</h6>
                </div>
            </div>
            <div className="flex-column">
                <h6 className='database' style={{color:"white"}}>DATABASE</h6>
                <div className="flex flexed mt-4">
                
                <img src={mongo} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>MongoDB</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={mysql1} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>MySQL</h6>
                </div>
                <div className="flex flexed mt-3">
                
                <img src={firebase} style={{width:"30px",height:"30px"}}  alt="" />
                <h6 style={{color:"#8892B0"}}>Firebase</h6>
                </div>
            </div>
           
           {/* <img src={html} alt="" />
           <img src={css} alt="" />
           <img src={bootstrap} alt="" />
           
           
           <img src={express} alt="" />
           <img src={reactjs} alt="" />
           <img src={mongo} alt="" />
           <img src={firebase} alt="" />
           <img src={github} alt="" /> */}
            
           </div>
            
        </div>
    );
};

export default Skills;