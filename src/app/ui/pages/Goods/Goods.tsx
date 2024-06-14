'use client'
import React from 'react'
import { useAppSelector } from 'src/redux/hooks'



const Goods =
React.memo(
() => {
  
  const { goods } = useAppSelector(s => s.goods)
  
  return <div>
    {goods.map(it => <div>{JSON.stringify(it)}</div>)}
  </div>
})
export default Goods