import React from 'react';
import Profile from '../Profile/Profile';
import Section from '../Section/Section';
import Wrapper from '../Wrapper/Wrapper';
import Statistics from '../Statistics/Statistics';
// import Description from "../Description/Description";
import './App.css';

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
      <Wrapper></Wrapper>
    </>
  );
}

export default App;
