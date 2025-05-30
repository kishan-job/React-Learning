import React from 'react'
import Nav from './nav'
function Header(props) {
  return (
    <div>
          <Nav nav={props.nav} />
    </div>
  )
}

export default Header
