import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
    <li>
      <Link as={`/blog/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
)

const Blog = props => ( 
    <Layout page="blog" title="Blog &lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer">
        
        { true ? 
            <React.Fragment>
                <div className="lead">
                    <div id="lead-content">
                        <h1>Blog Coming Soon</h1>
                    </div>
                    <div id="lead-overlay"></div>
                </div>
            </React.Fragment> 
        : 
        <React.Fragment>
            <div className="lead">
                <div id="lead-content">
                    <h1>Batman TV Shows</h1>
                    <ul>
                        {props.shows.map(show => (
                            <li key={show.id}>
                            <Link as={`/batman/${show.id}`} href={`/batman_post?id=${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                            </li>
                        ))}
                    </ul>
                    <h1>Blogs</h1>
                    <ul>
                        <PostLink id="hello-nextjs" title="Hello Next.js" />
                        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
                    </ul>
                </div>
                <div id="lead-overlay"></div>
            </div>
        </React.Fragment>}
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