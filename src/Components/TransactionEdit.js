import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function TransactionEdit() {
  // base url
  const URL = process.env.REACT_APP_API_URL;
  // the index from React Router
  const { index } = useParams();
  // the navigate function from React Router
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    source: "",
    date: "",
    category: "",
    amount: 0,
    isThisCredit: false,
  });

  // make an API call to our back end
  // using the index from Router
  // call setLog with the Log the call returns
  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => setTransaction(response.data));
  }, []);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isThisCredit: !transaction.isThisCredit });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/${index}`));
  };

  return (
    <div className="Edit">
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
        <label htmlFor="date">Date:</label>
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
          value={transaction.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount of Transaction</label>
        <input
          id="amount"
          name="amount"
          type="number"
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
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TransactionEdit;
