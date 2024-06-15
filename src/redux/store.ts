import { configureStore } from '@reduxjs/toolkit'
import cartReducer from 'src/redux/reducers/cartReducer'
import goodsReducer from 'src/redux/reducers/goodsReducer'




export const makeStore = () => {
  
  const store = configureStore({
    reducer: {
      goods: goodsReducer,
      cart: cartReducer,
    }
  })
  return store
}



// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
