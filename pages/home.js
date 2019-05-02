export default function Home() {
    return(
        <body>
            <div className="lead">
                <div id="lead-content">
                    <h1>ADRIAN PARDO</h1>
                    <h2>Web Developer | Programmer</h2>
                    <a href="#projects" className="lead-download-btn">
                        Check out my work
                        <i className="fa fa-arrow-right" id="lead-arrow"></i>
                    </a>
                </div>
                {/*  End #lead-content */}  
                <div className="see-more" id="lead-see-more">
                    <span>
                        <a href="#about" className="see-more-arrows">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <span className="hidden">Jump to next section</span>
                        </a>
                    </span>
                </div>
                {/*  End #see-more */}  
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
                                I have maintained, developed and launched <a href="#projects">multiple projects</a> from scratch, carrying the development of its back-end and front-end codebases.<br /><br />
                                Some of my <a href="#skills">skills</a> include implementing best E-Commerce practices, working with web frameworks & object oriented programming.<br /><br />
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
                <div className="see-more">
                    <span>
                        <a href="#projects" className="see-more-arrows">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <span className="hidden">Jump to next section</span>
                        </a>
                    </span>
                </div>
                {/* End #see-more */}
            </div>

            
            {/*  End #about */}  

            <div id="projects" className="background-alt">
                <h2 className="heading" tabIndex="0">Projects</h2>
                <div className="container">
                    <div className="row project-block">
                        <div className="col-md-4">
                            <h3>Lacayo Law Firm</h3>
                            <p className="project-roles">
                                <span className="neon-blue">UX</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">UI</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Frontend</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">SEO</span>
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
                                <span className="slash">/</span>
                                <span className="neon-blue">JavaScript</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">CSS</span>
                            </p>
                            <p className="project-description">Educational multiplayer browser based game. Winner of <a href="https://shellhacks-2018.devpost.com/submissions" className="yellow">JP Morgan Chase Best Hack for STEM Education</a> at ShellHacks 2018.</p>
                            <a href="https://issacharv.wixsite.com/website"  target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/knightscode.jpg" alt="The Knights Code Screenshot"/>
                        </div>
                    </div>
                    <span className="heading" id="show-more-projects">Show More Projects..</span>
                    <div className="row project-block hidden-project">
                        <div className="col-md-4">
                            <h3>Awaken Atman</h3>
                            <p className="project-roles">
                                <span className="neon-blue">Woocommerce</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Backend</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Custom CSS</span>
                            </p>
                            <p className="project-description">Helped client setup backend for Woocommerce store. Also provided web solutions for search engine optimization and ongoing website maintenance. Store is currently under maintenace mode while redesigning.</p>
                            <a href="https://awakenatman.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/awakenatman.jpg" alt="Awaken Atman Screenshot"/>
                        </div>
                    </div>
                    <div className="row project-block hidden-project">
                        <div className="col-md-4">
                            <h3>Let's Go Coo</h3>
                            <p className="project-roles">
                                <span className="neon-blue">JavaScript</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Animation</span>
                            </p>
                            <p className="project-description">Let's Go Coo is a desktop only web browser game made using HTML/CSS, p5.js and jQuery.</p>
                            <a href="https://letsgocoo.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/letsgocoo.jpg" alt="Let's Go Coo Screenshot"/>
                        </div>
                    </div>
                    <div className="row project-block hidden-project">
                        <div className="col-md-4">
                            <h3>Inter Custom Logistics</h3>
                            <p className="project-roles">
                                <span className="neon-blue">UX</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">UI</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Frontend</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">SEO</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">Hosting</span>
                            </p>
                            <p className="project-description">My first freelance job (2015). Development solutions included hosting, design, SEO, installing a secure certificate, and ongoing website maintenance.</p>
                            <a href="https://intercustom.com" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/intercustom.jpg" alt="Intercustom Screenshot"/>
                        </div>
                    </div>
                    <div className="row project-block hidden-project">
                        <div className="col-md-4">
                            <h3>Mine For Charity</h3>
                            <p className="project-roles">
                                <span className="neon-blue">Chrome Extension</span>
                                <span className="slash">/</span>
                                <span className="neon-blue">JavaScript</span>
                            </p>
                            <p className="project-description">This project was created in the wake of Hurricane Maria, to collect funds for those impacted. The site/extension collected <a href="https://www.getmonero.org/" className="yellow">Monero</a> using CPU. As of March 8, 2019 mining has been disabled on the site.</p>
                            <a href="https://www.mineforcharity.org" target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/mineforcharity.jpg" alt="Mine For Charity Screenshot"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*  End #projects */}  

            <div id="skills">
                <h2 className="heading" tabIndex="0">Skills</h2>
                <div className="row" id="skills-list">
                    <div className="skills-filter"><span className="skills-text active" data-filter="skills-web">Web Development</span></div>
                    <div className="skills-filter"><span className="skills-text" data-filter="skills-programming">Programming</span></div>
                    <div className="skills-filter"><span className="skills-text" data-filter="skills-ecommerce">E-Commerce</span></div>
                </div>
                <ul>
                    <li className="skill skills-web">Responsive Design</li>
                    <li className="skill skills-web skills-ecommerce">UX/UI</li>
                    <li className="skill skills-web">HTML</li>
                    <li className="skill skills-web">CSS</li>
                    <li className="skill skills-web">Bootstrap</li>
                    <li className="skill skills-web">jQuery</li>
                    <li className="skill skills-web">Python Flask</li>
                    <li className="skill skills-web">React</li>
                    <li className="skill skills-web">Wordpress</li>
                    <li className="skill skills-web">Wix</li>
                    <li className="skill skills-web">SEO</li>
                    <li className="skill skills-programming hidden">Python</li>
                    <li className="skill skills-programming hidden">C</li>
                    <li className="skill skills-programming hidden">Java</li>
                    <li className="skill skills-programming hidden">Multiprocessing</li>
                    <li className="skill skills-programming hidden">Selenium</li>
                    <li className="skill skills-web skills-programming">MySQL</li>
                    <li className="skill skills-web skills-programming">MongoDB</li>
                    <li className="skill skils-web">Node</li>
                    <li className="skill skills-web skills-programming">Linux</li>
                    <li className="skill skills-web">Apache</li>
                    <li className="skill skills-web">Amazon Web Services</li>
                    <li className="skill skills-web skills-programming">Git</li>
                    <li className="skill skills-ecommerce hidden">Miva Merchant</li>
                    <li className="skill skills-ecommerce hidden">Wordpress</li>
                    <li className="skill skills-ecommerce hidden">Woocommerce</li>
                    <li className="skill skills-web skills-ecommerce">Client-side Optimization</li>
                    <li className="skill skills-ecommerce hidden">E-Mail Marketing</li>
                    <li className="skill skills-ecommerce hidden">PCI DSS</li>
                    <li className="skill skills-web skills-ecommerce">Illustrator/Photoshop</li>
                </ul>
            </div>
            {/*  End #skills */}  

            <div id="contact" className="background-alt">
                <h2 className="heading" tabIndex="0">Get in Touch</h2>
                <div className="form">
                    <form method="POST" action="https://formspree.io/apardo04@gmail.com">
                        <input type="hidden" name="_subject" value="Contact request from personal website" />
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
        </body>
    )
}
