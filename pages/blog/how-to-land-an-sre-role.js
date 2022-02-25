import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
import Disqus from "disqus-react"

export default function Post() {
    let identifier = "how-to-land-an-sre-role"
    let title = "How To Land an SRE Role"

    const disqusShortname = "https-adrianpardo-dev" 
    const disqusConfig = {
        url: `https://adrianpardo.dev/blog/${identifier}`,
        identifier: identifier+"-disqus",
        title: title
    }

    return (
        <Layout page={"blog/" + identifier} title="&lt;Adrian Pardo/&gt; How to become a Site Reliability Engineer" description="A step by step guide on how to become a Site Reliability Engineer" ogImage={"/assets/images/" + identifier + "/this-is-fine.jpeg"}>
            <div className="lead">
                <div id="lead-content">
                <h1>{title}</h1>
                <h2>Feb 25, 2022 • Guide</h2>
                </div>
                <SeeMore href="#contents" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <div>
                        <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
                        <ul className="blog-ul">
                            <li className="contents-list"><a href="#cloud-certificate">Cloud Certificate</a></li>
                            <li className="contents-list"><a href="#operating-systems">Operating Systems</a></li>
                            <li className="contents-list"><a href="#docker">Docker</a></li>
                            <li className="contents-list"><a href="#terraform">Terraform</a></li>
                            <li className="contents-list"><a href="#ci-cd">CI/CD</a></li>
                            <li className="contents-list"><a href="#monitoring-logging-alerting">Monitoring, Logging, Alerting</a></li>
                            <li className="contents-list"><a href="#networking">Networking</a></li>
                            <li className="contents-list"><a href="#programming-language">Programming Language</a></li>
                            <li className="contents-list"><a href="#sre-interview">The Interview - How to Prepare</a></li>
                            <li className="contents-list"><a href="#interview">Resources</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="cloud">Cloud Certificate</h2>
                        <p>If you don't have a Cloud Certificate yet, I would recomend either the <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=cta&cta=header&p=2" target="new" rel="noopener">AWS Certified Cloud Practitioner</a> or <a href="https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/" target="new" rel="noopener">Microsoft Certified: Azure Fundamentals</a> exams. These are the intro level certificates for each cloud service. Having one of these will definitely help your chances of landing an interview.</p>
                        <h3 className="blog-heading yellow-border white">Study Material</h3>
                        <p>
                            <ul className="breakdown-ul">
                                <li>Andrew Brown from Exam Pro has awesome & free video courses! <a href="https://www.youtube.com/watch?v=NKEFWyqJ5XA" target="new" rel="noopener">Microsoft Azure Fundamentals Certification Course</a> and <a href="https://www.youtube.com/watch?v=SOTamWNgDKc" target="new" rel="noopener">AWS Certified Cloud Practitioner Certification Course</a></li>
                                <li><a href="https://app.pluralsight.com/explore/certifications/topics/azure?trackId=5ac418bd-60e8-480c-8c22-37384d0e528c&examPrepId=eaa6d647-8e90-42e6-a588-46d54639a9d1" target="new" rel="noopener">Plural Sight's Certificate Path: Microsoft Azure Fundamentals (AZ-900)</a> has a 9hr video course & practice exams.</li>
                                <li><a href="https://app.pluralsight.com/explore/certifications/topics/aws?trackId=b2dc79ce-d1ad-4797-92fb-3b39922947b6&examPrepId=baf7b23b-aacf-43c1-955a-917406fb2b30" target="new" rel="noopener">Plural Sight's Certification Path: AWS Certified Cloud Practitioner (CLF-C01)</a> has a 7hr video course, a study guide & practice exams.</li>
                                <li><a href="https://docs.microsoft.com/en-us/learn/browse/?terms=fundamentals&expanded=azure&resource_type=learning%20path&levels=beginner" target="new" rel="noopener">Microsoft learning paths</a> are a great resource, but not all the paths will be covered in the Fundamentals exam.</li>
                                <li><a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/82/cloud-foundations-learning-plan?cta=lacp_topbanner" target="new" rel="noopener">Official AWS Cloud Foundations Learning Plan</a></li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="operaing-systems">Operating Systems</h2>
                        <p>No two SRE roles are created equal. Most will have you working on Linux Systems, some Windows, some both.</p>

                        <h3 className="blog-heading yellow-border white">Scripting Languages</h3>
                        <p>Bash is the command shell and scripting language for the majority of Linux systems.<br/>
                        While PowerShell is the command shell and scripting language for the majority of Windows systems.</p>
                        

                        <p>Some of the most important concepts to know are Process Management, Networking, Threads/Concurrency, Text Manipulation Tools, I/O Management, Virtualization, Memory storage, and File systems.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="docker">Docker</h2>
                        <p>In reality, this section is also about <a href="https://www.docker.com/resources/what-container" target="new" rel="noopener">containers</a>.</p>
                        
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="terraform">Terraform</h2>
                        <p>Get your hands dirty and use those free Azure/AWS credits.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="ci-cd">CI/CD</h2>
                        <p></p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="monitoring-logging-alerting">Monitoring, Logging, Alerting</h2>
                        <p></p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="networking">Networking</h2>
                        <p>
                            <h3 className="blog-heading yellow-border white">OSI Model</h3>
                            <br/>Consists of 7 layers, each one consisting of a package of protocols.
                            <ul className="breakdown-ul">
                                <li>The Physical Layer</li>
                                <li>The Data Link Layer</li>
                                <li>The Network Layer</li>
                                <li>The Transport Layer</li>
                                <li>The Session Layer</li>
                                <li>The Presentation Layer</li>
                                <li>The Application Layer</li>
                            </ul>
                        </p>
                        



                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="sre-interview">Interview - How to Prepare</h2>
                        <p>Besides being moderately comfortable with everything mentioned above, there a few things you can do to better prepare for an SRE interview.</p>
                        <p>You should read the entire <a href="https://sre.google/sre-book/table-of-contents/" target="new" rel="noopener">Google SRE Book</a> and <a href="https://sre.google/workbook/table-of-contents/" target="new" rel="noopener">Google SRE Workbook</a>, these are the unofficial SRE bibles.</p>
                        <p>Sites like Leetcode, are great for the coding part of the interview. They also have problemsets on <a href="https://leetcode.com/problemset/concurrency/Concurrency" target="new" rel="noopener">Concurrency/Race Conditions</a>, which are typically seen in SRE interviews.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="resourcess">Resources</h2>
                        <p>
                            <ul className="breakdown-ul">
                                <li><a href="https://sre.google/sre-book/table-of-contents/" target="new" rel="noopener">Google SRE Book</a></li>
                            </ul>
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <style jsx>{`
                .lead {
                    background: url("../../assets/images/${identifier}/this-is-fine.jpeg");
                    background-size: cover;
                }
                .blog-ul {
                    width: 350px;
                }
        `}</style>
        </Layout>
    )
}