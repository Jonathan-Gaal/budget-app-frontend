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

  const totalDisplayColor = (calculatedTotal) => {
    if (calculatedTotal < 0) {
      return <h2 className="insolvent">Total Balance: $ {calculatedTotal}</h2>;
    }
    if (calculatedTotal > 0 && calculatedTotal < 1000) {
      return <h2 className="solvent">Total Balance: $ {calculatedTotal}</h2>;
    }
  };

  return (
    <div className="Transactions">
      {calculatedTotal < 0 && (
        <h2 style={{ color: "red" }}>{calculatedTotal}</h2>
      )}
      {calculatedTotal > 0 && calculatedTotal < 1000 && (
        <h2 style={{ color: "black" }}>{calculatedTotal}</h2>
      )}
      {calculatedTotal > 1000 && (
        <h2 style={{ color: "green" }}>{calculatedTotal}</h2>
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
