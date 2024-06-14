'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from 'src/redux/store'
import { TypeUtils } from 'src/util/common/TypeUtils'
import Puro = TypeUtils.Puro



type StoreProviderProps = Puro<{
  children: React.ReactNode
}>

const StoreProvider =
React.memo(
(props: StoreProviderProps) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  
  return <Provider store={storeRef.current}>
    {props.children}
  </Provider>
})
export default StoreProvider