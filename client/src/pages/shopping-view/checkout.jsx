import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Address from "@/components/shopping-view/address";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemContent from "@/components/shopping-view/cartItemContent";
import { Button } from "@/components/ui/button";
import { createNewOrder } from "@/store/shop/order-slice";

const ShoppingCheckout = () => {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const { checkoutURL } = useSelector((state) => state.shopOrder);
  const dispatch = useDispatch();

  const totalCartAmount =
    cartItems?.items?.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  function handleInitiateStripePayment() {
    if (!currentSelectedAddress) {
      alert("Please select an address before placing an order!");
      return;
    }

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price: singleCartItem?.salePrice || singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id || "",
        address: currentSelectedAddress?.address || "N/A",
        city: currentSelectedAddress?.city || "N/A",
        pincode: currentSelectedAddress?.pincode || "N/A",
        phone: currentSelectedAddress?.phone || "N/A",
        notes: currentSelectedAddress?.notes || "",
      },
      orderStatus: "pending",
      paymentMethod: "stripe",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      //cartId: "",
    };

    dispatch(createNewOrder(orderData)).then((data) => {
      console.log(data, "mit");

      if (data?.payload?.success) {
        setIsPaymentStart(true);
      } else {
        setIsPaymentStart(false);
      }
    });
  }

  if (checkoutURL) {
    window.location.href = checkoutURL;
  }

  return (
    <div className="flex flex-col bg-[#FBEC5D]">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          className="h-full w-full object-center"
          src={assets.accImg}
          alt="checkout"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address setCurrentSelectedAddress={setCurrentSelectedAddress} />
        <div className="flex flex-col gap-4">
          {cartItems?.items?.length > 0 &&
            cartItems.items.map((item) => (
              <UserCartItemContent key={item?.productId} cartItems={item} />
            ))}

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹{totalCartAmount}</span>
            </div>
          </div>

          <div className="mt-4 w-full">
            <Button
              className="w-full bg-yellow-700 hover:bg-yellow-600 cursor-pointer"
              onClick={handleInitiateStripePayment}
            >
              Place Your Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCheckout;
