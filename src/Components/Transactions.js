import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      console.log(response.data);
      setTransactions(response.data);
    });
  }, []);

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Is This Credit?</th>
              <th>Name of Transaction</th>
              <th>View this Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
