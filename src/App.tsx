import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Home,
  About,
  Login,
  Shopping,
  Signup,
  TestPage,
  CheckoutLayout,
  Cart,
  Checkout,
  Rate,
} from "./components/pages";
import { Header } from "./components/molecules";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<TestPage />} />
          <Route element={<CheckoutLayout />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/rate" element={<Rate />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
