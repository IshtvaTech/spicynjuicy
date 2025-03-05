import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "sonner";
import App from "./App.jsx";
import "./index.css";

// Ensure there's an element with id="root" in index.html
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toaster position="top-center" />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error(
    "Root element not found. Make sure <div id='root'></div> exists in index.html."
  );
}
