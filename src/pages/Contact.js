import React from 'react';
import { useState } from 'react';






export default function Contact (){
    const [Contact, setContact] = useState({
      name: "",
      email: "",
      message: "",
      


    })
  
  const handleEmailChange = event => {
    setContact(function (prevContact){
         return {
          ...prevContact,
          [event.target.name] : event.target.value
         }
       
    })
    Contact ({
      name: "",
  email: "",
  message: "",
  
    })
  };

  

  return (
  <div className='contact-container'>
    <div className='contact'>
      <form action='https://formsubmit.co/8752a28c32d6c5be422399626f769b02' method="POST" >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleEmailChange}
          value={Contact.name}
          required 
          className='contact-message'

        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          value={Contact.email}
          required 
        className='contact-message'

        />
        <input
          type="hidden"
          name="_captcha"
          onChange={handleEmailChange}
          value={false}
        />
        <textarea
        type="text"
        name="message"
        placeholder="Write your message here "
        onChange={handleEmailChange}
        value={Contact.message}
        required 

        ></textarea>
      </div>
      <button  
        className='btn-form'
        type="submit"> Send</button>
      <button 
        className='btn-form'
        type="reset"> Reset</button>

    </form>
    
    </div>
    
                    </div>
                    
  )
}