import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// redux store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.ts";

// css
import "./index.css";

// scss
import "./scss/styles.scss";
// Import all of Bootstrap's JS
import "bootstrap";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
