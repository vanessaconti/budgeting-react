import TransactionDetails from "../Components/TransactionDetails";
import NavBar from "../Components/NavBar";

function Show() {
  return (
    <>
      <NavBar />
      <div className="Show">
        <h2>Show</h2>
        <TransactionDetails />
      </div>
    </>
  );
}

export default Show;
