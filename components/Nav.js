import Link from 'next/link'
import React, { useState } from 'react'

const Nav = props => {
  const [mobileMenu, toggleMobileMenu] = useState(false);

  return (
    <React.Fragment>
      <div id="mobile-menu-open" className="shadow-large" onClick={() => toggleMobileMenu(!mobileMenu)}>
        <i className="fa fa-bars" aria-hidden="true" id="menu-bars"></i>
      </div>
      <nav onClick={() => toggleMobileMenu(!mobileMenu)} className={ mobileMenu ? "active" : undefined }>
        {/* End #mobile-menu-toggle */}
        <div id="mobile-menu-close">
              <span>Close</span><i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <ul id="menu">
              <li>
              {props.page != "index" &&
                <Link href="/index">
                  <a tabIndex="0" className="hover-border prevent-default">Home</a>
                </Link>
              }
              </li>
              <li>
                  <Link href="/blog">
                    <a tabIndex="0" className="hover-border">Blog</a>
                  </Link>
              </li>
              <li>
                <Link href="/index#projects">
                  <a tabIndex="0" className="hover-border prevent-default">Projects</a>
                </Link>
              </li>
              <li>
                  <Link href="https://github.com/apardo04">
                    <a target="_blank" tabIndex="0" className="hover-border prevent-default">Github</a>
                  </Link>
              </li>

              <li>
                  <Link href="/hire-me">
                    <a tabIndex="0" className="hover-border">Need a Developer?</a>
                  </Link>
              </li>
          </ul>
      </nav>
      <style jsx>{`
        nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 10;
          -webkit-animation-name: dropHeader;
          animation-name: dropHeader;
          -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
          -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
          -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
        }
        nav ul {
            display: inline-block;
            /*background: var(--darkblue);*/
            text-align: center;
            padding: 10px;
            margin: 0;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        nav li {
            display: inline-block;
        }
        nav a {
            display: block;
            color: var(--yellow);
            padding: 10px;
            font-size: 1.1em;
            font-weight: 100;
        }
        nav a:focus {
            color: var(--blue);
            text-decoration: none;
        }
        nav.active {
            display: block;
        }
        nav.sticky {
            position: fixed;
            z-index: 999;
        }
        #menu.active {
            display: block;
        }
        .hover-border:hover {
            text-decoration: none;
        }
        .hover-border:after {
            content: '';
            display: block;
            width: 100%;
            border-bottom: 4px solid var(--blue);
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
            -webkit-transition: -webkit-transform 0.4s;
            transition: transform .4s;
            -webkit-transform: scale(0,1);
            transform: scale(0,1);
        }
        .hover-border:hover:after {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        #mobile-menu-open {
            display: none;
            cursor: pointer;
            position: sticky;
            right: 15px;
            top: 10px;
            color: var(--purple2);
            font-size: 1.5em;
            z-index: 20;
            border-radius: 4px;
            background: var(--darkblue);
        }
        #mobile-menu-close {
            display: none;
            text-align: right;
            width: 100%;
            background: var(--darkblue);
            font-size: 1.5em;
            padding-right: 15px;
            padding-top: 10px;
            cursor: pointer;
            color: var(--purple2);
        }
        #mobile-menu-close span {
            font-size: 0.8em;
            text-transform: uppercase;
        }
        #mobile-menu-close i {
            vertical-align: middle;
            font-size: 1.2em;
        }
        @media only screen and (max-width: 768px) {
          nav {
              position: fixed;
              display: none;
              z-index: 999;
              -webkit-animation: none;
              animation: none;
              bottom: 0;
              height: 100%;
          }
          #mobile-menu-open, #mobile-menu-close {
              display: block;
              color: var(--yellow);
              width: 100%;
              border-bottom: 3px solid var(--yellow);
              height: 50px;
              top: 0;
          }
          #menu {
              height: 100%;
              overflow-y: auto;
              -webkit-box-shadow: none;
              box-shadow: none;
              border-radius: 0;
              width: 100%;
              background: var(--darkblue);
          }
          #menu-bars {
              padding-top: 12px;
              font-size: 23pt;
              right: 5vw;
              position: absolute;
          }
          #menu li {
              display: block;
              margin-bottom: 10px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default Nav