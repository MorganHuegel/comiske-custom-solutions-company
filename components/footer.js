import { useState } from 'react'
import ModalWindow from './modalWindow'
import styles from '../style'

const Footer = props => {
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [isModalUnmounting, setIsModalUnmounting] = useState(false)

  const closeModal = () => {
    setIsModalUnmounting(true)
    setTimeout(() => {
      setIsModalUnmounting(false)
      setIsModalShowing(false)
    }, 500)
  }
  return (
  <footer className='container-fluid'>
    <div className='container'>
      <p>&copy; Copyright Morgan Huegel</p>
      <a href='#' onClick={() => setIsModalShowing(true)}>Admin Login</a>

      <ModalWindow 
        closeModal={closeModal} 
        isModalUnmounting={isModalUnmounting} 
        isModalShowing={isModalShowing}
      >
        <form>
          MODAL
        </form>
      </ModalWindow>

    </div>
    <style jsx>{`
      footer {
        padding: 20px;
        background-color: white;
        color: ${styles.primaryColor};
      }
      footer > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      footer a {
        color: ${styles.primaryColor};
        text-decoration: none;
      }
      footer a:hover, footer a:focus {
        cursor: pointer;
        text-decoration: underline;
      }
    `}</style>
  </footer>
  )}

export default Footer