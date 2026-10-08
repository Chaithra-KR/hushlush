import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import MenuPage from "./pages/MenuPage";
import OutletPage from "./pages/OutletPage";
import MorePage from "./pages/MorePage";
import Layout from "./Layout";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<MenuPage />} />
            <Route path="/outlet" element={<OutletPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/more" element={<MorePage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
