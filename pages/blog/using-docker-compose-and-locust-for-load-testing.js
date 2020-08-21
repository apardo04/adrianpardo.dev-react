import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
import Disqus from "disqus-react"

export default function Post() {
    let identifier = "using-docker-compose-and-locust-for-load-testing"
    let title = "Using Docker Compose and Locust For Load Testing"

    const disqusShortname = "https-adrianpardo-dev" 
    const disqusConfig = {
        url: `https://adrianpardo.dev/blog/${identifier}`,
        identifier: identifier+"-disqus",
        title: title
    }

    return (
        <Layout page={"blog/" + identifier} title={"<Adrian Pardo/> " + title} description="" ogImage={"/assets/images/" + identifier + "/locust.png"}>
            <div className="lead">
                <div id="lead-content">
                <h1>{title}</h1>
                <h2>August 20, 2020 • Guide</h2>
                </div>
                <SeeMore href="#contents" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
                    <ul className="blog-ul">
                        <li className="contents-list"><a href="#objectives">Objectives</a></li>
                        <li className="contents-list"><a href="#load-testing">Load Testing</a></li>
                        <li className="contents-list"><a href="#tools-for-load-testing">Tools to Perform Load Testing</a></li>
                        <li className="contents-list"><a href="#install-docker">Install Docker</a></li>
                        <li className="contents-list"><a href="#locust-file">Locust File</a></li>
                        <li className="contents-list"><a href="#docker-compose-file">Docker Compose File</a></li> 
                        <li className="contents-list"><a href="#running">Running The Load Test</a></li>  
                    </ul>
                    <h2 className="heading" tabIndex="0" id="objectives">Objectives</h2>
                    <p>This guide will explain the basics of load testing and how to with <a href="https://locust.io/" target="new" rel="noopener">Locust</a> and <a href="https://docs.docker.com/compose/" target="new" rel="noopener">Docker Compose</a>.</p>
                    
                    <h2 className="heading" tabIndex="0" id="load-testing">Load Testing</h2>
                    <p>Load Testing is a type of performance testing that helps in determining how the application will behave when multiple users access it simultaneously.</p>
                    <p>In load testing the goal is to break things.</p>
                    <p>YOU DON’T WANT THESE TESTS TO PASS - You want to find the applications absolute limit, investigate what is going wrong, improve the code, and do it all over again.</p>
                    <p>We're looking for 3 things:</p>
                    <p>
                        <span className="underline-yellow">Breaking Points</span><br />
                        Something went critically wrong with the application and you start getting status code 500.<br /> Example: Ran out of memory.
                    </p>

                    <p>
                        <span className="underline-yellow">Throughput</span><br />
                        How many requests your application can get through before something breaks.
                    </p>

                    <p>
                        <span className="underline-yellow">Latency</span><br />
                        How long these requests are taking.
                    </p>


                    <h2 className="heading" tabIndex="0" id="tools-for-load-testing">Tools To Perfrom Load Testing</h2>
                    <p>
                        <a href="https://locust.io/" target="new" rel="noopener">Locust</a>, <a href="https://github.com/tsenart/vegeta" target="new" rel="noopener">Apache JMeter</a>, <a href="https://jmeter.apache.org/" target="new" rel="noopener">Vegeta</a>, <a href="https://k6.io/" target="new" rel="noopener">k6.io</a>, <a href="https://www.microfocus.com/en-us/products/loadrunner-professional/overview" target="new" rel="noopener">Loadrunner</a>, <a href="https://smartbear.com/product/ready-api/loadui/overview/" target="new" rel="noopener">LoadUI</a>
                    </p>
                    <p>For this guide, we'll be using Locust. Locust is extremely lightweight, open source, can be ran from any machine that has a Python runtime, developers write there tests in Python, no need to code in XML like some of the other tools mentioned, supports running distributed load tests over multiple machines and can therefore be used to simulate millions of simultaneous users if need be.</p>

                    <h2 className="heading" tabIndex="0" id="install-docker">Install Docker</h2>
                    <p>For this guide we only need to install <a href="https://www.docker.com/" target="new" rel="noopener">Docker</a>. With Docker we'll be able to spin up containers that have Python and Locust already installed. We would just have to provide the location of our custom locustfile.py that will instruct Locust where and how to test.</p>
                    
                    <h2 className="heading" tabIndex="0" id="locust-file">Locust File</h2>
                    <p>Once we have Docker installed we need to create a project directory and a file named locustfile.py with the following code:</p>
                    <p>
                        <pre className="codeblock">{`  
  from locust import HttpUser, TaskSet, task, between
   
  class UserTasks(TaskSet):
      @task(1)
      def index(self):
          self.client.get("/")

  class WebsiteUser(HttpUser):
      tasks = [UserTasks]
      wait_time = between(2, 5)
                        `}</pre>
                    </p>

                    <p>
                        Breakdown of the locustfile.py:
                        <ul className="breakdown-ul">
                            <li>First, we're importing locust</li>
                            <li>Second, we need to create class that inherits the TaskSet class. A TaskSet is, like its name suggests, a collection of tasks. These tasks define the behaviour of the "user".</li>
                            <li>In this class, we're directing the user to visit the index page or /</li>
                            <li>Next, we're creating a class that inherits the HttpUser class. A HttpUser class represents one user. Locust will spawn one instance of the HttpUser class for each user that is being simulated.</li>
                            <li>Some of the attributes the HttpUser class should define are tasks and wait_time.</li>
                            <li>The task attribute should point to a TaskSet class which defines the behaviour of the user.</li>
                            <li>The wait_time method is used to determine for how long a simulated user will wait between executing tasks. In this case between 2 and 5 seconds.</li>
                        </ul>
                    </p>

                    <h2 className="heading" tabIndex="0" id="docker-compose-file">Docker Compose File</h2>
                    <p>Now we need to create instructions for Docker. For this we'll create a file called docker-compose.yml with the following instructions:</p>
                    
                    <p>
                        <pre className="codeblock">{`  
  version: '3'

  services:
    master:
      image: locustio/locust:master
      ports:
       - "8089:8089"
      volumes:
        - ./:/mnt/locust
      command: -f /mnt/locust/locustfile.py --master -H http://master:8089
    
    worker:
      image: locustio/locust:master
      volumes:
        - ./:/mnt/locust
      command: -f /mnt/locust/locustfile.py --worker --master-host master
                        `}</pre>
                    </p>
                    <p>
                        Breakdown of docker-compose.yml:
                        <ul className="breakdown-ul">
                            <li>We'll be using Compose file format version 3</li>
                            <li>Next we'll define the services needed so they can be run together in an isolated environment.</li>
                            <li>The first service is the master. The master will use <a href="https://hub.docker.com/r/locustio/locust" target="new" rel="noopener">Locust's official image</a> from Docker Hub.</li>
                            <li>It will then bind the container and the host machine to the exposed port, 8089.</li>
                            <li>The volumes key mounts the project directory (current directory) on the host to /mnt/locust inside the container, allowing you to modify the code on the fly, without having to rebuild the image.</li>
                            <li>The final line on the master service is the command needed to run locustfile.py. --master will run this container as the master and -H is the host to be tested, in this case itself.</li>
                            <li>The worker service also uses Locusts official image and the same volume mount.</li>
                            <li>Since this is a worker reporting its data to the master, we don't need to open up a port between our host machine and the worker container.</li>
                            <li>The big difference is in the command used to run Locust. This one has --worker to indicate it is a worker and --master-host is pointing to our master service.</li>
                        </ul>
                    </p>
                   
                    <h2 className="heading" tabIndex="0" id="running">Running The Load Test</h2>
                    <p>
                        To run the load test. Go into the project folder and type the following into your command line:
                        <pre className="codeblock">{`  
  docker-compose up
                        `}</pre>
                    </p>
                    <p>
                        You can also do load testing with a cluster of workers (3 in this case) by running:
                        <pre className="codeblock">{`  
  docker-compose up --scale worker=3
                        `}</pre>
                    </p>

                    <p>Once the command has been ran and no errors are shown, you can visit <a href="http://localhost:8089" target="new" rel="noopener">http://localhost:8089</a> and you should see a webpage like this:</p>
                    <BlogImage identifier={identifier} image="localhost-homepage" />

                    <p>From this webpage we can set the number of users and how many we want to spawn every second. This will run a load test on the master service itself, but you can change the host to be whatever you want, this can be done on the webpage's form input or the docker-compose.yml file's command attribute for the master service.</p>
                    
                    <p>Here is what the "Statistics" page will look like once we start running the test:</p>
                    <BlogImage identifier={identifier} image="locust-stats" />
                    <p>In the "Workers" tab, you'll be able to see what each worker is doing:</p>
                    <BlogImage identifier={identifier} image="locust-workers" />
                    <h2 className="heading" tabIndex="0" id="useful-links">Useful Links</h2>
                    <p><a href="https://docs.locust.io/en/stable/what-is-locust.html" target="new" rel="noopener">What is Locust</a></p>
                    <p><a href="https://hub.docker.com/r/locustio/locust" target="new" rel="noopener">Official Locust.io Docker image</a></p>
                    

                    

                    
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </div>
            </div>
             <style jsx>{`
                .lead {
                    background: url("../../assets/images/${identifier}/locust.png");
                    background-size: auto;
                }
                .blog-ul {
                    width: 360px;
                }
                .breakdown-ul {
                    text-align: left;
                }
                .breakdown-ul li {
                    margin-bottom: 10px;
                }
             `}</style>
        </Layout>
    )
}