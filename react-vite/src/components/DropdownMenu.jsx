import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }
  function DropdownItem(props) {
    return (
      <Link
        to='/'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </Link>
    )
  }
  return (
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon='🕹 ' rightIcon='👉 ' goToMenu='settings'>
            Settings
          </DropdownItem>
          <DropdownItem rightIcon='👉 ' goToMenu='settings'>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon='👈 ' goToMenu='main'></DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
