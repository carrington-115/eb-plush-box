import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Home,
  About,
  Login,
  Shopping,
  Signup,
  CheckoutLayout,
  Cart,
  Checkout,
  Rate,
} from "./components/pages";
import { Header } from "./components/molecules";
import { ReRouteToTop } from "./components/templates";

function App() {
  return (
    <>
      <Router>
        <ReRouteToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<CheckoutLayout />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/review" element={<Rate />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
