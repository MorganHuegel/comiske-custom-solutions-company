import MainLayout from '../layouts/main.js'
import VhBackground from '../components/vhBackground'
import LandingInfoBox from '../components/landingInfoBox'
import styles from '../style'

const Landing = () => (
  <MainLayout>

    <VhBackground bgColor={styles.primaryColorTransparant} img={require('../images/stock-landing.jpg')} header={' - 64.5px'}>
      <div className='container banner'>
        <h2><q>We work hard so you don't have to.</q></h2>
        <p className='title'>- Dave Comiske, founder</p>
      </div>
    </VhBackground>

    <VhBackground bgColor={'white'}>
      <div className='container info-box-container'>
        <LandingInfoBox href='/commercial'/>
        <LandingInfoBox href='/residential'/>
        <LandingInfoBox href='/electrical'/>
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `}</style>
  </MainLayout>
)

export default Landing;