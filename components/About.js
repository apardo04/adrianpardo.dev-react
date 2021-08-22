import Link from 'next/link'
import SeeMore from '../components/SeeMore';

const About = props => {
    return(
        <div className="info-container" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="heading" tabIndex="0">About Me</h2>
                        <div>
                            <a href="https://www.youracclaim.com/badges/a88f8719-21de-49fd-b869-fcd470ccb18d/public_url" target="_blank" rel="noopener">
                                <img className="cert" id="aws-badge" alt="aws-cloud-practitioner-badge" src="../assets/images/aws-certified-cloud-practitioner.png" />
                            </a>
                        </div>
                        <div>
                            <img className="cert" id="nike-badge" alt="nike-2020-intern-badge" src="../assets/images/2020-nike-intern-logo.png" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p id="about-text">
                            I'm an experienced software engineer based in Miami, Fl.<br /><br />
                            I have developed, launched, and maintained <a href="#projects">multiple projects</a> from scratch.<br /><br />
                            Some of my strongest <a href="#skills">skills</a> include cloud computing, automation & web development.<br /><br />
                            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to chat. - <Link href="#contact"><a className="underline-yellow">contact me</a></Link>
                        </p>
                        <div className="education-block">
                            <h3>Florida International University</h3>
                            <h4>Bachelor of Arts in Computer Science</h4>
                        </div>
                        <div className="education-block">
                            <h3>Miami Dade College</h3>
                            <h4>Associates in Arts Music Business: Music Production</h4>
                        </div>  
                    </div>
                </div>
            </div>
            <SeeMore href="#projects" />
            <style jsx>{`
                .cert {
                    width: 45%;
                }
                #aws-badge {
                    margin-bottom: 15px;
                }
                #nike-badge {
                    background: white;
                    border-radius: 4px;
                }
                #about-text {
                    margin-bottom: 50px;
                }
                @media only screen and (max-width: 768px) {
                    .cert {
                        width: 60%;
                        margin-bottom: 50px;
                    }
                }
            `}</style>
        </div>
    )
}

export default About;