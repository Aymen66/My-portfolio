import React from 'react';
export default function Projects (props){
    return (
        <div className='projects'>
            <img alt='My project photos' className='projects-img' src={`./images/${props.img}`}/>
            <div className='smaller-div'>
                <h2 className='projects-name'>{props.name}</h2>
                <p className='projects-description'>{props.description}</p>
                <div className="projects-links">
                <a  href={props.apk} download="newfilename">Download the app for Android</a>
                <a  href={props.checkItOut}>Check  it out </a>


                </div>

            </div>

        </div>
    )
}