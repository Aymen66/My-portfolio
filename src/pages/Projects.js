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