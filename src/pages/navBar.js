

//   import React, { Children } from 'react';
//  import React from "react"
//  import {Link, useMatch, useResolvedPath} from "react-router-dom"




//    export default function NavBar (){
//      return (
//          <header>
//                       <nav >
                        
//                       <ul className='uLeft'>
                        
//                          <div className="ulLeft-container">
//                          <div className='title-box'></div>
//                          <li>
//                       <Link to='/' className='employeeName'> Aymen Alkhawlnai</Link>

//                          </li>
//                          </div>
//                           <li className='job-title'><span className="slash">/</span> FRONT-END DEVELOPER</li>
//                                          </ul>
//                          <label>
//                      <input type="checkbox"/>
//                      <div class="menu"> <div class="hamburger"></div> </div>
//                      <ul  className='ulNav'>
//                         <Link className="nav-list" to='/'>ABOUT ME</Link>
//                              <Link className="nav-list"  to='/Resume'>RESUME</Link>
//                              <Link className="nav-list" to='/Projects'>PROJECTS</Link>
//                              <Link className="nav-list"  to='/Contact'>CONTACT</Link>
                       
        
        
        
//                          </ul>
//                      </label>
                      
//                          </nav>
//                             </header>
//               <nav className="nav">
//               <a href='/' className='site-title'> Site Name</a>

//               <ul >
//               <Link href='/pricing'>Pricing</Link>
//               <Link href='/about'>About</Link>

                
                
//                   {/* <li>CONTACT</li> */}



//               </ul>
//               </nav>

//      )
//  }

//  function Link ({ to, children, ...props}){
//  const resolvedPath = useResolvedPath(to)
//  const isActive = useMatch({path: resolvedPath.pathname, end: true})

//  return(
//      <li className= {isActive ? "active" : ""}>
//                      <Link to={to} {...props}>{children}</Link>
//                  </li>
//  )
//  }


//   import React from 'react';




//     export default function NavBar (){
//       return (
//           <header>
//               <nav>
//               <ul className='uLeft'>

//               <li className='title-box'></li>
//               <li className="employeeName">Aymen Alkhawlnai</li>
//               <li className='job-title'>/ FRONT-END DEVELOPER</li>
//               </ul>
//               <ul className='ulNav'>
//                   <li>ABOUT ME</li>

//                   <li>RESUME</li>
//                   <li>PROJECTS</li>
//                   <li>CONTACT</li>



//               </ul>
//               </nav>
//           </header>

//       )
//   }
import React from "react";

import { Outlet, Link } from "react-router-dom";
import Footer from '../pages/footer';

const NavBar = () => {
  const [isShown, setIsShown]= React.useState(true)

  const [hamburger, setHamburger]= React.useState(false)


  function flip(){
    setIsShown(function(prevState){
      if(!prevState){
          return true
      }else{
          return false
      }
  })
  
 }

 function hamburgerFlip(){
  setHamburger(function(prevState){
    if(!prevState){
        return true
    }else{
        return false
    }
})

  
}

 
 
  return (
    <>
    <header >
                      <nav  >
                        
                      <ul className='uLeft'>
                        
                         <div className="ulLeft-container">
                         <div className='title-box'></div>
                         <li>
                      <Link  to='/' className='employeeName'> Aymen Alkhawlnai</Link>

                         </li>
                         </div>
                          <li className='job-title'><span className="slash">/</span> FRONT-END DEVELOPER</li>
                                         </ul>
             {  isShown &&  <label  >
                     <input type="checkbox"/>
                     <div  onClick={hamburgerFlip} class="menu"> <div class="hamburger"></div> </div>
                   {hamburger&& <ul  className='ulNav'>
                        <Link onClick={flip} className="nav-list" to='/'>ABOUT ME</Link>
                             <Link onClick={flip} className="nav-list"  to='/Resume'>RESUME</Link>
                             <Link onClick={flip} className="nav-list" to='/Projects'>PROJECTS</Link>
                             <Link onClick={flip} className="nav-list"  to='/Contact'>CONTACT</Link>
                       
        
        
        
                         </ul>}
                     </label>
}
                          {   !isShown &&  <label >
                     <input type="checkbox"/>
                     <div onClick={hamburgerFlip} class="menu"> <div class="hamburger"></div> </div>
                    {!hamburger &&  <ul  className='ulNav'>
                        <Link onClick={flip} className="nav-list" to='/'>ABOUT ME</Link>
                             <Link onClick={flip} className="nav-list"  to='/Resume'>RESUME</Link>
                             <Link onClick={flip}className="nav-list" to='/Projects'>PROJECTS</Link>
                             <Link onClick={flip} className="nav-list"  to='/Contact'>CONTACT</Link>
                       
        
        
        
                         </ul>}
                      
                     </label>
                        }
                     
                     
                      
                         </nav>
                            </header>
    

      <Outlet />
      <Footer/>
    </>
  )
};

export default NavBar;