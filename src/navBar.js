

// import React, { Children } from 'react';




  export default function NavBar (){
    return (
        <header>
                     <nav >
                        
                     <ul className='uLeft'>
                        
                        <div className="ulLeft-container">
                        <div className='title-box'></div>
                        <li>
                     <a href='/' className='employeeName'> Aymen Alkhawlnai</a>

                        </li>
                        </div>
                         <li className='job-title'><span className="slash">/</span> FRONT-END DEVELOPER</li>
                                        </ul>
                        <label>
                    <input type="checkbox"/>
                    <div class="menu"> <div class="hamburger"></div> </div>
                    <ul  className='ulNav'>
                       <CustomLink className="nav-list" href='/'>ABOUT ME</CustomLink>
                            <CustomLink className="nav-list"  href='/Resume'>RESUME</CustomLink>
                            <CustomLink className="nav-list" href='/Projects'>PROJECTS</CustomLink>
                            <CustomLink className="nav-list"  href='/Contact'>CONTACT</CustomLink>
                       
        
        
        
                        </ul>
                    </label>
                      
                        </nav>
                           </header>
            // <nav className="nav">
            // <a href='/' className='site-title'> Site Name</a>

            // <ul >
            // <CustomLink href='/pricing'>Pricing</CustomLink>
            // <CustomLink href='/about'>About</CustomLink>

                
                
            //     {/* <li>CONTACT</li> */}



            // </ul>
            // </nav>

    )
}

function CustomLink ({ href, children, ...props}){
    const path = window.location.pathname


return(
    <li className= {path === href ? "active" : ""}>
                    <a href={href} {...props}>{children}</a>
                </li>
)
}


// import React from 'react';




//   export default function NavBar (){
//     return (
//         <header>
//             <nav>
//             <ul className='uLeft'>

//             <li className='title-box'></li>
//             <li className="employeeName">Aymen Alkhawlnai</li>
//             <li className='job-title'>/ FRONT-END DEVELOPER</li>
//             </ul>
//             <ul className='ulNav'>
//                 <li>ABOUT ME</li>

//                 <li>RESUME</li>
//                 <li>PROJECTS</li>
//                 <li>CONTACT</li>



//             </ul>
//             </nav>
//         </header>

//     )
// }