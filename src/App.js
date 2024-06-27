import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/dashboard/Products";
import Sales from "./pages/dashboard/Sales";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/sales" element={<Sales />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;