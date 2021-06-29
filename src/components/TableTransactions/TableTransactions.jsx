import React from "react";
import PropTypes from "prop-types";
import {
  TransactionHistory,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableData,
} from "./TableTransactions.styles";
// import transactions from "../../data/transactions.json";

function TableTransactions({ items }) {
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
        {items.map(({ id, type, amount, currency }) => (
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

TableTransactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TableTransactions;
