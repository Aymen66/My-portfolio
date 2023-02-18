import React from 'react';
import CardPic from "./profile-pic.jpeg"
import Phone from "../src/contactPhotos/cell-phone-icon.jpg"
import Gmail from "../src/contactPhotos/gmail.png"
import Instigram from "../src/contactPhotos/instigram.jpg"
import Facebook from "../src/contactPhotos/facebook.png"
import Linkdin from "../src/contactPhotos/link-icon.png"
import Whatsapp from "../src/contactPhotos/whatsapp.jpg"

export default function Home (){
    return (
        <main className="main">
        
            <section>
                 <article card-box>
                   <img  src={CardPic}></img>
                   <h1 className='cardName'>Aymen <br></br> Alkhawlnai</h1>
                   <p className='line'></p>
                   <p className='card-employeeJob'>FRONT-END DEVELOPER</p>
    
                 </article>
                 <div className='div-icons'>
    
        
        
        
        <div>
        <a href="https://goo.gl/maps/4utZFiTRn1RaTB9a8"> <img className="home-icon"
        src={Instigram} /></a>
        <a href="https://www.facebook.com/loy20201"> <img className="home-icon"
          src={Facebook} /></a>					
          <a href="#"> <img src={Linkdin}  className="home-icon"/></a>
        
        
        </div>
        </div>

               </section>
               <div className='paragraph'>
                 <h1>Hello</h1>
                 <h2>Here's who I am & what I do</h2>
                 <div className='links'>
                   <a href='Resume'>Resume</a>
                   <a href='Projects'>PROJECTS</a>
        
                 </div>
                 <p>
                   I'm a front-end developer who chose to switch career into Front-End development.This happened after
                 Years of experience as a translator and an ESOL instructor in Yemen and Turkey.
                 </p>
               </div>
        
            
             </main>
    )
}