import React from 'react'
import styles from '../../style'
import Link from 'next/link'
import HamburgerIcon from './hamburgerIcon'

const HamburgerMenu = props => {
  const collapseNavList = event => {
    if (event.currentTarget.parentNode.classList.contains('expanded')){
      event.currentTarget.parentNode.classList.remove('expanded')
    }
    const navGroups = document.getElementsByClassName('nav-group')
    for (let navGroup of navGroups){
      if (navGroup.classList.contains('expanded')){
        navGroup.classList.remove('expanded')
      }
    }
  }

  const toggleNavList = event => {
    event.currentTarget.parentNode.classList.toggle('expanded')
  }

  const toggleNavItem = event => {
    event.currentTarget.classList.toggle('expanded')
  }


  return (
    <div className='sm-screen-nav'>

      <HamburgerIcon onClick={toggleNavList}/>

      <div className='transparent-modal' onClick={collapseNavList}/>
      
      <ul className='nav-list'>
        {Object.keys(props.dropdownItems).map(navCategory => {
          const navData = props.dropdownItems[navCategory]

          return (
            <li className='nav-group' key={navData.mainRoute} onClick={toggleNavItem}>
              <span className='label'>{navData.label}</span>
              {(navData.dropdowns.length > 0) && <span>&nbsp;<i className="fas fa-caret-down"></i></span>}
              
              {(navData.dropdowns.length > 0) && (
                <ul className='nav-group-options'>
                  {navData.dropdowns.map(nav => (
                      <li key={nav.route}>
                        <Link href={nav.route}><a>{nav.label}</a></Link>
                      </li>
                    )
                  )}
                </ul>
              )}

            </li>
          )
        })}
        <li className='nav-group'>
          <Link href='/contact'><a>Contact Us</a></Link>
        </li>
      </ul>

    <style jsx>{`
      .sm-screen-nav {
        position: relative;
      }
      .sm-screen-nav.expanded > button {
        background-color: red;
      }

      .sm-screen-nav .transparent-modal {
        display: none;
      }
      .sm-screen-nav.expanded .transparent-modal {
        display: initial;
        position: fixed;
        background-color: rgba(255, 255, 255, 0);
        min-width: 100vw;
        min-height: 100vh;
        top: 0px;
        left: 0px;
      }

      .sm-screen-nav .nav-list {
        display: none;
      }
      .sm-screen-nav.expanded .nav-list {
        background-color: white;
        display: initial;
        position: absolute;
        top: 50px;
        left: -100px;
        width: 150px;
      }

      .nav-group {
        padding: 10px;
        border: 1px solid ${styles.lightGrayColor};
        color: ${styles.primaryColor};
      }

      .nav-group.expanded .label {
        text-decoration: underline;
      }

      .nav-group-options {
        display: none;
      }
      .nav-group.expanded .nav-group-options {
        display: initial;
        margin-top: 10px;
      }
      .nav-group-options li {
        padding: 10px;
        border: 1px solid white;
      }

    `}</style>
    </div>
  )
}

export default HamburgerMenu