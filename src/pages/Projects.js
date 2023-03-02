
import React from 'react';
import Card from "../pages/Card"




// import Card from "../pages/Card"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div className='bigest-project'>
                        <div className='Resume-container'>
                        <p className='Resume-box'></p>
                       <h1 className='Resume-title'>Pojects</h1>
                            </div> 
                            <Carousel className='name'  thumbWidth={10} interval="5000" axis="horizontal"  transitionTime="2000">
                   
                   <Card
                    img = "vocabulary checker.png"
                    name = "Vocabulary Checker"
                    description = "This is an app I created that lets you save the words with their meanings that you learn daily. You can also practice these words in Practice Section.By pressing the 'Get meaning' button, a random word from your vocabulary list will apear and you can guess the spelling of the word by writing in the box"
                    apk = "Vocabularychecker.apk"
                    checkItOut = "https://aymen66.github.io/Vocabulary-Checker/"
                    />
                   
                   
                   <Card
                    img = "dailylog.png"
                    name = "Daily Log"
                    description = "This is an app I craeted that lets you write and save the activities that you in which you've participated. You will add the time , date and the location of the activity"
                    apk = "Vocabularychecker.apk"
                    checkItOut = "https://aymen66.github.io/To-do-list/"
                    />
                   <Card
                    img = "passwordGenerator.png"
                    name = "Password Generator"
                    description = "This app of mine lets you create two random passwords everytime the button is clicked. The passowrd generated is imposible to be hacked or even rememberd by you 😅 as each password contains 15 characters.Once the password is generated , all you should do is to copy the password by pressing the passowrd box"
                    apk = "Vocabularychecker.apk"
                    checkItOut = "https://aymen66.github.io/Generate-Passwords/"
                    />
                    <Card
                    img = "conversion.png"
                    name = "Unit Conversion App"
                    description = "This app lets you convert any number to any unit you want. All you have to do is to write a number and the app will convert that number to several units incluing kilogram, pound, gallons, liters, meter, feet."
                    apk = "Vocabularychecker.apk"
                    checkItOut = "https://aymen66.github.io/Unit-Conversion/"
                    />
                      <Card
                    img = "visitSanaa.png"
                    name = "Visit Sana'a"
                    description = "This is a Web page I created which conatians a brief on the culture in Yemen."
                    apk = "Vocabularychecker.apk"
                    checkItOut = "https://aymen66.github.io/sanaaproject-with-boostrap-phone-version2-/"
                    />
                   
                   
                   
                </Carousel>
                   
                            </div>
                
        )
    };
}


export default ImageGallaryComponent;
// import  data from "../pages/data"




// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// class ImageGallaryComponent extends React.Component {
//     render() {
//         return (
//             <div className='project-container'>
//                         <div className='Resume-container'>
//                         <p className='Resume-box'></p>
//                        <h1 className='Resume-title'>Pojects</h1>
//                             </div> 
//                             <Carousel  width={1000} interval="5000" axis="horizontal" transitionTime="2000">
                   
//                    <Card
//                     img = "vocabulary checker.png"
//                     name = "Vocabulary Checker"
//                     description = "This is an app I created that lets you save the words with their meanings that you learn daily. You can also practice these words in Practice Section.By pressing the 'Get meaning' button, a random word from your vocabulary list will apear and you can guess the spelling of the word by writing in the box"
//                     apk = "Vocabularychecker.apk"
//                     checkItOut = "https://aymen66.github.io/Vocabulary-Checker/"
//                     />
                   
                   
//                    <Card
//                     img = "vocabulary checker.png"
//                     name = "Vocabulary Checker"
//                     description = "This is an app I created that lets you save the words with their meanings that you learn daily. You can also practice these words in Practice Section.By pressing the 'Get meaning' button, a random word from your vocabulary list will apear and you can guess the spelling of the word by writing in the box"
//                     apk = "Vocabularychecker.apk"
//                     checkItOut = "https://aymen66.github.io/Vocabulary-Checker/"
//                     />
                   
                   
                   
                   
//                 </Carousel>
                   
//                             </div>
                
//         )
//     };
// }

// export default ImageGallaryComponent;

// const element = data.map( item => {
//     return (
//         <Card
//         img = {item.img}
//         name = {item.name}
//         description = {item.description}
//         apk = {item.apk}
//         checkItOut = {item.checkItOut}
//         />
//     )

// })

// export default function Projects (){
  
//     return (
//         <div className='project-container'>
//             <div className='Resume-container'>
//              <p className='Resume-box'></p>
//             <h1 className='Resume-title'>Pojects</h1>
//                 </div> 
//             {element}
           
//         </div>
        
//     )
// }


// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// class ImageGallaryComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>My Image Gallery</h2>
//                 <Carousel width={400} interval="5000" axis="horizontal" transitionTime="2000">
//                     <div>
//                         <img src="https://picsum.photos/700/400?img=1" />
//                         <p className="legend">My Classic Still 1</p>
//                     </div>
//                     <div>
//                         <img src="https://picsum.photos/700/400?img=2" />
//                         <p className="legend">My Classic Still 2</p>
//                     </div>
//                     <div>
//                         <img src="https://picsum.photos/700/400?img=3" />
//                         <p className="legend">My Classic Still 3</p>
//                     </div>
//                 </Carousel>
//             </div>
//         )
//     };
// }

// export default ImageGallaryComponent;





// import React from 'react';
// import './App.css';
// import ImageGallaryComponent from './reusable/image-gallery.component';

// function App() {
//   return (
//     <div className="App">
//       <h2>Responsive React Carousel Image Gallery with Thumbs</h2>
//       <ImageGallaryComponent />
//     </div>
//   );
// }

// export default App;