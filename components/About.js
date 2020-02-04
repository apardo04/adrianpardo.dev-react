import Link from 'next/link'
import SeeMore from '../components/SeeMore';

const About = props => {
    return(
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
                        I'm always looking to collaborate on interesting projects. Need a developer? - <Link href="/hire-me"><a className="underline-yellow">contact me</a></Link>
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
                </div>
            </div>
            <SeeMore href="#projects" />
        </div>
    )
}

export default About;