import React from 'react';
import Phone from "../src/contactPhotos/cell-phone-icon.jpg"
import Gmail from "../src/contactPhotos/gmail.png"
import Instigram from "../src/contactPhotos/instigram.jpg"
import Facebook from "../src/contactPhotos/facebook.png"
import Linkdin from "../src/contactPhotos/link-icon.png"
import Whatsapp from "../src/contactPhotos/whatsapp.jpg"

export default function Icons (){
   


    return (
        <address>
     <div className='contactMethods'>
        <h4>Call</h4>
        <a href="tel:07956645957"> <img alt='Phone icon' src={Phone} className="icon"/></a>
        </div>
        <div className='contactMethods'>
        <h4>Write</h4>
        <a href="mailto:alkhawlaniamen.gmail.com"><img  alt='Gmail icon' className="icon"
            src={Gmail} /></a>
            <a href="https://wa.me/447956645957"> <img src={Whatsapp}   alt="whatsapp icon"  className="icon"/></a>
        
        </div>
        
        <div className='contactMethods'>
        <h4>Follow</h4>
        <div>
        <a href="https://goo.gl/maps/4utZFiTRn1RaTB9a8"> <img alt='instigram' className="icon"
        src={Instigram} /></a>
        <a href="https://www.facebook.com/loy20201">  <img alt='Facebook icon' className="icon"
          src={Facebook} /></a>					
          <a href="https://www.linkedin.com/in/aymen-alkhawlani-a3573a163/"> <img alt='linkdin icon' src={Linkdin}  className="icon"/></a>
        
        </div>
        
        </div>
        </address>

      
    )
}
