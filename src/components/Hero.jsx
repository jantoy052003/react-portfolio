import React from 'react'

const Hero = () => {
  return (
   
      <section className="containers" id="hero">
            <div>
                <div> 
                    <h3>Hi, I am</h3>
                    <h1><strong> Jan Michael Caasi.</strong><span style={{color: "#64FFDA"}}>Coding is my passion!</span> </h1>
                    <p>I'm an aspiring Web Developer with background with full stack web development and a little bit of Java and android mobile app development. </p>
                    <button id="checkOut" onClick="takeMe()">Check me out!</button>
                </div>    
            </div> 
        </section>
    
  )
}

export default Hero
