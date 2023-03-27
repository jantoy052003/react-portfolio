import React from 'react'
import facebook from '../assets/images/facebook.png'
import github from '../assets/images/github.png'
import messenger from '../assets/images/messenger.png'
import whatsapp from '../assets/images/whatsapp.png'

const Footer = () => {
  return (
    <section>
        <footer>
            <div>
                <nav>
                <a href="https://www.facebook.com/janmichael.caasi" target="_blank"> <img src={facebook} style={{height: "20px"}}/></a>
                <a href="https://github.com/jantoy052003" target="_blank"><img src={github} alt="Github" style={{height: "20px"}}/></a>
                <a href="https://www.facebook.com/messages/t/100043829582652/" target="_blank"><img src={messenger} alt="Messenger" style={{height: "25px"}}/></a>
                <a href="https://web.whatsapp.com/" target="_blank"><img src={whatsapp} alt="Whatsapp" style={{height: "20px"}}/></a>
                </nav>
            </div>
        </footer>
    </section>
  )
}

export default Footer
