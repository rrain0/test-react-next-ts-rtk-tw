'use client'
import React from 'react'
import Goods from 'src/app/goods/Goods'
import PageFrame from 'src/ui/components/PageFrame'



const GoodsPage =
React.memo(
() => {
  
  return <PageFrame>
    <div className="
      flex flex-col p-40 gap-10
    ">
      <Goods />
    </div>
  </PageFrame>
})
export default GoodsPage



