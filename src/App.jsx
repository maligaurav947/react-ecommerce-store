import { HashRouter } from "react-router-dom";
import "./App.css";
import Router from "./components/Router/Router";

function App() {
  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
