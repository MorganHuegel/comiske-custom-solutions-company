import Link from 'next/link'
import MainLayout from '../layouts/main.js'
import VhBackground from '../components/vhBackground'
import LandingInfoBox from '../components/landingInfoBox'
import styles from '../style'

const infoBoxConfig = {
  commercial: {
    href: '/commercial',
    mainText: 'Commercial',
    icon: <i className="fas fa-building"></i>,
    links: [
      {label: 'Fabrication', route: '/commercial#fabrication'},
      {label: 'Construction', route: '/commercial#construction'},
      {label: 'Energy Efficiency', route: '/commercial#energy'}
    ]
  },
  residential: {
    href: '/residential',
    mainText: 'Residential',
    icon: <i className="fas fa-home"></i>,
    links: [      
      {label: 'Full Service Construction', route: '/residential#construction'},
      {label: 'Roofing/Siding', route: '/residential#roofing'},
      {label: 'Additions/Garages', route: '/residential#additions'}
    ]
  },
  electrical: {
    href: '/electrical',
    mainText: 'Electrical',
    icon: <i className="fas fa-charging-station"></i>,
    links: [
      {label: 'Standby Generators', route: '/electrical#generator'},
      {label: 'Residential Rewiring', route: '/electrical#residential'},
      {label: 'Commercial Lighting', route: '/electrical#commercial'},
      {label: 'A/V Systems', route: '/electrical#av'},
      {label: 'Security/Access Control Systems', route: '/electrical#security'},
      {label: 'Network Wiring', route: '/electrical#network'},
      {label: 'Energy Savings Initiatives', route: '/electrical#energy'},
    ]
  }
}

const Landing = () => (
  <MainLayout>

    <VhBackground bgColor={styles.primaryColorTransparant} img={require('../images/index-main.jpg')} header={' - 64.5px'}>
      <div className='container banner'>
        <h2><q>We work hard so you don't have to.</q></h2>
        <p className='title'>- Dave Comiske, founder</p>
      </div>
    </VhBackground>

    <VhBackground bgColor={'white'} overlayStyles={{display: 'flex', alignItems: 'center'}}>
      <div className='container info-box-container'>
        <LandingInfoBox config={infoBoxConfig.commercial}/>
        <LandingInfoBox config={infoBoxConfig.residential}/>
        <LandingInfoBox config={infoBoxConfig.electrical}/>
      </div>
    </VhBackground>

    <VhBackground bgColor={styles.primaryColorTransparant} img={require('../images/index-about.jpg')}>
      <div className='about container'>
        <h2>About</h2>
        <p className='main-text'>
          Comiske is the name, specializing is the game! We'll solve all of your unique problems with swiftness and competency.
          If you need a service that is not listed above, send us an inquiry via the Contact Page.  Most likely, we're the
          best people for the job.
        </p>
        <address>
          <p>Let's connect for a consultation!</p>
          <ul>
            <li>
              <Link href='/contact'><a>Contact Page</a></Link>
            </li>
            <li className='phone'>
              <a href="tel:+13115552368">(311) 555-2368</a>
            </li>
            <li className='email'>
              <a href="mailto:acct@comiske.com">acct@comiske.com</a>
            </li>
          </ul>
        </address>
      </div>
    </VhBackground>

    <style>{`
      .banner {
        height: calc(100vh - 92.5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2.3rem;
        text-shadow: 2px 2px 0 black;
        color: white;
      }
      .title {
        margin-top: 40px;
      }
      @media only screen and (min-width: ${styles.screenMd}) {
        .banner {
          font-size: 3.1rem;
        }
      }

      .info-box-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 100%;
      }

      .about {
        min-height: calc(100vh - 40px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .about h2 {
        font-size: 4.1rem;
        text-shadow: 2px 2px 0px black;
      }
      .about p {
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-shadow: 2px 2px 0px black;
      }
      .about address {
        font-style: normal;
        line-height: 1.8rem;
      }
      .about .phone a, .about .email a {
        text-decoration: none;
      }
      .about, .about a {
        color: white;
      }
      @media only screen and (min-width: ${styles.screenMd}) {
        .about p {
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
    `}</style>
  </MainLayout>
)

export default Landing;