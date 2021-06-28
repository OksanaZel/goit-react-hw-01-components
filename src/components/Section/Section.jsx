import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "./Section.styles";

function Section({ text }) {
  return <SectionTitle>{text}</SectionTitle>;
}

Section.propTypes = {
  text: PropTypes.string,
};

export default Section;
