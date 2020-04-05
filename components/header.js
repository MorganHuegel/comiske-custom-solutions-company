import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header>
    <div>
      <h1>Comiske Custom Solutions</h1>
    </div>
    <nav>
      <ul>
        <li><Link href='/commercial'><a>Commercial</a></Link></li>
        <li><Link href='/residential'><a>Residential</a></Link></li>
        <li><Link href='/electrical'><a>Electrical</a></Link></li>
        <li><Link href='/contact'><a>Contact Us</a></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;