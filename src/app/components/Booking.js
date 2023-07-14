import React from 'react'
import Btn from './Btn'

const Booking = () => {
  return (
    <div className='BookingContainer'>

        <div className='innerBody'>
            <h2 className='bookingHeading'>Innovate. Validate. Launch</h2>
            <p className='bookingDetail'>Let‘s transform your idea into reality with our MVP development services.</p>
        </div>

<div className='btncoverExpertise'>
        <Btn sowIcon={false}text={"Book a free consultation!"} bg={"#1d2233"} border={"2px solid #5e76fd"} color={"white"}/>
</div>
      
    </div>
  )
}

export default Booking
