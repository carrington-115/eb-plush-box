import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Signup, TestPage } from "./components/pages";
import { Header } from "./components/molecules";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
