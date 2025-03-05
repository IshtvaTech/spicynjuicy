import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// Layouts
import AuthLayout from "./components/auth/layout.jsx";
import AdminLayout from "./components/admin-view/layout.jsx";
import ShoppingLayout from "./components/shopping-view/layout.jsx";

// Auth Pages
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

// Admin Pages
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import AdminProduct from "./pages/admin-view/product.jsx";
import AdminOrders from "./pages/admin-view/orders.jsx";

// Shopping Pages
import ShoppingHome from "./pages/shopping-view/home.jsx";
import ShoppingListing from "./pages/shopping-view/listing.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout.jsx";
import ShoppingAccount from "./pages/shopping-view/account.jsx";
import SubscribePage from "./pages/shopping-view/subscribePage.jsx";
import WheretobuyPage from "./pages/shopping-view/wheretobuyPage.jsx";
import RewardsPage from "./pages/shopping-view/rewards.jsx";
import StripeReturnPage from "./pages/shopping-view/stripeReturn.jsx";

// Miscellaneous Pages
import NotFound from "./pages/not-found/index.jsx";
import UnauthPage from "./pages/unAuthPage/index.jsx";
import Footer from "./components/footer.jsx";

const HIDDEN_FOOTER_ROUTES = new Set([
  "/auth/login",
  "/auth/register",
  "/shop/checkout",
  "/shop/stripe-return",
]);

const App = () => {
  const location = useLocation();

  // Hide Footer for certain routes
  const shouldHideFooter =
    HIDDEN_FOOTER_ROUTES.has(location.pathname) ||
    location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <Routes>
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/shop/home" replace />} />

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* Shopping Routes */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="subscribepage" element={<SubscribePage />} />
          <Route path="wheretobuy" element={<WheretobuyPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="stripe-return" element={<StripeReturnPage />} />
        </Route>

        {/* Miscellaneous Pages */}
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally Render Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default App;
