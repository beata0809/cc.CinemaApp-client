import React, { Fragment } from 'react';
import { Card, Spin, Divider } from 'antd';
import { string, number } from 'prop-types';
import { LoadDiv, Title, MoviePhoto, Desc, DescMovie } from './InfoModalStyles.js';

class InfoModal extends React.Component {
  loading = () => {
    return (
      <LoadDiv>
        <Spin tip="Loading..." />
      </LoadDiv>
    );
  };

  // wyswietla wszystkie filmy
  renderModal = () => {
    return (
      <Fragment>
        <MoviePhoto>
          <img src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />
        </MoviePhoto>
        <Title>{`${this.props.title}`}</Title>
        <Desc>Opis filmu</Desc>
        <DescMovie>{`${this.props.overview}`}</DescMovie>
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
};

export default InfoModal;
