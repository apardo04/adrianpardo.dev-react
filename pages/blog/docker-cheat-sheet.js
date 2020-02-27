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
        <Layout page={"blog/" + identifier} title="&lt;Adrian Pardo/&gt; Docker Commands Cheat Sheet" description="A quick and simple collection of useful Docker commands" ogImage={"/assets/images/" + identifier + "/docker.png"}>
            <div className="lead">
                <div id="lead-content">
                <h1>{title}</h1>
                <h2>Feb 27, 2020 • Cheat Sheet</h2>
                </div>
                <SeeMore href="#contents" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
                    <ul>
                        <li className="contents-list"><a href="#docker-run">Docker run</a></li>
                        <li className="contents-list"><a href="#docker-ps">Docker ps</a></li>
                        <li className="contents-list"><a href="#docker-stop">Docker stop</a></li>
                        <li className="contents-list"><a href="#docker-rm">Docker rm</a></li>
                        <li className="contents-list"><a href="#docker-images">Docker images</a></li>
                        <li className="contents-list"><a href="#docker-rmi">Docker rmi</a></li>
                        <li className="contents-list"><a href="#docker-pull">Docker pull</a></li>
                        <li className="contents-list"><a href="#docker-exec">Docker exec</a></li>
                    </ul>
                    <h2 className="heading" tabIndex="0" id="docker-run">Docker run</h2>
                    <p>
                        The <a href="https://docs.docker.com/engine/reference/run/" target="new">docker run</a> command is used to run a container from an image.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker run hello-world
                        `}</pre>
                    </p>
                    <p>
                        The "docker run hello-world" command will run an instance of the <a href="https://hub.docker.com/_/hello-world" target="new"> official hello-world image</a> on the docker host if it already exists.
                    </p>
                    <p>
                        If the image is not present on the host, it will go out to docker hub and pull the image, but this is only done the first time. For the subsequent executions the same image on the host will be reused.
                    </p>
                    <p>
                        This is what the output looks like when the image is not already on the host:
                    </p>
                    <BlogImage identifier={identifier} image="docker-run-hello-world" />

                    <h2 className="heading" tabIndex="0" id="docker-ps">Docker ps</h2>
                    <p>
                        The <a href="https://docs.docker.com/engine/reference/commandline/ps/" target="new">docker ps</a> command lists all running containers.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker ps
                        `}</pre>
                    </p>
                    <p>
                        This command will also provide information about the running containers. Such as container ID, the image used to create the container, current status and a randomly generated name by Docker. In this example the name is "dreamy_hopper"
                    </p>
                    <BlogImage identifier={identifier} image="docker-ps" />

                    <p>
                        <pre className="codeblock">{`  
    $ docker ps -a
                        `}</pre>
                    </p>
                    <p>
                        The docker ps -a command will output all running containers as well ass previously stopped or exited containers.
                    </p>
                    <BlogImage identifier={identifier} image="docker-ps-a" />

                    <h2 className="heading" tabIndex="0" id="docker-stop">Docker stop</h2>
                    <p>
                        To stop a running container use the docker stop command. Either the container ID or name must be provided. We can use the "ps" command to get the container ID or name.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker stop dreamy_hopper
                        `}</pre>
                    </p>
                    <p>
                        If successful, the name or ID will be printed, like below:
                    </p>
                    <BlogImage identifier={identifier} image="docker-stop" />
                    <p>
                        Now when docker ps is ran, there will be no running containers.
                    </p>
                    <BlogImage identifier={identifier} image="docker-stop-ps" />
                    <h2 className="heading" tabIndex="0" id="docker-rm">Docker rm</h2>
                    <p>
                        To permanently remove a stopped or exited container, the <a href="https://docs.docker.com/engine/reference/commandline/rm/">docker rm</a> command can be used.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker rm dreamy_hopper
                        `}</pre>
                    </p>
                    <p>
                        If successful, the name or ID will be printed, like below:
                    </p>
                    <BlogImage identifier={identifier} image="docker-rm" />
                    <BlogImage identifier={identifier} image="docker-rm-2" />

                    <h2 className="heading" tabIndex="0" id="docker-images">Docker images</h2>
                    <p>
                        To see a list of images present on the host machine, the <a href="https://docs.docker.com/engine/reference/commandline/images/">docker images</a> command can be used.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker images
                        `}</pre>
                    </p>
                    <p>
                        This command will also provide information about the image size, tag and creation date. The output below shows that the host has three saved images. 
                    </p>
                    <BlogImage identifier={identifier} image="docker-images" />

                    <h2 className="heading" tabIndex="0" id="docker-rmi">Docker rmi</h2>
                    <p>
                        The <a href="https://docs.docker.com/engine/reference/commandline/rmi/">docker rmi</a> command can be used to remove an image that will no longer be used.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker rmi
                        `}</pre>
                    </p>
                    <p>
                        All dependent containers must be stopped and deleted, before being allowed to delete the image.
                    </p>
                    <BlogImage identifier={identifier} image="docker-rmi" />

                    <h2 className="heading" tabIndex="0" id="docker-pull">Docker pull</h2>
                    <p>
                        Earlier when the command 'docker run hello-world' was executed, the image had to be downloaded and then ran.
                    </p>
                    <p>
                        But, what if all that was required was to download the image? The <a href="https://docs.docker.com/engine/reference/commandline/pull/">docker pull</a> command can be used.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker pull hello-world
                        `}</pre>
                    </p>
                    <p>
                        By running this command, there is no "Hello from Docker !" output. Just download information.
                    </p>
                    <BlogImage identifier={identifier} image="docker-pull" />

                    <h2 className="heading" tabIndex="0" id="docker-exec">Docker exec</h2>
                    <p>
                        To run a command on a running container the <a href="https://docs.docker.com/engine/reference/commandline/exec/">docker exec</a> command can be used.
                    </p>
                    <p>
                        <pre className="codeblock">{`  
    $ docker exec server_web_1 cat /etc/hosts
                        `}</pre>
                    </p>
                    <p>
                        This command will print the contents of the 'hosts' file, inside the running container 'server_web_1'.
                    </p>

                    <BlogImage identifier={identifier} image="docker-exec" />

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
                ul {
                    width: 185px;
                    margin: 0 auto;
                    margin-bottom: 50px;
                    text-align: left;
                    list-style: upper-roman;
                }
        `}</style>
        </Layout>
    )
}