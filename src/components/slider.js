import { Carousel } from 'flowbite-react';
import Image from '../Findit.svg';
import React from 'react'

function slider() {
  return (
    <Carousel className='Carous'>
      <img
        alt="..."
        src={Image}
      /> 
      <img
      alt="..."
      src={Image}
    />
    </Carousel>
  )
}

export default slider


