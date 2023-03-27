import React from 'react'
import facebook from '../assets/images/facebook.png'
import github from '../assets/images/github.png'
import messenger from '../assets/images/messenger.png'
import whatsapp from '../assets/images/whatsapp.png'

const Right = () => {
  return (
    <section className="right-side">
        <div> 
            <ul>
                <li><a href="https://www.facebook.com/janmichael.caasi" target="_blank"> <img src={facebook} alt="Facebook icon" style={{height: "30px"}}/></a></li>
                <li><a href="https://github.com/jantoy052003" target="_blank"><img src={github} alt="Github" style={{height: "30px"}}/></a></li>
                <li><a href="https://www.facebook.com/messages/t/100043829582652/" target="_blank"><img src={messenger} alt="Messenger" style={{height: "35px"}}/></a></li>
                <li><a href="https://web.whatsapp.com/" target="_blank"><img src={whatsapp} alt="Whatsapp" style={{height: "28px"}}/></a></li>
            </ul>
        </div>
    </section>
  )
}

export default Right
