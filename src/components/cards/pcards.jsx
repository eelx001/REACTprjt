import React from 'react'
import { Card } from 'flowbite-react';
import {HiArrowCircleRight }from 'react-icons/hi'
import {motion} from 'framer-motion'



const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};





function pcards() {
  return (
    <>
  <div className="cards-container">
  
  
  
  
  
  
  
  
  
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p>
      Weather App  
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
      
    <button type="button" className="button-50" ><HiArrowCircleRight/>See it!</button>
    </p>
  </Card>
  </motion.div>


















</div>

    </>
  )
}

export default pcards