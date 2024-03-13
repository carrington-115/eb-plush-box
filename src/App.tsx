import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Signup, TestPage } from "./components/pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
