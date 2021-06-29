import React from "react";
import Profile from "../Profile/Profile";
import Section from "../Section/Section";
import Wrapper from "../Wrapper/Wrapper";
import FriendList from "../FriendsList/FriendList";
import Statistics from "../Statistics/Statistics";
import TableTransactions from "../TableTransactions/TableTransactions";
import user from "../../data/user.json";
import statsData from "../../data/statistical-data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

function App() {
  return (
    <>
      <Section text="User profile section" />
      <Wrapper>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Wrapper>
      <Section text="Statistics section" />
      <Wrapper>
        <Statistics text="Upload stats" stats={statsData} />
      </Wrapper>
      <Section text="Friend list section" />
      <Wrapper>
        <FriendList friends={friends}></FriendList>
      </Wrapper>
      <Section text="Transaction history section" />
      <Wrapper>
        <TableTransactions items={transactions}></TableTransactions>
      </Wrapper>
    </>
  );
}

export default App;
