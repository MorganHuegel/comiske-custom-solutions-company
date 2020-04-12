import styles from '../../style.js'

const HeaderStyles = () => (
  <style>{`
    header .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    header h1 {
      margin: 0;
    }

    header img {
      max-width: 450px;
    }

    header nav {
      display: flex;
      align-items: flex-end;
    }

    header .lg-screen {
      display: none;
    }

    header .sm-screen {
      
    }

    
    @media only screen and (min-width: ${styles.screenLg}) {
      header .sm-screen {
        display: none;
      }
      header ul.lg-screen {
        display: flex;
      }
  
      header .nav-item {
        width: 100px;
        text-align: center;
      }
    }
  `}</style>
)

export default HeaderStyles