import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { toast, ToastContainer } from 'react-toastify'

const UserCartItemContent = ({ cartItems }) => {

  const{user}=useSelector(state=>state.auth)

  const dispatch=useDispatch()

  function handleCartItemDelete(getCartItem){
    dispatch(deleteCartItem({userId:user?.id,productId:getCartItem?.productId})).then(data=>{
      if(data?.payload?.success){
        toast.success("Cart item is deleted successfully", { position: "top-center", autoClose: 2000 })

      }
    })
  }

  function handleUpdateQuantity(getCartItem,typeOfAction){
    dispatch(updateCartQuantity({
      userId:user?.id,productId:getCartItem?.productId,quantity: 
      typeOfAction === 'plus'? 
      getCartItem?.quantity + 1 : getCartItem?.quantity - 1
    })).then(data=>{
      if(data?.payload?.success){
        toast.success("Cart item is updated successfully", { position: "top-center", autoClose: 2000 })

      }
    })

  }
  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItems?.image}
        alt={cartItems?.title}
        className="w-20 h-20 rounded object-contain"
      />
      <div className="flex-1">
        <h3 className="font-bold">{cartItems?.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            disabled={cartItems?.quantity === 1}
            onClick={()=>handleUpdateQuantity(cartItems,'minus')}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span>{cartItems?.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={()=>handleUpdateQuantity(cartItems,'plus')}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          ₹
          {(
            (cartItems?.salePrice > 0
              ? cartItems?.salePrice
              : cartItems?.price) * cartItems?.quantity
          ).toFixed(2)}
        </p>
        <Trash onClick={()=>handleCartItemDelete(cartItems)} className="cursor-pointer mt-1" size={20} />
      </div>
    </div>
  );
};

export default UserCartItemContent;
