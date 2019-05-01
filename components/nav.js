import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
      <div id="mobile-menu-open" class="shadow-large">
        <i class="fa fa-bars" aria-hidden="true" id="menu-bars"></i>
      </div>
      {/* End #mobile-menu-toggle */}
      <div id="mobile-menu-close">
            <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        {/*<ul id="menu" class="shadow">*/}
        <ul id="menu">
            <li>
                <a href="#about" tabindex="0" class="hover-border prevent-default">About</a>
            </li>
            <li>
                <a href="#projects" tabindex="0" class="hover-border prevent-default">Projects</a>
            </li>
            <li>
                <a href="#skills" tabindex="0" class="hover-border prevent-default">Skills</a>
            </li>
            <li>
                <a href="hire-me.html" tabindex="0" class="hover-border">Need a Developer?</a>
            </li>
        </ul>
  </nav>
)

export default Nav
