import { useState } from "react";
import "./header.css";
import { useEffect } from "react";




export default function Header() {

  const [showModel, setshowModel] = useState(false)


  const [theme,settheme] = useState(localStorage.getItem("currentMode")??"dark");

useEffect(() => {

if(theme==="light"){
document.body.classList.remove("dark");
document.body.classList.add("light");

}else{
  document.body.classList.remove("light");
  document.body.classList.add("dark");
}


 
}, [theme])





  return (
    <header className=' flex'>
      <button     onClick={() => {
          setshowModel(true);
        }}
       className="menu icon-menu flex"></button>
<div/>

<nav>
<ul className='flex'>

<li><a href="">About</a></li>
<li><a href="">Articles</a></li>
<li><a href="">Projects</a></li>
<li><a href="">Speaking</a></li>
<li><a href="">Contact</a></li>




</ul>

</nav>
<button onClick={() => {

//set value to localstorage
localStorage.setItem(
  "currentMode",
  theme === "dark" ? "light" : "dark"
);


//get value from localstorage
settheme(localStorage.getItem("currentMode"))



}
} className="mode flex">

{theme==="dark"?(
  <span className="icon-moon-o">


  </span>

):(  <span className="icon-sun">


  </span>) }


</button>


{showModel &&(


<div className="fixed">

<ul className="modal">
  <li>
<button className="icon-close" onClick={(params) => {
  setshowModel(false)
}
}/>

  </li>
  <li><a href="">About</a></li>
  <li><a href="">Articles</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Speaking</a></li>
  <li><a href="">Contact</a></li>
</ul>






</div>




)}

    </header>
  )
}
