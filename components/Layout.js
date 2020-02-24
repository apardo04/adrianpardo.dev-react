import Head from './Head'
import Nav from './Nav'
import Footer from './Footer'
import React, { useEffect } from 'react';
import { string } from 'prop-types'
import { initGA, logPageView } from '../utils/analytics'

const Layout = props => {
    useEffect(() => {
        if (!window.GA_INITIALIZED && process.env.NODE_ENV == 'production') {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
      });
    return (
        <React.Fragment>
            <Head page={props.page} title={props.title} description={props.description} ogImage={"https://adrianpardo.dev"+props.ogImage} />
            <Nav page={props.page} />
            {props.children}
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
