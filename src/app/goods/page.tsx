'use client'
import React from 'react'
import CartItems from 'src/app/cart/CartItems'
import Goods from 'src/app/goods/Goods'
import GoodsFilter from 'src/app/goods/GoodsFilter'
import PageFrame from 'src/ui/components/PageFrame'



const GoodsPage =
React.memo(
() => {
  
  return <PageFrame>
    <div className="
      flex flex-col p-10 gap-6
    ">
      
      <div>FILTER:</div>
      <GoodsFilter />
      
      <div>GOODS:</div>
      <Goods />
      
      <div>CART:</div>
      <CartItems/>
      
    </div>
  </PageFrame>
})
export default GoodsPage



