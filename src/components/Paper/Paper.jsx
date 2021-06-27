import React from 'react';
import PropTypes from 'prop-types';
import { PaperContainer } from './Paper.styles';

function Paper({ children, gap, width }) {
  return (
    <PaperContainer gap={gap} width={width}>
      {children}
    </PaperContainer>
  );
}

Paper.defaultProps = {
  gap: 0,
  width: 320,
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
  width: PropTypes.number,
};

export default Paper;
