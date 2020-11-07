import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transactions = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransactions(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transactions;
