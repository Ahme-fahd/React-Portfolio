import React, { useRef, useState } from 'react'
import './main.css';
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom'





export default function main() {


const [currentActive, setcurrentActive] = useState("all");
  const myProjects=[
    {projectTitle:"E-commerce",category:["React"],imgPath:"./images/1.jpg",Link:"https://github.com/Ahme-fahd/E-commerce-"},
    {projectTitle:"React1",category:["React"],imgPath:"./images/2.jpg",Link:"https://github.com/Ahme-fahd/React-project"},
    {projectTitle:"Devfolio",category:["css"],imgPath:"./images/3.jpg",Link:"https://github.com/Ahme-fahd/DevFolio-"},
    {projectTitle:"Bakery",category:["css"],imgPath:"./images/4.jpg",Link:"https://github.com/Ahme-fahd/Bakery-bootstrap-"},
    {projectTitle:"BookMark",category:["js"],imgPath:"./images/5.jpg",Link:"https://github.com/Ahme-fahd/Bookmark"},
    {projectTitle:"LoginSystem",category:["js"],imgPath:"./images/6.jpg",Link:"https://github.com/Ahme-fahd/Login-system"},
  
  ];


  const [arr,setArr] = useState(myProjects)









  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr =myProjects.filter((item) => {
      const ZZZ =item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };




  return (
  <main className='flex'>

<section className='left-section  flex'>
<button  onClick={() => {
  handleClick("all");
  setArr(myProjects);
}
}    className={currentActive === "all" ? "active" : null} > AllProjects</button>
<button  onClick={() => {
  handleClick("css");
}
} className={currentActive === "css" ? "active" : null}>HTML&CSS&Bootstrap</button>
<button onClick={() => {
  handleClick("js");
}
}  className={currentActive === "js" ? "active" : null}>JavaScript</button>
<button   onClick={() => {
  handleClick("React");
}
}   className={currentActive === "React" ? "active" : null}>React</button>


</section>
<section  className='right-section  flex'>

<AnimatePresence>




{arr.map((item) => {
  return (


<motion.article    

layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
transition={{type:"spring",damping:6,stiffness:50}}

 key={item.imgPath} className='card '>
<img src={item.imgPath} width={"266px"} alt="1" />
<div style={{width:"266px"}} className="box">
<h1 className='title'>{item.projectTitle}</h1>
<p className='subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic architecto dolor dignissimos ratione, modi perferendis a placeat dicta quisquam explicabo?</p>

<div className="flex icons">

<div style={{ gap: "11px" }} className="flex">
  <div className="icon-link"></div>

<a href={item.Link} target='_blank'><div className='icon-github'></div></a>









</div>
<a href="" className='link'>more

<span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
</a>       
</div>



</div>
</motion.article>






  )
}
)}

</AnimatePresence>
</section>


  </main>
  )
}
