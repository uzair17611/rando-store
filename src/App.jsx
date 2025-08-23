import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { CircularProgress, Box } from "@mui/material";

const Home = lazy(() => import("./pages/Home"));
const Items = lazy(() => import("./pages/Items"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
