import React from 'react';
import Card from "../pages/Card"
import  data from "../pages/data"

const element = data.map( item => {
    return (
        <Card
        img = {item.img}
        name = {item.name}
        description = {item.description}
        apk = {item.apk}
        checkItOut = {item.checkItOut}





        />
    )

})

export default function Projects (){
    const slideImages = [
        '../images/logo512.png',
        'images/slide_3.jpg',
        'images/slide_4.jpg'
      ];
      
      const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      }
    return (
        <div className='project-container'>
            <div className='Resume-container'>
             <p className='Resume-box'></p>
            <h1 className='Resume-title'>Pojects</h1>
                </div> 
            {element}
           
        </div>
        
    )
}