import Transactions from "../Components/Transactions";
import NavBar from "../Components/NavBar";

function AllTransactions() {
  return (
    <>
      <NavBar />
      <div className="All Transactions">
        <h2>AllTransactions</h2>
        <Transactions />
      </div>
    </>
  );
}

export default AllTransactions;
