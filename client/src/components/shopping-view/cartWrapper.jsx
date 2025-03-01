import React from 'react'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import UserCartItemContent from './cartItemContent'
import { useNavigate } from 'react-router-dom'

const UserCartWrapper = ({ cartItems,setOpenCartSheet }) => {

  const navigate=useNavigate()

  const totalCartAmount =
  cartItems && cartItems.length > 0
    ? cartItems.reduce(
        (sum, currentItem) =>
          sum + (currentItem?.salePrice > 0 ? currentItem?.salePrice : currentItem?.price) * currentItem?.quantity,
        0 
      )
    : 0;



  return (
    <SheetContent className="sm:max-w-md p-6 flex flex-col h-full">
      <SheetHeader>
        <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
      </SheetHeader>

     
      <div className="mt-6 space-y-4 flex-1 overflow-auto">
        {cartItems && cartItems.length > 0 ? (
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <UserCartItemContent key={index} cartItems={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

    
      <div className="mt-auto border-t pt-4 bg-white">
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{totalCartAmount}</span>
        </div>

   
        <Button onClick={()=>{
          navigate('/shop/checkout') ;
          setOpenCartSheet(false);
         } } className="bg-yellow-700 hover:bg-yellow-600 w-full mt-5 cursor-pointer">
          Checkout
        </Button>
      </div>
    </SheetContent>
  )
}

export default UserCartWrapper
