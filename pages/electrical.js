import Link from 'next/link'
import MainLayout from '../layouts/main.js'
import ServiceTile from '../components/serviceTile'
import styles from '../style'

const config = {
  generator: {
    href: "#generator",
    title: "Standby Generators",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is standby generators, and what is your experience with it.",
    imageUrl: "https://www.wwgmc.com/wp-content/uploads/2016/06/industrial-fabrication.jpg",
    floatImg: 'left'
  },
  residential: {
    href: "#residential",
    title: "Residential Rewiring",
    blurb: "Insert a blurb here to demonstrate expertise, saying how  the reader benefit from your services, what is residential rewiring and what is your experience with it.",
    imageUrl: "https://patoutlaw.com/wp-content/uploads/2018/09/commercial-construction-leads1-e1507578728366.jpg",
    floatImg: 'right'
  },
  commercial: {
    href: "#commercial",
    title: "Commercial Lighting",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is commercial lighting and what is your experience with it.",
    imageUrl: "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/firstfuel_1_721_420_80_s_c1.jpg",
    floatImg: 'left'
  },
  av: {
    href: "#av",
    title: "A/V Systems",
    blurb: "Insert a blurb here to demonstrate expertise, saying how  the reader benefit from your services, what is A/V Systems and what is your experience with it.",
    imageUrl: "https://patoutlaw.com/wp-content/uploads/2018/09/commercial-construction-leads1-e1507578728366.jpg",
    floatImg: 'right'
  },
  security: {
    href: "#security",
    title: "Security/Access Control Systems",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is security and what is your experience with it.",
    imageUrl: "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/firstfuel_1_721_420_80_s_c1.jpg",
    floatImg: 'left'
  },
  network: {
    href: "#network",
    title: "Network Wiring",
    blurb: "Insert a blurb here to demonstrate expertise, saying how  the reader benefit from your services, what is Network Wiring and what is your experience with it.",
    imageUrl: "https://patoutlaw.com/wp-content/uploads/2018/09/commercial-construction-leads1-e1507578728366.jpg",
    floatImg: 'right'
  },
  energy: {
    href: "#energy",
    title: "Energy Savings Initiative",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is your energy saving strategy and what is your experience with it.",
    imageUrl: "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/firstfuel_1_721_420_80_s_c1.jpg",
    floatImg: 'left'
  },
}

const Electrical = () => (
  <MainLayout>

    <div className='overview container'>
      <div className='summary'>
        <h2>Electrical Services</h2>
        <p>
          You'll be shocked at how many electrical services we offer.
          Need your office revAMPed?  We've got you covered.
          In rage that your home needs rewired?  Let us do the reVOLTing for you!
          Need an outlet for your frustration? We've got those, too!
          With the most up-to-date knowledge and specs, we'll keep your current current.
          Working with us is a bright idea.
          Common services include:
        </p>
        <ul>
          {Object.keys(config).map(service => (
            <li key={config[service].href}>
              <Link href={config[service].href}><a>{config[service].title}</a></Link>
            </li>
          ))}
          <li>
            More (<Link href='/contact'><a>contact</a></Link> us for a consult)
          </li>
        </ul>
      </div>
      <div className='image'>
      </div>
    </div>

    <div className='service-tiles container-fluid'>
      <div className="container">
        {Object.keys(config).map(service => <ServiceTile config={config[service]} key={'service-tile-' + config[service].href}/>)}
      </div>
    </div>

    <style jsx>{`
      .overview {
        margin: 20px auto 30px auto;
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
      }
      .overview .summary {
        margin-bottom: 30px;
      }
      .overview .image {
        height: 50vh;
        background: url("https://piperelectric.com/wp-content/uploads/2014/02/Emergency-Electrical-Services.jpg");
        background-size: cover;
        background-position: 50% 50%;
      }
      .summary h2 {
        margin-bottom: 30px;
        font-size: 2.8rem;
        line-height: 2.8rem;
      }
      .summary p {
        margin-bottom: 10px;
      }
      .summary p, .summary ul {
        line-height: 1.5rem;
      }
      .summary ul {
        padding-left: 15px;
        list-style: initial;
      }
      .service-tiles {
        background-color: ${styles.lightGrayColor};
        padding: 15px;
      }
      @media only screen and (min-width: ${styles.screenMd}){
        .service-tiles {
          padding: 20px;
        }
        .overview {
          flex-direction: row;
        }
        .overview .summary, .overview .image {
          flex: 1;
        }
        .overview .image {
          height: initial;
          margin-left: 20px;
        }
      }
    `}</style>
  </MainLayout>
)

export default Electrical;