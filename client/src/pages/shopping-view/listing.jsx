import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ProductDetailsDialog from '@/components/shopping-view/productDetails'
import ShoppingProductTile from '@/components/shopping-view/productTile'
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice'
import { fetchAllFilteredProducts, fetchProductDetails } from '@/store/shop/product-slice'

const ShoppingListing = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { productList, productDetails } = useSelector((state) => state.shopProducts)
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false)

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId))
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(addToCart({ userId: user?.id, productId: getCurrentProductId, quantity: 1 }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCartItems(user?.id))
          toast.success("Product added to cart!", { position: "top-right", autoClose: 3000 })
        } else {
          toast.error("Failed to add product to cart", { position: "top-right", autoClose: 3000 })
        }
      })
  }

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: "" }))
  }, [dispatch])

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true)
  }, [productDetails])

  return (
    <div>
      <ToastContainer /> 
      <div className="p-4 md:p-6 bg-[#FBEC5D] min-h-screen">
       
        <div className="mb-6">
          <h2 className="text-5xl mb-15 underline font-semibold text-red-600 text-center">
            All Products
          </h2>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productList && productList.length > 0 ? (
            productList.map((productItem) => (
              <ShoppingProductTile
                handleGetProductDetails={handleGetProductDetails}
                key={productItem.id}
                product={productItem}
                handleAddtoCart={handleAddtoCart}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available.
            </p>
          )}
        </div>
      </div>

      <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails} />
    </div>
  )
}

export default ShoppingListing
