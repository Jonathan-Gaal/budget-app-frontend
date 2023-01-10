import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TransactionDetails.css";
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
        <Link to="/transactions">
          <button id="btnBack">Back</button>
        </Link>
        <Link>
          <button id="btnEdit">Edit</button>
        </Link>
        <Link>
          <button id="btnDelete">Delete</button>
        </Link>
      </section>
    </div>
  );
};

export default TransactionDetails;
