import Link from 'next/link'

const NavItem = props => {
  return (
    <li className='nav-item'>
      <Link href={props.href}><a>{props.label}</a></Link>
    </li>
  )
}

export default NavItem