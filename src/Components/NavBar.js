import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function NavBar() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      console.log(response.data);
      setTransactions(response.data);
    });
  }, []);

  const totalAmounts = transactions.map((amount) => amount.amount);
  let total = totalAmounts.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  return (
    <nav>
      <h1>
        <Link to="/transactions">
          Budgeting App, Click here for Transactions
        </Link>
      </h1>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
      <h3> Balance $ {total}</h3>
    </nav>
  );
}

export default NavBar;
