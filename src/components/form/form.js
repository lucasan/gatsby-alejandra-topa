import React from "react"
import { TextInput, Textarea, Button } from "./form-elements"
import "./assets/scss/styles.scss"

const ContactForm = (props) => {
  return (
    <section className={'contact section'}>
      <div className={'container'}>
        <div className={'content'}>
          <div className={'section-main-title'}><h2>{ props.title }</h2></div>
        </div>
        <div className={'row justify-content-center'}>
          <form name={'contact'} method={'post'} action={'/gracias-por-contactarme'} data-netlify="true" className={'col-lg-10'} data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className={'row'}>
              <div className={'col-sm'}>
                <TextInput type={'text'} name={'name'} placeholder={'Nombre'}/>
              </div>
              <div className={'col-sm'}>
                <TextInput type={'email'} name={'email'} placeholder={'Email'}/>
              </div>
            </div>
            <div className={'row'}>
              <div className={'col'}>
                <Textarea name={'message'} placeholder={'Tu mensaje'}/>
              </div>
            </div>
            <div className={'row'}>
              <div className={'col'}>
                <Button className={'btn-info btn-lg btn-block'} value={'Enviar el mensaje'} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm