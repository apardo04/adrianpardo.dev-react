import Layout from '../../components/Layout';
import SeeMore from '../../components/SeeMore';
import BlogImage from '../../components/BlogImage'
import Disqus from "disqus-react"

export default function Post() {
    let identifier = "nextjs-testing-library-jest"
    let title = "How To Test Next.js Apps With Testing Library & Jest"

    const disqusShortname = "https-adrianpardo-dev" 
    const disqusConfig = {
        url: `https://adrianpardo.dev/blog/${identifier}`,
        identifier: identifier+"-disqus",
        title: title
    }

    return (
        <Layout page={"blog/" + identifier} title={"<Adrian Pardo/> " + title} description="This guide will show you how to configure testing-library and Jest to work with Next.js." ogImage={"/assets/images/" + identifier + "/testing-library.png"}>
            <div className="lead">
                <div id="lead-content">
                <h1>{title}</h1>
                <h2>Mar 24, 2020 • Guide</h2>
                </div>
                <SeeMore href="#contents" />
                <div id="lead-overlay"></div>
            </div>
            <div className="info-container-2 text-center">
                <div className="container info-blog">
                    <h2 className="heading" tabIndex="0" id="contents">Contents</h2>
                    <ul className="blog-ul">
                        <li className="contents-list"><a href="#objectives">Objectives</a></li>
                        <li className="contents-list"><a href="#nextjs">Setting Up Next.js App</a></li>
                        <li className="contents-list"><a href="#testinglibrary">Installing Testing Library & Jest</a></li>  
                        <li className="contents-list"><a href="#setupTests">Create setupTests.js</a></li>
                        <li className="contents-list"><a href="#jestconfig">Create jest.config.js</a></li> 
                        <li className="contents-list"><a href="#babelrc">Create .babelrc</a></li> 
                        <li className="contents-list"><a href="#creatingTests">Creating Our Tests</a></li>
                        <li className="contents-list"><a href="#testScript">Create Test Script</a></li> 
                        <li className="contents-list"><a href="#runningTest">Running The Test</a></li>
                        <li className="contents-list"><a href="#useful-links">Useful Links</a></li>
                    </ul>
                    <h2 className="heading" tabIndex="0" id="objectives">Objectives</h2>
                    <p>This guide will show you how to configure testing-library & Jest to work with <a href="https://nextjs.org/" target="new" rel="noopener">Next.js</a>.</p>
                    
                    <h2 className="heading" tabIndex="0" id="nextjs">Setting Up Next.js App</h2>
                    <p>For this guide we will use the basic 'create-next-app', which will automatically setup everything needed except testing.</p>
                    <p> 
                        I made a clone, in case future versions break the tests performed in this guide. We'll start by running the following commands:
                        <pre className="codeblock">{`  
  $ git clone https://github.com/apardo04/nextjs-testing-library.git
  $ cd nextjs-testing-library
  $ npm run dev
                        `}</pre>
                    </p>

                    <p>Now, when you visit <a href="http://localhost:3000/" target="new" rel="noopener">localhost:3000</a>, you'll see "Welcome to Next.js!"</p>

                    <h2 className="heading" tabIndex="0" id="testinglibrary">Installing Testing Library & Jest</h2>
                    <p>
                        Like I mentioned 'create-next-app' doesn't come with built in testing. So first, let's install the necessary packages:
                        <pre className="codeblock">{`  
  $ npm install --save-dev @testing-library/jest-dom @testing-library/react jest
                        `}</pre>
                    </p>

                    <h2 className="heading" tabIndex="0" id="setupTests">Create setupTests.js</h2>
                    <p>
                        Let's create a file in the root of the project called 'setupTests.js' and add the following to that file:
                        <pre className="codeblock">{`  
  import '@testing-library/jest-dom/extend-expect'
                        `}</pre>
                        This will import necessary code from the jest-dom package when we run our tests.
                    </p>

                    <h2 className="heading" tabIndex="0" id="jestconfig">Create jest.config.js</h2>
                    <p>
                        The next file we need to create will also go in the root of our project and will be called 'jest.config.js', with the following code:
                        <pre className="codeblock">{`  
  module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
  }
                        `}</pre>
                        This is the configuration jest will use when we run our test script.
                    </p>

                    <h2 className="heading" tabIndex="0" id="babelrc">Create .babelrc</h2>
                    <p>
                        The final file that needs to be created in the root directory is '.babelrc', with the following:
                        <pre className="codeblock">{`  
  {
    "presets": ["next/babel"]
  }
                        `}</pre>
                        Next.js requires us to have '.babelrc' once we start testing or using some external libraries.
                    </p>

                    <h2 className="heading" tabIndex="0" id="creatingTests">Creating Our Tests</h2>
                    <p>Our tests will reside in a folder that must be created and called '__tests__' in the root directory of the project.</p>
                    <p>
                        In this folder you'll create a file called 'index.tests.js' and include the following code:
                        <pre className="codeblock">{`  
  import React from 'react'
  import { render } from '@testing-library/react'
  import Home from '../pages/index.js'
  
  test('renders deploy link', () => {
    const { getByText } = render(<Home />)
    const linkElement = getByText(
      /Instantly deploy your Next\.js site to a public URL with ZEIT Now\./
    )
    expect(linkElement).toBeInTheDocument()
  })
                        `}</pre>
                        This is a basic test that will check if the text "Instantly deploy your Next.js site to a public URL with ZEIT Now" is present in the DOM.
                    </p>
                    <p>Our project file structure should now look like this:</p>
                    <BlogImage identifier={identifier} image="project-structure" />

                    <h2 className="heading" tabIndex="0" id="testScript">Package.json Test Script</h2>
                    <p>
                        Now, we're going to edit the scripts block in the 'package.json', like so:
                        <pre className="codeblock">{`  
  "scripts": {
    "test": "jest",
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
                        `}</pre>
                        We've added a script called "test" that will run "jest".
                    </p>

                    <h2 className="heading" tabIndex="0" id="runningTest">Running The Test</h2>
                    <p>
                        Now for the fun part. Run the following in your command line:
                        <pre className="codeblock">{`  
  npm run test
                        `}</pre>
                    </p>
                    <p>You should see successful  output like so:</p>
                    <BlogImage identifier={identifier} image="npm-run-test" />
                    <p>Didn't get the same result? Stuck? Or want to discuss? Leave a message in the <a href="#disqus_thread">Disqus Thread</a> or message me on <a href="https://twitter.com/apardo04" target="new" rel="noopener">Twitter</a>.</p>
                    <h2 className="heading" tabIndex="0" id="useful-links">Useful Links</h2>
                    <p className="useful-links"><a href="https://github.com/zeit/next.js/tree/canary/examples/with-jest" target="new" rel="noopener">Next.js Github with-jest example</a></p>
                    <p className="useful-links"><a href="https://nextjs.org/docs/getting-started" target="new" rel="noopener">Next.js Documentation</a></p>
                    <p className="useful-links"><a href="https://testing-library.com/docs/intro" target="new" rel="noopener">Testing Library Documentation</a></p>

                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </div>
            </div>
             <style jsx>{`
                .lead {
                    background: url("../../assets/images/${identifier}/testing-library.png");
                    background-size: contain;
                }
                .blog-ul {
                    width: 360px;
                }
             `}</style>
        </Layout>
    )
}