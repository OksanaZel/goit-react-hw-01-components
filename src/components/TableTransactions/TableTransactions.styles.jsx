import styled from "@emotion/styled";

export const TransactionHistory = styled.table`
  width: 800px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const TableHead = styled.thead`
  background-color: blue;
  color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: lightblue;
  }
`;

export const TableCell = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  text-transform: capitalize;
  padding-top: 15px;
  padding-bottom: 15px;
`;
