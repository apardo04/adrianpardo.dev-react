import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <React.Fragment>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="icon" sizes="192x192" href="/static/assets/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/assets/images/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/assets/images/favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,700|Raleway:900|MedievalSharp" rel="stylesheet" />
    <link rel="stylesheet" href="/static/assets/css/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="/static/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/static/assets/css/styles.css" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </React.Fragment>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  page: string,
  ogImage: string
}

export default Head
