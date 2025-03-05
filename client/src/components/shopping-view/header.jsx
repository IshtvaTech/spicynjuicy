import {
  HousePlug,
  LogIn,
  LogOut,
  Menu,
  ShoppingCart,
  UserCog,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cartWrapper";
import { fetchCartItems } from "@/store/shop/cart-slice";

function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row text-white">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-lg text-white transition-colors duration-300 hover:text-red-600"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems(user.id));
    }
  }, [dispatch, user]);

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/shop/home");
  }

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white hover:text-white"
          variant="outline"
          size="icon"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
        />
      </Sheet>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="bg-red-600">
              <AvatarFallback className="bg-red-600 text-white font-extrabold">
                {user.userName[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" className="w-56">
            <DropdownMenuLabel>Logged in as {user.userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/shop/account")}>
              <UserCog className="mr-2 h-4 w-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => navigate("/auth/login")}
          className="bg-red-600 hover:bg-red-500 text-white cursor-pointer"
        >
          <LogIn className="mr-2 h-5 w-5" />
          Login
        </Button>
      )}
    </div>
  );
}

const ShoppingHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-yellow-500 shadow-md dark:bg-yellow-700 transition-colors">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Mobile Menu Button (Visible on Small Screens) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out"
          >
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>

        {/* Center: Logo / Branding */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/shop/home"
            className="text-2xl md:text-3xl font-extrabold hover:text-red-700 transition duration-300"
            style={{
              fontFamily: "Baguet Script",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            aria-label="Go to homepage"
          >
            <img
              src="/vite.png"
              alt="Vite Logo"
              className="h-32 w-45 inline-block mr-2"
            />
            <span className="font-bold"></span>
          </Link>
        </div>

        {/* Right: Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <MenuItems />
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
};

export default ShoppingHeader;
