import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
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
                <h2>Mar 4, 2022 • Guide</h2>
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
                            <li className="contents-list"><a href="#networking">Networking</a></li>
                            <li className="contents-list"><a href="#docker">Docker</a></li>
                            <li className="contents-list"><a href="#terraform">Terraform</a></li>
                            <li className="contents-list"><a href="#ci-cd">CI/CD</a></li>
                            <li className="contents-list"><a href="#monitoring-logging-alerting-outages">Monitoring, Logging, Alerting & Outages</a></li>  
                            <li className="contents-list"><a href="#sre-interview">The Interview - How to Prepare</a></li>
                        </ul>
                        <p>*This post is a work in progress, but may still be useful as is. Please be patient.</p>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="cloud">Cloud Certificate</h2>
                        <p>If you don't have a Cloud Certificate yet, I would recommend either the <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=cta&cta=header&p=2" target="new" rel="noopener">AWS Certified Cloud Practitioner</a> or <a href="https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/" target="new" rel="noopener">Microsoft Certified: Azure Fundamentals</a> exams. These are the intro level certificates for each cloud service. Having one of these will definitely help your chances of landing an interview.</p>
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
                        <p>While studying I highly recommend you create an account and follow along. All the public cloud providers provide some free services or free credits to get you started.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="operating-systems">Operating Systems</h2>
                        <p>No two SRE roles are created equal. Most will have you working on Linux Systems, and some Windows/both. </p>

                        <h3 className="blog-heading yellow-border white">Scripting Languages</h3>
                        <p><a href="https://www.learnshell.org/" target="new" rel="noopener">Bash</a> is the command shell and scripting language for the majority of Linux systems.<br/>
                        While <a href="https://docs.microsoft.com/en-us/learn/paths/powershell/" target="new" rel="noopener">PowerShell</a> is the command shell and scripting language for the majority of Windows systems.</p>
                        

                        <p>Some of the most important concepts to know and be able to troubleshoot are <a href="https://www.redhat.com/sysadmin/beginners-guide-network-troubleshooting-linux" target="new" rel="noopener">Networking</a>, Process Management, Threads/Concurrency, I/O Management, Virtualization, Memory storage, File systems, etc.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="networking">Networking</h2>
                        <p>This is a very broad topic, but some of the most important concepts are <a href="https://howdns.works/" target="new" rel="noopener">DNS</a>, <a href="https://howhttps.works/why-do-we-need-https/" target="new" rel="noopener">HTTPS</a>, Virtual Networks, Network Security Groups, <a href="https://www.learningjournal.guru/article/public-cloud-infrastructure/what-is-bastion-host-server/" target="new" rel="noopener">Bastions</a></p> 
                        <p>It is good to be familiar with the <a href="https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" target="new" rel="noopener">OSI Model</a>. It is the universal language for computer networking. It splits up the communication system into seven abstract layers. This can be useful when debugging networking issues.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="docker">Docker</h2>
                        <p>In reality, this section is also about <a href="https://www.docker.com/resources/what-container" target="new" rel="noopener">containers</a>.</p>
                        <p>Best thing you can do is, install <a href="https://www.docker.com/products/docker-desktop" target="new" rel="noopener">Docker Desktop</a> and find a <a href="https://docs.docker.com/get-started/" target="new" rel="noopener">tutorial like this one</a> to get you started.</p>
                        <p>Once you're somewhat comfortable, take it to the next level by installing Docker on an AWS or Azure instance and run some sort of web application on it. See if you can access the web application from a public address. Doing this will start to combine everything you've learned so far together. This is the kind of experimenting that will begin to give you the experience needed for a Cloud based role.</p>
                        
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="terraform">Terraform</h2>
                        <p>Now that you're familiar with Cloud Providers and Containers, let's keep using those Azure/AWS credits and take it up one more level.</p>
                        <p>The next step is to have <a href="https://learn.hashicorp.com/terraform?utm_source=terraform_io&utm_content=terraform_io_hero" target="new" rel="noopener">Terraform</a> create our infrastructure/instances for us. As a best practice clicking around in the Cloud UI should be kept to a minimum.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="ci-cd">CI/CD</h2>
                        <p><a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" target="new" rel="noopener">What is CI/CD?</a></p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="monitoring-logging-alerting-outages">Monitoring, Logging, Alerting, Outages</h2>
                        <p>Look into services like Splunk, Datadog & Elastic Stack, which are used for Log Analysis, Monitoring and Management.</p>
                        <p><a href="https://www.pagerduty.com/resources/learn/what-is-slo-sla-sli/" target="new" rel="noopener">SLI/SLO</a></p>
                        <p><a href="https://www.linkedin.com/pulse/how-perform-incident-post-mortems-identify-root-cause-s%C3%B8ren-pedersen/" target="new" rel="noopener">RCA/Post Mortem</a></p>
                        <p>There is a great podcast called <a href="https://downtimeproject.com/" target="new" rel="noopener">The Downtime Project</a> where they go analyze Outages, RCA's & Post Mortem released by major companies.</p>
                    </div>
                    <div>
                        <h2 className="heading" tabIndex="0" id="sre-interview">Interview - How to Prepare</h2>
                        <p>Besides being moderately comfortable with everything mentioned above, there a few things you can do to better prepare for an SRE interview.</p>
                        <p>You should read the entire <a href="https://sre.google/sre-book/table-of-contents/" target="new" rel="noopener">Google SRE Book</a> and <a href="https://sre.google/workbook/table-of-contents/" target="new" rel="noopener">Google SRE Workbook</a>, these are the unofficial SRE bibles.</p>
                        <p>Sites like Leetcode are great for the coding part of the interview. They also have problem sets on <a href="https://leetcode.com/problemset/concurrency/Concurrency" target="new" rel="noopener">Concurrency/Race Conditions</a>, which are typically seen in SRE interviews.</p>
                        <p>This is a great <a href="https://discord.gg/kr869yU9" target="new" rel="noopener">SRE Discord</a>. It even has a channel dedicated to interviewing questions.</p>
                    </div> 
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />           
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
                @media only screen and (max-width: 992px) {
                    .lead {
                        background-size: contain;
                    }
                }
        `}</style>
        </Layout>
    )
}