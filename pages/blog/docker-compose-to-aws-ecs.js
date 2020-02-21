import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/styles.css'

export default function Post() {
  const router = useRouter();

  return (
    <Layout page="blog" title="&lt;Adrian Pardo/&gt;">
      <div className="lead">
        <div id="lead-content">
          <h1>DOCKER-COMPOSE TO AWS ECS CLUSTER</h1>
          <h2>Feb 19, 2020 · 5 min read</h2>
        </div>
        <SeeMore href="#before-getting-started" />
        <div id="lead-overlay"></div>
      </div>
      <div className="info-container-2" id="before-getting-started">
        <div className="container">
          <h2 className="heading" tabIndex="0">Objectives</h2>
          <div className="info">
            <p>
              The goal is to go from a <a href="https://docs.docker.com/compose/">docker-compose</a> enivornment to an <a href="https://aws.amazon.com/ecs/">AWS ECS cluster</a>
            </p>
            <p>
              My example enivornment will have 3 containers.
              <ul>
                <li>React Frontend</li>
                <li>MongoDB</li>
                <li>Nginx</li>
              </ul>
          </p>
            <p>
              Here is my starting docker-compose file
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
              <p>
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
        .codeblock {
          text-align: left;
          background-color: var(--altBlue);
          border: 1px solid #a9b0b3;
        }
      `}</style>
    </Layout>
  );
}