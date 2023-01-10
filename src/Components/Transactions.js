import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

const Index = () => {
  const [transactions, setTransactions] = useState([]);

  const calculatedTotal = transactions.reduce(
    (initialBalance, transaction) => (initialBalance += transaction.amount),
    900
  );

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="Transactions">
      {calculatedTotal < 0 && (
        <h2 className="header" style={{ color: "red" }}>
          Total Balance: $ {calculatedTotal}
        </h2>
      )}
      {calculatedTotal > 0 && calculatedTotal < 1000 && (
        <h2 className="header" style={{ color: "white" }}>
          Total Balance: $ {calculatedTotal}
        </h2>
      )}
      {calculatedTotal > 1000 && (
        <h2 className="header" style={{ color: "green" }}>
          Total Balance: $ {calculatedTotal}
        </h2>
      )}

      {transactions.map((transaction, index) => {
        return (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default Index;
