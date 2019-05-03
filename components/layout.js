import Head from './head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { string } from 'prop-types'

const Layout = props => (
  <div>
    <Head page={props.page} title={props.title} />
    <Nav page={props.page} />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
    title: string,
    description: string,
    url: string,
    page: string,
    ogImage: string
  }

export default Layout