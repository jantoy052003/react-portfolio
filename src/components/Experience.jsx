import React from 'react'
import cook from '../assets/images/man-using-a-knife.png'

const Experience = () => {
  return (
    <section className="containers" id="workHistory">
        <div>
            <div>
                <h1>What I did before</h1>
                <p>I spent the first decade of my professional career being a Technical Support Specialist. I was given the chance to work with big international I.T. companies such as IBM, Dell computers, and most recently, Apple. </p>
                <p> Talking about a whole new perspective in my career, I also had a short career shift as a waiter and cook and eventualy became stall supervisor in Singapore! </p>
                <img src={cook} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Experience
