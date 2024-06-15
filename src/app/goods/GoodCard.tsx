import { Button, Card } from 'antd'
import React from 'react'
import { Good } from 'src/model/Good'
import { useAppDispatch } from 'src/redux/hooks'
import { cartActions } from 'src/redux/reducers/cartReducer'


type GoodCardProps = {
  good: Good
}

const GoodCard = React.memo(
(props: GoodCardProps) => {
  
  const { id, name, price, description } = props.good
  
  const d = useAppDispatch()
  
  return <Card
    title={name}
    classNames={{
      body: "flex flex-col gap-4 items-start"
    }}
  >
    <div>Price: {price}</div>
    <div>{description}</div>
    <Button
      type='primary'
      onClick={() => d(cartActions.addItem(props.good))}
    >
      Add To Cart
    </Button>
  </Card>
})
export default GoodCard