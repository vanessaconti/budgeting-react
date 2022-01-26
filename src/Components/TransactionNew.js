import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TransactionNew() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    source: "",
    date: "",
    category: "",
    amount: 0,
    isThisCredit: false,
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isThisCredit: !transaction.isThisCredit });
  };

  const addTransaction = (newTransaction) => {
    axios
      .post(`${URL}/transactions`, newTransaction)
      .then(() => navigate("/transactions"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then(() => navigate("/transactions"));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="source">Name of Transaction</label>
        <input
          id="source"
          value={transaction.source}
          type="text"
          onChange={handleTextChange}
          placeholder="Transaction is for..."
          required
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="text"
          required
          value={transaction.date}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category</label>
        <textarea
          id="category"
          name="category"
          value={transaction.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="0"
        />
        <label htmlFor="isThisCredit">Is This Credit, Check If Yes</label>
        <input
          id="isThisCredit"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={transaction.isThisCredit}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNew;
