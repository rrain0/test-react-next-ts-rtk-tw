import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from 'src/model/CartItem'
import { Good } from 'src/model/Good'


type CartState = {
  items: CartItem[]
}

const cartInitialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    
    addItem: (s, a: { payload: Good }) => {
      const good = a.payload
      const item = s.items.find(it => it.item.id === good.id)
      if (item) item.quantity++
      else s.items.push({ item: good, quantity: 1 })
    },
    removeOneItem: (s, a: { payload: Good }) => {
      const good = a.payload
      const itemIdx = s.items.findIndex(it => it.item.id === good.id)
      if (itemIdx !== -1) {
        s.items[itemIdx].quantity--
        if (s.items[itemIdx].quantity <= 0) {
          s.items.splice(itemIdx, 1)
        }
      }
    },
    
  }
})


export const cartActions = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer