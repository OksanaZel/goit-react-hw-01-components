import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Description,
  Img,
  UserName,
  UserData,
  StatsListContainer,
  StatsListItemContainer,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styles";

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <Container>
      <Description>
        <Img src={avatar} alt={name} />
        <UserName>{name}</UserName>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </Description>

      <StatsListContainer>
        {Object.keys(stats).map(key => (
          <StatsListItemContainer key={stats[key]}>
            <StatsLabel>{key}</StatsLabel>
            <StatsQuantity>{stats[key]}</StatsQuantity>
          </StatsListItemContainer>
        ))}
      </StatsListContainer>
    </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    key: PropTypes.string,
  }),
};

export default Profile;
