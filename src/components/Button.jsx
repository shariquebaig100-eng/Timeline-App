import React from 'react'


const Button = ({ title,onClick,className ,disabled=false}) => {


  return (
    <div className='flex gap-4'>
      
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-green-600 text-white px-6 py-2 rounded  ${className}`}
      >
       {title}
      </button>

      
    </div>

  )


}

export default Button;