import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavItem(props) {
  const [open, setOpen] = useState(false)
  return (
    <li className='nav-item'>
      <Link to='/' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
        {props.to}
      </Link>
      {open && props.children}
    </li>
  )
}
