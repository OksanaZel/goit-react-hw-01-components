import React from "react";
import PropTypes from "prop-types";
import { PaperContainer } from "./Paper.styles";

function Paper({ children, gap, width, text }) {
  return (
    <PaperContainer gap={gap} width={width} text={text}>
      {children}
    </PaperContainer>
  );
}

Paper.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number,
  width: PropTypes.number,
  text: PropTypes.string,
};

export default Paper;
