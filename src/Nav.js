import React, { useState,useEffect } from 'react'
import './Nav.css';

const Nav = () => {
    const[show,handleshow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true)
            } else handleshow(false);
        });
        return() => {
            window.removeEventListener("scroll",()=>{
                handleshow(false)
            })
        }
    },[]);
  return (
    <div className={show? 'nav' : 'nav_black'}>
    <img className="nav_logo" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
    alt="Netflix Logo"/>


    <img className="nav_avatar" 
    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
    alt="Netflix Logo"/>
</div>
  )
}

export default Nav