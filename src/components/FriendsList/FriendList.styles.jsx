import styled from "@emotion/styled";

export const FriendsListContainer = styled.ul`
  width: 340px;
`;

export const FriendsListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 4px;
`;

export const OnlineStatus = styled.span`
  background-color: ${props => (props.isOnline ? "lightgreen" : "red")};
  border: 3px solid #0f1c3f;
  border-radius: 50%;
  box-shadow: 6px 6px 0 0 rgba(15, 28, 63, 0.125);
  height: 30px;
  width: 30px;
`;

export const Avatar = styled.img`
  width: 80px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
