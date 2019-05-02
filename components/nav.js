import Link from 'next/link'

const Nav = props => (
  <div>
    <div id="mobile-menu-open" className="shadow-large">
      <i className="fa fa-bars" aria-hidden="true" id="menu-bars"></i>
    </div>
    <nav>
      {/* End #mobile-menu-toggle */}
      <div id="mobile-menu-close">
            <span>Close</span><i className="fa fa-times" aria-hidden="true"></i>
        </div>
        {/*<ul id="menu" className="shadow">*/}
        <ul id="menu">
            <li>
            {props.page == "home" ?
              <Link href="index#about">
                <a tabIndex="0" className="hover-border prevent-default">About</a>
              </Link>
            :     
              <Link href="index">
                <a tabIndex="0" className="hover-border prevent-default">Home</a>
              </Link>
            }

            </li>
            <li>
              <Link href="index#projects">
                <a tabIndex="0" className="hover-border prevent-default">Projects</a>
              </Link>
            </li>
            <li>
                <Link href="index#skills">
                  <a tabIndex="0" className="hover-border prevent-default">Skills</a>
                </Link>
            </li>
            <li>
                <Link href="/hire-me">
                  <a tabIndex="0" className="hover-border">Need a Developer?</a>
                </Link>
            </li>
        </ul>
    </nav>
  </div>
)

export default Nav
