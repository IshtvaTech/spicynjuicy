import React from "react";
import { assets } from "../../assets/assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";

const ShoppingAccount = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[400px] w-full overflow-hidden obje ">
        <img className="h-full w-full  object-center" src={assets.accImg} />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col  rounded-lg border bg-yellow-200 p-6 shadow-sm">
          <Tabs defaultValue="orders" className="text-red-600">
            <TabsList>
              <TabsTrigger value="orders" className="cursor-pointer">
                Orders
              </TabsTrigger>
              <TabsTrigger value="address" className="cursor-pointer">
                Address
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <ShoppingOrders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAccount;
