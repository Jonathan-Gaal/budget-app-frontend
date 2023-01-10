import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./TransactionEditForm.css";
const API = process.env.REACT_APP_API_URL;

const TransactionEditForm = () => {
  let { index } = useParams();
  let navigate = useNavigate();

  const [editingtransaction, setEditingTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setEditingTransaction({
      ...editingtransaction,
      [e.target.id]: e.target.value,
    });
  };

  const handleNumChange = (e) => {
    setEditingTransaction({
      ...editingtransaction,
      amount: Number(e.target.value),
    });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setEditingTransaction(res.data))
      .catch((err) => console.error(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, editingtransaction)
      .then((res) => {
        setEditingTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="EditedTransaction">
      <form className="TransactionEditForm" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item: </label>
        <input
          type="text"
          id="item_name"
          value={editingtransaction.item_name}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="amount">
          Amount: <br /> Positive numbers <br /> add to balance, <br />{" "}
          negatives subtract:
          <input
            type="number"
            required
            id="amount"
            value={editingtransaction.amount}
            onChange={handleNumChange}></input>
        </label>

        <label htmlFor="date">Date: </label>

        <input
          type="date"
          id="date"
          value={editingtransaction.date}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="from">From: </label>

        <input
          type="text"
          id="from"
          value={editingtransaction.from}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="category">Category: </label>

        <input
          type="text"
          id="category"
          value={editingtransaction.category}
          required
          onChange={handleTextChange}></input>

        <Link to={`/transactions/${index}`}>
          <button id="editFormBtnBack">Back</button>
        </Link>

        <button type="submit" id="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionEditForm;
