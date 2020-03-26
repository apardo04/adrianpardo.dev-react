import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Blog = props => ( 
    <Layout page="batman" title=""> 
            <React.Fragment>
                <div className="lead">
                    <div id="lead-content">
                        <h1>Batman TV Shows</h1>
                        <ul>
                            {props.shows.map(show => (
                                <li key={show.id}>
                                    <Link href="/batman/[id]" as={`/batman/${show.id}`}>
                                        <a>{show.name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h1>Test Blog URLs</h1>
                        <ul>
                            <PostLink id="hello-nextjs" title="Hello Next.js" />
                            <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
                        </ul>
                    </div>
                    <div id="lead-overlay"></div>
                </div>
            </React.Fragment>
    </Layout>
)

Blog.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data.map(entry => entry.show)
    }
  }

  export default Blog