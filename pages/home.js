import React, { Component } from "react";

class Home extends Component {
    render() {
        return(
            <body>
                <div class="lead">
                    <div id="lead-content">
                        <h1>ADRIAN PARDO</h1>
                        <h2>Web Developer | Programmer</h2>
                        <a href="#projects" class="lead-download-btn">
                            Check out my work
                            <i class="fa fa-arrow-right" id="lead-arrow"></i>
                        </a>
                    </div>
                    {/*  End #lead-content */}  
                    <div class="see-more" id="lead-see-more">
                        <span>
                            <a href="#about" class="see-more-arrows">
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <span class="hidden">Jump to next section</span>
                            </a>
                        </span>
                    </div>
                    {/*  End #see-more */}  
                    <div id="lead-overlay"></div>


                </div>
                {/*  End #lead */}  

                <div id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h2 class="heading" tabindex="0">About Me</h2>
                            </div>
                            <div class="col-md-8">
                                <p>
                                    I'm an experienced full stack web developer based in Miami, Fl.<br />
                                    Currently working as a web developer for <a href="https://globalrose.com" target="_blank" rel="noopener">Globalrose.com LLC.</a><br /><br />
                                    I have maintained, developed and launched <a href="#projects">multiple projects</a> from scratch, carrying the development of its back-end and front-end codebases.<br /><br />
                                    Some of my <a href="#skills">skills</a> include implementing best E-Commerce practices, working with web frameworks & object oriented programming.<br /><br />
                                    I'm always looking to collaborate on interesting projects. Need a developer? - <a href="hire-me.html" class="underline-yellow">contact me</a>
                                </p>
                            </div>
                        </div>
                        <div class="row padding-top">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-8">
                                <div class="education-block">
                                    <h3>Florida International University</h3>
                                    <h4>Bachelor of Science in Computer Science</h4>
                                </div>
                                {/*  End .education-block */}  
                        
                                <div class="education-block">
                                    <h3>Miami Dade College</h3>
                                    <h4>Associates in Arts Music Business: Music Production</h4>
                                </div>
                                {/*  End .education-block */}  
                            </div>
                            {/* 
                            <a href="/static/assets/resume_placeholder.pdf" class="lead-download-btn" download>
                                Download Resume
                                <i class="fa fa-arrow-right" id="lead-arrow"></i>
                            </a>
                            */}  
                        </div>
                    </div>
                    <div class="see-more">
                        <span>
                            <a href="#projects" class="see-more-arrows">
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                <span class="hidden">Jump to next section</span>
                            </a>
                        </span>
                    </div>
                    {/* End #see-more */}
                </div>

                
                {/*  End #about */}  

                <div id="projects" class="background-alt">
                    <h2 class="heading" tabindex="0">Projects</h2>
                    <div class="container">
                        <div class="row project-block">
                            <div class="col-md-4">
                                <h3>Lacayo Law Firm</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">UX</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">UI</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Frontend</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">SEO</span>
                                </p>
                                <p class="project-description">This project consisted of building a website based on the clients design. Web solutions I have provided for this project include search engine optimization, accessibility compliance, and ongoing website maintenance.</p>
                                <a href="http://www.lacayolawfirm.com"  target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/lacayolawfirm.jpg" alt="Lacayo Law Firm Screenshot"/>
                            </div>
                        </div>
                        <div class="row project-block">
                            <div class="col-md-4">
                                <h3>The Knights Code</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">Wix Code</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">JavaScript</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">CSS</span>
                                </p>
                                <p class="project-description">Educational multiplayer browser based game. Winner of <a href="https://shellhacks-2018.devpost.com/submissions" class="yellow">JP Morgan Chase Best Hack for STEM Education</a> at ShellHacks 2018.</p>
                                <a href="https://issacharv.wixsite.com/website"  target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/knightscode.jpg" alt="The Knights Code Screenshot"/>
                            </div>
                        </div>
                        <span class="heading" id="show-more-projects">Show More Projects..</span>
                        <div class="row project-block hidden-project">
                            <div class="col-md-4">
                                <h3>Awaken Atman</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">Woocommerce</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Backend</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Custom CSS</span>
                                </p>
                                <p class="project-description">Helped client setup backend for Woocommerce store. Also provided web solutions for search engine optimization and ongoing website maintenance. Store is currently under maintenace mode while redesigning.</p>
                                <a href="https://awakenatman.com" target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/awakenatman.jpg" alt="Awaken Atman Screenshot"/>
                            </div>
                        </div>
                        <div class="row project-block hidden-project">
                            <div class="col-md-4">
                                <h3>Let's Go Coo</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">JavaScript</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Animation</span>
                                </p>
                                <p class="project-description">Let's Go Coo is a desktop only web browser game made using HTML/CSS, p5.js and jQuery.</p>
                                <a href="https://letsgocoo.com" target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/letsgocoo.jpg" alt="Let's Go Coo Screenshot"/>
                            </div>
                        </div>
                        <div class="row project-block hidden-project">
                            <div class="col-md-4">
                                <h3>Inter Custom Logistics</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">UX</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">UI</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Frontend</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">SEO</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">Hosting</span>
                                </p>
                                <p class="project-description">My first freelance job (2015). Development solutions included hosting, design, SEO, installing a secure certificate, and ongoing website maintenance.</p>
                                <a href="https://intercustom.com" target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/intercustom.jpg" alt="Intercustom Screenshot"/>
                            </div>
                        </div>
                        <div class="row project-block hidden-project">
                            <div class="col-md-4">
                                <h3>Mine For Charity</h3>
                                <p class="project-roles">
                                    <span class="neon-blue">Chrome Extension</span>
                                    <span class="slash">/</span>
                                    <span class="neon-blue">JavaScript</span>
                                </p>
                                <p class="project-description">This project was created in the wake of Hurricane Maria, to collect funds for those impacted. The site/extension collected <a href="https://www.getmonero.org/" class="yellow">Monero</a> using CPU. As of March 8, 2019 mining has been disabled on the site.</p>
                                <a href="https://www.mineforcharity.org" target="_blank" rel="noopener" tabindex="0"><span class="project-url underline-yellow">See it live</span></a>
                            </div>
                            <div class="col-md-8">
                                <img src="static/assets/images/mineforcharity.jpg" alt="Mine For Charity Screenshot"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  End #projects */}  

                <div id="skills">
                    <h2 class="heading" tabindex="0">Skills</h2>
                    <div class="row" id="skills-list">
                        <div class="skills-filter"><span class="skills-text active" data-filter="skills-web">Web Development</span></div>
                        <div class="skills-filter"><span class="skills-text" data-filter="skills-programming">Programming</span></div>
                        <div class="skills-filter"><span class="skills-text" data-filter="skills-ecommerce">E-Commerce</span></div>
                    </div>
                    <ul>
                        <li class="skill skills-web">Responsive Design</li>
                        <li class="skill skills-web skills-ecommerce">UX/UI</li>
                        <li class="skill skills-web">HTML</li>
                        <li class="skill skills-web">CSS</li>
                        <li class="skill skills-web">Bootstrap</li>
                        <li class="skill skills-web">jQuery</li>
                        <li class="skill skills-web">Python Flask</li>
                        <li class="skill skills-web">React</li>
                        <li class="skill skills-web">Wordpress</li>
                        <li class="skill skills-web">Wix</li>
                        <li class="skill skills-web">SEO</li>
                        <li class="skill skills-programming hidden">Python</li>
                        <li class="skill skills-programming hidden">C</li>
                        <li class="skill skills-programming hidden">Java</li>
                        <li class="skill skills-programming hidden">Multiprocessing</li>
                        <li class="skill skills-programming hidden">Selenium</li>
                        <li class="skill skills-web skills-programming">MySQL</li>
                        <li class="skill skills-web skills-programming">MongoDB</li>
                        <li class="skill skils-web">Node</li>
                        <li class="skill skills-web skills-programming">Linux</li>
                        <li class="skill skills-web">Apache</li>
                        <li class="skill skills-web">Amazon Web Services</li>
                        <li class="skill skills-web skills-programming">Git</li>
                        <li class="skill skills-ecommerce hidden">Miva Merchant</li>
                        <li class="skill skills-ecommerce hidden">Wordpress</li>
                        <li class="skill skills-ecommerce hidden">Woocommerce</li>
                        <li class="skill skills-web skills-ecommerce">Client-side Optimization</li>
                        <li class="skill skills-ecommerce hidden">E-Mail Marketing</li>
                        <li class="skill skills-ecommerce hidden">PCI DSS</li>
                        <li class="skill skills-web skills-ecommerce">Illustrator/Photoshop</li>
                    </ul>
                </div>
                {/*  End #skills */}  

                <div id="contact" class="background-alt">
                    <h2 class="heading" tabindex="0">Get in Touch</h2>
                    <div class="form">
                        <form method="POST" action="https://formspree.io/apardo04@gmail.com">
                            <input type="hidden" name="_subject" value="Contact request from personal website" />
                            <label for="contact-email">Email</label>
                            <input type="email" id="contact-email" name="_replyto" placeholder="Your email" required />
                            <label for="contact-message">Message</label>
                            <textarea name="message" id="contact-message" placeholder="" required>Hello Adrian,&#13;&#10;</textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    {/*  End #contact-form */}  
                </div>
                {/*  End #contact */}  
            </body>
        )
    }
}

export default Home;