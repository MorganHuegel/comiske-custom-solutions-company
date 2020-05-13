import Link from 'next/link'
import MainLayout from '../layouts/main.js'
import ServiceTile from '../components/serviceTile'
import styles from '../style'

const config = {
  fabrication: {
    href: "#fabrication",
    title: "Fabrication",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is fabrication, and what is your experience with it.",
    imageUrl: "https://www.wwgmc.com/wp-content/uploads/2016/06/industrial-fabrication.jpg",
    floatImg: 'left'
  },
  construction: {
    href: "#contruction",
    title: "Construction",
    blurb: "Insert a blurb here to demonstrate expertise, saying how  the reader benefit from your services, what is commercial construction and what is your experience with it.",
    imageUrl: "https://patoutlaw.com/wp-content/uploads/2018/09/commercial-construction-leads1-e1507578728366.jpg",
    floatImg: 'right'
  },
  energy: {
    href: "#energy",
    title: "Energy",
    blurb: "Insert a blurb here to demonstrate expertise, saying how the reader benefit from your services, what is energy efficiency and what is your experience with it.",
    imageUrl: "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/firstfuel_1_721_420_80_s_c1.jpg",
    floatImg: 'left'
  }
}

const Commercial = () => (
  <MainLayout>

    <div className='overview container'>
      <div className='summary'>
        <h2>Commercial Services</h2>
        <p>
          We specialize in commercial services for a variety of settings. 
          We've built and maintained parts of offices, breweries, restaurants, 
          and many other commercial environments. Common services include:
        </p>
        <ul>
          <li>
            {/* <Link href='#fabrication'><a>Fabrication</a></Link> */}
          </li>
          <li>
            {/* <Link href='#construction'><a>Construction</a></Link> */}
          </li>
          <li>
            <a href='#energy'>Energy Efficiency</a>
          </li>
          <li>
            More (<Link href=''><a>contact</a></Link> us for a consult)
          </li>
        </ul>
      </div>
      <div className='image'>
      </div>
    </div>

    <div className='service-tiles container-fluid'>
      <div className="container">
        <ServiceTile config={config.fabrication}/>
        <ServiceTile config={config.construction}/>
        <ServiceTile config={config.energy}/>
      </div>
    </div>

    <style>{`
      .overview {
        margin: 20px auto 30px auto;
        display: flex;
        flex-direction: column;
      }
      .overview .summary {
        margin-bottom: 30px;
      }
      .overview .image {
        height: 50vh;
        background: url("https://bellonconstruction.com/wp-content/uploads/2018/05/questions-and-concerns-with-commercial-remodeling.jpg");
        background-size: cover;
        background-position: 50% 50%;
      }
      .summary h2 {
        margin-bottom: 20px;
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

export default Commercial;