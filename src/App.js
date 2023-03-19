import { Provider } from "react-redux";
import Router from "./config/Router";
import { store } from "./redux";

import { CssBaseline } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <ToastContainer />
    </Provider>
  );
}

export default App;
