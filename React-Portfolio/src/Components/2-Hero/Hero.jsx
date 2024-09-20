import React from 'react'
import './hero.css'
import heartAnimation from "../../animation/heart.json"
import Lottie from "lottie-react";
import { motion } from "framer-motion"


export default function Hero() {



  return (
<section className='hero flex'>

<div className='left-section '>
<div className="parent-avatar flex">
<motion.img 
initial={{transform:"scale(0)"}}
animate={{transform:"scale(1.1)"}}
transition={{damping:10,type:"spring",stiffness:100}}


src="./Fahd.jpg" alt="" className='avatar'/>
<div className='icon-verified'></div>
</div>


<h1 className='title'>Frontend Developer</h1>
<p className='subtitle'>I'm Ahmed Essam,A junior Frontend developer,with HTML,CSS,Javscript,Tailwind,Bootstrap and React,I have developed responsive websited during my studies and personal projects</p>
<div className='all-icons flex'> 
<div className="icon icon-twitter"></div>
<div className="icon icon-instagram"></div>
<div className="icon icon-github"></div>
<div className="icon icon-linkedin"></div>


</div>
</div>

<div className='right-section animation '>

<Lottie 

 style={{height:300}} animationData={heartAnimation} />





</div>
</section>
  )
}
