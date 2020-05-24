import styles from '../style'

const Icon = () => <i class="far fa-check-circle"></i>

const ContactSuccess = () => {
  return (
    <div className='success-wrapper'>

      <div className='icon'>
        <Icon />
      </div>

      <div>
        <h2>Thank you!</h2>
      </div>

      <div>
        <p>Your message has been submitted. We will be in contact within 3 business days.  For immediate inquiries, please call 814-673-0233.</p>
      </div>

      <style jsx>{`
        .success-wrapper {
          height: calc(100vh - 300px);
          max-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .icon {
          font-size: 7rem;
          text-align: center;
        }
        h2 {
          font-size: 3.5rem;
        }
        @media only screen and (min-width: ${styles.screenMd}){
          .success-wrapper {
            height: calc(100vh - 400px);
          }
        }
      `}</style>
    </div>
  )
}

export default ContactSuccess;