import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import Spinner from 'react-loader-spinner';
import styles from './Loading.styles';

const renderSpinner = () => (
  <Spinner
    visible
    type='Bars'
    color='#00BFFF'
    height={80}
    width={80}
  />
);

function Loading(props) {
  const { isShowModal } = props;
  return (
    <div>
      <Modal
        isOpen={isShowModal}
        style={styles.container}
        ariaHideApp={false}
      >
        {renderSpinner()}
      </Modal>
    </div>
  );
}

Loading.propTypes = {
  isShowModal: PropTypes.bool,
};

Loading.defaultProps = {
  isShowModal: false
};

export default Loading;
