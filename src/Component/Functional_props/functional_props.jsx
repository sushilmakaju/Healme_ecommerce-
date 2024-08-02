import React from 'react'
import ShopComponent from '../Shop/shopcomponent';

const Functional_props = () => {
    const handleClick = () => {
        alert("Product added to cart")
      };
    
  return (
    <>
    <div>Functional props</div>
    <ShopComponent onButtonClick={handleClick}/>
    </>

  )
}

export default Functional_props
