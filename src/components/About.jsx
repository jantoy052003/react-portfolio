import React from 'react'
import me from '../assets/images/Me2.jpg'

const About = () => {
  return (
    <section className="containers" id="aboutMe">
        <div>
            <div>
                <h1>ABOUT ME</h1>
                <p>Hi there! My name is Jan Michael Caasi and I find coding challenging and fun at the same time. Right after the COVID pandemic started, I switched my focus to studying computer programming specifically web development. I have a tiny bit of a  background on Java Programming Language so learning HTML, CSS and Javascript is not that new of a territory for me.</p>
                <p>Aside from learning how to be a full stack developer, I spend my free time riding my mountain bike around town, nearby cities and local bike parks and trails.</p>
                <img src= {me} alt=""/>
            </div>
        </div>
    </section>
   
  )
}

export default About
