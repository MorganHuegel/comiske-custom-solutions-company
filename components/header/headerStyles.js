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

    header h1 {
      margin: 0;
    }

    header img {
      max-width: 235px;
    }

    header nav {
      display: flex;
      align-items: flex-end;
    }

    header .lg-screen {
      display: none;
    }
    header .subnav {
      display: none;
    }

    
    @media only screen and (min-width: ${styles.screenLg}) {
      header img {
        max-width: 450px;
      }

      header .sm-screen {
        display: none;
      }

      header ul.lg-screen {
        display: flex;
      }
  
      header .nav-item {
        width: 100px;
      }

      header ul.lg-screen .nav-item:hover .subnav {
        display: initial;
      }
    }
  `}</style>
)

export default HeaderStyles