import TransactionEdit from "../Components/TransactionEdit";
import NavBar from "../Components/NavBar";

function Edit() {
  return (
    <>
      <NavBar />
      <div className="New Edit">
        <h2>Edit</h2>
        <TransactionEdit />
      </div>
    </>
  );
}

export default Edit;
