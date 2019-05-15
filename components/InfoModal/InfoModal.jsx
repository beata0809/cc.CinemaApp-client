import React, { Fragment } from 'react';
import { Spin, Empty, Select } from 'antd';
import { string, number, object, func } from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { catchHour } from '../../store/actions';
import {
  LoadDiv,
  Title,
  MoviePhoto,
  Desc,
  PickerDate,
  DescMovie,
  Hour,
  FirstPart,
  DescPart,
  SecondPart,
} from './InfoModalStyles.js';

class InfoModal extends React.Component {
  loading = () => {
    return (
      <LoadDiv>
        <Spin tip="Loading..." />
      </LoadDiv>
    );
  };

  handleChange = value => {
    this.props.catchHour(value);
  };

  renderModal = () => {
    const { Option } = Select;

    return (
      <Fragment>
        <FirstPart>
          <MoviePhoto>
            <img src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />
          </MoviePhoto>
          <DescPart>
            <Title>{`${this.props.title}`}</Title>
            <Desc>Opis filmu</Desc>
            <DescMovie>
              {this.props.overview ? (
                `${this.props.overview}`
              ) : (
                <Empty description="W tej chwili brak opisu" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </DescMovie>
          </DescPart>
        </FirstPart>
        <SecondPart>
          <p>Musisz wybrać datę ze strony głównej, aby kontynuować</p>
          <PickerDate
            value={
              this.props.pickedDate.month
                ? moment(`2019-${this.props.pickedDate.month}-${this.props.pickedDate.day}`)
                : null
            }
          />
          <Hour>{`Wybrana godzina: ${this.props.pickedHour.label ? this.props.pickedHour.label : ' '}`}</Hour>
          <div>
            <Select labelInValue defaultValue={{ key: '12' }} style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="12">12:00</Option>
              <Option value="14">14:00</Option>
              <Option value="16">16:00</Option>
              <Option value="18">18:00</Option>
              <Option value="20">20:00</Option>
            </Select>
          </div>
        </SecondPart>
      </Fragment>
    );
  };

  render() {
    return this.props.id ? this.renderModal(this.props) : this.loading();
  }
}

InfoModal.propTypes = {
  id: number,
  title: string,
  poster: string,
  overview: string,
  pickedDate: object,
  pickedHour: object,
  catchHour: func,
};

const mapStateToProps = state => {
  return { pickedDate: state.pickedDate, pickedHour: state.pickedHour };
};
export default connect(
  mapStateToProps,
  { catchHour },
)(InfoModal);
