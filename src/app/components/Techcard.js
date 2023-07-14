import React from 'react'

const Techcard = ({text,src}) => {
  return (
    <div className='teckCard'>
        <div className='teckImagediv' ><img src={src}/></div>
        <div className='teckText'>{text}</div>
      
    </div>
  )
}

export default Techcard
