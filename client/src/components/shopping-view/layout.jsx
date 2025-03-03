import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
  const location = useLocation();


  const hideHeaderRoutes = ["/shop/stripe-return"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {shouldShowHeader && <ShoppingHeader />}

      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
