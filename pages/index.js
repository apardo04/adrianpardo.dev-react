import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Home from './home';

const App = () => (
  <app>
    <Head page="home" title="&lt;Adrian Pardo/&gt; Freelance Fullstack Web Developer | Programmer | Portfolio" />
    <Nav page="home" />
    <Home />
    <Footer />
  </app>
)

export default App
