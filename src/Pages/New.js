import TransactionNew from "../Components/TransactionNew";
import NavBar from "../Components/NavBar";

function New() {
  return (
    <>
      <NavBar />
      <div className="New">
        <h2>New</h2>
        <TransactionNew />
      </div>
    </>
  );
}

export default New;
