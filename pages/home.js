import SeeMore from '../components/SeeMore'
import React, { useState, useEffect } from 'react';

const SkillsList = (props) => {
    const skills = {
        "web" : ["Responsive Design","UX/UI","HTML","CSS","Bootstrap","jQuery","Python","Flask","React","Wordpress","Wix","SEO","MySQL","MongoDB","Node","Linux","Apache","Amazon Web Services","Git","Client-side Optimization","Illustrator/Photoshop"]
        ,"ecommerce" : ["UX/UI","Miva Merchant","Wordpress","Woocommerce","Client-side Optimization","E-Mail Marketing","PCI DSS","Illustrator/Photoshop"]   
        ,"programming" : ["Python","C","Java","Multiprocessing","Selenium","MySQL","MongoDB","Linux","Git"]
    }
    const listItems = skills[props.filter].map((item) => 
        <li className="skill" key={item}>{item}</li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

const typingAnimation = (el, toRotate, period) => {
    let loopNum = 0;
    period = parseInt(period, 10) || 2000;
    let txt = '';
    tick(el, toRotate, period, loopNum, txt, isDeleting);
    let isDeleting = false;
}

const tick = (el, toRotate, period, loopNum, txt, isDeleting, props) => {
    var i = loopNum;
    var fullTxt = toRotate[i];
    var keepTyping = true;
 
    if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
    } else if (loopNum < toRotate.length) {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    el.innerHTML = '<span class="wrap">'+txt+'</span>';
    
    var delta = 200 - Math.random() * 100;
    if (isDeleting) { delta /= 2; }

    if (!isDeleting && txt === fullTxt && loopNum + 1 < toRotate.length) {
        delta = period;
        isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
    }
    else if(!isDeleting && txt === fullTxt) {
        keepTyping = (loopNum < toRotate.length - 1)    
    }
    if (keepTyping) {  
        setTimeout(function() {              
            tick(el, toRotate, period, loopNum, txt, isDeleting);
        }, delta);     
    }
    else{
        console.log("Done Typing, no more loops")
    }
}

const Home = props => {
    const [moreProjects, showMoreProjects] = useState(false);
    const [skill, filterSkills] = useState("web");

    useEffect(() => {
        let element = document.getElementById('typewrite')
        let toRotate = JSON.parse(element.getAttribute('data-type'))
        let period = element.getAttribute('data-period')
        typingAnimation(element, toRotate, period)
        console.log("useEffect() typingAnimation Started")

        return 
    }, [])
    return(
        <React.Fragment>
            <div className="lead">
                <div id="lead-content">
                    <h1>ADRIAN PARDO</h1>
                    <h2 id="typewrite" className="typewrite" data-period="2000" data-type='[ "FullStack Developer", "Software Engineer", "FullStack Developer | Software Engineer" ]'>
                        <span className="wrap"></span>
                    </h2>
                    <a href="#projects" className="lead-download-btn">
                        Check out my work
                        <i className="fa fa-arrow-right" id="lead-arrow"></i>
                    </a>
                </div>
                {/*  End #lead-content */}  
                <SeeMore href="#about" />
                <div id="lead-overlay"></div>
            </div>
            {/*  End #lead */}  

            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="heading" tabIndex="0">About Me</h2>
                        </div>
                        <div className="col-md-8">
                        <p>
                            I'm an experienced full stack web developer based in Miami, Fl.<br />
                            Currently working as a web developer for <a href="https://globalrose.com" target="_blank" rel="noopener">Globalrose.com LLC.</a><br /><br />
                            I have developed, launched, and maintained <a href="#projects">multiple projects</a> from scratch.<br /><br />
                            Some of my strongest <a href="#skills">skills</a> include E-Commerce development, web frameworks & object oriented programming.<br /><br />
                            I'm always looking to collaborate on interesting projects. Need a developer? - <a href="hire-me.html" className="underline-yellow">contact me</a>
                        </p>
                        </div>
                    </div>
                    <div className="row padding-top">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8">
                            <div className="education-block">
                                <h3>Florida International University</h3>
                                <h4>Bachelor of Science in Computer Science</h4>
                            </div>
                            {/*  End .education-block */}  
                    
                            <div className="education-block">
                                <h3>Miami Dade College</h3>
                                <h4>Associates in Arts Music Business: Music Production</h4>
                            </div>
                            {/*  End .education-block */}  
                        </div>
                        {/* 
                        <a href="/static/assets/resume_placeholder.pdf" className="lead-download-btn" download>
                            Download Resume
                            <i className="fa fa-arrow-right" id="lead-arrow"></i>
                        </a>
                        */}  
                    </div>
                </div>
                <SeeMore href="#projects" />
            </div>
            {/*  End #about */}  

            <div id="projects" className="background-alt">
                <h2 className="heading" tabIndex="0">Projects</h2>
                <div className="container">
                    <div className="row project-block">
                        <div className="col-md-4">
                            <h3>Lacayo Law Firm</h3>
                            <p className="project-roles">
                                <span className="neon-blue">Frontend</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">SEO</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">UX</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">UI</span>
                            </p>
                            <p className="project-description">This project consisted of building a website based on the clients design. Web solutions I have provided for this project include search engine optimization, accessibility compliance, and ongoing website maintenance.</p>
                            <a href="http://www.lacayolawfirm.com"  target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/lacayolawfirm.jpg" alt="Lacayo Law Firm Screenshot"/>
                        </div>
                    </div>
                    <div className="row project-block">
                        <div className="col-md-4">
                            <h3>The Knights Code</h3>
                            <p className="project-roles">
                                <span className="neon-blue">Wix Code</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">JavaScript</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">CSS</span>
                            </p>
                            <p className="project-description">Educational multiplayer browser based game. Winner of <a href="https://shellhacks-2018.devpost.com/submissions" className="yellow">JP Morgan Chase Best Hack for STEM Education</a> at ShellHacks 2018.</p>
                            <a href="https://issacharv.wixsite.com/website"  target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/knightscode.jpg" alt="The Knights Code Screenshot"/>
                        </div>
                    </div>
                    { moreProjects ? 
                        <React.Fragment>
                            <div className="row project-block">
                                <div className="col-md-4">
                                    <h3>Awaken Atman</h3>
                                    <p className="project-roles">
                                        <span className="neon-blue">Woocommerce</span>
                                        <span className="slash"> / </span>
                                        <span className="neon-blue">Backend</span>
                                        <span className="slash"> / </span>
                                        <span className="neon-blue">Custom CSS</span>
                                    </p>
                                    <p className="project-description">Helped client setup backend for Woocommerce store. Also provided web solutions for search engine optimization and ongoing website maintenance. Store is currently under maintenace mode while redesigning.</p>
                                    <a href="https://awakenatman.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                                </div>
                                <div className="col-md-8">
                                    <img src="static/assets/images/awakenatman.jpg" alt="Awaken Atman Screenshot"/>
                                </div>
                            </div>
                            <div className="row project-block">
                                <div className="col-md-4">
                                    <h3>Let's Go Coo</h3>
                                    <p className="project-roles">
                                        <span className="neon-blue">JavaScript</span>
                                        <span className="slash"> / </span>
                                        <span className="neon-blue">Animation</span>
                                    </p>
                                    <p className="project-description">Let's Go Coo is a desktop only web browser game made using HTML/CSS, p5.js and jQuery.</p>
                                    <a href="https://letsgocoo.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                                </div>
                                <div className="col-md-8">
                                    <img src="static/assets/images/letsgocoo.jpg" alt="Let's Go Coo Screenshot"/>
                                </div>
                            </div>
                            <div className="row project-block">
                                <div className="col-md-4">
                                    <h3>Inter Custom Logistics</h3>
                                    <p className="project-roles">
                                        <span className="neon-blue">Frontend</span>
                                        <span className="slash"> / </span>
                                        <span className="neon-blue">SEO</span>
                                        <span className="slash"> / </span>
                                        <span className="neon-blue">Hosting</span>
                                    </p>
                                    <p className="project-description">My first freelance job (2015). Development solutions included hosting, design, SEO, installing a secure certificate, and ongoing website maintenance.</p>
                                    <a href="https://intercustom.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                                </div>
                                <div className="col-md-8">
                                    <img src="static/assets/images/intercustom.jpg" alt="Intercustom Screenshot"/>
                                </div>
                            </div>
                            <div className="row project-block">
                            <div className="col-md-4">
                                <h3>Mine For Charity</h3>
                                <p className="project-roles">
                                    <span className="neon-blue">Chrome Extension</span>
                                    <span className="slash"> / </span>
                                    <span className="neon-blue">JavaScript</span>
                                </p>
                                <p className="project-description">This project was created in the wake of Hurricane Maria, to collect funds for those impacted. The site/extension collected <a href="https://www.getmonero.org/" className="yellow">Monero</a> using CPU. As of March 8, 2019 mining has been disabled on the site.</p>
                                <a href="https://www.mineforcharity.org" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div className="col-md-8">
                                <img src="static/assets/images/mineforcharity.jpg" alt="Mine For Charity Screenshot"/>
                            </div>
                        </div>
                        </React.Fragment>
                    : 
                        <span className="heading" id="show-more-projects" onClick={() => showMoreProjects(true)}>Show More Projects..</span> 
                    }
                </div>
            </div>
            {/*  End #projects */}  

            <div id="skills">
                <h2 className="heading" tabIndex="0">Skills</h2>
                <div className="row" id="skills-list">
                    <div className="skills-filter"><span className={ skill == "web" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("web")}>Web Development</span></div>
                    <div className="skills-filter"><span className={ skill == "programming" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("programming")}>Programming</span></div>
                    <div className="skills-filter"><span className={ skill == "ecommerce" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("ecommerce")}>E-Commerce</span></div>
                </div>
                <SkillsList key={ skill } filter={ skill } />
            </div>
            {/*  End #skills */}  

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
                {/*  End #contact-form */}  
            </div>
            {/*  End #contact */}  
        </React.Fragment>
    )   
}

export default Home