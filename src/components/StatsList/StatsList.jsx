import React from "react";
import { StatsListContainer } from "./StatsList.styles";
import user from "../../data/user.json";
import {
  StatsListItemContainer,
  StatsLabel,
  StatsQuantity,
} from "../StatsList/StatsList.styles";

function StatsList() {
  return (
    <StatsListContainer>
      {Object.keys(user.stats).map(key => (
        <StatsListItemContainer key={user.stats[key]}>
          <StatsLabel>{key}</StatsLabel>
          <StatsQuantity>{user.stats[key]}</StatsQuantity>
        </StatsListItemContainer>
      ))}
    </StatsListContainer>
  );
}

export default StatsList;
