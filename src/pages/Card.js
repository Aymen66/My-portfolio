import React from 'react';

export default function Projects (props){
    return (
        <div className='projects'>
            <img alt='My project photos' className='projects-img' src={`../images/${props.img}`}/>
            <div className='smaller-div'>
                <h2 className='projects-name'>{props.name}</h2>
                <p className='projects-description'>{props.description}</p>

            </div>

        </div>
    )
}