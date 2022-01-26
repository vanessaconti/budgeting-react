import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr className="Transaction">
      <td>
        {transaction.isThisCredit ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{transaction.source}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.date}</Link>
      </td>
    </tr>
  );
}

export default Transaction;
