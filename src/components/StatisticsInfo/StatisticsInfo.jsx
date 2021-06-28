import React from "react";
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import { StatisticsInfoTitle } from "../StatisticsInfo/StatisticsInfo.styles";

function StatisticsInfo({ text }) {
  return (
    <Paper gap={30} width={340}>
      <StatisticsInfoTitle>{text}</StatisticsInfoTitle>
    </Paper>
  );
}

StatisticsInfo.propTypes = {
  text: PropTypes.string,
};

export default StatisticsInfo;
