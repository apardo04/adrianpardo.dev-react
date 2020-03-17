import React, { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED && process.env.NODE_ENV == 'production') {
        initGA()
        window.GA_INITIALIZED = true
    }
    logPageView()
  });
  return <Component {...pageProps} />
}