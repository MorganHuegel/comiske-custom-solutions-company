import styles from '../style'

const phoneRegex = new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}')

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

  handleChange = (event, fieldName) => {
    let updatedState = {}
    updatedState[fieldName] = {value: event.currentTarget.value, error: ''};

    // When changning phone or email, reset the other's error message because only one of the fields is required
    if (fieldName === 'phone') {
      // For phone numbers, add the "-" automatically
      const currentLength = updatedState.phone.value.length
      if (
        (currentLength === 3 && this.state.phone.value.length === 2 && !this.state.phone.value.startsWith('1-')) || 
        (currentLength === 7 && this.state.phone.value.length === 6 ) && !this.state.phone.value.startsWith('1-')) 
      {
        updatedState.phone.value += '-'
      }
      updatedState.email = {value: this.state.email.value, error: ''}
      // For phone numbers, if user types "-" when one is already there, just ignore it
      if (updatedState.phone.value.endsWith("--")) {
        return;
      }
    } 
    else if (fieldName === 'email') {
      updatedState.phone = {value: this.state.phone.value, error: ''}
    }
    this.setState(updatedState)
  }

  checkSubmit = e => {
    e.preventDefault();
    let values = {
      name: this.state.name.value,
      email: this.state.email.value,
      phone: this.state.phone.value,
      service: this.state.service.value,
      message: this.state.message.value,
    }

    let errors = {}
    if (!values.name) {
      const field = {...this.state.name}
      field.error = 'Please provide your name.'
      errors.name = field
    } 
    if (!values.email && !values.phone) {
      const emailField = {...this.state.email}
      emailField.error = 'Please provide an email address or phone number for us to reach you.'
      const phoneField = {...this.state.phone}
      phoneField.error = 'Please provide an email address or phone number for us to reach you.'
      errors.email = emailField
      errors.phone = phoneField
    }
    else if (!values.email && !phoneRegex.test(values.phone)) {
      const phoneField = {...this.state.phone}
      phoneField.error = 'Please provide phone number in the format ### - ### - ####.'
      errors.phone = phoneField
    }

    if (Object.keys(errors).length) {
      return this.setState({...errors})
    }

    this.props.handleSubmit(values)
  }

  render(){
    return (
      <form name='contact-form' id='contact-form' onSubmit={this.checkSubmit}>
        <div className={`group ${this.state.name.error && 'error'}`}>
          <label htmlFor='name'>Name *</label>
          <input type='text' name='name' id='name' onChange={e => this.handleChange(e, 'name')} value={this.state.name.value}/>
          {this.state.name.error && <p className='error-message'>{this.state.name.error}</p>}
        </div>

        <div className={`group ${this.state.email.error && 'error'}`}>
          <label htmlFor='email'>Email *</label>
          <input type='email' name='email' id='email' onChange={e => this.handleChange(e, 'email')} value={this.state.email.value}/>
          {this.state.email.error && <p className='error-message'>{this.state.email.error}</p>}
        </div>

        <div className={`group ${this.state.phone.error && 'error'}`}>
          <label htmlFor='phone'>Phone *</label>
          <input type='tel' name='phone' id='phone' onChange={e => this.handleChange(e, 'phone')} value={this.state.phone.value} placeholder="123-456-7890"/>
          {this.state.phone.error && <p className='error-message'>{this.state.phone.error}</p>}
        </div>

        <div className={`group ${this.state.service.error && 'error'}`}>
          <label htmlFor='service'>Requested Service</label>
          <select name='service' id='service' onChange={e => this.handleChange(e, 'service')} value={this.state.service.value}>
            <option value=''></option>
            <option value='commercial'>Commercial</option>
            <option value='residential'>Residential</option>
            <option value='electrical'>Electrical</option>
          </select>
          {this.state.service.error && <p className='error-message'>{this.state.service.error}</p>}
        </div>

        <div className={`group ${this.state.message.error && 'error'}`}>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows={4} onChange={e => this.handleChange(e, 'message')} value={this.state.message.value}/>
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