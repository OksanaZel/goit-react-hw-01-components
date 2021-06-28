import React from "react";
import PropTypes from "prop-types";
import { WrapperContainer } from "./Wrapper.styles";

function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
