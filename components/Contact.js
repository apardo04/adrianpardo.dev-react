const Contact = props => {
    return(
        <div id="contact" className="background-alt">
            <h2 className="heading" tabIndex="0">Get in Touch</h2>
            <div className="form">
                <form method="POST" action="https://formspree.io/apardo04@gmail.com">
                    <input type="hidden" name="_subject" defaultValue="Contact request from personal website" />
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="_replyto" placeholder="Your email" required />
                    <label htmlFor="contact-message">Message</label>
                    <textarea defaultValue="Hello Adrian,&#13;&#10;" name="message" id="contact-message" placeholder="" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div> 
    )
}

export default Contact;