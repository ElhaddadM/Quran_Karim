import React, { useEffect, useState } from "react";

import Surat from './Components/Surat'
import "./App.css";


function App()  {
 const [load,setLoad] = useState(true)

 useEffect(()=>{
  setTimeout(() => {
    setLoad(false)
  }, 5000);
 })
    return (
      load ?  <div className="text-center fs-1 text-info" style={{ marginTop:'60% ' }}> Loading ... </div> : <Surat />
    
    );
  
}

//https://server8.mp3quran.net/afs/001.mp3
//  <ReactAudioPlayer src="https://server8.mp3quran.net/afs/001.mp3"  controls />
export default App;
