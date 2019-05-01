import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Home from "./home";
import Footer from '../components/footer'

const App = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Home />
    <Footer />
  </div>
)

export default App
