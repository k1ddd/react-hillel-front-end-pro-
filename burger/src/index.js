import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { Header } from "./components/";

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
