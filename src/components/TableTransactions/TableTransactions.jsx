import React from "react";
import {
  TransactionHistory,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableData,
} from "./TableTransactions.styles";
import transactions from "../../data/transactions.json";

function TableTransactions() {
  return (
    <TransactionHistory>
      <TableHead>
        <TableRow>
          <TableCell>{"Type"}</TableCell>
          <TableCell>{"Amount"}</TableCell>
          <TableCell>{"Currency"}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistory>
  );
}

export default TableTransactions;
