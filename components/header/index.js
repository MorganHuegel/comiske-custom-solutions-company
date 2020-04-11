import Link from 'next/link';
import NavItem from './navItem'
import HeaderStyles from './headerStyles'
import headerLogo from '../../images/headerLogo.png'

const Header = props => (
  <header>
    <div>
      <Link href='/'><a>
        <h1>
          <img src={headerLogo} alt='Comiske Customr Solutions Company'/>

          {/* Just for web crawlers */}
          <span class='hidden'>Comiske Custom Solutions Company</span>
        </h1>
      </a></Link>
    </div>
    <nav>
      <ul className='lg-screen'>
        <NavItem href='/commercial' label='Commercial'/>
        <NavItem href='/residential' label='Residential'/>
        <NavItem href='/electrical' label='Electrical'/>
        <NavItem href='/contact' label='Contact Us'/>
      </ul>
    </nav>

    <HeaderStyles />
  </header>
);

export default Header;