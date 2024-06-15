'use client'
import { Checkbox } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { goodsActions } from 'src/redux/reducers/goodsReducer'


const GoodsFilter =
React.memo(
() => {
  
  const d = useAppDispatch()
  const typeFilter = useAppSelector(s => s.goods.filter.type)
  
  return <div className="flex flex-row gap-4">
    <Checkbox
      checked={typeFilter.includes('geometric figure')}
      onChange={() => d(goodsActions.toggleFilterTypeItem('geometric figure'))}
    >
      Geometric figures
    </Checkbox>
    <Checkbox
      checked={typeFilter.includes('furniture')}
      onChange={() => d(goodsActions.toggleFilterTypeItem('furniture'))}
    >
      Furniture
    </Checkbox>
  </div>
})
export default GoodsFilter