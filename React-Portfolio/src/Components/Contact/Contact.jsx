import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1726772868582 (2).json"
import contactAnimation from "../../animation/contact-us.json"


export default function Contact() {

  const [state, handleSubmit] = useForm("mrbzwegy");






  return (
   <section className='contact-us'>
<h1 className='title'>

  <span className='icon-envelope'></span>
  Contact us
  <p className='subtitle'>Contact us for more information  and Get notified when I publish something new</p>
</h1>
<div className="flex ">

<form onSubmit={handleSubmit}>
<div className='flex' style={{justifyContent:"space-between"}}>
<label htmlFor="email">Email Address:</label>
<input autoComplete='off' required type="email" name='email' id='email' />
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
</div>

<div className='flex' style={{marginTop:"24px"}}>

<label htmlFor="message">Your message</label>
<textarea required name="message" id="message"></textarea>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>
<button className='submit'  type="submit" disabled={state.submitting}  >

{state.submitting?"Sending...." :"submit"}

</button>


{state.succeeded&&(<p className='flex' style={{fontSize:"18px",marginTop:"1.7rem"}}>
  <Lottie loop={false} style={{height:44,width:"50px",textAlign:"center"}} animationData={doneAnimation} />
  Your message has been sent successfully</p>)}

</form>
<div className="animation">   <Lottie className='contact-animation' style={{height:355,textAlign:"center"}} animationData={contactAnimation} />  </div>



</div>




   </section>
  )
}
