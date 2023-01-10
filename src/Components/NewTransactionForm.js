import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewTransaction.css";
const API = process.env.REACT_APP_API_URL;

const NewTransactionForm = () => {
  let navigate = useNavigate();

  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  const handleNumChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      amount: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => navigate("/transactions"))
      .catch((err) => console.error(err));
    setNewTransaction({
      item_name: "",
      amount: 0,
      date: "",
      from: "",
      category: "",
    });
  };

  return (
    <div className="NewTransaction">
      <form className="NewTransactionForm" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item: </label>
        <input
          type="text"
          id="item_name"
          value={newTransaction.item_name}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="amount">
          Amount: <br /> Positive numbers <br /> add to balance, <br />{" "}
          negatives subtract:
          <input
            type="number"
            required
            id="amount"
            value={newTransaction.amount}
            onChange={handleNumChange}></input>
        </label>

        <label htmlFor="date">Date: MM/DD/YYYY: </label>

        <input
          type="text"
          id="date"
          value={newTransaction.date}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="from">From: </label>

        <input
          type="text"
          id="from"
          value={newTransaction.from}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="category">Category: </label>

        <input
          type="text"
          id="category"
          value={newTransaction.category}
          required
          onChange={handleTextChange}></input>

        <button type="submit" id="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
