
import React, { useEffect, useState } from "react";
import logo from "../quran.png";
import ReactAudioPlayer from "react-audio-player";

import "../App.css";

function Surat() {
  const [surat,setSurat] = useState([])
  const [src,setSrc] = useState('')
  const src1 =`https://server8.mp3quran.net/afs/${src}.mp3`
  const [isload,setIsLoad] = useState(false)
  useEffect(()=>{
    fetch('http://api.alquran.cloud/v1/surah')
    .then(response => response.json())
    .then(json => {
      // console.log(json.data)
      setSurat(json.data)
    })
})
const start = () => {
  console.log(`https://server8.mp3quran.net/afs/${src}.mp3`)
   let audio = new Audio(`https://server8.mp3quran.net/afs/${src}.mp3`)
  // audio.play()
  
}
useEffect((src)=>{
  // new Audio(`https://server8.mp3quran.net/afs/${src}.mp3`).pause()
  start()
},[src])
//console.log(e.number)


  return (
    <div className="App ">
     
    <div className="fixed-top" style={{zIndex:"99"}} >
    <div className="App-header cov " style={{ backgroundColor:'#033263' }}>
       <img src={logo} className="App-logo" alt="logo" />
       <h5 className="mt-2" >Quran Karim Developped By Elhaddad</h5>
     </div>
    </div>
     <div style={{ marginTop:"150px" }}>
       <div  data-bs-spy="scroll"  data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
       
       {
         surat.map((e,i)=>{
           return(
               <div key={i} style={{ cursor:"pointer" }} className=" surat shadow-sm p-3 mb-5 bg-body rounded d-flex justify-content-around" onClick={ ()=>{ setSrc(e.number < 10 ? "00" + e.number : e.number >= 10 & e.number < 100 ? "0" + e.number.toString() : e.number.toString() )}}> 
                 <span> { e.englishName } </span>
                 <span> { e.number } </span>
                 <span> {e.name} </span> 
               </div>
           )
         })
        }
    
       </div>
     </div>
        <div className='w-25 h-25 my-3 '> Fin </div>
     <footer className="fixed-bottom mt-2 mb-2" >
    
        <ReactAudioPlayer 
        className='audio'
         src={src1}
         controls
         autoPlay
       /> 
     
     </footer>
   </div>
     
  )
}

export default Surat