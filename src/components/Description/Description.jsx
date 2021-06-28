import React from 'react';
import Paper from '../Paper/Paper';
import { UserName, UserData, Img } from './Description.styles';
import user from '../../data/user.json';

function Description() {
  return (
    <Paper gap={30} width={340}>
      <Img src={user.avatar} alt={user.name} />
      <UserName>{user.name}</UserName>
      <UserData>@{user.tag}</UserData>
      <UserData>{user.location}</UserData>
    </Paper>
  );
}

export default Description;
