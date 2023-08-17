'use client';
import Time from './timeline/time'
import React from 'react'
import {motion} from 'framer-motion'
import './comp.css'
import '../css/fonts.css'
import Indicators from './carousel';

export default function CardWithDecorativeImage() {
  return (
 
    <>

    <motion.div className='cont' 
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.5,
      }}
      

      >
 
    <Indicators/>
    <Time/>

    </motion.div>
    </>
)
}


