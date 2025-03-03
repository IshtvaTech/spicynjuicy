import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../store/shop/cart-slice";
import { useNavigate } from "react-router-dom";

const StripeReturnPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => {
    if (user) {
      dispatch(resetCart(user.id)); 
    }
  }, [dispatch, user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-200">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-600">
          Payment Successful! 🎉
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default StripeReturnPage;
