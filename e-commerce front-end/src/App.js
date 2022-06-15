import logo from "./logo.svg";
import "./App.css";
import { ProPage } from "./components/ProductPage";
import { FilSort } from "./components/FilterSort";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FilSort />
      <ProPage />

    </div>
  );
}

export default App;
