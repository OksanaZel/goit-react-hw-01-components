import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fafafa;
  padding: 32px;
  width: 400px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(167, 143, 143, 0.25);
`;

export const Description = styled.div`
  background-color: #fff;
  width: 340px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

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

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

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
