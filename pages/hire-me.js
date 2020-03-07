import Layout from '../components/Layout'
import SeeMore from '../components/SeeMore'
import React, { useState } from 'react'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/styles.css'

const HireMe = props => {
    const [other, toggleOther] = useState(false);

    return (
        <Layout page="hire-me" title="Hire Me &lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer" description="Freelance Web Developer for hire. Your all in one for SEO, E-Commerce, Site hosting, WooCommerce, Miva Merchant, Web Design, etc. Based in Miami, Florida">
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
                <SeeMore href="#questionnaire" />
                <div id="lead-overlay"></div>
            </div>
            {/* End #lead */}

            <div className="info-container-2" id="questionnaire">
                <div className="container text-center">
                    <h2 className="heading" tabIndex="0">Questionnaire</h2>
                    <div className="form info" id="questionnaire-form">
                        <form method="POST" action="https://formspree.io/apardo04@gmail.com">
                            <input type="hidden" name="_subject" defaultValue="Hire-me request from personal website" />
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
                                <input type="textfield" id="website" name="website" defaultValue="http://" />
                            </div>
                            <h2 className="heading padding-top-10" tabIndex="0">Project Details</h2>
                            <div className="row">
                                <label className="padding-bottom-15">What can I help you with?</label>
                                <div className="help-radio-container">
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="Web Development" defaultValue="Web Development" />
                                        </span>
                                        <span className="check-text">Web Development</span>                   
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="Web Design" defaultValue="Web Design" />
                                        </span>
                                        <span className="check-text">Web Design</span>                    
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="Web Hosting" defaultValue="Web Hosting" />
                                        </span>
                                        <span className="check-text">Web Hosting</span>                 
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="e-commerce" defaultValue="e-commerce" />
                                        </span>
                                        <span className="check-text">E-Commerce</span>                    
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="seo" defaultValue="seo" />
                                        </span>
                                        <span className="check-text">SEO</span>                    
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="checkbox" name="other" id="help-radio-other" defaultValue="other" onChange={() => toggleOther(!other)}/>
                                        </span>
                                        <span className="check-text">Other...</span>                    
                                    </label>
                                    { other ?
                                        <React.Fragment>
                                            <input id="other-textarea" type="textarea" placeholder="...Please describe what other services you need" />
                                        </React.Fragment>
                                    :
                                        <React.Fragment></React.Fragment>
                                    }
                                </div>

                                <label className="padding-bottom-15">Is this is a new project or a redesign for an existing site?</label>
                                <div className="help-radio-container">
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="radio" name="new-or-redesign" defaultValue="New Project" />
                                        </span>
                                        <span className="check-text">New Project</span>                   
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="radio" name="new-or-redesign" defaultValue="Redesign" />
                                        </span>
                                        <span className="check-text">Redesign</span>                   
                                    </label>
                                    <label className="help-radio">
                                        <span className="checker">
                                            <input className="checkbox" type="radio" name="new-or-redesign" defaultValue="Site Hosting" />
                                        </span>
                                        <span className="check-text">Just Need Hosting</span>                   
                                    </label>
                                </div>
                                <label htmlFor="select-timeline" className="padding-bottom-15"><span className="bold">Timeline.</span> When do you need this completed by?</label>
                                <div className="help-radio-container">
                                    <select name="timeline" id="select-timeline">
                                        <option defaultValue="Please choose one...">Please choose one...</option>
                                        <option defaultValue="As soon as possible">As soon as possible</option>
                                        <option defaultValue="Within 3 weeks">Within 3 weeks</option>
                                        <option defaultValue="Within 3 weeks">Within 6 weeks</option>
                                        <option defaultValue="Within 3 weeks">Within 12 weeks</option>
                                        <option defaultValue="When you're available">When you're available</option>
                                    </select>
                                </div>
                                <label htmlFor="additional-info" className="padding-bottom-15">Please provide any additional details for the project</label>
                                <textarea id="additional-info" name="additional-info" defaultValue=""></textarea>
                            </div>
                            <p className="description"></p>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>  
                {/* End #contact-form */}
            </div>
            {/* End #questionnaire */}
            <style jsx>{`
                #lead-beach {
                    background: url("../assets/images/lead-beach-bg.jpg");
                    background-size: cover
                }
                .col-50{
                    width: 48.5%;
                    float: left;
                    margin-right: 3%;
                }
                .help-radio-container {
                    display: inline-block;
                    width: 100%;
                    margin-bottom: 35px;
                    text-align: left;
                }
                .help-radio {
                    width: 33%;
                }
                .checkbox {
                    height: 20px;
                    width: 20px !important;
                    float: left;
                }
                span.check-text {
                    padding-left: 10px;
                }
                #select-timeline {
                    background-color: var(--darkblue);
                    border: 1px solid var(--yellow);
                    color: white;
                    padding: 7px;
                }
                @media only screen and (max-width: 992px) {
                    .col-50 {
                        width: 100%;
                        margin-right: 0;
                    }
                    .help-radio {
                        width: 100%;
                    }
                }
            `}</style>
        </Layout>
    )
}

export default HireMe