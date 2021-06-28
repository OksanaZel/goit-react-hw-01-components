import styled from "@emotion/styled";

export const StatsListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 340px;
`;

export const StatsListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StatsLabel = styled.span`
  text-transform: capitalize;
  color: #797676;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
