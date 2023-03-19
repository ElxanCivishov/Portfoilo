import { ToastContainer } from "react-toastify";
import Router from "./config/Router";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <ToastContainer />
    </div>
  );
}

export default App;
