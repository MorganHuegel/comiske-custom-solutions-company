import MainLayout from '../layouts/main.js'
import ContactForm from '../components/contactForm'
import styles from '../style'

const Contact = () => (
  <MainLayout>
    <div className='container-fluid wrapper'>
      <div className='form-container'>
        <h2>Contact Us</h2>
        <p>
          Please submit the form below for all inquiries, 
          or email <a href='mailto:acct@comiske.com'>acct@comiske.com</a> directly.
          We look forward to making your next project a success!
        </p>
        <ContactForm />
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
    `}</style>
  </MainLayout>
)

export default Contact;