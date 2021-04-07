import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar-nav'>{props.children}</ul>
      </nav>
    </>
  )
}
