import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
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
                <h2>Mar 7, 2020 • Cheat Sheet</h2>
                </div>
                <SeeMore href="#contents" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <div>
                        <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
                        <ul className="blog-ul">
                            <li className="contents-list"><a href="#docker-build">Docker build</a></li>
                            <li className="contents-list"><a href="#docker-run-simple">Docker run (Simple)</a></li>
                            <li className="contents-list"><a href="#docker-run-advance">Docker run (Advance)</a></li>
                            <li className="contents-list"><a href="#docker-ps">Docker ps</a></li>
                            <li className="contents-list"><a href="#docker-stop">Docker stop</a></li>
                            <li className="contents-list"><a href="#docker-rm">Docker rm</a></li>
                            <li className="contents-list"><a href="#docker-images">Docker images</a></li>
                            <li className="contents-list"><a href="#docker-rmi">Docker rmi</a></li>
                            <li className="contents-list"><a href="#docker-pull">Docker pull</a></li>
                            <li className="contents-list"><a href="#docker-exec">Docker exec</a></li>
                            <li className="contents-list"><a href="#useful-links">Useful Links</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-build">Docker build</h2>
                        <p>The <a href="https://docs.docker.com/engine/reference/commandline/build/" target="new" rel="noopener">docker build</a> command can be used to create an image from an application.</p>
                        <p><pre className="codeblock">{`  
    $ docker build -t server_web_1 -f Dockerfile .
                            `}</pre></p>
                        <p>The -t flag represents the name and tag of the image (example: 'name:tag'), and -f is the name and path to the Dockerfile.</p>
                    </div>
                    <h2 className="heading" tabIndex="0" id="docker-run-simple">Docker run (Simple)</h2>
                    <p>The <a href="https://docs.docker.com/engine/reference/run/" target="new" rel="noopener">docker run</a> command is used to run a container from an image.</p>
                    <p><pre className="codeblock">{`  
    $ docker run hello-world
                        `}</pre></p>
                    <p>The "docker run hello-world" command will run an instance of the <a href="https://hub.docker.com/_/hello-world" target="new" rel="noopener"> official hello-world image</a> on the docker host if it already exists.</p>
                    <p>If the image is not present on the host, it will go out to docker hub and pull the image, but this is only done the first time. For the subsequent executions the same image on the host will be reused.</p>
                    <div>
                        <p>This is what the output looks like when the image is not already on the host:</p>
                        <BlogImage identifier={identifier} image="docker-run-hello-world" />
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-run-advance">Docker run (Advance)</h2>
                        <p>For this section, docker run will be executed on a web server.</p>
                        <p><pre className="codeblock">{`  
    $ docker run -i -p 3000:8000 server_web_1
                            `}</pre></p>
                        <p>The -i flag stands for 'interactive', meaning STDIN will stay opened.</p>
                        <p>The -p flag is for publishing a containers port. Here, this maps port 8000 in the Docker image to port 3000 on the local machine.</p>
                        <BlogImage identifier={identifier} image="docker-run-server_web" />
                        <p>
                            To run the docker image as a background task the -d (detach) flag can be used rather than -i. This will keep the terminal available:
                            <pre className="codeblock">{`  
    $ docker run -d -p 3000:8000 server_web_1
                            `}</pre>
                        </p>
                        <BlogImage identifier={identifier} image="docker-run-d-server_web" />
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-ps">Docker ps</h2>
                        <p>The <a href="https://docs.docker.com/engine/reference/commandline/ps/" target="new" rel="noopener">docker ps</a> command lists all running containers.</p>
                        <p><pre className="codeblock">{`  
    $ docker ps
                            `}</pre>
                        </p>
                        <div>
                            <p>This command will also provide information about the running containers. Such as container ID, the image used to create the container, current status and a randomly generated name by Docker. In this example the name is "dreamy_hopper"</p>
                            <BlogImage identifier={identifier} image="docker-ps" />
                        </div>

                        <p><pre className="codeblock">{`  
    $ docker ps -a
                            `}</pre></p>
                        <div>
                            <p>The docker ps -a command will output all running containers as well ass previously stopped or exited containers.</p>
                            <BlogImage identifier={identifier} image="docker-ps-a" />
                        </div>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-stop">Docker stop</h2>
                        <p>To stop a running container use the docker stop command. Either the container ID or name must be provided. We can use the "ps" command to get the container ID or name.</p>
                        <p><pre className="codeblock">{`  
    $ docker stop dreamy_hopper
                            `}</pre></p>
                        <div>
                            <p>If successful, the name or ID will be printed, like below:</p>
                            <BlogImage identifier={identifier} image="docker-stop" />
                        </div>
                        <div>
                            <p>Now when docker ps is ran, there will be no running containers.</p>
                            <BlogImage identifier={identifier} image="docker-stop-ps" />
                        </div>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-rm">Docker rm</h2>
                        <p>To permanently remove a stopped or exited container, the <a href="https://docs.docker.com/engine/reference/commandline/rm/" target="new" rel="noopener">docker rm</a> command can be used.</p>
                        <p><pre className="codeblock">{`  
    $ docker rm dreamy_hopper
                            `}</pre></p>
                        <p>If successful, the name or ID will be printed, like below:</p>
                        <div>
                            <BlogImage identifier={identifier} image="docker-rm" />
                            <BlogImage identifier={identifier} image="docker-rm-2" />
                        </div>
                        <p>
                            To delete all containers, the following command can be used:
                            <pre className="codeblock">{`  
    $ docker rm $(docker ps -a -q)
                            `}</pre>
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-images">Docker images</h2>
                        <p>To see a list of images present on the host machine, the <a href="https://docs.docker.com/engine/reference/commandline/images/" target="new" rel="noopener">docker images</a> command can be used.</p>
                        <p><pre className="codeblock">{`  
    $ docker images
                            `}</pre></p>
                        <div>
                            <p>This command will also provide information about the image size, tag and creation date. The output below shows that the host has three saved images. </p>
                            <BlogImage identifier={identifier} image="docker-images" />
                        </div>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-rmi">Docker rmi</h2>
                        <p>The <a href="https://docs.docker.com/engine/reference/commandline/rmi/" target="new" rel="noopener">docker rmi</a> command can be used to remove an image that will no longer be used.</p>
                        <p><pre className="codeblock">{`  
    $ docker rmi
                            `}</pre></p>
                        <p>All dependent containers must be stopped and deleted, before being allowed to delete the image.</p>
                        <BlogImage identifier={identifier} image="docker-rmi" />
                        <p>To delete all images, the following command can be used:
                            <pre className="codeblock">{`  
    $ docker rmi $(docker ps -a -q)
                            `}</pre>
                        </p>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-pull">Docker pull</h2>
                        <p>Earlier when the command 'docker run hello-world' was executed, the image was downloaded and then ran.</p>
                        <p>To download an image but not run it, the <a href="https://docs.docker.com/engine/reference/commandline/pull/" target="new" rel="noopener">docker pull</a> command can be used.</p>
                        <p><pre className="codeblock">{`  
    $ docker pull hello-world
                            `}</pre></p>
                        <div>
                            <p>By running this command, there is no "Hello from Docker !" output. Just information about the download.</p>
                            <BlogImage identifier={identifier} image="docker-pull" />
                        </div>
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="docker-exec">Docker exec</h2>
                        <p>To run a command on a running container the <a href="https://docs.docker.com/engine/reference/commandline/exec/" target="new" rel="noopener">docker exec</a> command can be used.</p>
                        <p><pre className="codeblock">{`  
    $ docker exec server_web_1 cat /etc/hosts
                            `}</pre></p>
                        <p>This command will print the contents of the 'hosts' file, inside the running container 'server_web_1'.</p>
                        <BlogImage identifier={identifier} image="docker-exec" />
                    </div>

                    <div>
                        <h2 className="heading" tabIndex="0" id="useful-links">Useful Links</h2>
                        <p><a href="https://github.com/CloudNativeJS/docker" target="new" rel="noopener">Sample Dockerfile templates for building Dev, Debug, Test and Run images for your application</a></p>
                        <p><a href="https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes" target="new" rel="noopener">How To Remove Docker Images, Containers, and Volumes</a></p>
                    </div>

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
                .blog-ul {
                    width: 260px;
                }
        `}</style>
        </Layout>
    )
}