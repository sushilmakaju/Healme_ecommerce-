import React from 'react'
import Cardcomponent from '../Card/card'

const ShopComponent = ({onButtonClick}) => {
  const shopProduct = [
    {
      imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Headphone",
      position: "$200"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Smartwatch",
      position: "$100"
    },
  ]

 
  return (
    <>
    <div>
      {/* shopComponent */}
      <Cardcomponent productData={shopProduct}/>
      <button onClick={onButtonClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to cart</button>
      
    </div>
    </>
  )
}

export default ShopComponent
