import React from 'react';

const Card = (props) => {

  return(
    
    <div className="flex flex-wrap justify-around items-center my-2 ">
    {props.productData.map((product, index)=> {
      return(
        <div className="w-64  rounded overflow-hidden shadow-lg bg-white ">
        <img class="w-24 h-24 rounded-full mx-auto" src={product.imgUrl} alt="" width="384" height="512"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">
            FullStack Developer
          </p>
          <p className='text-gray-700 text-base'>{product.position}</p>
        </div>
        <div className="px-6 py-4 text-left">
          <button className="bg-black text-white px-5 py-2 text-center">
            Learn more..
          </button>
        </div>
      </div>
    
      
      )})
    }
    </div>


  )




};

export default Card;
