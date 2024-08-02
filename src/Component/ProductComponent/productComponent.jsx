
import React, { useState } from 'react'
import FormValidation from '../../form_validation/form_validation';

const ProductComponent = () => {
    const [username, setUsername] = useState('')
  return (
    <>
    <div className='text-center bg-blue-950 text-white text-xl p-2'> ProductAdd Component </div>
    {/* <h1>{username}</h1>
    <form>
        <label className='text-2xl' htmlFor='username'> Username:  </label> <br/>
        <input onChange= {(e)=>setUsername(e.target.value)} className='border-2 border-blue-950 p-2 rounded:lg' type='text' id='username' placeholder='enteryourname'/> 

    </form>  */}
    <FormValidation />
    </>
  )
}

export default ProductComponent;
