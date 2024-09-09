import React from 'react'
import ph from '../../assets/ph.jfif';
function ProgrammingHero() {
    return (
        <>
        <div className="flex align-items-start ph1">
          <img style={{width:"80px",height:"80px"}} src={ph} alt="" />
          <div>
            <h4 style={{fontWeight:"700",color:"white"}}>Complete Web Development With Jhankar Mahbub</h4>
            <h5 style={{fontWeight:"300",color:"white"}}>Programming Hero</h5>
            <p style={{color:"#A4A4A4"}}>Issued October 2023</p>
            <p style={{color:"#A4A4A4"}}>Credential ID WEB7-1346 </p>
            <a href="https://drive.google.com/file/d/16pUalAIw9zo-aJVTUTfW9h_ZTSBktdnN/view" className='text-white' ><i class="fa-solid fa-up-right-from-square mr-2"></i>See Certificate</a>
            
          </div>
        </div>
        
        </>
    )
}

export default ProgrammingHero
