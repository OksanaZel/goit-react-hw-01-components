import React from "react";
import PropTypes from "prop-types";
import { StatisticsTitle } from "../Statistics/Statistics.styles";
import {
  Container,
  StatsListContainer,
  StatsListItemContainer,
  StatsLabel,
  StatsQuantity,
} from "../Profile/Profile.styles";

function Statistics({ text, stats }) {
  return (
    <Container>
      <StatisticsTitle>{text}</StatisticsTitle>
      <StatsListContainer>
        {stats.map(({ id, label, percentage }) => (
          <StatsListItemContainer key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsQuantity>{percentage}%</StatsQuantity>
          </StatsListItemContainer>
        ))}
      </StatsListContainer>
    </Container>
  );
}

Statistics.propTypes = {
  text: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
