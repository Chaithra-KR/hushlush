import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import MenuPage from "./pages/MenuPage";
import OutletPage from "./pages/OutletPage";
import MorePage from "./pages/MorePage";
import Layout from "./Layout";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import { TableProvider } from "./context/TableContext";
import PublicOnlyRoute from "./components/auth/PublicOnlyRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <TableProvider>
            <Routes>
              {/* Public routes */}
              <Route element={<PublicOnlyRoute />}>
                <Route path="/login" element={<LoginPage />} />
              </Route>

              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                  <Route path="/" element={<MenuPage />} />
                  <Route path="/outlet" element={<OutletPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/more" element={<MorePage />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </TableProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
