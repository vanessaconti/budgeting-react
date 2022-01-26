import { Routes, Route } from "react-router-dom";

//import NavBar from "./Components/NavBar";

import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import AllTransactions from "./Pages/AllTransactions";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<AllTransactions />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
