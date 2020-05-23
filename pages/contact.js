import { useState } from 'react'
import MainLayout from '../layouts/main.js'
import ContactForm from '../components/contactForm'
import styles from '../style'

class Contact extends React.Component {
  state = {
    isSubmitting: false,
    isSuccess: false,
    isFailure: false
  }

  render(){
    return (
      <MainLayout>
        <div className='container-fluid wrapper'>
          <div className='form-container'>
            <h2>Contact Us</h2>
            <p className='directions'>
              Please submit the form below for all inquiries, 
              or email <a href='mailto:acct@comiske.com'>acct@comiske.com</a> directly.
              You can expect a response within 3 buisness days.
              We look forward to making your next project a success!
            </p>
            <ContactForm isSubmitting={this.state.isSubmitting}/>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            background-color: ${styles.primaryColor};
            padding: 20px;
            height: 100%;
          }
          .form-container {
            margin: 0 auto;
            max-width: 600px;
            background-color: rgb(240, 240, 240);
            padding: 20px;
            border-radius: 5px;
            color: ${styles.primaryColor};
          }
          .wrapper h2 {
            font-size: 2.5rem;
          }
          .directions {
            margin: 30px 0;
          }
          @media only screen and (min-width: ${styles.screenMd}) {
            .wrapper {
              padding: 50px;
            }
          }
        `}</style>
      </MainLayout>
    )
  }
}

export default Contact;