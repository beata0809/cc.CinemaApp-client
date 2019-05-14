import React, { Fragment } from 'react';
import { Spin, Empty } from 'antd';
import { string, number, object } from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { LoadDiv, Title, MoviePhoto, Desc, PickerDate, DescMovie, Hour, Info } from './InfoModalStyles.js';

class InfoModal extends React.Component {
  loading = () => {
    return (
      <LoadDiv>
        <Spin tip="Loading..." />
      </LoadDiv>
    );
  };

  renderModal = () => {
    return (
      <Fragment>
        <MoviePhoto>
          <img src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />
        </MoviePhoto>
        <Title>{`${this.props.title}`}</Title>
        <Desc>Opis filmu</Desc>
        <DescMovie>
          {this.props.overview ? (
            `${this.props.overview}`
          ) : (
            <Empty description="W tej chwili brak opisu" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </DescMovie>
        <div>
          <Info>Musisz wybrać datę ze strony głównej, aby kontynuować</Info>
          <PickerDate
            onChange={this.onChange}
            value={
              this.props.pickedDate.month
                ? moment(`2019-${this.props.pickedDate.month}-${this.props.pickedDate.day}`)
                : null
            }
          />
        </div>
        <Hour>Wybrana godzina: 20:00</Hour>
      </Fragment>
    );
  };

  render() {
    // console.log(this.props.id);
    return this.props.id ? this.renderModal(this.props) : this.loading();
  }
}

InfoModal.propTypes = {
  id: number,
  title: string,
  poster: string,
  overview: string,
  pickedDate: object,
};

const mapStateToProps = state => {
  return { pickedDate: state.pickedDate };
};
export default connect(mapStateToProps)(InfoModal);
