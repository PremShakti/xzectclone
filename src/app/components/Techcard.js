import Image from 'next/image'
import React from 'react'

const Techcard = ({text,src}) => {
  return (
    <div className='teckCard'>
        <div className='teckImagediv' ><Image width={40} height={30} src={src}/></div>
        <div className='teckText'>{text}</div>
      
    </div>
  )
}

export default Techcard
