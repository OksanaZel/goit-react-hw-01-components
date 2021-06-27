import styled from '@emotion/styled';

export const Img = styled.img`
  width: 120px;
  margin-bottom: 12px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const UserData = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  background-color: #fafafa;
  width: 100%;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StatsLabel = styled.span`
  text-transform: capitalize;
  color: #797676;
  font-size: 16px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
