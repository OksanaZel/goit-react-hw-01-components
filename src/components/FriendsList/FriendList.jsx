import React from "react";
// import Paper from "../Paper/Paper";
import {
  FriendsListContainer,
  FriendsListItemContainer,
  OnlineStatus,
  Avatar,
  FriendName,
} from "../FriendsList/FriendList.styles";
import { Container } from "../Profile/Profile.styles";
import friends from "../../data/friends.json";

function FriendList() {
  return (
    <Container>
      <FriendsListContainer>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsListItemContainer key={id}>
            <OnlineStatus
              bcolor={isOnline ? "lightgreen" : "red"}
            ></OnlineStatus>
            <Avatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
          </FriendsListItemContainer>
        ))}
      </FriendsListContainer>
    </Container>
  );
}

export default FriendList;
