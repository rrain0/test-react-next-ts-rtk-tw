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
    }
  ],
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState: goodsInitialState,
  reducers: { },
})

export const goodsActions = goodsSlice.actions

const goodsReducer = goodsSlice.reducer
export default goodsReducer