import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate]);

  return (
    <div className="TransactionDetails">
      <section id="transactionFullDetails">
        <h3>{transaction.item_name}</h3>
        <h3>From: {transaction.from}</h3>
        <h3>Category: {transaction.category}</h3>
        <h3>Date: {transaction.date}</h3>
        <h3>
          <strong>Amount: $</strong>
          {transaction.amount}
        </h3>
      </section>
    </div>
  );
};

export default TransactionDetails;
