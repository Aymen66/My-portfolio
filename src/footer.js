import React from 'react';
import Icons from './Icons';


export default function Footer (){
    let date = new Date();
    let dateToday = date.getFullYear();


    return (
        <footer className='footer'>
        <p>
            <code>(c) {dateToday} by Aymen Alkhawlnai</code>
        </p>
        <Icons/>
       
        </footer>
    )
}