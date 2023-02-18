
 import React from 'react';
import NavBar from './navBar';
import Resume from './Resume';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './footer';


import './App.css';




export default function App (){
  let component 
  switch (window.location.pathname){
    case "/": 
    component = <Home/>
    break
    case "/Resume": 
    component = <Resume/>
    break
    case "/about": 
    component = <About/>
    break
    case "/Projects": 
    component = <Projects/>
    break
    case "/Contact": 
    component = <Contact/>
    break

  }
  return (
<div className='container'>

<NavBar/>
    <div className='containerONe'>
    {component}

    </div>
    <Footer/>
  </div>

  )
  
  
  
}





// import React from 'react';
// import NavBar from "./navBar";
// import CardPic from "./profile-pic.webp"

// import './App.css';


// function App() {
//   return (
//     <div className='container'>
//       <NavBar/>

//       <main className="main">
//       <div className='layer'>

//       <section>
//         <article card-box>
//           <img  src={CardPic}></img>
//           <h1 className='cardName'>Aymen <br></br> Alkhawlnai</h1>
//           <p className='line'></p>
//           <p className='card-employeeJob'>FRONT-END DEVELOPER</p>

//         </article>
//       </section>
//       </div>
//       <div className='paragraph'>
//         <h1>Hello</h1>
//         <h2>Here's who I am & what I do</h2>
//         <div className='links'>
//           <a href='#'>RESUME</a>
//           <a href='#'>PROJECTS</a>

//         </div>
//         <p>
//           I'm a front-end developer who chose to switch career into Front-End development.This happened after
//         Years of experience as a translator and an ESOL instructor in Yemen and Turkey.
//         </p>
//       </div>

    
//     </main>
//     </div>
//   ) ;
// }

// export default App;
