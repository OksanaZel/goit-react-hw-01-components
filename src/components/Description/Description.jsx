import React from 'react';
import Paper from '../Paper/Paper';
import {
  UserName,
  UserData,
  Img,
  StatsList,
  StatsListItem,
  StatsLabel,
  StatsQuantity,
} from './Description.styles';
import user from '../../data/user.json';

function Description() {
  return (
    <Paper gap={30}>
      <Img src={user.avatar} alt={user.name} />
      <UserName>{user.name}</UserName>
      <UserData>@{user.tag}</UserData>
      <UserData>{user.location}</UserData>

      <StatsList>
        {Object.keys(user.stats).map(key => (
          <StatsListItem key={user.stats[key]}>
            <StatsLabel>{key}</StatsLabel>
            <StatsQuantity>{user.stats[key]}</StatsQuantity>
          </StatsListItem>
        ))}
      </StatsList>
    </Paper>
  );
}

export default Description;