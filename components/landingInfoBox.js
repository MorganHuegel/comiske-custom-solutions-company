import Link from 'next/link'
import styles from '../style'

const LandingInfoBox = props => {
  const { href, mainText, icon, links } = props.config

  return (
    <div className='info-box'>
      <Link href={href}>
        <a className='link'>
          <div className='main'>
            <div className='main-icon'>{icon}</div>
            <h3 className='main-text'>{mainText}</h3>
          </div>

          <div className='details'>
            <h3><span>{icon}</span>{mainText}</h3>
            <ul>
              {links.map(link => (
                <li className='details-link' key={'link' + link.route}>
                  <Link href={link.route}>
                    <a>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
          padding: 20px;
          box-shadow: 2px 2px 11px black;
          transition: background-color 400ms, box-shadow 400ms;
        }
        .main {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
        .main-icon {
          font-size: 10rem;
        }
        .main-text {
          font-size: 2rem;
        }
        .details {
          display: none;
        }
        
        .link:hover, .link:focus {
          background-color: ${styles.primaryColor};
          color: ${styles.lightGrayColor};
          box-shadow: 0px 0px 30px 0px black;
        }

        .link:hover .main, .link:focus .main {
          display: none;
        }
        .link:hover .details, .link:focus .details {
          display: initial;
        }
        .details h3 {
          font-size: 1.6rem;
          margin-bottom: 20px;
        }
        .details span {
          margin-right: 10px;
        }
        .details ul {
          padding-left: 20px;
          list-style: initial;
        }
        .details-link {
          padding: 8px 0;
        }
        .details-link a {
          color: ${styles.lightGrayColor};
          text-decoration: none;
        }
        .details-link a:hover, .details-link a:focus {
          text-decoration: underline;
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