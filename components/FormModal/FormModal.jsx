/* eslint-disable class-methods-use-this */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'antd';
import InputItem from '../InputItem'

class FormModal extends React.Component {
  onSubmit(formValues) {
    console.log(formValues);
  }

  renderInput({ label }) {
    return (
      <div className="field">
        <InputItem text={label} />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="firstName" component={this.renderInput} label="Imię" />
        <Field name="lastName" component={this.renderInput} label="Nazwisko" />
        <Field name="email" component={this.renderInput} label="Adres email" />
        <Button type="primary" block >Rezerwuj</Button>
      </form>
    );
  }
}

FormModal = reduxForm({
  form: 'FormModal',
})(FormModal);

export default FormModal;
