import React, { useState } from "react";
import Textform from "./Textform";
import About from "./About";
import Navbar from "./Navbar";
// import {
//   BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App(){
  const[mode,setMode]=useState('dark');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return(
<>
    <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Textform/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Router> */}
    {/* <About/> */}

    {/* <Router>
      <Routes>
        <Route path="/" element={<Textform/>}/>
      </Routes>
    </Router> */}
    <Textform/>
    </>
  )
}
export default App;