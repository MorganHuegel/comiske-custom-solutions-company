import Link from 'next/link'
import MainLayout from '../layouts/main.js'
import ServiceTile from '../components/serviceTile'
import styles from '../style'

const config = {
  construction: {
    href: "#construction",
    title: "Full Service Construction",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is full service construction, and what is your experience with it.",
    imageUrl: require('../images/residential-full.jpg'),
    floatImg: 'left'
  },
  roofing: {
    href: "#roofing",
    title: "Roofing/Siding",
    blurb: "Insert a blurb here to demonstrate expertise, saying how  the reader benefit from roofing and siding, and what is your experience with it.",
    imageUrl: require('../images/residential-roofing.jpg'),
    floatImg: 'right'
  },
  additions: {
    href: "#additions",
    title: "Additions/Garages",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from additions and garages, and what is your experience with it.",
    imageUrl: require('../images/residential-garage.jpg'),
    floatImg: 'left'
  }
}

const Residential = () => (
  <MainLayout>

    <div className='overview container'>
      <div className='summary'>
        <h2>Residential Services</h2>
        <p>
          Don't let the wear and tear of your home get you down.
          In fact, here at Comiske Custom Solutions, where it tears is where we repair!
          We specialize in residential services on homes, apartments, and even cardboard boxes.
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
        <ServiceTile config={config.construction}/>
        <ServiceTile config={config.roofing}/>
        <ServiceTile config={config.additions}/>
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
        background: url("${require('../images/index-main.jpg')}");
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

export default Residential;