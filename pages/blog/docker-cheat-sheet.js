import Layout from '../../components/Layout';
import React, { useEffect } from 'react';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/styles.css'
import Disqus from "disqus-react"

export default function Post() {
    let identifier = "docker-cheat-sheet"
    let title = "Docker Commands Cheat Sheet"

    const disqusShortname = "https-adrianpardo-dev" 
    const disqusConfig = {
        url: `https://adrianpardo.dev/blog/${identifier}`,
        identifier: identifier+"-disqus",
        title: title
    }

    return (
        <Layout page={"blog/" + identifier} title="&lt;Adrian Pardo/&gt; Docker Commands Cheat Sheet" description="A quick collection of useful Docker commands" ogImage={"/assets/images/" + identifier + "/docker.png"}>
            <div className="lead">
                <div id="lead-content">
                <h1>{title}</h1>
                <h2>Feb 26, 2020 • Cheat Sheet</h2>
                </div>
                <SeeMore href="#objectives" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <h2 className="heading" tabIndex="0" id="objectives">Objectives</h2>
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </div>
            </div>
            <style jsx>{`
                .lead {
                background: url("../../assets/images/${identifier}/docker.jpg");
                    background-size: cover;
                }
                #lead-overlay {
                    background: rgba(32, 46, 64, 0.65);
                }
                p {
                    margin-bottom: 50px;
                }
        `}</style>
        </Layout>
    )
}