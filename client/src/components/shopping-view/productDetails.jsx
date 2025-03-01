import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-select";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast } from 'react-toastify'
import { setProductDetails } from "@/store/shop/product-slice";


const ProductDetailsDialog = ({ open, setOpen, productDetails }) => {
  const dispatch=useDispatch()
  const { user } = useSelector(state => state.auth)



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
  
    function handleDialogClose(){
      setOpen(false)
      dispatch(setProductDetails())
    }


  return (
    <div>
      <Dialog open={open} onOpenChange={handleDialogClose}>
        <DialogContent className="grid inset-60 inset-y-2/18  grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={productDetails?.image}
              alt={productDetails?.title}
              width={600}
              height={600}
              className="aspect-square w-full object-contain"
            />
          </div>
          <div className="">
            <div>
              <h1 className="text-3xl font-extrabold">
                {productDetails?.title}
              </h1>
              <p className="text-muted-foreground text-2xl mb-5">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className={`text-3xl font-bold text-primary ${
                  productDetails?.salePrice > 0 ? "line-through" : ""
                }`}
              >
                ₹{productDetails?.price}
              </p>
              {productDetails?.salePrice > 0 ? (
                <p className="text-2xl font-bold text-muted-foreground">
                  ₹{productDetails?.salePrice}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                  </div>
                  <span className="text-muted-foreground">(4.5)</span>
            </div>

            <div className="mt-5 mb-5">
              <Button onClick={()=>handleAddtoCart(productDetails?._id)} className="w-full bg-yellow-700 hover:bg-yellow-600 cursor-pointer">
                Add to Cart
              </Button>
            </div>

            <Separator />
            <div className="max-h-[300px] overflow-auto">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 >Mit Desai</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <StarIcon className="w-5 h-5 fill-primary"/>
                  </div>
                  <p className="text-muted-foreground">This is an awesome product</p>
                </div>

                </div>
                
              </div>
              <div className="mt-6 flex gap-2">
                <Input placeholder="Write a review..."/>
                <Button className=" bg-yellow-700 hover:bg-yellow-600 cursor-pointer">Submit</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetailsDialog;
