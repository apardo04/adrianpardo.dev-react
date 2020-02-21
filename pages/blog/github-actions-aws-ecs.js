import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/styles.css'

export default function Post() {
  const router = useRouter();

  return (
    <Layout page="blog" title="&lt;Adrian Pardo/&gt; CI/CD GITHUB ACTIONS TO AWS ECR/ECS">
      <div className="lead">
        <div id="lead-content">
          <h1>CI/CD GITHUB ACTIONS TO AWS ECR/ECS</h1>
          <h2>Feb 21, 2020</h2>
        </div>
        <SeeMore href="#before-getting-started" />
        <div id="lead-overlay"></div>
      </div>
      <div className="info-container-2" id="before-getting-started">
        <div className="container">
          <h2 className="heading" tabIndex="0">Objectives</h2>
          <div className="info">
            <p>
              The goal is to use <a href="https://github.com/features/actions">Github Actions</a> for continous deployment to an <a href="https://aws.amazon.com/ecs/">AWS ECS cluster</a>.
            </p>
            <p>
              We will start by cloning this simple full stack <a href="https://github.com/apardo04/github-actions-to-aws-ecr-ecs">React/Express application</a>.
            </p>
            <p>
              For local development I am using a <a href="https://docs.docker.com/compose/">docker-compose</a> enivornment. 
              Docker Compose makes it very simple to link, build, and run multiple containers at the same time.
              For this project we have two containers, one for the React application and the other for MongoDB.
            </p>
            <p>
                For our production cloud environment we will be using AWS ECR and ECS.
            </p>
            <h2 className="heading" tabIndex="0">Docker Compose</h2>
            <p>
                To get the local docker-compose environment running, there are a few steps to take
            </p>
            <p>
                1) Build the front end client, by running the following commands.
                <pre className="codeblock">{`  
  $ cd client
  $ npm install
  $ npm run-script build
  $ cd ..
                `}</pre>
            </p>
            <p>
                2) Run the docker-compose.yml file located in /server.
                <pre className="codeblock">{`  
  $ cd server
  $ docker-compose up
                `}</pre>
                You should now see the application runnning on <a href="http://localhost:3001/">http://localhost:3001/</a>.
            </p>


            <h2 className="heading" tabIndex="0">Identity and Access Management (IAM)</h2>
            <p>
                First we have to create a user within our AWS account that will have access to perform all the tasks required.
                For this we will use <a href="https://aws.amazon.com/iam/">Identity and Access Management (IAM)</a>
            </p>
            <p> 
                1) Within the <a href="https://console.aws.amazon.com/ecs">ECS Console</a>, click "IAM" on the navigation pane, then click "Users" under IAM Resources and finally click the "Add user" button.<br />
            </p>
            <p>
                2) We'll name the user "User-ECR-ECS" and give it "Programmatic access".
            </p>
            <p>
                <img src="../../assets/images/github-actions-aws-ecs/iam-user-ecr-ecs.png" className="yellow-border" />
            </p>
            <p>
                3) Click the "Next: Permissions" button.
            </p>
            <p>
                4) Click the "Attach existing policies directly" option.
            </p>
            <p>
                5) Search for "ECS" and check the policies shown below.
            </p>
            <p>
                <img src="../../assets/images/github-actions-aws-ecs/iam-user-ecr-ecs-permissions.png" className="yellow-border" />
            </p>
            <p>
                6) Click the "Next: Tags" button.
            </p>
            <p>
                7) Click the "Next: Review" button.
            </p>
            <p>
                8) Click the "Create user" button.
            </p>
            <p>
                9) Click the "Download .csv" button to download your user credentials.
            </p>
            <p>
                10) Click the "Close" button.
            </p>

            <h2 className="heading" tabIndex="0" id="ecr">Elastic Container Registry (ECR)</h2>
            <p>
                Next we want to setup our Amazon <a href="https://aws.amazon.com/ecr/">Elastic Container Registry (ECR)</a>.
                This is where AWS will store our images.
            </p>
            <p>
                1) Within the <a href="https://console.aws.amazon.com/ecs">ECS Console</a>, click “ECR” on the navigation pane, and then click the “Create repository” button.
            </p>
            <p>
                2) We will name our repo 'my-ecr-repo' and then click "Create repository".
            </p>
            <p>
                <img src="../../assets/images/github-actions-aws-ecs/ecr.png" className="yellow-border" />
            </p>
            <p>
                3) You should now see a green banner that says "Successfully created repository my-ecr-repo"
            </p>
            
            <h2 className="heading" tabIndex="0" id="ecs">Elastic Container Service (ECS)</h2>
            
            
            
            
            
            
            <p className="hidden-project">
              This is what the docker-compose.yml file looks like
              <pre className="codeblock">{`
  version: "3"
  services:
    web:
      build: .
      environment:
          DB_URL: mongodb://mongo:27017/fortunate_prod_db
          PORT: 3001
      ports:
          - "3001:3001"
      depends_on:
          - mongo
    mongo:
            image: mongo
            ports:
                - "27017:27017"
                `}</pre>
              </p>
              
              <p className="hidden-project">
                Create Service:
                Launch type: Fargate (This is the launch type that will run our task).. 
                Task Defenition: Choose yours mine is ds2020_adrian_task_defenition
                Platform version: LATEST
                cluster: default (name of mine)
              </p>
          </div>
         
        </div>

      </div>
      <style jsx>{`
        .lead {
            background: url("../../assets/images/ecs.png");
            background-size: contain;
        }
        p {
          margin-bottom: 50px;
        }
        .yellow-border {
            border: 1px solid var(--yellow);
        }
      `}</style>
    </Layout>
  );
}