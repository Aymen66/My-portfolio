
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


// import React from 'react';
// import NavBar from './pages/navBar';
// import Resume from './pages/Resume';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Footer from "./footer"
// import {Route, Routes, } from "react-router-dom"



// import './App.css';




// export default function App (){

//   return (
//         <>
//         <div className='container'>

// <NavBar/>
//     <div className='containerONe'>
//       <Routes>
//         <Route path='/' element={<Home/>}
       
//         />
//         <Route path='/Resume' element={<Resume/>}/>
//         <Route index path='/About' element={<About/>}/>
//         <Route path='/Projects' element={<Projects/>}/>

//         <Route path='/Contact' element={<Contact/>}/>


//       </Routes>
//     </div>
//     <Footer/>
//   </div>
//         </>

//   )
  
  
  
// }



import React from 'react';
import NavBar from './pages/navBar';
import Resume from './pages/Resume';
import Home from './pages/Home';
// import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Footer from "./footer"



import './App.css';

import { HashRouter , Routes, Route } from "react-router-dom";

// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />

          <Route path="Resume" element={<Resume />} />

          <Route path="Projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}






