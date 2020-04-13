import Link from 'next/link'
import styles from '../../style'

const NavItem = props => {
  const expandDropdown = event => {
    if (!event.currentTarget.classList.contains('expanded')){
      event.currentTarget.classList.add('expanded')
    }
  }

  const collapseDropdown = event => {
    if (event.currentTarget.classList.contains('expanded')){
      event.currentTarget.classList.remove('expanded')
    }
  }

  return (
    <li className='nav-item' onMouseEnter={expandDropdown} onMouseLeave={collapseDropdown}>
      <Link href={props.href}><a>
        {props.label}
        {props.dropdown && <i className="fas fa-caret-down"></i>}
      </a></Link>
      {props.dropdown && <ul className='subnav'>
        {props.dropdown.map(item => <li>{item.label}</li>)}
      </ul>}
  <style jsx>{`
    .nav-item {
      position: relative;
      width: 100px;
      padding: 10px 0 0 10px;
      margin-left: 10px;
    }
    .nav-item.expanded {
      background-color: ${styles.lightGrayColor};
    }
    .subnav {
      display: none;
    }
    .nav-item.expanded .subnav {
      padding-top: 32px;
      display: initial;
      text-align: left;
      width: 200px;
      position: absolute;
      top: 0px;
      left: 0px;
      color: ${styles.primaryColor};
    }
    .nav-item.expanded .subnav li {
      padding: 10px;
      border: 1px solid ${styles.lightGrayColor};
    }
    .nav-item.expanded .subnav li:hover {
      background-color: ${styles.lightGrayColor};
    }
  `}</style>
    </li>
  )
}

export default NavItem