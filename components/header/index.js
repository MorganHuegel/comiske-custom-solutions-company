import Link from 'next/link';
import NavItem from './navItem'
import HeaderStyles from './headerStyles'
import headerLogo from '../../images/headerLogo.png'

const Header = props => (
  <header>
    <div className='container'>
      <div>
        <Link href='/'><a>
          <h1>
            <img src={headerLogo} alt='Comiske Customr Solutions Company'/>

            {/* Just for web crawlers */}
            <span className='hidden'>Comiske Custom Solutions Company</span>
          </h1>
        </a></Link>
      </div>
      <nav>
        <ul className='lg-screen'>
          <NavItem href='/commercial' label='Commercial' dropdown/>
          <NavItem href='/residential' label='Residential' dropdown/>
          <NavItem href='/electrical' label='Electrical' dropdown/>
          <NavItem href='/contact' label='Contact Us' />
        </ul>
        <ul className='sm-screen'>
          <li>small screen header</li>
        </ul>
      </nav>

      <HeaderStyles />
    </div>
  </header>
);

export default Header;