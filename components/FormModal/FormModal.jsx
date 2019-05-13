import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { number } from 'prop-types';
import Summary from '../Summary';


class FormModal extends React.Component {
  renderInput({ input, label }){
    return (
      <div className="field" >
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="firstName" component={this.renderInput} label="Imię" />
        <Field name="lastName" component={this.renderInput} label="Nazwisko" />
        <Field name="email" component={this.renderInput} label="Adres email" />
        <Summary
          normal={this.props.normal}
          reduced={this.props.reduced}
          senior={this.props.senior}
          price={this.props.price}
        />
        <button>Rezerwuj</button>
      </form>
    );
  }
}

FormModal = reduxForm({
  form: 'FormModal'
})(FormModal);

FormModal.propTypes = {
  normal: number,
  reduced: number,
  senior: number,
  price: number,
};

export default FormModal;
