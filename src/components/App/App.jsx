import React from "react";
import Profile from "../Profile/Profile";
import Section from "../Section/Section";
import Wrapper from "../Wrapper/Wrapper";
import FriendList from "../FriendsList/FriendList";
import Statistics from "../Statistics/Statistics";
import TableTransactions from "../TableTransactions/TableTransactions";

function App() {
  return (
    <>
      <Section text="User profile section" />
      <Wrapper>
        <Profile></Profile>
      </Wrapper>
      <Section text="Statistics section" />
      <Wrapper>
        <Statistics></Statistics>
      </Wrapper>
      <Section text="Friend list section" />
      <Wrapper>
        <FriendList></FriendList>
      </Wrapper>
      <Section text="Transaction history section" />
      <Wrapper>
        <TableTransactions></TableTransactions>
      </Wrapper>
    </>
  );
}

export default App;
