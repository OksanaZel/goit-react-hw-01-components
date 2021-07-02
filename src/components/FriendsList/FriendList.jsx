import React from "react";
import PropTypes from "prop-types";
import {
  FriendsListContainer,
  FriendsListItemContainer,
  OnlineStatus,
  Avatar,
  FriendName,
} from "../FriendsList/FriendList.styles";
import { Container } from "../Profile/Profile.styles";

function FriendList({ friends }) {
  return (
    <Container>
      <FriendsListContainer>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsListItemContainer key={id}>
            <OnlineStatus isOnline={isOnline} />
            <Avatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
          </FriendsListItemContainer>
        ))}
      </FriendsListContainer>
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
