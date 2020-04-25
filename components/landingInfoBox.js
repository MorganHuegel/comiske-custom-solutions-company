import Link from 'next/link'
import styles from '../style'

const LandingInfoBox = props => {
  return (
    <div className='info-box'>
      <Link href={props.href}>
        <a className='link'>
          Link
        </a>
      </Link>
      <style jsx>{`
        .info-box {
          width: 100%;
          height: 350px;
          margin: 10px 0;
          border: 1px solid ${styles.primaryColor};
        }
        .link {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        @media only screen and (min-width: ${styles.screenMd}) {
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