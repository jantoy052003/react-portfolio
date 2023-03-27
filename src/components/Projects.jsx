import React from 'react'
import sample1 from '../assets/images/sample_project.png'
import sample2 from '../assets/images/perfume_card.png'
import sample3 from '../assets/images/project3.png'

const Projects = () => {
  return (
    <section>
        <div className="containers" id="projects">
            <h1>Things I have built so far: </h1>
            <div>
                <a href="https://jantoy052003.github.io/bug-free-memory/" target="_blank"><img src={sample1} alt="" /></a>
                <a href="https://jantoy052003.github.io/second-front-end-project/" target="_blank"><img src={sample2} alt=""/></a>
            </div>
            <div id="mp1">
                <a href="https://jantoy052003.github.io/KodeGoMP1/" target="_blank"><img src={sample3} alt=""/></a>
            </div>
        </div>
    </section>
  )
}

export default Projects
