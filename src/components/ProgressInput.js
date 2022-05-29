import React from 'react'

const ProgressInput = ({ type, increase, addAmount, placeholder }) => {
  return (
    <div>
        <input 
            type={type} 
            value={increase} 
            onChange={addAmount}
            placeholder={placeholder}  
            className='border-2 w-full text-red-800 px-2'
        />
    </div>
  )
}

export default ProgressInput