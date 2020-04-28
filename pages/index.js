import MainLayout from '../layouts/main.js'
import VhBackground from '../components/vhBackground'
import LandingInfoBox from '../components/landingInfoBox'
import styles from '../style'

const infoBoxConfig = {
  commercial: {
    href: '/commercial',
    mainText: 'Commercial',
    icon: <i className="fas fa-building"></i>
  },
  residential: {
    href: '/residential',
    mainText: 'Residential',
    icon: <i className="fas fa-home"></i>
  },
  electrical: {
    href: '/electrical',
    mainText: 'Electrical',
    icon: <i className="fas fa-charging-station"></i>
  }
}

const Landing = () => (
  <MainLayout>

    <VhBackground bgColor={styles.primaryColorTransparant} img={require('../images/stock-landing.jpg')} header={' - 64.5px'}>
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

    <VhBackground bgColor={styles.primaryColorTransparant}>
      <p>Landing</p>
    </VhBackground>

    <style>{`
      .banner {
        height: calc(100vh - 92.5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3.1rem;
        color: white;
      }
      .title {
        margin-top: 40px;
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
    `}</style>
  </MainLayout>
)

export default Landing;