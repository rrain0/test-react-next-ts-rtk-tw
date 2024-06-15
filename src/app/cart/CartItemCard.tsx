import { Button, Card } from 'antd'
import React from 'react'
import { CartItem } from 'src/model/CartItem'
import { useAppDispatch } from 'src/redux/hooks'
import { cartActions } from 'src/redux/reducers/cartReducer'




type CartItemCardProps = {
  cartItem: CartItem
}

const CartItemCard = React.memo(
(props: CartItemCardProps) => {
  
  const {
    item: { id, name, price, description },
    quantity,
  } = props.cartItem
  
  const d = useAppDispatch()
  
  return <Card
    title={name}
    classNames={{
      body: "flex flex-col gap-4 items-start"
    }}
  >
    <div>Price: {price}</div>
    <div>{description}</div>
    
    <div className="flex flex-row gap-4">
      
      <Button
        type='primary'
        onClick={() => d(cartActions.removeOneItem(props.cartItem.item))}
      >
        -
      </Button>
      
      <div>{quantity}</div>
      
      <Button
        type='primary'
        onClick={() => d(cartActions.addItem(props.cartItem.item))}
      >
        +
      </Button>
      
    </div>
    
  </Card>
})
export default CartItemCard