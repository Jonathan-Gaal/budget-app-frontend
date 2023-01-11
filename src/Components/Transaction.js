import { Link } from "react-router-dom";
import { dateConvert } from "../helpers";
import "./Transaction.css";
const Transaction = ({ transaction, index }) => {
  return (
    <div className="transaction">
      <Link to={`/transactions/${index}`}>
        <section
          id="transactionDetails"
          style={{ ":hover": { color: "blue" } }}>
          <h3>{transaction.item_name}</h3>

          <h3>Date: {dateConvert(`${transaction.date}`)}</h3>
          <h3>
            <strong>Amount: $</strong>
            {transaction.amount}
          </h3>
        </section>
      </Link>
    </div>
  );
};

export default Transaction;
