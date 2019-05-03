import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Home from './home';
import Layout from '../components/layout'

const App = () => (
  <app>
    <Layout page="home" title="&lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer | Programmer | Portfolio">
      <Home />
    </Layout>
  </app>
)

export default App
