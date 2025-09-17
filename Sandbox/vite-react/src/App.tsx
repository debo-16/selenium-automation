// App.tsx
import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom"; // ✅ Correct import
import RestaurantDetails from "./components/RestaurantDetails";
import { CartProvider } from "./components/CartContext"; // ✅ Make sure this doesn't wrap with BrowserRouter
import CartPage from "./components/CartPage";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* ✅ Just a context provider */}
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
