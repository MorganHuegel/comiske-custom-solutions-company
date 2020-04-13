import Link from 'next/link'

const NavItem = props => {
  return (
    <li className='nav-item'>
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
    }
    .nav-item .subnav {
      text-align: left;
      width: 200px;
      position: absolute;
      top: 25px;
      left: 0px;
      background-color: red;
    }
    .nav-item .subnav li {
      padding: 10px;
    }
  `}</style>
    </li>
  )
}

export default NavItem