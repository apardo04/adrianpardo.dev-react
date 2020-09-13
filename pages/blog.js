import Layout from '../components/Layout'

const Blog = props => ( 
    <Layout page="blog" title="Blog &lt;Adrian Pardo/&gt; Fullstack Web Developer"> 
        <div className="info-container-2 text-center" id="blog">
            <div className="container">
                <h2 className="heading" tabIndex="0">Blog</h2>
                <div className="info text-left">
                    <h3 className=""><a href="blog/using-docker-compose-and-locust-for-load-testing">Using Docker Compose and Locust for Load Testing</a></h3>
                    <div className="small-text">August 20, 2020 • Guide</div>
                    <h3 className=""><a href="blog/nextjs-testing-library">How To Test Next.js Apps With Testing Library & Jest</a></h3>
                    <div className="small-text">March 24, 2020 • Guide</div>
                    <h3 className=""><a href="blog/docker-cheat-sheet">Docker Commands Cheat Sheet</a></h3>
                    <div className="small-text">March 7, 2020 • Cheat Sheet</div>
                    <h3 className=""><a href="blog/github-actions-aws-ecs">CI/CD Github Actions to AWS ECR/ECS</a></h3>
                    <div className="small-text">February 24, 2020 • Guide</div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .container {
                padding: 75px 15px;
            }
            h3 {
                font-family: Montserrat, sans-serif;
                font-size: 30px;
                margin-bottom: 0.4375rem;
                font-weight: 900;
                color: var(--yellow);
            }
            .small-text {
                color: white;
                font-size: 19px;
            }
        `}</style>
    </Layout>
)

export default Blog