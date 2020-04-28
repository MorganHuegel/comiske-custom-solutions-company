import Link from 'next/link'
import styles from '../style'

const LandingInfoBox = props => {
  const { href, mainText, icon } = props.config

  return (
    <div className='info-box'>
      <Link href={href}>
        <a className='link'>
          <div className='icon-container'>{icon}</div>
          <h3 className='main-text'>{mainText}</h3>
        </a>
      </Link>
      <style jsx>{`
        .info-box {
          width: 90%;
          max-width: 325px;
          height: 350px;
          margin: 10px 0;
          border: 1px solid ${styles.primaryColor};
          background-color: ${styles.lightGrayColor};
        }
        .link {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: ${styles.primaryColor};
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
        .icon-container {
          font-size: 10rem;
        }
        .main-text {
          font-size: 2rem;
        }
        @media only screen and (min-width: ${styles.screenMd}) {
          .info-box {
            max-width: 490px;
          }
        }
        @media only screen and (min-width: ${styles.screenLg}) {
          .info-box {
            width: calc(33% - 20px);
            max-width: 325px;
            margin: 0 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default LandingInfoBox