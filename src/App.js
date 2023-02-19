
//  import React from 'react';
// import NavBar from './navBar';
// import Main from './Main';
// import Footer from './footer';
// import './App.css';




// export default function App (){

//   return (
//         <div className='container'>
// <Main/>


// <NavBar/>
  
//     <Footer/>
//   </div>
      

//   )
  
  
  
// }


import React from 'react';
import NavBar from './navBar';
import Resume from './Resume';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from "./footer"
import {Route, Routes} from "react-router-dom"




import './App.css';




export default function App (){

  return (
        <>
        <div className='container'>

<NavBar/>
    <div className='containerONe'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>

        <Route path='/Contact' element={<Contact/>}/>


      </Routes>
    </div>
    <Footer/>
  </div>
        </>

  )
  
  
  
}






