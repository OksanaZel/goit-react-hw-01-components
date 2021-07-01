import React from "react";
import PropTypes from "prop-types";
import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableData,
} from "./TransactionHistory.styles";

function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
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
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
