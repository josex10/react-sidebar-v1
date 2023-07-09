import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import { Home, Reports, Products, Team, Support, Messages } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/reports" Component={Reports} />
          <Route path="/products" Component={Products} />
          <Route path="/team" Component={Team} />
          <Route path="/support" Component={Support} />
          <Route path="/messages" Component={Messages} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
