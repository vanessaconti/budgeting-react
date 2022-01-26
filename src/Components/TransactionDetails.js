import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  // - make GET request to http://localhost:3000/transactions/:index
  // - use `setTransaction` to change our current transaction
  //   to the data we get back
  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => setTransaction(response.data));
  }, []);

  const handleDelete = () => {
    // make a delete request to /transactions/:index
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => navigate("/transactions"));
    // redirect them to back to /transactions
  };

  return (
    <article>
      <h2>{`${transaction.date} - By ${transaction.source}`}</h2>
      <h5>{transaction.category}</h5>
      <p>Amount: {transaction.amount}</p>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;
