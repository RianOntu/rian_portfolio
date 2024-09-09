import React from 'react'
import bohubrihi from '../../assets/bohubrihi.png'

function Bohubrihi() {
    return (
       
         <div className="flex align-items-start ph1" style={{marginTop:"40px"}}>
          <img style={{width:"80px",height:"80px"}} src={bohubrihi} alt="" />
          <div>
            <h4 style={{fontWeight:"700",color:"white"}}>Full Stack Web Development(MERN)</h4>
            <h5 style={{fontWeight:"300",color:"white"}}>Bohubrihi</h5>
            <p style={{color:"#A4A4A4"}}>Issued July 2021</p>
            <p style={{color:"#A4A4A4"}}>Credential ID 40297-162-532-5878</p>
            <a href="https://drive.google.com/file/d/1KYWfmskfO32fgliKVA05GEJblgCWRaNC/view" className='text-white' ><i class="fa-solid fa-up-right-from-square mr-2"></i>See Certificate</a>
            
          </div>
        </div>
      
    )
}

export default Bohubrihi
