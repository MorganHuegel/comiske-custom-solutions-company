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
    <li className='nav-item' 
      onMouseEnter={expandDropdown} 
      onMouseLeave={collapseDropdown} 
      onFocus={expandDropdown} 
      onBlur={collapseDropdown}
      onClick={collapseDropdown}
    >
      <Link href={props.href}><a>
        {props.label}
        {props.dropdown && <span>&nbsp;<i className="fas fa-caret-down"></i></span>}
      </a></Link>
      {props.dropdown && <ul className='subnav'>
        {props.dropdown.map(subnav => <li key={subnav.route} className='subnav-item'>
          <Link href={subnav.route}><a>{subnav.label}</a></Link>
        </li>)}
      </ul>}
  <style jsx>{`
    .nav-item {
      margin-left: 10px;
      position: relative;
    }

    .nav-item a {
      display: inline-block;
      width: 110px;
      padding: 10px;
      text-align: center;
    }
    .nav-item:hover, .nav-item a:focus {
      cursor: pointer;
      background-color: ${styles.lightGrayColor};
    }
    .nav-item.expanded {
      background-color: ${styles.lightGrayColor};
    }
    .subnav {
      display: none;
    }
    .nav-item.expanded .subnav {
      padding-top: 9px;
      display: initial;
      text-align: left;
      width: 200px;
      position: absolute;
      top: 30px;
      left: 0px;
      color: ${styles.primaryColor};
    }
    .nav-item.expanded .subnav li {
      border: 1px solid ${styles.lightGrayColor};
    }
    .nav-item.expanded .subnav li:hover {
      background-color: ${styles.lightGrayColor};
    }
    .nav-item.expanded .subnav a {
      text-align: left;
      width: initial;
    }
  `}</style>
    </li>
  )
}

export default NavItem