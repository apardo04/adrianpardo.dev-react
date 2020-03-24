import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
import Disqus from "disqus-react"

export default function Post() {

  let identifier = "github-actions-aws-ecs"
  let title = "CI/CD Github Actions to AWS ECR/ECS"

  const disqusShortname = "https-adrianpardo-dev" 
  const disqusConfig = {
      url: `https://adrianpardo.dev/blog/${identifier}`,
      identifier: identifier+"-disqus",
      title: title
  }
  return (
    <Layout page={"blog/" + identifier} title="&lt;Adrian Pardo/&gt; CI/CD Github Actions to AWS ECR/ECS" description="Step by step guide for automating deplyoment from Github Actions to AWS ECR and ECS" ogImage={"/assets/images/" + identifier + "/ecs.png"}>
      <div className="lead">
        <div id="lead-content">
        <h1>{title}</h1>
          <h2>Feb 24, 2020 • Guide</h2>
        </div>
        <SeeMore href="#contents" />
        <div id="lead-overlay"></div>
      </div>
      <div className="info-container-2 text-center">
        <div className="container info-blog">
        <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
        <ul className="blog-ul">
            <li className="contents-list"><a href="#objectives">Objectives</a></li>
            <li className="contents-list"><a href="#docker-compose">Docker Compose</a></li>
            <li className="contents-list"><a href="#iam-user">Identity and Access Management (IAM) User</a></li>
            <li className="contents-list"><a href="#iam-role">Identity and Access Management (IAM) Role</a></li>
            <li className="contents-list"><a href="#ecr">Elastic Container Registry (ECR)</a></li>
            <li className="contents-list"><a href="#ecs-cluster">Elastic Container Service (ECS) Cluster</a></li>
            <li className="contents-list"><a href="#ecs-task">Configure and add Task Definition to Repo</a></li>
            <li className="contents-list"><a href="#github-secrets">Github Secrets</a></li>
            <li className="contents-list"><a href="#github-actions">Github Actions</a></li>
            <li className="contents-list"><a href="#application-running">See The Application Running</a></li>
        </ul>
          <h2 className="heading" tabIndex="0" id="objectives">Objectives</h2>
          <p>The goal is to use <a href="https://github.com/features/actions" target="new" rel="noopener">Github Actions</a> for continous deployment to an <a href="https://aws.amazon.com/ecs/" target="new" rel="noopener">AWS ECS cluster</a>.</p>
          <p>Before getting started, make sure you have an AWS account and have Git, Node and Docker installed.</p>
          <p>We will start by forking this simple full stack <a href="https://github.com/apardo04/github-actions-to-aws-ecr-ecs" target="new" rel="noopener">React/Express application</a>. Once forked into your Github account, make a clone on your local machine.</p>
          <p>For local development I am using a <a href="https://docs.docker.com/compose/" target="new" rel="noopener">docker-compose</a> enivornment. 
            Docker Compose makes it very simple to link, build, and run multiple containers at the same time.
            For this project we have two containers, one for the React application and the other for MongoDB.
          </p>
          <p>For our production cloud environment we will be using AWS ECR and ECS.</p>

          <h2 className="heading" tabIndex="0" id="docker-compose">Docker Compose</h2>
          <p>To get the local docker-compose environment running, there are a few steps to take.</p>
          <p>
            1) Build the front end client, by running the following commands:
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
          </p>
          <p>  You should now see the application runnning on <a href="http://localhost:3001/" target="new" rel="noopener">http://localhost:3001/</a>.</p>

          <h2 className="heading" tabIndex="0" id="iam-user">Identity and Access Management (IAM) User</h2>
          <p>First we have to create a user within our AWS account that will have access to perform all the tasks required. For this we will use <a href="https://aws.amazon.com/iam/" target="new" rel="noopener">Identity and Access Management (IAM)</a></p>
          <p>1) Within the <a href="https://console.aws.amazon.com/ecs" target="new" rel="noopener">ECS Console</a>, click "IAM" on the navigation pane, then click "Users" under IAM Resources and finally click the "Add user" button.<br /></p>
          <p>2) We'll name the user "User-ECR-ECS" and give it "Programmatic access".</p>
          <BlogImage identifier={identifier} image="iam-user-ecr-ecs" />
          <p>3) Click the "Next: Permissions" button.</p>
          <p>4) Click the "Attach existing policies directly" option.</p>
          <p>5) Search for "ECS", check the following policies, search for "registry" and select the following policy.</p>
          <BlogImage identifier={identifier} image="iam-user-ecr-ecs-permissions" />
          <BlogImage identifier={identifier} image="iam-user-ecr-ecs-permissions-3" />
          <p>6) Click the "Next: Tags" button.</p>
          <p>7) Click the "Next: Review" button.</p>
          <p>8) Click the "Create user" button.</p>
          <p>9) Click the "Download .csv" button to download your user credentials.</p>
          <p>10) Click the "Close" button.</p>

          <h2 className="heading" tabIndex="0" id="iam-role">Identity and Access Management (IAM) Role</h2>
          <p>Now we need to create an IAM Role. This will provide access to other AWS service resources that are required to run Amazon ECS tasks.</p>
          <p>1) Navigate back to <a href="https://console.aws.amazon.com/iam" target="new" rel="noopener">AWS IAM</a> and click on "Roles" and then click the "Create role" button.</p>
          <p>2) Keep the default trusted entity type which should be "AWS service", click on "Elastic Container Service" which is highlighted below and then "Elastic Container Service Task" which is also highlighted.</p>
          <BlogImage identifier={identifier} image="iam-role-service" />
          <p>3) Click "Next: Permissions" button.</p>
          <p>4) Search "ecs" and select the policies shown below.</p>
          <BlogImage identifier={identifier} image="iam-role-policy" />
          <p>5) Click the "Next: Tags" button.</p>
          <p>6) Click the "Next: Review" button.</p>
          <p>7) We're going to give our role the name "ecsTaskExecutionRole".</p>
          <BlogImage identifier={identifier} image="iam-role-name" />

          <h2 className="heading" tabIndex="0" id="ecr">Elastic Container Registry (ECR)</h2>
          <p>Next we want to setup our Amazon <a href="https://aws.amazon.com/ecr/" target="new" rel="noopener">Elastic Container Registry (ECR)</a>.
              This is where AWS will store our images.</p>
          <p>1) Within the <a href="https://console.aws.amazon.com/ecs" target="new" rel="noopener">ECS Console</a>, click “ECR” on the navigation pane, and then click the “Create repository” button.</p>
          <p>2) We will name our repo 'my-ecr-repo' and then click "Create repository".</p>
          <BlogImage identifier={identifier} image="ecr" />
          <p>3) You should now see a green banner that says "Successfully created repository my-ecr-repo"</p>

          <h2 className="heading" tabIndex="0" id="ecs-cluster">Elastic Container Service (ECS) Cluster</h2>
          <p>Next we want to setup our Amazon <a href="https://aws.amazon.com/ecs/" target="new" rel="noopener">Elastic Container Service (ECS)</a> Cluster. This is where our images will be deplyed to.</p>
          <p>1) Navigate to <a href="https://console.aws.amazon.com/ecs/" target="new" rel="noopener">Amazon ECS</a> and click the "Get Started" button.</p>
          <p>2) Under "Container definition" select the "custom" image option and hit the "edit" button, as shown below.</p>
          <BlogImage identifier={identifier} image="ecs-container-definition" />
          <p>3) We're going to name the container "my-container", set image to "my-ecr-repo" and map port 80 to tcp.</p>
          <BlogImage identifier={identifier} image="ecs-container-settings" />
          <p>4) Click the "Update" button.</p>
          <p>5) Under "Task definition" click the "Edit" button.</p>
          <p>6) We're going to name the task definition "my-task-definition" and select our "ecsTaskExecutionRole". By default "awsvpc" and "FARGATE" should be the other two selected details.</p>
          <BlogImage identifier={identifier} image="ecs-task-definition-settings" />
          <p>7) Click the "Save" button and the side panel should disappear.</p>
          <p>8) Click the "Next" button.</p>
          <p>9) By default "Service name" should be "my-container-service". If not, change it to that and click the "Next" button.</p>
          <BlogImage identifier={identifier} image="ecs-define-your-service" />
          <p>10) Under Cluster name, we will put "my-cluster" and click the "Next" button.</p>
          <BlogImage identifier={identifier} image="ecs-configure-your-cluster" />
          <p>11) Your settings should look like the screenshot below. If yes, click the "Create" button.</p>
          <BlogImage identifier={identifier} image="ecs-final-settings" />
          <p>12) Once the launch status is complete, click the "View service" button and you'll see our newly created cluster with an ACTIVE service named "my-container-service".</p>

          <h2 className="heading" tabIndex="0" id="ecs-task">Configure and add Task Definition to Repo</h2>
          <p>Now we want to copy our <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html" target="new" rel="noopener">Task Definition</a> into our projects repo. A Task Definition is a configuration file that specifies the container information for your application, such as how many containers are part of your task, what resources they will use, how they are linked together, and which host ports they will use.</p>
          <p>On the left side pane on the <a href="https://console.aws.amazon.com/ecs/" target="new" rel="noopener">AWS ECS Console</a> click "Task Definitions". You should now see the newly created "my-task-definition".</p>
          <BlogImage identifier={identifier} image="ecs-task-definitions" />
          <p>Click on "my-task-definition".</p>
          <p>Click on "my-task-definition:1"</p>
          <p>Click on the "JSON" tab.</p>
          <p>Copy the JSON.</p>
          <p>Now, we will go back to our React application, create a file in the root of the project called "task-definition.json" and paste our copied JSON into the file.</p> 
          <p>
            Now we need to change a few things in this file. First, we are going to add some environment information that our project requires. Look for the line that says:
            <pre className="codeblock">{`  
  "environment": [],
                `}</pre>
          </p>
          <p>
            We're going to change it to:
            <pre className="codeblock">{`  
  "environment": [
    {
      "name": "DB_URL",
      "value": "mongodb://localhost:27017/fortunate_prod_db"
    },
    {
      "name": "PORT",
      "value": "80"
    }
  ],
            `}</pre>
          </p>
          <p>
            Next, we're going to add a mongo container to our deployment. Look for this line below, this is where our applications container configuration ends:
            <pre className="codeblock">{`  
    "name": "my-container"
  }
            `}</pre>
          </p>
          <p>
            We're going to add information about our mongo container right after it, like so:
            <pre className="codeblock">{`  
    "name": "my-container"
  },
  {
    "name": "mongo",
    "image": "mongo:latest",
    "portMappings": [
      {
        "hostPort": 27017,
        "containerPort": 27017
      }
    ],
    "memory": "512",
    "cpu": "256",
    "essential": true
  }
            `}</pre>
          </p>
          <p>Once done, we can git add, commit and push this file to the repo.</p>

          <h2 className="heading" tabIndex="0" id="github-secrets">Github Secrets</h2>
          <p>Head over to the forked repo's webpage on Github and click the "Settings" tab.</p>
          <p>Click on "Secrets" on the left menu.</p>
          <p>Click "Add a new secret".</p>
          <p>Now we need to open the credentials csv file we downloaded earlier from AWS.</p>
          <p>We're going to add 2 secrets, that Github Actions will need to be able to deploy to our ECS Cluster. They will be:<br /></p>
          <p>Name: AWS_ACCESS_KEY_ID<br />
            Value: Paste the value for the "Access key ID" column found in the csv.</p>
          <p>Name: AWS_SECRET_ACCESS_KEY<br />
            Value: Paste the value for the "Secret access key" column found in the csv.</p>
          <BlogImage identifier={identifier} image="github-secrets" />

          <h2 className="heading" tabIndex="0" id="github-actions">Github Actions</h2>
          <p>Now click on the "Actions" tab.</p>
          <p>From here, one of the recommended workflows will be "Deploy to Amazon ECS". Click the "Set up this workflow" button.</p>
          <BlogImage identifier={identifier} image="github-actions-deploy-to-amazon-ecs" />
          <p>
            Now Github will display text that is going to be part of our aws.yml file. This file will get triggered everytime we push to master, because of this code block:
            <pre className="codeblock">{`  
  on:
  push:
    branches:
      - master
            `}</pre>
          </p>
          <p>There a few changes we have to make to the aws.yml file for everything to line up correctly. At the end of this section, I will have the full aws.yml file with all changes that can be copied.</p>
          <p>
            1) You may need to change the "aws-region" value, depending what region you setup your IAM user and cluster. Mine is in us-east-1, so I had to change it from the default us-east-2:
            <pre className="codeblock">{`  
  - name: Configure AWS credentials
    uses: aws-actions/configure-aws-credentials@v1
    with:
      aws-access-key-id: ${"${{ secrets.AWS_ACCESS_KEY_ID }}"}
      aws-secret-access-key: ${"${{ secrets.AWS_SECRET_ACCESS_KEY }}"}
      aws-region: us-east-1
            `}</pre>
          </p>
          <p>
            Next we need to add a few lines of code that will build our client and copy it over to the server directory:
            <pre className="codeblock">{`  
  - name: npm install client
    run: npm install
    working-directory: ./client
  - name: Build the client
    run: npm run-script build
    working-directory: ./client
            `}</pre>
          </p>
          <p>
            Next, we need to change the value for "ECR_REPOSITORY" to "my-ecr-repo" and docker build needs to occur in the server directory, so we add "./server":
            <pre className="codeblock">{`  
- name: Build, tag, and push image to Amazon ECR
  id: build-image
  env:
    ECR_REGISTRY: ${"${{ steps.login-ecr.outputs.registry }}"}
    ECR_REPOSITORY: my-ecr-repo
    IMAGE_TAG: ${"${{ github.sha }}"}
  run: |
    # Build a docker container and
    # push it to ECR so that it can
    # be deployed to ECS.
    docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG ./server
    docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
    echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"
            `}</pre>
          </p>
          <p>
            In the next section, we change the value of "container-name" to be "my-container":
            <pre className="codeblock">{`  
- name: Fill in the new image ID in the Amazon ECS task definition
  id: task-def
  uses: aws-actions/amazon-ecs-render-task-definition@v1
  with:
    task-definition: task-definition.json
    container-name: my-container
    image: ${"${{ steps.build-image.outputs.image }}"}
            `}</pre>
          </p>
          <p>
            Finally, for the final section of the aws.yml file we change the value of "service" to be "my-container-service" and "cluster" to be "my-cluster":
            <pre className="codeblock">{`  
- name: Deploy Amazon ECS task definition
  uses: aws-actions/amazon-ecs-deploy-task-definition@v1
  with:
    task-definition: ${"${{ steps.task-def.outputs.task-definition }}"}
    service: my-container-service
    cluster: my-cluster
    wait-for-service-stability: true
            `}</pre>
          </p>
          <p>
            The whole file should look like this with the the comments deleted:
            <pre className="codeblock">{`  
  on:
  push:
    branches:
      - master

  name: Deploy to Amazon ECS

  jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest

    env:
      server-directory: ./server
      client-directory: ./client
    
    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${"${{ secrets.AWS_ACCESS_KEY_ID }}"}
        aws-secret-access-key: ${"${{ secrets.AWS_SECRET_ACCESS_KEY }}"}
        aws-region: us-east-1

    - name: npm install client
      run: npm install
      working-directory: ${"${{ env.client-directory }}"}
    - name: Build the client
      run: npm run-script build
      working-directory: ${"${{ env.client-directory }}"}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1

    - name: Build, tag, and push image to Amazon ECR
      id: build-image
      env:
        ECR_REGISTRY: ${"${{ steps.login-ecr.outputs.registry }}"}
        ECR_REPOSITORY: my-ecr-repo
        IMAGE_TAG: ${"${{ github.sha }}"}
      run: |
        # Build a docker container and
        # push it to ECR so that it can
        # be deployed to ECS.
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG ./server
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"

    - name: Fill in the new image ID in the Amazon ECS task definition
      id: task-def
      uses: aws-actions/amazon-ecs-render-task-definition@v1
      with:
        task-definition: task-definition.json
        container-name: my-container
        image: ${"${{ steps.build-image.outputs.image }}"}

    - name: Deploy Amazon ECS task definition
      uses: aws-actions/amazon-ecs-deploy-task-definition@v1
      with:
        task-definition: ${"${{ steps.task-def.outputs.task-definition }}"}
        service: my-container-service
        cluster: my-cluster
        wait-for-service-stability: true
            `}</pre>
          </p>
          <p>We're now done configuring the aws.yml file. We can now click the "Start commit" button, add a commit message and click the "Commit new file" button.</p>
          <p>Now click on the "Actions" tab again and you will see Github is starting to run our aws.yml file that was triggered by our push.</p>

          <h2 className="heading" tabIndex="0" id="application-running">See The Application Running</h2>
          <p>If you got no errors, then lets go back to our <a href="https://console.aws.amazon.com/ecs/" target="new" rel="noopener">AWS ECS Console</a>.</p>
          <p>Click on "my-cluster"</p>
          <p>Click on "my-container-service"</p>
          <p>Click the "Tasks" tab</p>
          <p>Click on the task it self that has a status "RUNNING"</p>
          <p>Look in the "Network" section for a "Public IP", copy and paste that IP into your web browser and you should see the application running and talking to the database (meaning you're recieving fortunes), like below:</p>
          <BlogImage identifier={identifier} image="application-running" />
          <p>Didn't get the same result? Stuck? Or want to discuss? Leave a message in the <a href="#disqus_thread">Disqus Thread</a> or message me on <a href="https://twitter.com/apardo04" target="new" rel="noopener">Twitter</a>.</p>
          
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
      <style jsx>{`
        .lead {
            background: url("../../assets/images/${identifier}/ecs.png");
            background-size: contain;
        }
        #lead-overlay {
          background: rgba(32, 46, 64, 0.65);
        }
        .blog-ul {
          width: 480px;
        }
      `}</style>
    </Layout>
  );
}