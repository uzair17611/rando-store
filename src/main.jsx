import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.js";
import "./index.css";
import ErrorBoundaryDialog from "./shared/errorboundryDialog/ErrorBoundaryDialog.jsx";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorBoundaryDialog />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
