import React from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "@radix-ui/react-select";


const ShoppingOrderDetailsView = () => {
  return (
    <DialogContent className=" w-[500px] sm:max-w-[400] inset-10 inset-x-140  ">
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="flex mt-5 items-center justify-between">
          <p className="font-medium">Order Id</p>
          <Label>123456</Label>
        </div>

        <div className="flex  items-center justify-between">
          <p className="font-medium">Order Date</p>
          <Label>28/02/2025</Label>
        </div>

        <div className="flex   items-center justify-between">
          <p className="font-medium">Order Price</p>
          <Label>₹400</Label>
        </div>

        <div className="flex  items-center justify-between">
          <p className="font-medium">Order Status</p>
          <Label>In Process</Label>
        </div>
      </div>
      <Separator />
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="font-medium">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span>Product One</span>
              <span>₹400</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="font-medium">Shipping Info</div>
          <div className="grid gap-0.5 text-muted-foreground">
            <span>Mit Desai</span>
            <span>Address</span>
            <span>City</span>
            <span>PinCode</span>
            <span>Notes</span>
          </div>
        </div>
      </div>

     
    </div>
  </DialogContent>
  )
}

export default ShoppingOrderDetailsView
