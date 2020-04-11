import styles from '../../style.js'

const HeaderStyles = () => (
  <style jsx>{`
    header {
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

    header ul.lg-screen {
      display: flex;
    }

    header .nav-item {
      width: 100px;
    }
  `}</style>
)

export default HeaderStyles