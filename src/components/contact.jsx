import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Kontakt</h2>
                <p>         
                    Bitte füllen Sie das untenstehende Formular aus, um uns eine E-Mail zu senden und wir werden es tun
                    melde dich so schnell wie möglich zurück.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit} netlify>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Nachricht'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Kontakt Informationen</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adresse
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefon
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <h3>Impressum</h3>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-exclamation'></i> Übungsfirma
                </span>{' '}
                {props.data ? props.data.impressum.üfa_info : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-user'></i> Verantwortlicher Herausgeber
                </span>{' '}
                {props.data ? props.data.impressum.responsible : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-building'></i> Firma
                </span>{' '}
                {props.data ? props.data.impressum.name : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-book'></i> Rechtsform
                </span>{' '}
                {props.data ? props.data.impressum.legal_form : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-book'></i> UID
                </span>{' '}
                {props.data ? props.data.impressum.uid : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-book'></i> Firmenbuchnummer
                </span>{' '}
                {props.data ? props.data.impressum.company_registration_number : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-bank'></i> Bankverbindung
                </span>{' '}
                IBAN: {props.data ? props.data.impressum.iban : 'loading'}<br/>
                BIC: {props.data ? props.data.impressum.bic : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-code'></i> Entwicklung (Copy Pasta)
                </span>{' '}
                {props.data ? props.data.impressum.developer : 'loading'}<br/>
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Vision Paper GmbH<br/>
            <a href={props.data ? props.data.agb: "loading..."} rel='nofollow'>
              AGB<br/>
            </a>
            <a href={props.data ? props.data.shop_info : "loading..."} rel='nofollow'>
              Shop Informationen{" "}<br/>
            </a>
            <a href={props.data ? props.data.privacy_policy : "loading..."} rel='nofollow'>
              Datenschutzbestimmungen
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
