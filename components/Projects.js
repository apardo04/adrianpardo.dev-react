import { useState } from 'react';

const Projects = props => {
    const [moreProjects, showMoreProjects] = useState(false);
    return (
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
                            <h3>Stockify App</h3>
                            <p className="project-roles">
                                <span className="neon-blue">React</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">MySQL</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">REST API</span>
                                <span className="slash"> / </span>
                                <span className="neon-blue">Next.js</span>
                            </p>
                            <p className="project-description">Full Stack App made for stock/investment portfolio management. Implemented REST API and user authentication.</p>
                            <a href="https://stockify.app"  target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">See it live</span></a>
                            <span className="project-url yellow"> | </span> 
                            <a href="https://github.com/apardo04/stock-market-react-app"  target="_blank" rel="noopener" tabIndex="0"><span className="project-url underline-yellow">Github</span></a>
                        </div>
                        <div className="col-md-8">
                            <img src="static/assets/images/stockportfolio.jpg" alt="Lacayo Law Firm Screenshot"/>
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
    )
}

export default Projects;