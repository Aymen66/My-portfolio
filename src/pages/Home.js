// import React from 'react';
// import CardPic from "../profile-pic.jpeg"
// import Instigram from "../contactPhotos/instigram.jpg"
// import Facebook from "../contactPhotos/facebook.png"
// import Linkdin from "../contactPhotos/link-icon.png"
// import { Link } from "react-router-dom";

// export default function Home (){
//     return (
//         <main className="main">
        
//             <section>
//                  <article card-box>
//                    <img alt='card pic' src={CardPic}></img>
//                    <h1 className='cardName'>Aymen <br></br> Alkhawlnai</h1>
//                    <p className='line'></p>
//                    <p className='card-employeeJob'>FRONT-END DEVELOPER</p>
    
//                  </article>
//                  <div className='div-icons'>
    
        
        
        
//         <div>
//         <a href="https://goo.gl/maps/4utZFiTRn1RaTB9a8"> <img alt='Instigram icon' className="home-icon"
//         src={Instigram} /></a>
//         <a href="https://www.facebook.com/loy20201"> <img alt='Facebook icon' className="home-icon"
//           src={Facebook} /></a>					
//           <a href="https://www.facebook.com/loy20201"> <img src={Linkdin} alt='Linkdin icon' className="home-icon"/></a>
        
        
//         </div>
//         </div>

//                </section>
//                <div className='paragraph'>
//                  <h1>Hello</h1>
//                  <h2>Here's who I am & what I do</h2>
//                  <div className='links'>
//                  <Link className='anchors' to='/Resume'>RESUME</Link>
                  
//                  <Link className='anchors' to='/Projects'>PROJECTS</Link>
        
//                  </div>
//                  <p>
//                    I'm a front-end developer who chose to switch career into Front-End development.This happened after
//                  Years of experience as a translator and an ESOL instructor in Yemen and Turkey.
//                  </p>
//                </div>
        
            
//              </main>
//     )
// }




import React from 'react';
import CardPic from "../profile-pic.jpeg"
import Instigram from "./contactPhotos/instigram.jpg"

import Facebook from "./contactPhotos/facebook.png"
import Linkdin from "./contactPhotos/link-icon.png"

export default function Home (){
    return (
        <div id="page-wrap">
      <main className="main">
        
        <section>
             <article card-box>
               <img alt='card pic' src={CardPic}></img>
               <h1 className='cardName'>Aymen <br></br> Alkhawlnai</h1>
               <p className='line'></p>
               <p className='card-employeeJob'>FRONT-END DEVELOPER</p>

             </article>
             <div className='div-icons'>

    
    
    
    <div>
    <a href="https://goo.gl/maps/4utZFiTRn1RaTB9a8"> <img alt='Instigram icon' className="home-icon"
    src={Instigram} /></a>
    <a href="https://www.facebook.com/loy20201"> <img alt='Facebook icon' className="home-icon"
      src={Facebook} /></a>					
      <a href="https://www.facebook.com/loy20201"> <img src={Linkdin} alt='Linkdin icon' className="home-icon"/></a>
    
    
    </div>
    </div>

           </section>
           <div className='paragraph'>
             <h1>Hello</h1>
             <h2>Here's who I am & what I do</h2>
             <div className='links'>
             <a className='anchors' to='/Resume'>RESUME</a>
              
             <a className='anchors' to='/Projects'>PROJECTS</a>
    
             </div>
             <p>
               I'm a front-end developer who chose to switch career into Front-End development.This happened after
             Years of experience as a translator and an ESOL instructor in Yemen and Turkey.
             </p>
           </div>
    
        
         </main>
      </div>
    )
}

