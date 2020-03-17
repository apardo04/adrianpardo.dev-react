import Header from './Head'
import Nav from './Nav'
import Contact from './Contact'
import Footer from './Footer'
import { string } from 'prop-types'

const Layout = props => {
    return (
        <React.Fragment>
            <Header page={props.page} title={props.title} description={props.description} ogImage={"https://adrianpardo.dev"+props.ogImage} />
            <Nav page={props.page} />
            {props.children}
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

Layout.propTypes = {
    title: string,
    description: string,
    url: string,
    page: string,
    ogImage: string
  }

export default Layout
