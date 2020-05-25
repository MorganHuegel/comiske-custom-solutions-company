import { useState } from 'react'
import ModalWindow from './modalWindow'
import styles from '../style'

const Footer = props => {
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [isModalUnmounting, setIsModalUnmounting] = useState(false)
  const [loginErrorMessage, setLoginErrorMessage] = useState('')
  const [isValidatingPassword, setIsValidatingPassword] = useState(false)

  const closeModal = () => {
    setIsModalUnmounting(true)
    setTimeout(() => {
      setIsModalUnmounting(false)
      setIsModalShowing(false)
    }, 500)
  }

  function handleSubmit(event){
    event.preventDefault()
    setIsValidatingPassword(true)
    let password = document.getElementById('password').value
    // REPLACE BELOW WITH AUTHENTICATION FUNCTION
    setLoginErrorMessage('This feature is not yet set up. Check back at a later date.')
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
        <form onSubmit={handleSubmit} className='admin-login' name='admin-login'>
          <p>This form is for Comiske Custom Solutions Company administration only. Login to edit content.</p>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password'/>
            {loginErrorMessage && <p className='error-message'>{loginErrorMessage}</p>}
          </div>
          <button type='submit' disabled={isValidatingPassword}>Login</button>
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
      .admin-login {
        padding: 20px;
        border-radius: 5px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
      .admin-login .form-group label {
        display: block;
        margin-bottom: 5px;
      }
      .error-message {
        margin-top: 5px;
        color: rgb(255, 100, 100);
      }
      .admin-login button {
        padding: 8px;
        background-color: ${styles.primaryColor};
        color: white;
      }
      .admin-login button:hover, .admin-login button:focus {
        cursor: pointer;
        background-color: rgb(37, 74, 40);
      }
      .admin-login button[disabled] {
        cursor: wait;
        background-color: ${styles.primaryColorTransparant};
      }
    `}</style>
  </footer>
  )}

export default Footer