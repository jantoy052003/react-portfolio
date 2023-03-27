import React from 'react'

const ContactMe = () => {
  return (
    <section className="containers" id="contactMe">
        <h1>CONTACT ME</h1>
        <div>
            <div>
            <h3>Got a project in mind? Sign me up!</h3>
            <form>
                <input type="text" placeholder="Email Address"/>
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                <button id="send" onclick="mailTo()"> SEND</button>
            </form>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
