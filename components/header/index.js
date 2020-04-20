import Link from 'next/link';
import NavItem from './navItem'
import HeaderStyles from './headerStyles'
import headerLogo from '../../images/headerLogo.png'

import HamburgerMenu from './hamburgerMenu'


const dropdownItems = {
  commercial: {
    label: 'Commercial', 
    mainRoute: '/commercial',
    dropdowns: [
      {label: 'Fabrication', route: '/commercial#fabrication'},
      {label: 'Construction', route: '/commercial#construction'},
      {label: 'Energy Efficiency', route: '/commercial#energy'}
    ]
  },
  residential: {
    label: 'Residential', 
    mainRoute: '/residential',
    dropdowns: [
      {label: 'Full Service Construction', route: '/residential#construction'},
      {label: 'Roofing/Siding', route: '/residential#roofing'},
      {label: 'Additions/Garages', route: '/residential#additions'},
    ]
  },
  electrical: {
    label: 'Electrical', 
    mainRoute: '/electrical',
    dropdowns: [
      {label: 'Standby Generators', route: '/electrical#generator'},
      {label: 'Residential Rewiring', route: '/electrical#residential'},
      {label: 'Commercial Lighting', route: '/electrical#commercial'},
      {label: 'A/V Systems', route: '/electrical#av'},
      {label: 'Security/Access Control Systems', route: '/electrical#security'},
      {label: 'Network Wiring', route: '/electrical#network'},
      {label: 'Energy Savings Initiatives', route: '/electrical#energy'},
    ]
  },
}

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
        <ul className='lg-screen-nav'>
          <NavItem href='/commercial' label={dropdownItems.commercial.label} dropdown={dropdownItems.commercial.dropdowns}/>
          <NavItem href='/residential' label={dropdownItems.residential.label} dropdown={dropdownItems.residential.dropdowns}/>
          <NavItem href='/electrical' label={dropdownItems.electrical.label} dropdown={dropdownItems.electrical.dropdowns}/>
          <NavItem href='/contact' label='Contact Us' />
        </ul>
        <HamburgerMenu dropdownItems={dropdownItems}/>
      </nav>

      <HeaderStyles />
    </div>
  </header>
);

export default Header;