import React from 'react'
import CartItems from 'src/app/cart/CartItems'
import PageFrame from 'src/ui/components/PageFrame'



const GoodsPage =
React.memo(
() => {
  
  return <PageFrame>
    <div className="
      flex flex-col p-40 gap-10
    ">
      <CartItems/>
    </div>
  </PageFrame>
})
export default GoodsPage




