import React from "react";
import Description from "../Description/Description";
import StatsList from "../StatsList/StatsList";
import { Container } from "./Profile.styles";

function Profile() {
  return (
    <Container>
      <Description></Description>
      <StatsList></StatsList>
    </Container>
  );
}

export default Profile;
