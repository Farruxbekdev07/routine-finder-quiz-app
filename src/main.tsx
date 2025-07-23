// src/main.tsx yoki index.tsx
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import theme from "./theme";
import Loading from "./components/Loading";
import { store, persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
