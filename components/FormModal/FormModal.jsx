/* eslint-disable class-methods-use-this */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, number } from 'prop-types';
import { Button } from 'antd';
import Input from '../Input';
import Summary from '../Summary';

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
        <Summary
          normal={this.props.normal}
          reduced={this.props.reduced}
          senior={this.props.senior}
          price={this.props.price}
        />
        <Button type="primary" block>
          Rezerwuj
        </Button>
      </form>
    );
  }
}

FormModal.propTypes = {
  handleSubmit: func,
  normal: number,
  reduced: number,
  senior: number,
  price: number,
};

const ReservationForm = reduxForm({
  form: 'FormModal',
})(FormModal);

export default ReservationForm;

