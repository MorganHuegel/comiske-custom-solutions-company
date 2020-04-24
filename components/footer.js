import { useState } from 'react'
import Link from 'next/link'
import ModalWindow from './modalWindow'

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
      <p>Copyright Morgan Huegel</p>
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
        background-color: red;
      }
      footer > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
  </footer>
  )}

export default Footer