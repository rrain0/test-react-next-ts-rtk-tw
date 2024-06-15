'use client'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import GoodCard from 'src/app/goods/GoodCard'
import { useAppSelector } from 'src/redux/hooks'





const Goods =
React.memo(
() => {
  
  const { goods } = useAppSelector(s => s.goods)
  
  //const ww = window.innerWidth
  //console.log('ww', ww)
  
  return <div className="flex flex-col gap-4">
    
    <Link href="/cart">
      <Button
        type='primary'
      >
        View Cart
      </Button>
    </Link>
    
    {goods.map(it => <GoodCard key={it.id} good={it} />)}
    
  </div>
})
export default Goods