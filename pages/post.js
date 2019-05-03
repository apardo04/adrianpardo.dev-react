import { withRouter } from 'next/router'
import Layout from '../components/layout.js'

const Content = withRouter(props => (
  <div>
        <div id="lead-content">
            <h1>{props.router.query.title}</h1>
            <p>This is the blog post content.</p>
        </div>
  </div>
))

const Page = props => (
  <Layout>
    <Content />
  </Layout>
)

export default Page