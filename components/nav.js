import Link from 'next/link'

class Nav extends React.Component {
  constructor(props) {
    super(props)
      this.state = {visible: false}
      this.show = this.show.bind(this)
      this.hide = this.hide.bind(this)
  }
  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }
  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <div id="mobile-menu-open" className="shadow-large" onClick={this.show}>
          <i className="fa fa-bars" aria-hidden="true" id="menu-bars"></i>
        </div>
        <nav onClick={this.hide} className={ visible ? "active" : undefined }>
          {/* End #mobile-menu-toggle */}
          <div id="mobile-menu-close">
                <span>Close</span><i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul id="menu">
                <li>
                {this.props.page == "home" ?
                  <Link href="/index#about">
                    <a tabIndex="0" className="hover-border prevent-default">About</a>
                  </Link>
                :     
                  <Link href="/index">
                    <a tabIndex="0" className="hover-border prevent-default">Home</a>
                  </Link>
                }
                </li>
                <li>
                  <Link href="/index#projects">
                    <a tabIndex="0" className="hover-border prevent-default">Projects</a>
                  </Link>
                </li>
                <li>
                    <Link href="/blog">
                      <a tabIndex="0" className="hover-border prevent-default">Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hire-me">
                      <a tabIndex="0" className="hover-border">Need a Developer?</a>
                    </Link>
                </li>
            </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Nav
