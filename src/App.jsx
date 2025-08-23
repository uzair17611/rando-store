import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  );
}

export default App;
