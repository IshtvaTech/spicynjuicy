import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const ShoppingProductTile = ({ product, handleGetProductDetails, handleAddtoCart }) => {
  return (
    <div onClick={() => handleGetProductDetails(product?._id)}>
      <Card className="w-full max-w-sm mx-auto">
        <div>
          <div className='relative'>
            <img
              src={product?.image}
              alt={product?.title}
              className='w-full h-[300px] object-contain rounded-t-lg'
            />
            {product?.salePrice > 0 ? (
              <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>
            ) : null}
          </div>
          <CardContent className="p-4">
            <h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-muted-foreground'>{product?.category}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              {product?.salePrice > 0 ? (
                <>
                  <span className="text-xl font-bold text-red-600">
                    ₹{product?.salePrice}
                  </span>
                  <span className="text-md text-gray-500 line-through">
                    ₹{product?.price}
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-gray-800">
                  ₹{product?.price}
                </span>
              )}
            </div>
          </CardContent>
        </div>
        <CardFooter>
        
          <Button 
            onClick={(e) => {
              e.stopPropagation(); 
              handleAddtoCart(product?._id);
            }} 
            className="w-full bg-yellow-800 hover:bg-yellow-700 cursor-pointer"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ShoppingProductTile
