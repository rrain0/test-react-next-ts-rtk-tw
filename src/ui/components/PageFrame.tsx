import React from 'react'
import { ChildrenProps } from 'src/util/react/ChildrenProps'



const PageFrame =
React.memo(
(props: ChildrenProps) => {
  
  return <div
    className="
      w-full min-h-[100dvh] h-fit
      flex flex-col
    "
  >
    {props.children}
  </div>
})
export default PageFrame
