import MainLayout from '../layouts/main.js'
import ContactForm from '../components/contactForm'
import ContactSuccess from '../components/contactSuccess'
import styles from '../style'

class Contact extends React.Component {
  state = {
    isSubmitting: false,
    isSuccess: false,
    isFailure: false
  }

  handleSubmit = values => {
    this.setState({isSubmitting: true, isFailure: false}, () => {
      return fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(res => {
        if (!res.success === true){
          return Promise.reject()
        }
        return this.setState({
          isSubmitting: false, 
          isSuccess: true, 
          isFailure: false
        })
      })
      .catch(err => {
        return this.setState({
          isSubmitting: false, 
          isSuccess: false, 
          isFailure: true
        })
      })


    })
  }

  render(){
    return (
      <MainLayout>
        <div className='container-fluid wrapper'>
          <div className='form-container'>
            {!this.state.isSuccess && (
              <div>
                <h2>Contact Us</h2>
                <p className='directions'>
                  Please submit the form below for all inquiries 
                  or email <a href='mailto:acct@comiske.com'>acct@comiske.com</a> directly.
                  You can expect a response within 3 buisness days.
                  We look forward to making your next project a success!
                </p>
                <ContactForm isSubmitting={this.state.isSubmitting} handleSubmit={this.handleSubmit} isFailure={this.state.isFailure}/>
              </div>
            )}
            {this.state.isSuccess && <ContactSuccess />}
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            background-color: ${styles.primaryColor};
            padding: 20px;
            height: 100%;
            min-height: calc(100vh - 64.8px - 15px - 56px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .form-container {
            margin: 0 auto;
            max-width: 600px;
            width: 100%;
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
              min-height: calc(100vh - 89.2px - 20px - 59px);
            }
          }
          @media only screen and (min-width: ${styles.screenLg}) {
            .wrapper {
              min-height: calc(100vh - 115.5px - 20px - 59px);
            }
          }
        `}</style>
      </MainLayout>
    )
  }
}

export default Contact;