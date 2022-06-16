import React from "react"
import { useEffect, useState } from "react"
import "./style.css";
export function BackToTop(){

  const [backToTop, setBackToTop] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setBackToTop(true)
      }
      else setBackToTop(false)
    })

  },[])

  return(
    <div>
      {backToTop &&
        <a className="backToTop" href="#home"></a>
      }
    </div>
  )
}