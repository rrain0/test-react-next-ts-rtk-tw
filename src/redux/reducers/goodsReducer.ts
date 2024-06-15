import { createSlice } from '@reduxjs/toolkit'
import { Good } from 'src/model/Good'



type GoodsState = {
  goods: Good[]
}

const goodsInitialState: GoodsState = {
  goods: [
    {
      id: 'cube',
      name: 'Cube',
      price: '100',
      description: 'This unique art object personifies the three-dimensionality of space',
    },
    /* {
      id: 'table',
      name: 'Table',
      price: '40',
      description: 'Table with intricate design',
    },
    {
      id: 'sphere',
      name: 'Sphere',
      price: '80',
      description: 'It is round from any side',
    }, */
  ],
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState: goodsInitialState,
  reducers: {
    setGoods: (s, a: { payload: Good[] }) => {
      s.goods = a.payload
    }
  },
})

export const goodsActions = goodsSlice.actions

const goodsReducer = goodsSlice.reducer
export default goodsReducer