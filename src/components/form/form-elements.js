import React from "react"

const Field = (props) => (
  <div className="form-group">
    {props.children}
  </div>
)

export const TextInput = (props) => (
  <Field>
    <label htmlFor={props.name} className={'not-show'}>{props.placeholder}</label>
    <input className={'form-control form-control-lg'} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
  </Field>
)

export const Textarea = (props) => (
  <Field>
    <label htmlFor={props.name} className={'not-show'}>{props.placeholder}</label>
    <textarea rows={5} className={'form-control form-control-lg'} name={props.name} id={props.name} placeholder={props.placeholder} />
  </Field>
)

export const Button = (props) => (
  <Field>
    <button type="submit" className={'button ' + props.className}>
      {props.value}
    </button>
  </Field>
)