import React from 'react';
import Full from "../full.png"
import AlmostFull from "../almost-full.png"
import CV from "../uk-resume.pdf"

export default function Resume (){
    return (
            <div className='Resume'>
            <div className='Resume-container'>
             <p className='Resume-box'></p>
            <h1 className='Resume-title'>Resume</h1>
                </div>  
                <div className='download-container'>
                    <h2 className='titles'>Work Experience</h2>
                    <a  className='downloadCV' href={CV} download="newfilename">Download CV</a>
                    </div>   
                    <div class="grid-container">
                    <h4 className='teaching-type'>Administrative Positions</h4>

                    <div class=" item item1">
                        
                            <h3 className='dates'>2016 - Nov.2017</h3>
                            <h5 className='ocupation'>  Sana'a, Yemen</h5>

                        
                    </div>

                    <div class="item  item2">
                    <div>
                                <h4 className='company-name'>Alnasser University Center For Languages</h4>
                                <h5 className='ocupation'>Occupation: Coordinator</h5>

                                <h6 className='duties'>Duties: Creating and revising system procedures, resolving administrative problems, facilitating the administrative process, registering students, entering information into a database, preparing monthly reports and observing teaching staff</h6>


                            </div>
                    </div>
                    <div class=" item item3">
                    <h3 className='dates'>Nov. 2015 – Feb. 2016</h3>
                    <h5 className='ocupation'>  Sana'a, Yemen</h5>

                        
                    </div>
                    <div class="item item4">
                    <h4 className='company-name'>Active Institute</h4>
                                <h5 className='ocupation'>Occupation: Coordinator</h5>
                                <h6 className='duties'>	Duties: Running the department, solving administrative issues and making immediate decisions, making weekly evaluations for teachers’ performance, selecting and hiring new teachers and writing monthly reports.</h6>

                    </div>
                    <h4 className='teaching-type'> Teaching Position</h4>
                    <div class="item item5">
                        
                    <h3 className='dates'>
                        Dec. 2018 – June 2019</h3>
                        <h5 className='ocupation'> Istanbul, Turkey </h5>


                    </div>
                    <div class="item item6"> 
                    <h4 className='company-name'>Success International Language Center</h4>
                         <h5 className='ocupation'>Occupation: Occupation: ESL Instructor (Part Time)</h5>

                         </div>
                    <div class="item item7">
                    <h3 className='dates'>
                    2014 – 2017


                    </h3>
                    <h5 className='ocupation'>  Sana'a, Yemen </h5>


                        </div>
                    <div class="item item8">
                    <h4 className='company-name'>Modern American Language Institute </h4>
                    <h5 className='ocupation'>Occupation: Occupation: ESL Instructor (Part Time)</h5>

                    </div>
                    <div class="item item9">
                    <h3 className='dates'>
                    Dec. 2016 –Dec. 2017

                    </h3>
                    <h5 className='ocupation'>  Sana'a, Yemen </h5>

                        </div>
                    <div class="item item10">
                    <h4 className='company-name'>Waterford Language & Training Academy (Azal University)</h4>
                                <h5 className='ocupation'>Occupation: Occupation: ESL Instructor (Part Time)</h5>
                    </div>
                    <h2 className='titles'>Volunteer Experience</h2>
                    <div class="item item24">
                    <h3 className='dates'>
                    September, 2022 – Present

                    </h3>
                    <h5 className='ocupation'>  Glasgow, Scotland </h5>



                    </div>
                    <div class="item item25">
                        <h5 className='ocupation'>
                    Volunteer at Maryhill Integration Network

                        </h5>
                    </div>

                    <div class="item item11">
                    <h3 className='dates'>
                    April. 2022 – Present

                    </h3>
                    <h5 className='ocupation'>  Falkirk, Scotland </h5>



                    </div>
                    <div class="item item12">
                        <h5 className='ocupation'>
                    Volunteer at Rediscovering the Antonine Wall Project

                        </h5>
                    </div>
                    <div class="item item13">
                    <h3 className='dates'>
                    Sep. 2021 – Oct. 2021
                        
                        </h3>
                    <h5 className='ocupation'>  Belfast, Northern Ireland </h5>

                    </div>
                    <div class="item item14">	
                    <h5 className='ocupation'>
                    Volunteer at Storehouse
                    </h5>

                    </div>
                    <div class="item item15">
                    <h3 className='dates'>
                    Jan. 2022 – July 2021
                        
                        </h3>
                    <h5 className='ocupation'>  Falkirk, Scotland </h5>

                        </div>
                    <div class="item item16">
                        
                    <h5 className='ocupation'>
                    Volunteer at Friends of Scottish Settlers(FOSS)

                    </h5>
                        </div>
                    <h2 className='titles'>Education</h2>


                        <div class="item item17">
                    <h3 className='dates'>
                    2022 -Present
                        
                        </h3>
                        </div>
                    <div class="item item18">
                        
                    <h5 className='ocupation'>
                    Meta Front-End Development program
                    </h5>
                        </div>

                        <div class="item item19">
                    <h3 className='dates'>
                    2011 -2015
                    
                        
                        </h3>
                        </div>
                    <div class="item item20">
                        
                    <h5 className='ocupation'>
                    English Literature University of Sana’a

                    </h5>
                        </div>
                    <h2 className='titles'>Languages</h2>

                        <div class="item item21">
                            <div className='languageLevel'>
                    <h3 className='skillAndlanguage'>Arabic</h3> <img  alt='full level' className='img' src={Full}/>

                            </div>
                            <h6 className='level'>Native</h6>
                            <div className='languageLevel'>
                            <h3 className='skillAndlanguage'>English</h3> <img alt='almost level' className='img' src={AlmostFull}/>

                            </div>
                            <h6 className='level'>Proficient</h6>
                        </div>
                    <h2 className='titles'>Skills</h2>
                        
                    <div class="item item22">
                    <div className='languageLevel'>
                            <h3 className='skillAndlanguage'>Translation </h3> <img className='img'alt='almost level' src={AlmostFull}/>

                            </div>
                            <div className='languageLevel'>
                            <h3 className='skillAndlanguage'>Web programming; HTML, CSS, JavaScript </h3> <img alt='almost level' className='img' src={AlmostFull}/>

                            </div>
                            <div className='languageLevel'>
                            <h3 className='skillAndlanguage'>Microsoft office </h3> <img alt='full level' className='img' src={Full}/>

                            </div>
                
                        </div>

                    <h2 className='titles'>Competencies</h2>

                        <div class="item item23">
                            <ul className='Competencies'>
                                <li>Comprehensive knowledge of all relevant teaching laws, academic policies, and administrative rules and regulations.</li>
                                <li>Interacting with coleagues on a professional level and able to establish and relationships with them.</li>
                                <li>Able to work with a team orindividually under pressure.</li>


                            </ul>

                        
        
                        </div>


                    </div>
	         
            </div>
        )
}