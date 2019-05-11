import React from 'react';
import { Spin } from 'antd';
import { string, number } from 'prop-types';
import { LoadDiv } from './InfoModalStyles.js';

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
    return <div>{`${this.props.title}+${this.props.id}+${this.props.overview}`}</div>;
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
