import React from 'react';
import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';
import StatisticsTable from '../StatisticsTable/StatisticsTable';
import { Container } from '../Profile/Profile.styles';

function Statistics() {
  return (
    <Container>
      <StatisticsInfo text="Upload stats"></StatisticsInfo>
      <StatisticsTable></StatisticsTable>
    </Container>
  );
}

export default Statistics;
