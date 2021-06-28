import React from "react";
import {
  StatsListContainer,
  StatsListItemContainer,
  StatsLabel,
  StatsQuantity,
} from "../StatsList/StatsList.styles";
import statsData from "../../data/statistical-data.json";

console.log(statsData);

function StatisticsTable() {
  return (
    <StatsListContainer>
      {statsData.map(({ id, label, percentage }) => (
        <StatsListItemContainer key={id}>
          <StatsLabel>{label}</StatsLabel>
          <StatsQuantity>{percentage}%</StatsQuantity>
        </StatsListItemContainer>
      ))}
    </StatsListContainer>
  );
}

export default StatisticsTable;
