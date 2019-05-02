import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function HireMe() {
    return (
        <div>
            <Head page="hire-me" title="Hire Me &lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer" />
            <Nav page="hire-me" />
            <body>
                <div className="lead" id="lead-beach">
                    <div id="lead-content">
                        <h1>HIRE ME</h1>
                        <h2>Let's Build Something Amazing</h2>
                        <a href="#questionnaire" className="lead-download-btn fill">
                            Let's Get Started
                            <i className="fa fa-arrow-right" id="lead-arrow"></i>
                        </a>
                    </div>
                    {/* End #lead-content */}
                    <div className="see-more" id="lead-see-more">
                        <span>
                            <a href="#questionnaire" className="see-more-arrows">
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <span className="hidden">Jump to next section</span>
                            </a>
                        </span>
                    </div>
                    {/* End #see-more */}
                    <div id="lead-overlay"></div>
                </div>
                {/* End #lead */}

                <div id="questionnaire">
                    <div className="container">
                        <h2 className="heading" tabIndex="0">Questionnaire</h2>
                        <div className="form" id="questionnaire-form">
                            <form method="POST" action="https://formspree.io/apardo04@gmail.com">
                                <input type="hidden" name="_subject" value="Hire-me request from personal website" />
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="name">Your name</label>
                                        <input type="name" id="name" placeholder="" />
                                    </div>
                                    <div className="col-50 no-margin">
                                        <label htmlFor="email">Your E-mail</label>
                                        <input type="email" id="email" name="_replyto" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="website">Your website, if you have one</label>
                                    <input type="textfield" id="website" name="website" value="http://" />
                                </div>
                                <h2 className="heading padding-top-10" tabIndex="0">Project Details</h2>
                                <div className="row">
                                    <label className="padding-bottom-15">What can I help you with?</label>
                                    <div className="help-radio-container">
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="Web Development" value="Web Development" />
                                            </span>
                                            <span className="check-text">Web Development</span>                   
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="Web Design" value="Web Design" />
                                            </span>
                                            <span className="check-text">Web Design</span>                    
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="Web Hosting" value="Web Hosting" />
                                            </span>
                                            <span className="check-text">Web Hosting</span>                 
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="e-commerce" value="e-commerce" />
                                            </span>
                                            <span className="check-text">E-Commerce</span>                    
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="seo" value="seo" />
                                            </span>
                                            <span className="check-text">SEO</span>                    
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="checkbox" name="other" id="help-radio-other" value="other" />
                                            </span>
                                            <span className="check-text">Other...</span>                    
                                        </label>
                                        <input id="other-textarea" className="hidden" type="textarea" placeholder="...Please describe what other services you need" />
                                    </div>

                                    <label className="padding-bottom-15">Is this is a new project or a redesign for an existing site?</label>
                                    <div className="help-radio-container">
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="radio" name="new-or-redesign" value="New Project" />
                                            </span>
                                            <span className="check-text">New Project</span>                   
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="radio" name="new-or-redesign" value="Redesign" />
                                            </span>
                                            <span className="check-text">Redesign</span>                   
                                        </label>
                                        <label className="help-radio">
                                            <span className="checker">
                                                <input className="checkbox" type="radio" name="new-or-redesign" value="Site Hosting" />
                                            </span>
                                            <span className="check-text">Just Need Hosting</span>                   
                                        </label>
                                    </div>
                                    <label htmlFor="select-timeline" className="padding-bottom-15"><span className="bold">Timeline.</span> When do you need this completed by?</label>
                                    <div className="help-radio-container">
                                        <select name="timeline" id="select-timeline">
                                            <option value="Please choose one...">Please choose one...</option>
                                            <option value="As soon as possible">As soon as possible</option>
                                            <option value="Within 3 weeks">Within 3 weeks</option>
                                            <option value="Within 3 weeks">Within 6 weeks</option>
                                            <option value="Within 3 weeks">Within 12 weeks</option>
                                            <option value="When you're available">When you're available</option>
                                        </select>
                                    </div>
                                    <label htmlFor="additional-info" className="padding-bottom-15">Please provide any additional details for the project</label>
                                    <textarea id="additional-info" name="additional-info" value=""></textarea>
                                </div>
                                <p className="description"></p>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>  
                    {/* End #contact-form */}
                </div>
                {/* End #questionnaire */}

                <script src="assets/js/jquery-3.3.1.min.js"></script>
                <script src="assets/js/scripts.js"></script>
            </body>
            <Footer />
        </div>
    )
}