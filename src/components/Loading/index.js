import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export default function Loading({ type, color, height, width }) {
  return <Loader type={type} color={color} height={height} width={width} />;
}

Loading.defaultProps = {
  type: 'Oval',
  color: '#fff',
  height: 80,
  width: 80,
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
