'use client'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import CartItemCard from 'src/app/cart/CartItemCard'
import { useAppSelector } from 'src/redux/hooks'




const CartItems =
React.memo(
() => {
  
  const { items } = useAppSelector(s => s.cart)
  
  return <div className="flex flex-col gap-4">
    
    <Link href="/goods">
      <Button
        type='primary'
      >
        View Goods
      </Button>
    </Link>
    
    <div className="flex flex-row flex-wrap gap-4">
      {items.map(it => <CartItemCard cartItem={it}/>)}
    </div>
  
  </div>
})
export default CartItems