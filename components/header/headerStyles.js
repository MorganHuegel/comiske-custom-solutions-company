import styles from '../../style.js'

const HeaderStyles = () => (
  <style>{`
    header a {
      color: ${styles.primaryColor};
      text-decoration: none;
    }

    header .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    header img {
      max-width: 235px;
    }

    header nav {
      display: flex;
      align-items: flex-end;
    }

    header .lg-screen-nav {
      display: none;
    }

    @media only screen and (min-width: ${styles.screenMd}) {
      header img {
        max-width: 350px;
      }
    }
    
    @media only screen and (min-width: ${styles.screenLg}) {
      header h1 {
        padding-bottom: 10px;
      }

      header img {
        max-width: 450px;
      }

      header .sm-screen-nav {
        display: none;
      }

      header ul.lg-screen-nav {
        display: flex;
      }
    }
  `}</style>
)

export default HeaderStyles