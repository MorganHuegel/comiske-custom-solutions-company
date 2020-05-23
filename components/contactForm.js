import styles from '../style'

export default class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      },
      phone: {
        value: '',
        error: ''
      },
      service: {
        value: '',
        error: ''
      },
      message: {
        value: '',
        error: ''
      },
    }
  }

  render(){
    return (
      <form name='contact-form' id='contact-form'>
        <div className={`group ${this.state.name.error && 'error'}`}>
          <label for='name'>Name *</label>
          <input type='text' name='name' id='name'/>
          {this.state.name.error && <p className='error-message'>{this.state.name.error}</p>}
        </div>

        <div className={`group ${this.state.email.error && 'error'}`}>
          <label for='email'>Email *</label>
          <input type='email' name='email' id='email'/>
          {this.state.email.error && <p className='error-message'>{this.state.email.error}</p>}
        </div>

        <div className={`group ${this.state.phone.error && 'error'}`}>
          <label for='phone'>Phone *</label>
          <input type='tel' name='phone' id='phone'/>
          {this.state.phone.error && <p className='error-message'>{this.state.phone.error}</p>}
        </div>

        <div className={`group ${this.state.service.error && 'error'}`}>
          <label for='service'>Requested Service</label>
          <select name='service' id='service'>
            <option value='' disabled selected></option>
            <option value='commercial'>Commercial</option>
            <option value='residential'>Residential</option>
            <option value='electrical'>Electrical</option>
          </select>
          {this.state.service.error && <p className='error-message'>{this.state.service.error}</p>}
        </div>

        <div className={`group ${this.state.message.error && 'error'}`}>
          <label for='message'>Message</label>
          <textarea name='message' id='message' rows={4}/>
          {this.state.message.error && <p className='error-message'>{this.state.message.error}</p>}
        </div>

        <button type='submit' disabled={this.props.isSubmitting}>Send</button>
        <style jsx>{`
          .group {
            margin-bottom: 20px;
          }
          .group.error input, .group.error textarea {
            background-color: rgb(255, 235, 235);
          }

          input, textarea {
            font-size: 1rem;
            padding: 8px;
            width: 100%;
            border-radius: 5px;
          }

          label {
            margin: 5px 0;
            display: block;
          }

          .error-message {
            margin-top: 5px;
            color: rgb(255, 100, 100);
          }

          button {
            width: 100%;
            background-color: ${styles.primaryColor};
            color: white;
            font-size: 1rem;
            padding: 15px;
            border-radius: 5px;
          }
          button:hover, button:focus {
            cursor: pointer;
            background-color: rgb(37, 74, 40);
          }
          button[disabled], button[disabled]:hover, button[disabled]:focus {
            background-color: ${styles.primaryColorTransparant};
            cursor: wait;
          }
        `}</style>
      </form>
    )
  }
}