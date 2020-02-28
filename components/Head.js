import React from 'react'
import Head from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'Hello, I am a freelance fullstack web developer and software enginner that can help you build your site from the ground up. I offer services such as SEO, E-Commerce, website hosting, web design, web development, ADA Assesibility Compliance and more'
const defaultOGImage = '../assets/images/favicon/android-chrome-512x512.png'
const siteName = "&lt;Adrian Pardo/&gt; Fullstack Developer | Software Engineer"

const Header = props => (
  <Head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>{props.title || siteName}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <link rel="canonical" href={`https://adrianpardo.dev/${props.page}`} />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon/favicon-16x16.png" />
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,700|Raleway:900|MedievalSharp" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/font-awesome/css/font-awesome.min.css" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta property="og:url" content={`https://adrianpardo.dev/${props.page}`} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={`https://adrianpardo.dev/${props.page}`} />
    <meta name="twitter:title" content={siteName} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={props.description || defaultDescription} />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
  </Head>
)

Head.propTypes = {
  title: string,
  description: string,
  page: string,
  ogImage: string
}

export default Header
