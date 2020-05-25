import { useState, useEffect } from 'react'
import styles from '../style'

const ModalWindow = props => {
  const { closeModal, isModalShowing, isModalUnmounting } = props

  const closeModalOnClickBg = event => {
    if (event.target.classList.contains('modal-window')) {
      closeModal()
    }
  }

  return (
    <>
      <div 
        className={`modal-window ${(isModalShowing && !isModalUnmounting) && 'mounted'}`} 
        onClick={closeModalOnClickBg}
      >
        <div className='modal-content'>
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .modal-window {
          z-index: 10;
          background-color: rgba(20, 30, 20, 0.8);
          min-height: 100vh;
          min-width: 100vw;
          position: fixed;
          left: 0;
          top: -120vh;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: top 500ms;
        }

        .modal-window.mounted {
          top: 0;
        }

        .modal-content {
          width: calc(100vw - 40px);
          height: 300px;
          background-color: white;
          border-radius: 5px;
        }
        @media only screen and (min-width: ${styles.screenMd}) {
          .modal-content {
            width: 500px;
          }
        }
      `}</style>
    </>
  )
}

export default ModalWindow