import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
        <p>Suma:</p>
        <div>{this.props.price}</div>
        <button>Rezerwuj</button>
      </form>
    );
  }
}

FormModal = reduxForm({
  form: 'FormModal'
})(FormModal);

export default FormModal;