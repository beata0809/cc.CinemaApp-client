/* eslint-disable class-methods-use-this */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'antd';

class FormModal extends React.Component {
  onSubmit(formValues) {
    console.log(formValues);
  }

  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="firstName" component={Input} label="Imię" />
        <Field name="lastName" component={this.renderInput} label="Nazwisko" />
        <Field name="email" component={this.renderInput} label="Adres email" />
        <p>Suma:</p>
        <div>{this.props.price}</div>
        <button>Rezerwuj</button>
      </form>
    );
  }
}

FormModal = reduxForm({
  form: 'FormModal',
})(FormModal);

export default FormModal;
