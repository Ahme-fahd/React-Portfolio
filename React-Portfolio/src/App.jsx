import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import Main from './Components/3-Main/Main'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'


export default function App() {

useEffect(() => {
window.addEventListener("scroll",() => {
  if(window.scrollY>300){
setshowScrollButton(true)
  }else{
    setshowScrollButton(false)
  }

  
}
)


}, [])


const [showScrollButton, setshowScrollButton] = useState(false);

  return (
    <div id="up" className='container'>
    <Header/>

<Hero/>
<div className='divider'/>
<Main />
<div className='divider'/>
<Contact />
<div className='divider'/>
<Footer />

<a  style={{opacity:showScrollButton?1 :0,transition:"1s"}} href="#up">

<button className='scroll2Top icon-keyboard_arrow_up'></button>

</a>




    </div>
);
}

