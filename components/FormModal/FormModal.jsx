/* eslint-disable class-methods-use-this */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';
import { Button } from 'antd';
import Input from '../Input';

class FormModal extends React.Component {
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="firstName" component={Input} label="Imię" />
        <Field name="lastName" component={Input} label="Nazwisko" />
        <Field name="email" component={Input} label="Adres email" />
        <Button type="primary" block>
          Rezerwuj
        </Button>
      </form>
    );
  }
}

FormModal.propTypes = {
  handleSubmit: func,
};

const ReservationForm = reduxForm({
  form: 'FormModal',
})(FormModal);

export default ReservationForm;
