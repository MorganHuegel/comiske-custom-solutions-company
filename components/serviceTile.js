import styles from '../style'

const ServiceTile = props => {
  const { config } = props
  return (
    <div className='wrapper' id={config.href} name={config.href}>
      {config.floatImg === 'left' && (
        <figure className='imgTile'>
          <img src={config.imageUrl} alt={`Image for ${config.title}`}/>
          {/* <figcaption>source: "{config.imageUrl}"</figcaption> */}
        </figure>
      )}

      <div className='blurb'>
        <h3>{config.title}</h3>
        <p>{config.blurb}</p>
      </div>

      {config.floatImg === 'right' && (
        <figure className='imgTile'>
          <img src={config.imageUrl} alt={`Image for ${config.title}`}/>
          {/* <figcaption>source: "{config.imageUrl}"</figcaption> */}
        </figure>
      )}

      <style jsx>{`
        .wrapper {
          position: relative;
          display: flex;
          flex-direction: row;
          min-height: 300px;
          border: 2px solid ${styles.primaryColor};
          margin: 50px auto;
          color: ${styles.primaryColor};
          box-shadow: 2px 2px 2px rgb(80, 80, 80);
        }

        .blurb {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          z-index: 2;
          background-color: rgba(255, 255, 255, 0.8);
          text-shadow: 0px 0px 3px white;
        }
        .blurb h3 {
          font-size: 2rem;
          margin: 0 20px;
        }
        .blurb p {
          margin: 0 20px;
        }

        .imgTile {
          position: absolute;
          width: 100%;
          height: 100%;
          flex: 1;
          background: url("${config.imageUrl}");
          background-position: 50% 50%;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .imgTile img {
          /* Just here for semantic purposes, image will actually come from background-image */
          height: 0px;
          width: 0px;
        }
        .imgTile figcaption {
          display: none;
          width: 100%;
          background-color: rgba(90, 90, 90, 0.5);
          color: white;
          flex-basis: 16px;
          font-size: 10px;
          padding: 0 3px;
        }

        @media only screen and (min-width: ${styles.screenMd}){
          .blurb {
            background-color: white;
          }
          .wrapper {
            box-shadow: 6px 6px 4px rgb(90, 90, 90);
          }
          .imgTile {
            position: initial;
            width: initial;
            height: initial;
          }
          .imgTile figcaption {
            display: initial;
          }
        }
      `}</style>
    </div>
  )
}

export default ServiceTile