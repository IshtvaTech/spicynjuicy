// App.js
import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthLayout from "./components/auth/layout.jsx";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout.jsx";
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import AdminProduct from "./pages/admin-view/product.jsx";
import AdminOrders from "./pages/admin-view/orders.jsx";
import ShoppingLayout from "./components/shopping-view/layout.jsx";
import ShoppingHome from "./pages/shopping-view/home.jsx";
import ShoppingListing from "./pages/shopping-view/listing.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout.jsx";
import ShoppingAccount from "./pages/shopping-view/account.jsx";
import NotFound from "./pages/not-found/index.jsx";
import UnauthPage from "./pages/unAuthPage/index.jsx";
import SubscribePage from "./pages/shopping-view/subscribePage.jsx";
import WheretobuyPage from "./pages/shopping-view/wheretobuyPage.jsx";
import RewardsPage from "./pages/shopping-view/rewards.jsx";
import StripeReturnPage from "./pages/shopping-view/stripeReturn.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

 

  const hideFooterRoutes = [
    "/auth/login",
    "/auth/register",
    "/shop/checkout",
    "/shop/stripe-return",
  ];
  const shouldShowFooter =
    !hideFooterRoutes.includes(location.pathname) &&
    !location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col overflow-hidden bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/shop/home" replace />} />
        
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="subscribepage" element={<SubscribePage />} />
          <Route path="wheretobuy" element={<WheretobuyPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="stripe-return" element={<StripeReturnPage />} />
        </Route>

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;
