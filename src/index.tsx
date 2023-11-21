import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";


import App from "./App";
// import NoInternetConnection from "./component/NoInternetConnection";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* The below method to check status of network by using customhook */}
    <App />

    {/* The belowe method to check status of the network by creating the file */}

    {/* <NoInternetConnection>
      <App />
    </NoInternetConnection> */}
  </React.StrictMode>
);
