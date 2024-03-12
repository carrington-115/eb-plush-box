import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Login, Signup } from "./components/pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
