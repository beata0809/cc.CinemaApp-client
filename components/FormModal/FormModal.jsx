/* eslint-disable class-methods-use-this */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, number, object, array } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { fetchReservationForm } from '../../store/actions';
import Input from '../Input';
import Summary from '../Summary';

class FormModal extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formValues) {
    const { pickedDate, pickedHour, selectedSeats, singleMovie } = this.props;
    const reservation = {
      ...formValues,
      hour: pickedHour.label,
      date: `${pickedDate.day}.${pickedDate.month}`,
      selectedSeats,
      title: singleMovie.title,
    };
    console.log(reservation);
    this.props.fetchReservationForm(reservation);
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
        <Button type="primary" block htmlType="submit">
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
  pickedDate: object,
  pickedHour: object,
  singleMovie: object,
  selectedSeats: array,
  fetchReservationForm: func,
};

const mapStateToProps = state => {
  return {
    singleMovie: state.singleMovie,
    pickedDate: state.pickedDate,
    pickedHour: state.pickedHour,
    selectedSeats: state.selectedSeats,
  };
};

const ReservationForm = reduxForm({
  form: 'FormModal',
})(FormModal);

export default connect(
  mapStateToProps,
  { fetchReservationForm },
)(ReservationForm);
