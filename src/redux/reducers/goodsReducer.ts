import { createSlice } from '@reduxjs/toolkit'
import { Good } from 'src/model/Good'



type GoodsState = {
  goods: Good[]
  filter: {
    type: Array<Good['type']>
  }
}

const goodsInitialState: GoodsState = {
  goods: [
    {
      id: 'cube',
      name: 'Cube',
      type: 'geometric figure',
      price: '100',
      description: 'This unique art object personifies the three-dimensionality of space',
    },
  ],
  filter: {
    type: []
  }
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState: goodsInitialState,
  reducers: {
    setGoods: (s, a: { payload: Good[] }) => {
      s.goods = a.payload
    },
    
    toggleFilterTypeItem: (s, a: { payload:Good['type']  }) => {
      const item = a.payload
      const itemIdx = s.filter.type.findIndex(it => it === item)
      if (itemIdx === -1) s.filter.type.push(item)
      else s.filter.type.splice(itemIdx, 1)
    },
    
  },
})

export const goodsActions = goodsSlice.actions

const goodsReducer = goodsSlice.reducer
export default goodsReducer