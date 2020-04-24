import { useState, useEffect } from 'react'

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
          min-width: 500px;
          min-height: 500px;
          background-color: white;
        }
      `}</style>
    </>
  )
}

export default ModalWindow