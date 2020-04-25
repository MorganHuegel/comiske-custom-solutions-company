import styles from '../style'

const VhBackground = props => {
  return (
    <section className='container-fluid full-page'>
      <div className='color-overlay'>
        {props.children}
      </div>
      <style jsx>{`
        .full-page {
          height: calc(100vh ${props.header || ''});
          background-image: url(${props.img});
          background-size: cover;
          background-position: 50% 50%;
        }

        .color-overlay {
          padding: 15px;
          height: 100%;
          width: 100%;
          background-color: ${props.bgColor};
        }

        @media only screen and (min-width: ${styles.screenMd}){
          .cover-overlay {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  )
}

export default VhBackground