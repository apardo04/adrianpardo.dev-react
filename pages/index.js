import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Home from './home';
import Layout from '../components/layout'

const App = () => (
  <Layout page="home" title="&lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer | Programmer | Portfolio">
    <Home />
  </Layout>
)

export default App
