import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddItems from "./pages/AddItems";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/add" element={<AddItems />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
